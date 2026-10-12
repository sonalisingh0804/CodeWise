def connect_database(username):
    users = {
        "sonali": {
            "password": "12349876",
            "role": "student"
        }
    }

    return users.get(username)