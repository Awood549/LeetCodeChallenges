'use strict';


const testCase = [-1,0,1,2,-1,-1]

let threesum = function(nums){
  let result = [];
  let temp = [];
  let map = new Map()
  

  for(let i=0; i < nums.length; i++){
    if(nums[i] + nums[i+1] + nums[i+2] === 0){
      temp.push(nums[i]);
      temp.push(nums[i+1])
      temp.push(nums[i+2])
      result.push(temp)
      temp=[]
        }
  }

console.log(result,'result')

return result

};


threesum(testCase);

