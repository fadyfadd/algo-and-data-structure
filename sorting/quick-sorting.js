const utilities = require('../lib/utilities.js') 

function pivot(arr , leftIndex , rightIndex) {
    let currentValue = arr[leftIndex]
    let swapIndex = leftIndex   

    for (let i = leftIndex + 1 ; i <= rightIndex ; i++) {
        if (currentValue > arr[i]) {
            swapIndex++
            utilities.swap(arr , swapIndex , i)
        }           
    }

    utilities.swap(arr , swapIndex , leftIndex)

    return swapIndex
}



function quick_sort(arr, left = 0, right = arr.length -1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right) //3
        //left
        quick_sort(arr,left,pivotIndex-1);
        //right
        quick_sort(arr,pivotIndex+1,right);
      }
     return arr;
} 


let arr = [11,10,25,10,1,0,-1,-10]
quick_sort(arr , 0 , arr.length - 1)
console.log(arr)


