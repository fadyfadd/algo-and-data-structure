//selection sort
//time complexity O(n^2)
//space complexity O(1)

const utilities = require('../lib/utilities.js') 

function selection_sort(arr) {
    for (let i = 0 ; i < arr.length ; i++) {
        let index = i;
        for (let j = i + 1 ; j < arr.length ; j++) {
            if (arr[j] < arr[i]) {
                index = j
            }
        }

        if (index != i) {
            utilities.swap(arr , i , index)
        }
    }
}

let arr = [11,10,25,10,1,0,-1,-10]
selection_sort(arr)
console.log(arr)