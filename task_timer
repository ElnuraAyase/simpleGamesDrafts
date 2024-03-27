def add_task(tasks, task_name, duration):
    tasks.append((task_name, duration))

def display_schedule(tasks):
    current_time = 0
    print("Schedule:")
    for task_name, duration in tasks:
        print(f"At {current_time}: {task_name} ({duration} mins)")
        current_time += duration
    print("End of Schedule")
def main():
    tasks = []
    while True:
        print("\nMenu:")
        print("1. Add Task")
        print("2. Display Schedule")
        print("3. Exit")
        choice = input("Enter your choice: ")

        if choice == "1":
            task_name = input("Enter task name: ")
            duration = int(input("Enter task duration in minutes: "))
            add_task(tasks, task_name, duration)
        elif choice == "2":
            display_schedule(tasks)
        elif choice == "3":
            print("Exiting...")
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()
