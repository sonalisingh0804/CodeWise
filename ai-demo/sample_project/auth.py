from database import connect_database


def login(username, password):
    user = connect_database(username)

    if user and user["password"] == password:
        return True

    return False


def logout(username):
    print(f"{username} logged out")