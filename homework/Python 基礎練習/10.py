def summary(data):
    for student in data:
        name = student.get('name', 'Unknown')
        scores = student.get('scores', [])
        total = sum(scores)
        avg = total / len(scores) if scores else 0
        print("name："+name," 總分：", total, "平均：",avg)

students = [
    {'name': 'Alice', 'scores': [90, 80, 70]},
    {'name': 'Bob', 'scores': [100, 85, 95]}
]

summary(students) #參考gpt後修改
