
import json


with open('cdn/engcoaid.json','r') as eng:
    engdata = json.load(eng)

with open('cdn/malcoaid.json') as mal:
    maldata = json.load(mal)


start = ''


for a in engdata:
    start+= f"\n* {a} \n"

for b in maldata:
    start += f"\n* {b} \n"

print(start)    

with open('output.txt','w') as file:
    file.write(start)