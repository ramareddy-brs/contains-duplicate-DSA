var containsDuplicate = function(nums) {
    let hTable = {};
    for(let i=0; i<nums.length; i++){
        if(nums[i] in hTable)
            return true;
            hTable[nums[i]] = 1;
    }
    return false;
};

let nums = [1,2,3,4];

console.log(containsDuplicate(nums));