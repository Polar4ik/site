
function create_matrix(h, w) {
    const matrix = [];

    for (let y = 0; y < h; y++) {
        const row = [];
        for (let x = 0; x < w; x++) {
            row.push(0);
        }
        matrix.push(row)
    }
    return matrix;
}
