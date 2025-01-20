from flask import Blueprint, request, jsonify
from app.services.ai_model import analyze_food

analysis_bp = Blueprint("analysis", __name__)

@analysis_bp.route("/", methods=["POST"])
def analyze():
    data = request.json
    result = analyze_food(data['input'])
    return jsonify({"status": "success", "result": result})
