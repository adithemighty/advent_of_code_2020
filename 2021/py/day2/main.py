f = open("2021/day2/testInput.txt","r")
lines = f.readlines()

def get_position(withAim = False):
    position = {
        'x': 0,
        'y': 0,
        'aim': 0
    }

    for line in lines:
        direction, steps = line.split(' ')
        key = 'x' if direction == "forward" else ('aim' if withAim else  'y')
        operation = -1 if direction == "up" else 1

        if direction == 'forward' and position['aim'] > 0:
            position['y'] += int(steps) * position['aim']

        position[key] += operation * int(steps)
    
    return position['x'] * position['y']


# Assert part 1 example
print(get_position(), get_position() == 150)
# Assert part 2 example
print(get_position(True), get_position(True) == 900)