from app.utils.db_connection import get_db_connection

def authenticate_user(username, password):
    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)
    cursor.execute("SELECT * FROM users WHERE username = %s AND password = %s", (username, password))
    user = cursor.fetchone()
    connection.close()
    return user

def register_user(username, password, age, weight, height, goals):
    connection = get_db_connection()
    cursor = connection.cursor()
    cursor.execute(
        "INSERT INTO users (username, password, age, weight, height, health_goals) VALUES (%s, %s, %s, %s, %s, %s)",
        (username, password, age, weight, height, goals)
    )
    connection.commit()
    connection.close()
    return True