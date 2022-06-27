
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

function getMean(arr: number[]): number{
    const sum: number = arr.reduce((f, j) => f + j);
    const mean: number = sum/arr.length;
    return mean
}

function getMedian(arr: number[]): number{
    let sorted: number[] = arr.sort(function(c, d){
        return c-d;
    });
    const halved: number = Math.floor(arr.length / 2);
    if (arr.length % 2)
        return arr[halved];
    return ((arr[halved - 1] + arr[halved]) / 2.0);
}

function getFirstQuartile(arr: number[]): number{
    const values: number[] = arr.slice().sort( (a: number, b: number) => a - b);
    
    if ((values.length / 4) % 1 === 0){
        var q1 = 1/2 * (values[(values.length / 4)] + values[(values.length / 4) + 1]);
    } else {
        var q1 = values[Math.floor(values.length / 4 + 1)];
    }
    return q1
}

function getThirdQuartile(arr: number[]): number{
    const values: number[] = arr.slice().sort( (a: number, b: number) => a - b);
    
    if ((values.length / 4) % 1 === 0){
        var q3 = 1/2 * (values[(values.length * (3 / 4))] + values[(values.length* (3 / 4)) + 1]);
    } else {
        var q3 = values[Math.floor(values.length * (3/ 4)+ 1)];
    }
    return q3
}

function getIQR(arr: number[]): number{
    const x1: number = getFirstQuartile(arr);
    const x3: number = getThirdQuartile(arr);
    const iqr: number = x3 - x1;
    return iqr
}

function getOutliers(arr: number[]): number[]{
    const values: number[] = arr.slice().sort( (a: number, b: number) => a - b);

    const quartile1: number = getFirstQuartile(arr);
    const quartile3: number = getThirdQuartile(arr);
    const iqr: number = getIQR(arr)
    const maxValue: number = quartile3 + iqr * 1.5;
    const minValue: number = quartile1 - iqr * 1.5;

    const outliers: number[] = values.filter((x) => (x >= minValue) && (x <= maxValue));

    return outliers
}

function getStdDev(arr: number[]): number{
    const array_length: number = arr.length;
    const mean: number = getMean(arr);
    let temp_array: number[] = arr.map((el) => {
        return (el - mean) ** 2;
    })

    let total: number = arr.reduce((accuracy: number, current: number) => accuracy + current, 0);

    return Math.sqrt(total / arr.length);
}





