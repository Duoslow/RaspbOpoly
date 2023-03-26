import requests, json

# read luck_actions.json
data = {}
with open('luck_actions.json',encoding='utf-8') as f:
    data = json.load(f)

types = ['good_chance', 'bad_chance']
actions = ['get_money', 'pay_money', 'free_escape', 'free_travel', 'pay_money_by_property', 'pay_money_to_all']
types_count = [0, 0]
for i in data:
    if i['type'] not in types:
        types.append(i['type'])
    if i['action'] not in actions:
        actions.append(i['action'])
    types_count[types.index(i['type'])] += 1

print('types:', types)
print('actions:', actions)
print('types_count:', types_count)
