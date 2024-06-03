//radix sort
//time complexity O(n*k)
//space complexity O(n+k)

function getDigitCount(num) {
   if (num == 0)
        return 1

    let digitCount = Math.floor(Math.log10(Math.abs(num))) + 1;
    return digitCount
}

function getDigit(num , i) {
   let digit = Math.floor(Math.abs(num) / Math.pow(10 , i)) % 10
   return digit
}

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
      maxDigits = Math.max(maxDigits, getDigitCount(nums[i]));
    }
    return maxDigits;
}

function radix_sort(nums){ 
    let maxDigitCount = mostDigits(nums);

    for (let i = 0 ; i < maxDigitCount ; i++) {

        let digitBuckets = Array.from({length: 10}, () => []);

        for (let j = 0 ; j < nums.length ; j++) {
           let digit = getDigit(nums[j] , i)
           digitBuckets[digit].push(nums[j])
        }

        nums = [].concat(...digitBuckets);
    }
    return nums
}

let arr = [11,10,25,10,1,0]
arr = radix_sort(arr)
console.log(arr)
