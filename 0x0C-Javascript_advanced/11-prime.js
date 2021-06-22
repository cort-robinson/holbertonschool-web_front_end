function countPrimeNumbers() {
    let primeCount = 0;

    const isPrime = n => {
        for (let i = 2, s = Math.sqrt(n); i <= s; i++)
            if (n % i === 0) return 0;
        return 1;
    };

    for (let i = 2; i < 101; i++)
        primeCount += isPrime(i);

    return primeCount;
}

let start = performance.now();
setTimeout(() => {
    for (let i = 0; i < 100; i++)
        countPrimeNumbers();
});
let end = performance.now();
let timeElapsed = end - start;
console.log('Execution time of calculating prime numbers 100 times was ' + timeElapsed + ' milliseconds.');
