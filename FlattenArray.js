// 1. Write a function to flatten an array of arrays. 
//The resulting array should contain all the values of the input array, without nesting.
// flatten([1, [2, [3, [4, [5, 6]]]]])
// Output => [1, 2, 3, 4, 5, 6]
// Avoid using Array.flatten or any other utility function that will help with flattening the array directly. You can use map, filter or reduce or for loops


const flattenedArray = [];
function flattenArrayOfArrays(inputArray) {
    
    //type and length check
    if(!Array.isArray(inputArray) || inputArray.length === 0){
        console.error("Invalid array");
        return false;
    }
    
    //iterate through inputArray using "map"
    inputArray.map(element => {
        if (Array.isArray(element))
            // If the item is an array, recursively call the function
            flattenArrayOfArrays(element);
        else
            // If the item is not an array, add it to the flattenedArray
            flattenedArray.push(element);
    });
    return flattenedArray;
}
        
const inputArray = [1, [2, [3, [4, [5, 6]]]]] ;
// [[0],1,'hello', [2, [true],[3, [4, [5, 6],4.5]]],-2];
// [1, [2, [3, [true, [5, '6']]]]];

console.log(flattenArrayOfArrays(inputArray));
// console.log(flattenArray(4.5));


  