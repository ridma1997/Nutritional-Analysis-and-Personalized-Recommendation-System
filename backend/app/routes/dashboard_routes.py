from flask import Blueprint, jsonify, request
from app.utils.db_connection import get_db_connection

dashboard_bp = Blueprint("dashboard", __name__)

@dashboard_bp.route("/", methods=["GET"])
def get_dashboard():
    user_id = request.args.get('user_id')
    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)
    cursor.execute("SELECT * FROM food_analysis WHERE user_id = %s", (user_id,))
    data = cursor.fetchall()
    connection.close()
    return jsonify({"status": "success", "data": data})