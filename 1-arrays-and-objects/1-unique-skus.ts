/*
uniqueSkus(rows) → return array of unique sku values.

Example: [{sku:'A'}, {sku:'A'}, {sku:'B'}] → ['A','B']

PEDAC:
Problem: 
- Given an array of objects, each containing a 'sku' property, return an array of unique SKU values.
- The input is an array of objects, and the output should be an array of unique strings
- The function should handle cases where the input array is empty or contains duplicate SKUs.
- The function should not modify the original array.
- The function should return an empty array if no unique SKUs are found.

Example: 
[{sku:'A'}, {sku:'A'}, {sku:'B'}] → ['A','B']

Data Structures:
Set for tracking unique SKUs, and an array for the final output.

Array of objects as input, and an array of strings as output.
- Input: Array of objects with 'sku' property
- Output: Array of unique SKU strings

Algorithm:
1. Initialize an empty array to hold unique SKUs.
2. Use a Set to track unique SKUs.
3. Iterate through the input array.
4. For each object, check if the SKU is already in the Set.
5. If not, add the SKU to the Set and also to the unique SKUs array
6. Return the unique SKUs array.


Code: 

*/

const rows: Array<{ sku: string }> = [{sku:'A'}, {sku:'A'}, {sku:'B'}]; 

/*
The code above defines a constant 'rows` that holds an array of objects. Each object has a property 'sku` which is a string
the `Array<{ sku: string }>` type annotation specifies that 'rows' is an array of objects, where each object has a 'sku' property of type string.

*/

export function uniqueSkus(rows: Array<{ sku: string }>): string[] {
    const uniqueSkuSet = new Set<string>(); // Set to track unique SKUs
    const uniqueSkus: string[] = []; // Array to hold the final unique SKUs

    for (const row of rows) { 
        if (row.sku && !uniqueSkuSet.has(row.sku)) { // Check if SKU is not already in the Set
            uniqueSkuSet.add(row.sku); // Add SKU to the Set
            uniqueSkus.push(row.sku); // Add SKU to the unique SKUs array
        }
    }

    return uniqueSkus; // Return the array of unique SKUs
}