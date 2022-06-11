
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

function MSE(pred_val: number[], obs_val: number[]): number{
    let error: number = 0;
    for (let i: number = 0; i < pred_val.length; i += 1) {
        error += Math.pow((obs_val[i] - pred_val[i]), 2);
    }

    return error / pred_val.length;
}

function RMSE(pred_val: number[], obs_val: number[]): number{
    const mse: number = MSE(pred_val, obs_val);
    const rmse: number = Math.sqrt(mse);
    return rmse
}



