def dict_to_string(d):
    parts = []

    for key, value in d.items():
        part = f"{str(key)}:{str(value)}"
        parts.append(part)

    result = ', '.join(parts)
    return result


print(dict_to_string({'a': 1, 'b': 2})) #參考gpt後修改
