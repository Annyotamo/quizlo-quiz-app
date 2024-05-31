export function parseString(str) {
    const txtArea = document.createElement("textarea");
    txtArea.innerHTML = str;
    return txtArea.value;
}
