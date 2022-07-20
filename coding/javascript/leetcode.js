// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

// 你可以按任意顺序返回答案。

// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。





// 复杂度O(n2)
var twoSum = function (nums, target) {
	let i = 0;
	let arr = [];
	const mix = function () {
		if (i === nums.length) {
			return;
		}
		nums.map((item, index) => {
			if (arr.length == 2) {
				return;
			}
			if (nums[index] === ((target - nums[i]) | 0) && index !== i) {
				arr.length === 0 && arr.push(i);
				arr.length === 1 && arr.push(index);
			}
		});
		i++;
		mix();
	};
	mix();
	console.log(arr);
};

twoSum([2, 7, 11, 15], 9);
twoSum([3, 2, 4], 6);
twoSum([3, 3], 6);

//优化
// 复杂度o(n)
var twoSumMax = function (nums, target) {
	let map = new Map(); //哈希
	for (let i = 0; i <= nums.length; i++) {
		if (map.has((target - nums[i]))) {
			return [map.get(target - nums[i]), i];
			console.log([map.get(target - nums[i]), i]);
		} else {
            map.set(nums[i], i);
		}
	}
};

twoSumMax([2, 7, 11, 15], 9);
twoSumMax([3, 2, 4], 6);
twoSumMax([3, 3], 6);
// 题解：https://leetcode.cn/problems/two-sum/solution/by-sandaydi-e4ao/

var lengthOfLongestSubstring = function (s) {
    if (!s) return 1
	const arr = s.split('');
	const filterArr = [...new Set(arr)];
	let ss = filterArr.join('');
	for (let i = 0; i < ss.length; i++) {
        if (s.indexOf(ss) > -1) {
            console.log(ss);
			return ss.length;
        } else {
            console.log(ss,111);
			ss = ss.slice(1);
		}
	}
};
lengthOfLongestSubstring('abcabcbb');
lengthOfLongestSubstring('dvdf');
