//第四題
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let a = [];

for(let i = 0; i < nums.length; i++)
    {
        if(nums[i] % 2 == 0)
        {
            a.push(nums[i]);
        }
    }

console.log(a);
