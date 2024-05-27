let core_functionalities = {
    swap:swap   
} 

function swap(arr , idx0 , idx1) {
    let temp = arr[idx0]
    arr[idx0] = arr[idx1]
    arr[idx1] = temp
}

module.exports = core_functionalities;