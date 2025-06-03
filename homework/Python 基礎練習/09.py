def most_common(nums):
    count = {}
    for num in nums:
        if num in count:
            count[num] += 1
        else:
            count[num] = 1

    most = max(count, key=count.get)
    return most


print(most_common([1, 2, 2, 3, 3, 3, 4])) #gpt
