/**

Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers.

In other words, if the number of positive integers in nums is pos and the number of negative integers is neg, then return the maximum of pos and neg.
Note that 0 is neither positive nor negative.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */

 //easy onliner solution
var maximumCount = function(nums) {
    return Math.max( nums.filter(a => a < 0).length, nums.filter(a => a > 0).length );
};
