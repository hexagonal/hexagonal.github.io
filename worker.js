const mult = (lhs, rhs) => {
    let [a, b, c] = [lhs[0] * rhs[0], lhs[1] * rhs[1], lhs[2] * rhs[2]]
    return [b + a, c - a, b + c]
}

let cache = [[0n, 1n, 1n]]

function fib(x) {
    if (x <= 0) return 0n

    let powers = getBinaryPowers(x)
    let largestPower = powers[0]

    while (largestPower > cache.length - 1) {
        let t = cache[cache.length - 1]
        cache.push(mult(t, t))
    }

    let triples = powers.map((power) => cache[power])
    let triple = triples.reduce((acc, x) => mult(acc, x))
    return triple[1]
}

function getBinaryPowers(x) {
    let powers = []

    while (x > 0) {
        let i = Math.floor(Math.log2(x))
        powers.push(i)
        x -= 2 ** i
    }

    return powers
}

onmessage = e => postMessage(fib(e.data).toLocaleString())
