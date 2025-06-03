from collections import Counter

def count_chars(s):
    return dict(Counter(s))

print(count_chars("hello"))
