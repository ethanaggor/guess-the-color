import json
import random
# Random number generator
# --> User has a choice of 6 colors to choose from
# --> 5 are wrong, only 1 is correct
# --> Never mind... :-( (As always...) Seif is giving up...LOL


def write_data(data):

    with open("data.json", "w") as write_file:
        json.dump(data, write_file)

num1 = random.randint(0, 255)
print(num1)

for x in num1:
    print()

# num2 = (0, 255)
# print(num2)

# num3 = (0, 255)
# print(num3)

# data = [

# for color1
#     {
#         r: val = num1,
#         g: val2 = num2,
#         b: val3 = num3
#     }

# for color2
#     {
#         r: val = num1,
#         g: val2 = num2,
#         b: val3 = num3
#     }

# for color3
#     {
#         r: val = num1,
#         g: val2 = num2,
#         b: val3 = num3
#     }

# ]