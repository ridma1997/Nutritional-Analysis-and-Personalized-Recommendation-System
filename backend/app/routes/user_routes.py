from flask import Blueprint, request, jsonify

user_bp = Blueprint("user", __name__)

@user_bp.route("/login", methods=["POST"])
def login():
    # Login logic here
    return jsonify({"status": "success", "message": "Logged in"})

@user_bp.route("/register", methods=["POST"])
def register():
    # Registration logic here
    return jsonify({"status": "success", "message": "User registered"})