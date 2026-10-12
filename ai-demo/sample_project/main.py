from auth import login, logout
from models import User, Project


def main():
    username = "sonali"
    password = "12349876"

    if login(username, password):
        print("Login successful")

        user = User(username, "sonali@example.com")
        project = Project("CodeWise", user)

        print(project.name)

        logout(username)
    else:
        print("Login failed")


if __name__ == "__main__":
    main()