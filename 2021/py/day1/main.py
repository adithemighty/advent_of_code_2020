f = open("2021/day1/input.txt","r")
lines = f.readlines()

def track_depth():
    counter = -1
    last = 0

    for line in lines:
        line = int(line)
        if line > last:
            counter+=1

        last = line
    
    return counter

def track_window():
    counter = -1
    last = 0

    for i in range(2, len(lines)):
        x = int(lines[i])
        y = int(lines[i - 1])
        z = int(lines[i - 2])
        window = x + y + z

        if window > last:
            counter += 1
        
        last = window
    
    return counter

# Assert part 1 example
print(track_depth(), track_depth() == 7)
# Assert part 2 example
print(track_window(), track_window() == 5)