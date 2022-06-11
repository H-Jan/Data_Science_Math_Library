
var sample_array = [2, 4, 6, 7, 3, 4, 2, 9, 18, 55, 20, 3, 44];
var predicted_values = [1.0, 2.9, 2.8]
var observed_values = [-19.8, -18.2, -10.11]
function getMin(arr) {
    var min = arr.reduce(function (a, b) { return Math.min(a, b); });
    return min;
}
console.log("Minimum:")
console.log(getMin(sample_array))

function getMax(arr) {
    var max = Math.max.apply(null, arr);
    return max;
}
console.log("Maximum:")
console.log(getMax(sample_array))

function getMean(arr) {
    var sum = arr.reduce(function (f, j) { return f + j; });
    var mean = sum / arr.length;
    return mean;
}
console.log("Mean:")
console.log(getMean(sample_array))

function getMedian(arr) {
    var sorted = arr.sort(function (c, d) {
        return c - d;
    });
    var halved = Math.floor(arr.length / 2);
    if (arr.length % 2)
        return arr[halved];
    return ((arr[halved - 1] + arr[halved]) / 2.0);
}
console.log("Median:")
console.log(getMedian(sample_array))

function getFirstQuartile(arr) {
    var values = arr.slice().sort(function (a, b) { return a - b; });
    if ((values.length / 4) % 1 === 0) {
        var q1 = 1 / 2 * (values[(values.length / 4)] + values[(values.length / 4) + 1]);
    }
    else {
        var q1 = values[Math.floor(values.length / 4 + 1)];
    }
    return q1;
}
console.log("First Quartile:")
console.log(getFirstQuartile(sample_array))

function getThirdQuartile(arr) {
    var values = arr.slice().sort(function (a, b) { return a - b; });
    if ((values.length / 4) % 1 === 0) {
        var q3 = 1 / 2 * (values[(values.length * (3 / 4))] + values[(values.length * (3 / 4)) + 1]);
    }
    else {
        var q3 = values[Math.floor(values.length * (3 / 4) + 1)];
    }
    return q3;
}
console.log("Third Quartile:")
console.log(getThirdQuartile(sample_array))


function getIQR(arr) {
    var x1 = getFirstQuartile(arr);
    var x3 = getThirdQuartile(arr);
    var iqr = x3 - x1;
    return iqr;
}
console.log("getIQR:")
console.log(getIQR(sample_array))

function getOutliers(arr) {
    var values = arr.slice().sort(function (a, b) { return a - b; });
    var quartile1 = getFirstQuartile(arr);
    var quartile3 = getThirdQuartile(arr);
    var iqr = getIQR(arr);
    var maxValue = quartile3 + iqr * 1.5;
    var minValue = quartile1 - iqr * 1.5;
    var outliers = values.filter(function (x) { return (x <= minValue) && (x >= maxValue); });
    return outliers;
}
console.log("Outliers:")
console.log(getOutliers(sample_array))

function getStdDev(arr) {
    var array_length = arr.length;
    var mean = getMean(arr);
    var temp_array = arr.map(function (el) {
        return Math.pow((el - mean), 2);
    });
    var total = arr.reduce(function (accuracy, current) { return accuracy + current; }, 0);
    return Math.sqrt(total / arr.length);
}
console.log("Standard Deviation:")
console.log(getStdDev(sample_array))

function MSE(pred_val, obs_val) {
    var error = 0;
    for (var i = 0; i < pred_val.length; i += 1) {
        error += Math.pow((obs_val[i] - pred_val[i]), 2);
    }
    return error / pred_val.length;
}
console.log("MSE:")
console.log(MSE(predicted_values, observed_values))

function RMSE(pred_val, obs_val) {
    var mse = MSE(pred_val, obs_val);
    var rmse = Math.sqrt(mse);
    return rmse;
}
console.log("RMSE:")
console.log(RMSE(predicted_values, observed_values))
