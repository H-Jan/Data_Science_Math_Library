const sp = require('./functions')

test('Get Minimum Test', () => {
    expect(sp.getMin([2, 4, 6, 7, 3, 4, 2, 9, 18, 55, 20, 3, 44])).toBe(2)
})

test('Get Maximum Test', () => {
    expect(sp.getMax([2, 4, 6, 7, 3, 4, 2, 9, 18, 55, 20, 3, 44])).toBe(55)
})

test('Get Mean Test', () => {
    expect(sp.getMean([2, 4, 6, 7, 3, 4, 2, 9, 18, 55, 20, 3, 44])).toBe(13.615384615384615)
})

test('Get Median Test', () => {
    expect(sp.getMedian([2, 4, 6, 7, 3, 4, 2, 9, 18, 55, 20, 3, 44])).toBe(6)
})

test('Get First Quartile Test', () => {
    expect(sp.getFirstQuartile([2, 4, 6, 7, 3, 4, 2, 9, 18, 55, 20, 3, 44])).toBe(4)
})

test('Get Third Quartile Test', () => {
    expect(sp.getThirdQuartile([2, 4, 6, 7, 3, 4, 2, 9, 18, 55, 20, 3, 44])).toBe(20)
})

test('Get IQR Range Test', () => {
    expect(sp.getIQR([2, 4, 6, 7, 3, 4, 2, 9, 18, 55, 20, 3, 44])).toBe(16)
})

test('Get Outliers Test', () => {
    expect(sp.getOutliers([2, 4, 6, 7, 3, 4, 2, 9, 18, 55, 20, 3, 44])).toEqual([])
})

test('Get Standard Deviation Test', () => {
    expect(sp.getStdDev([2, 4, 6, 7, 3, 4, 2, 9, 18, 55, 20, 3, 44])).toBe(3.6899030631419865)
})

