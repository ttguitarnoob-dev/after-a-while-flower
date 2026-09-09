@app.route('/new-hire', methods=['POST'])
def new_hire():
    print("Starting new hire stuff.........wowow")
    data = request.get_json()
    people = data.get('people', [])
    holidays = data.get('holidays', [])
    print(f"Received new hire data: {data}")

    if not data:
        return jsonify({"message": "No data received", "success": False}), 400

    # Process the new hire data here
    result = process_holidays(people, holidays)
    print(f"Processed new hire data: {result}")

    return jsonify({"message": "New hire data processed successfully", "success": True, "data": result}), 200


    # Process new hire start dates/next business day
def process_holidays(people, holidays):
    today = date.today()

    # Convert holidays to date objects for fast lookup
    holiday_dates = {
        date.fromisoformat(holiday)
        for holiday in holidays
    }

    # Find the next business day after today
    next_business_day = today + timedelta(days=1)

    while (
        next_business_day.weekday() >= 5  # Saturday or Sunday
        or next_business_day in holiday_dates
    ):
        next_business_day += timedelta(days=1)

    # Find people starting today
    starting_today = [
        person["email"]
        for person in people
        if date.fromisoformat(person["startDate"]) == today
    ]

    # Find people starting on the next business day
    starting_next_business_day = [
        person["email"]
        for person in people
        if date.fromisoformat(person["startDate"]) == next_business_day
    ]

    return {
        "startingToday": starting_today,
        "startingNextBusinessDay": starting_next_business_day,
        "nextBusinessDay": next_business_day.isoformat()
    }