function aa() {
    console.log(1)
    return 1
}

function bb() {
    return 2
}

const a = aa();
const b = bb();
const c = a + b;

console.log(c);