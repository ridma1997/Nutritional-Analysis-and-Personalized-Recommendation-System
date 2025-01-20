import pickle
import mysql.connector
from sklearn.linear_model import LinearRegression

# Database Configuration
db_config = {
    "host": "localhost",
    "user": "root",  
    "password": "1r9i9d7M#",  
    "database": "nutrition_db"
}

try:
    # Connect to the database
    conn = mysql.connector.connect(**db_config)
    cursor = conn.cursor(dictionary=True)

    # Fetch user data (height, weight, goal, and calorie intake)
    query = """
         SELECT height, weight, 
           CASE 
             WHEN health_goals = 'weight loss' THEN 1 
             WHEN health_goals = 'weight gain' THEN 2 
             ELSE 0 
           END AS goal, 
           calories AS calorie
    FROM users
    JOIN daily_calories ON users.id = daily_calories.user_id
    WHERE calories IS NOT NULL;
    """
    cursor.execute(query)
    results = cursor.fetchall()

    # Prepare data for training
    X = []
    y = []
    for row in results:
        X.append([row['height'], row['weight'], row['goal']])
        y.append(row['calorie'])

    # Train the model
    if len(X) > 0:
        model = LinearRegression()
        model.fit(X, y)

        # Save the model
        with open('calorie_model.pkl', 'wb') as f:
            pickle.dump(model, f)
        print("Model saved successfully as calorie_model.pkl")
    else:
        print("No sufficient data available to train the model.")

except mysql.connector.Error as err:
    print(f"Error: {err}")

finally:
    if conn.is_connected():
        cursor.close()
        conn.close()
