//bubble sort
//time complexity O(n^2)
//space complexity O(1)

const utilities = require('../lib/utilities.js') 

function bubble_sort(arr) {
    for (let i = arr.length ; i > 1 ; i--) {
        
        let swapped = false
        
        for (let j = 0 ; j < i - 1 ; j++) {
            if (arr[j] > arr[j+1]) {
                utilities.swap(arr , j , j+1)
            }
            swapped = true
        }

        if (!swapped)
            break;
    }
}

let arr = [11,10,25,10,1,0,-1,-10]
bubble_sort(arr)
console.log(arr)

 


