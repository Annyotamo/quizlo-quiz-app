export function shuffleArray(arr) {
    const len = arr.length;
    for (let i = len - 1; i >= 0; i--) {
        let r = Math.floor(Math.random() * i);
        let temp = arr[i];
        arr[i] = arr[r];
        arr[r] = temp;
    }
}
