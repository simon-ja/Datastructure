// NOTE: THIS SOLUTION IS FOR PROBLEM ONE (1).


function findDistinctSum(set1, set2) {
    // initialize a new empty Set to store distinct elements
    const distinctSet = new Set();
  
    // iterate over each element in set1
    for (const element of set1) {
      // if the element is not already in the distinct set, add it to the set
      if (!distinctSet.has(element)) {
        distinctSet.add(element);
      }
    }
  
    // iterate over each element in set2
    for (const element of set2) {
      // if the element is not already in the distinct set, add it to the set
      if (!distinctSet.has(element)) {
        distinctSet.add(element);
      }
    }
  
    // initialize a variable to store the sum
    let sum = 0;
  
    // iterate over each element in the distinct set and add it to the sum
    for (const element of distinctSet) {
      sum += element;
    }
  
    // return the sum of distinct elements
    return sum;
  }
  
  // Example usage
  const set1 = [3, 1, 7, 9];
  const set2 = [2, 4, 1, 9, 3];
  const distinctSum = findDistinctSum(set1, set2);
  console.log(distinctSum); // Output: 13 (distinct elements are 2, 4, 7)
  



//   NOTE: THE SOLUTION FOR PROBLEM TWO (2) STARTS HERE.


// Algorithm using procedure:

// 1. Define a procedure named "dot_product" that takes two vector arrays v1 and v2 as parameters.
// 2. Initialize a variable named "ps" to 0.
// 3. Loop through the indices of the vectors from 0 to the length of the vector (excluding the last index).
// 4. Multiply the ith element of the v1 array with the ith element of the v2 array, and add the result to the ps variable.
// 5. Return the ps variable.





// Algorithm for determining orthogonal vectors using the dot_product procedure:

// 1. Define two vector arrays v1 and v2, each of length n.
// 2. Define a boolean array named "orthogonal" of length n.
// 3. Loop through the indices of the vectors from 0 to n-1.
// 4. For each index, prompt the user to input the values of the ith element of v1 and v2.
// 5. Call the dot_product procedure with v1 and v2 as parameters and store the result in the ps variable.
// 6. If the ps variable is 0, set the ith element of the orthogonal array to True, else set it to False.
// 7. Print the result of the ith vector being orthogonal or not.






// Algorithm using function:

// 1. Define a function named "dot_product" that takes two vector arrays v1 and v2 as parameters and returns the scalar product ps.
// 2. Initialize a variable named "ps" to 0.
// 3. Loop through the indices of the vectors from 0 to the length of the vector (excluding the last index).
// 4. Multiply the ith element of the v1 array with the ith element of the v2 array, and add the result to the ps variable.
// 5. Return the ps variable.






// Algorithm for determining orthogonal vectors using the dot_product function:

// 1. Define two vector arrays v1 and v2, each of length n.
// 2. Define a boolean array named "orthogonal" of length n.
// 3. Loop through the indices of the vectors from 0 to n-1.
// 4. For each index, prompt the user to input the values of the ith element of v1 and v2.
// 5. Call the dot_product function with v1 and v2 as parameters and store the result in the ps variable.
// 6. If the ps variable is 0, set the ith element of the orthogonal array to True, else set it to False.
// 7. Print the result of the ith vector being orthogonal or not.





//  PRESENTING SOLUTION 2 IN JAVASCRIPT FORMAT.

// Define a procedure named "dot_product" that takes two vector arrays v1 and v2 as parameters.
function dot_product(v1, v2) {
    // Initialize a variable named "ps" to 0.
    let ps = 0;
    // Loop through the indices of the vectors from 0 to the length of the vector (excluding the last index).
    for (let i = 0; i < v1.length - 1; i++) {
      // Multiply the ith element of the v1 array with the ith element of the v2 array, and add the result to the ps variable.
      ps += v1[i] * v2[i];
    }
    // Return the ps variable.
    return ps;
  }
  
  // Define two vector arrays v1 and v2, each of length n.
  const n = 3;
  const v1 = new Array(n);
  const v2 = new Array(n);
  
  // Define a boolean array named "orthogonal" of length n.
  const orthogonal = new Array(n);
  
  // Loop through the indices of the vectors from 0 to n-1.
  for (let i = 0; i < n; i++) {
    // For each index, prompt the user to input the values of the ith element of v1 and v2.
    v1[i] = Number(prompt(`Enter the value of the ${i+1}th element of vector v1:`));
    v2[i] = Number(prompt(`Enter the value of the ${i+1}th element of vector v2:`));
  
    // Call the dot_product procedure with v1 and v2 as parameters and store the result in the ps variable.
    const ps = dot_product(v1, v2);
  
    // If the ps variable is 0, set the ith element of the orthogonal array to True, else set it to False.
    orthogonal[i] = ps === 0;
  
    // Print the result of the ith vector being orthogonal or not.
    console.log(`Vector v1 = [${v1}] and vector v2 = [${v2}] are ${orthogonal[i] ? 'orthogonal' : 'not orthogonal'}.`);
  }
  
