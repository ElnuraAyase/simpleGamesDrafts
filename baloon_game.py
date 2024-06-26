
import turtle
import random

# Set up the screen
screen = turtle.Screen()
screen.title("Balloon Pop Game")
screen.setup(width=600, height=600)
screen.bgcolor("skyblue")

# Create the player (arrow shape)
player = turtle.Turtle()
player.shape("arrow")
player.color("blue")
player.penup()
player.speed(0)

# Create function to move player left
def move_left():
    x = player.xcor()
    x -= 20
    player.setx(x)

# Create function to move player right
def move_right():
    x = player.xcor()
    x += 20
    player.setx(x)

# Create keyboard bindings
screen.listen()
screen.onkeypress(move_left, "Left")
screen.onkeypress(move_right, "Right")

# Create balloons
num_balloons = 5
balloons = []

for _ in range(num_balloons):
    balloon = turtle.Turtle()
    balloon.shape("circle")
    balloon.color("green")
    balloon.penup()
    balloon.speed(0)
    x = random.randint(-280, 280)
    y = random.randint(100, 250)
    balloon.goto(x, y)
    balloons.append(balloon)

# Create function to pop balloons
def pop_balloon(balloon):
    balloon.hideturtle()
    balloon.goto(0, -200)
    balloon.clear()
# Main game loop
while True:
    for balloon in balloons:
        y = balloon.ycor()
        y -= 2
        balloon.sety(y)

        # Check if balloon is popped
        if balloon.distance(player) < 40:
            pop_balloon(balloon)
        # Check if balloon goes out of bounds
        if y < -300:
            x = random.randint(-280, 280)
            y = random.randint(100, 250)
            balloon.goto(x, y)

screen.mainloop()
