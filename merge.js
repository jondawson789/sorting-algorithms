function merge(arr1, arr2) {
    let out = [];
    let a = 0; 
    let b = 0; 

    while(a < arr1.length && b < arr2.length) {
        if(arr1[a] < arr2[b]) {
            out.push(arr1[a]); 
            a = a + 1; 
        }
        else{
            out.push(arr2[b]); 
            b = b + 1; 
        }
    }

    while(a < arr1.length) {
        out.push(arr1[a]);
        a = a + 1; 
    }

    while(b < arr2.length) {
        out.push(arr2[b]);
        b = b + 1; 
    }

    return out; 
}

function mergeSort(arr) {
    if(arr.length == 1 || arr.length == 0) {
        return arr; 
    }

    const mid = Math.floor(arr.length / 2); 
    const left = mergeSort(arr.slice(0,mid)); 
    const right = mergeSort(arr.slice(mid)); 

    return merge(left, right); 
}

module.exports = { merge, mergeSort};