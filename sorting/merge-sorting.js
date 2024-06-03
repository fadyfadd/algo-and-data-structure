//merge sort
//time complexity O(nLog(n))
//space complexity O(n)


function merge(arr1 , arr2) {
    let i = 0
    let j = 0
    let result = []
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <arr2[j]){
            result.push(arr1[i])
            i++
        }
        else {
            result.push(arr2[j])
            j++;
        }
      
    }

    while (i < arr1.length) {
        result.push(arr1[i])
        i++
    }

    while (j < arr2.length) {
        result.push(arr2[j])
        j++
    }

    return result
}

function merge_sort(arr) {
    if (arr.length <= 1)
        return arr;

    let mid = Math.floor(arr.length/2);
    let left = merge_sort(arr.slice(0,mid));
    let right = merge_sort(arr.slice(mid));
    return merge(left, right);
}


let arr = [11,10,25,10,1,0,-1,-10]
arr = merge_sort(arr)
console.log(arr)