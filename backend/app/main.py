from flask import Flask, jsonify, request
from flask_cors import CORS
import mysql.connector
from flask import Flask, request, jsonify
import pickle
import os

app = Flask(__name__)
CORS(app)

# Load the trained ML model
with open('calorie_model.pkl', 'rb') as f:
    loaded_model = pickle.load(f)

# MySQL connection
db_config = {
    "host": "localhost",
    "user": "root",  
    "password": "1r9i9d7M#",  
    "database": "nutrition_db"
}

def get_food_nutrients(food_items):
    connection = mysql.connector.connect(**db_config)
    cursor = connection.cursor(dictionary=True)

    total_macronutrients = {"carbohydrates": 0, "proteins": 0, "fats": 0}
    total_micronutrients = {"calcium": 0, "iron": 0, "potassium": 0}

    for food in food_items:
        query = "SELECT * FROM food_analysis WHERE food_name = %s"
        cursor.execute(query, (food,))
        result = cursor.fetchone()

        if result:
            total_macronutrients["carbohydrates"] += result["carbohydrates"]
            total_macronutrients["proteins"] += result["proteins"]
            total_macronutrients["fats"] += result["fats"]

            total_micronutrients["calcium"] += result["calcium"]
            total_micronutrients["iron"] += result["iron"]
            total_micronutrients["potassium"] += result["potassium"]

    cursor.close()
    connection.close()

    return {
        "macronutrients": total_macronutrients,
        "micronutrients": total_micronutrients
    }

@app.route("/api/nutrients", methods=["POST"])
def calculate_nutrients():
    input_data = request.json.get("foods", [])
    result = get_food_nutrients(input_data)
    return jsonify(result)



# Function to connect to the database
def get_db_connection():
    return mysql.connector.connect(**db_config)

# API for Calorie Recommendations
@app.route("/api/calorie-recommendations", methods=["GET"])
def calorie_recommendations():
    user_id = request.args.get("user_id")
    if not user_id:
        return jsonify({"error": "User ID is required"}), 400

    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)
    cursor.execute("SELECT health_goals FROM users WHERE id = %s", (user_id,))
    user = cursor.fetchone()
    connection.close()

    if not user:
        return jsonify({"error": "User not found"}), 404

    return jsonify({
        "calorie_recommendations": f"Based on your goals: {user['health_goals']}, we recommend 2000 calories/day."
    })

# API for Food Quality Analysis
@app.route("/api/food-quality-analysis", methods=["GET"])
def food_quality_analysis():
    food_name = request.args.get("food_name")
    if not food_name:
        return jsonify({"error": "Food name is required"}), 400

    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)
    cursor.execute("SELECT * FROM food_analysis WHERE food_name = %s", (food_name,))
    food = cursor.fetchone()
    connection.close()

    if not food:
        return jsonify({"error": "Food not found"}), 404

    return jsonify({
        "quality": f"The food {food_name} has good nutritional balance."
    })

# API for Progress Tracking
@app.route("/api/progress-tracking", methods=["GET"])
def progress_tracking():
    user_id = request.args.get("user_id")
    if not user_id:
        return jsonify({"error": "User ID is required"}), 400

    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)
    cursor.execute("SELECT activity_details, timestamp FROM activity_logs WHERE user_id = %s", (user_id,))
    logs = cursor.fetchall()
    connection.close()

    return jsonify({"progress_logs": logs})

# API for Meal Suggestions
@app.route("/api/meal-suggestions", methods=["GET"])
def meal_suggestions():
    user_id = request.args.get("user_id")
    if not user_id:
        return jsonify({"error": "User ID is required"}), 400

    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)
    cursor.execute("SELECT suggestions FROM food_suggestions WHERE user_id = %s", (user_id,))
    suggestions = cursor.fetchone()
    connection.close()

    if not suggestions:
        return jsonify({"error": "No suggestions found"}), 404

    return jsonify({"meal_suggestions": suggestions["suggestions"]})

@app.route("/api/interactive-charts", methods=["GET"])
def interactive_charts():
    try:
        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor(dictionary=True)

        # Query to fetch chart data
        query = """
            SELECT date, calories
            FROM user_calorie_data
            ORDER BY date;
        """
        cursor.execute(query)
        results = cursor.fetchall()

        # Format the data for the chart
        chart_data = [{"date": row["date"], "calories": row["calories"]} for row in results]

        return jsonify({"chart_data": chart_data})
    except mysql.connector.Error as err:
        return jsonify({"error": str(err)})
    finally:
        if conn.is_connected():
            cursor.close()
            conn.close()



@app.route("/api/suggestions", methods=["GET"])
def get_suggestions():
    user_id = request.args.get('user_id')  # Pass user_id as a query parameter
    if not user_id:
        return jsonify({"error": "User ID is required"}), 400

    try:
        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor(dictionary=True)

        # Fetch user details
        query_user = """
            SELECT height, weight, age, health_goals
            FROM users
            WHERE id = %s;
        """
        cursor.execute(query_user, (user_id,))
        user = cursor.fetchone()

        if not user:
            return jsonify({"error": "User not found"}), 404

        # Extract user details
        height = user['height']
        weight = user['weight']
        age = user['age']
        health_goals = user['health_goals']

        # Generate food suggestions based on health goals
        if "weight loss" in health_goals.lower():
            food_suggestions = [
                "Green salads",
                "Grilled chicken",
                "Steamed vegetables",
                "Low-carb meals"
            ]
            exercise_suggestions = [
                "Cardio workouts",
                "Walking 30 minutes daily",
                "Yoga and stretching"
            ]
        elif "weight gain" in health_goals.lower():
            food_suggestions = [
                "Rice and beans",
                "Nut butters",
                "Whole milk",
                "High-protein meals"
            ]
            exercise_suggestions = [
                "Strength training",
                "Weight lifting",
                "Calisthenics"
            ]
        else:
            food_suggestions = [
                "Balanced meals with fruits and vegetables",
                "Lean proteins",
                "Whole grains"
            ]
            exercise_suggestions = [
                "Light exercises",
                "Walking",
                "Cycling"
            ]

        return jsonify({
            "food_suggestions": food_suggestions,
            "exercise_suggestions": exercise_suggestions
        }), 200

    except mysql.connector.Error as err:
        return jsonify({"error": str(err)}), 500

    finally:
        if conn.is_connected():
            cursor.close()
            conn.close()


# Register a new user
@app.route('/register', methods=['POST'])
def register_user():
    try:
        # Connect to the database
        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor()

        # Get user data from the request
        data = request.json
        username = data['username']
        password = data['password']
        age = data['age']
        weight = data['weight']
        height = data['height']
        health_goals = data['healthGoals']

        # Insert the data into the users table
        query = """
        INSERT INTO users (username, password, age, weight, height, health_goals)
        VALUES (%s, %s, %s, %s, %s, %s)
        """
        cursor.execute(query, (username, password, age, weight, height, health_goals))
        conn.commit()

        return jsonify({'message': 'User registered successfully'}), 201
    
    except IntegrityError as e:
        # Handle duplicate username error
        return jsonify({'message': 'Username already exists. Please choose a different username.'}), 400

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'error': 'Failed to register user'}), 500
    
    finally:
        cursor.close()
        conn.close()

# Login a user
@app.route('/login', methods=['POST'])
def login_user():
    try:
        # Connect to the database
        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor(dictionary=True)

        # Get user data from the request
        data = request.json
        username = data['username']
        password = data['password']

        # Query to check if user exists
        query = """
        SELECT * FROM users WHERE username = %s AND password = %s
        """
        cursor.execute(query, (username, password))
        user = cursor.fetchone()

        if user:
            # Return success message with user details
            return jsonify({
                'message': 'Login successful',
                'user': {
                    'id': user['id'],
                    'username': user['username'],
                    'health_goals': user['health_goals']
                }
        }), 200

        else:
            return jsonify({'message': 'Invalid username or password. Please register.'}), 401
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'message': 'An error occurred during login.'}), 500
    finally:
        cursor.close()
        conn.close()

# Daily calorie intake API
@app.route('/api/daily-calories', methods=['GET'])
def get_daily_calories():
    user_id = request.args.get('user_id')
    if not user_id:
        return jsonify({'error': 'User ID is required'}), 400

    try:
        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor(dictionary=True)

        # Fetch the calorie intake and the current date
        query = """
        SELECT calories, DATE(NOW()) as date
        FROM user_calorie_data
        WHERE user_id = %s
        ORDER BY date DESC LIMIT 1;
        """
        cursor.execute(query, (user_id,))
        calorie_data = cursor.fetchone()

        if calorie_data:
            return jsonify({
                'calories': calorie_data['calories'],
                'date': calorie_data['date']
            })
        else:
            return jsonify({
                'calories': 'No data available',
                'date': 'N/A'
            })
    except Exception as e:
        return jsonify({'error': str(e)})
    finally:
        cursor.close()
        conn.close()


#dashboard
# Load the ML model

model_path = os.path.join(os.path.dirname(__file__), "calorie_model.pkl")
if os.path.exists(model_path):
    with open(model_path, "rb") as f:
        model = pickle.load(f)
    print("ML model loaded successfully.")
else:
    model = None
    print("ML model not found. Please train the model first.")

@app.route('/api/calorie-predictions', methods=['GET'])
def calorie_predictions():
    user_id = request.args.get('user_id')
    if not user_id:
        return jsonify({"error": "User ID is required"}), 400

    # Fetch user details
    try:
        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor(dictionary=True)

        query_user = "SELECT date, calories FROM daily_calories WHERE user_id = %s ORDER BY date ASC;"
        cursor.execute(query_user, (user_id,))
        user = cursor.fetchall()

        if not user:
            return jsonify({"error": "No calorie data found for this user."}), 404

        # Format the data for the chart
        labels = [row['date'] for row in user]
        calorie_data = [row['calories'] for row in user]

        return jsonify({"labels": labels, "calorieData": calorie_data}), 200

    except mysql.connector.Error as err:
        return jsonify({"error": str(err)}), 500

    finally:
        if conn.is_connected():
            cursor.close()
            conn.close()




if __name__ == "__main__":
    app.run(debug=True, port=5000)
