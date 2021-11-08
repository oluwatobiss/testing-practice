function analyze(array) {
    return {
        average: function (arr) {
            return array.reduce((a, b) => a + b, 0) / array.length;
        }(array),
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length
    }
}

export default analyze;