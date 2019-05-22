import math

def sphereVol(input):
    radius = eval(input("Enter radius: "))
    volume = 4/3.0* math.pi * radius ** 3.0

    print("The volume of a sphere with a radius of", radius, "is", volume)
    
    return volume


sphereVol(input)