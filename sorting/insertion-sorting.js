//insertion sort
//time complexity O(n^2)
//space complexity O(1)


function insertion_sort(arr) {
    for (let i = 1 ; i < arr.length ; i++) {
      let currentValue = arr[i]
      let j = i - 1; 
        while (j >= 0 && currentValue < arr[j]) {
            arr[j+1] = arr[j]
            j--
        }

        arr[j+1] = currentValue
    }
}

let arr = [11,10,25,10,1,0,-1,-10]
insertion_sort(arr)
console.log(arr)

