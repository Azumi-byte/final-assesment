function fibonacci(n) {
    if (n === 0) {
        return [ 0 ];
    }
    else if (n === 1) {
        return [ 0, 1 ];
    }
    else {
        let series = [0, 1];
        for (let i = 2; i <= n; i++) {
            series.push(series[i - 1] + series[i -2]);
        }

        return series;
    }
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
