import mysql.connector

def get_db_connection():
    connection = mysql.connector.connect(
        host="localhost:3306",
        user="root",
        password="1r9i9d7M#",
        database="nutrition_db"
    )
    return connection