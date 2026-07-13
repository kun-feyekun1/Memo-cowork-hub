// Array utility helpers
export function unique(array) {
    return [...new Set(Array.isArray(array) ? array : [])];
}

export function chunk(array, size) {
    if (!Array.isArray(array) || size <= 0) return [];

    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}

export function flatten(array) {
    if (!Array.isArray(array)) return [];
    return array.flat(Infinity);
}

export function average(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) return 0;
    const sum = numbers.reduce((total, value) => total + value, 0);
    return sum / numbers.length;
}
