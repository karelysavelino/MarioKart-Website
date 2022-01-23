import os
arr = os.listdir()

print(arr)

results = []
output = open("output.txt", "w")

for x in arr:
    if ".png" in x:
        y = x.replace(".png", "")
#        print(y)
        #results.append("'" + y + "': require('../../images/sprites/tires/" + x + "'),")
        results.append("'" + y + "',")

for r in results:
    output.write(r + '\n')