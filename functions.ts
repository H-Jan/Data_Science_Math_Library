
// Minimum Value of an Array

const sample_array: number[] = [2, 4, 6, 7, 3, 4, 2, 9, 18, 55, 20, 3, 44]

function getMin(arr: number[]): number{
    const min: number = arr.reduce((a, b) => Math.min(a, b));
    return min
}

function getMax(arr: number[]): number{
    const max: number = Math.max.apply(null, arr);
    return max
}

function getAvg(arr: number[]): number{
    const sum: number = arr.reduce((i, j) => i + j);
    const average: number = sum/arr.length;
    return average
}

