//Обробка помилок за допомогою try-catch-finally
function divide(numerator, denominator){
    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error ('Error: Some of the arguments not a number');
    }
    if (denominator === 0) {
        throw new Error ('Error: Division by zero')
    }
    const result = numerator / denominator
    return result;
}

try {
    const result1 = divide(15, 3)
    console.log('result 1: ', result1);
    const result2 = divide('a', 4)
    console.log('result 2: ', result2)
    const result3 = divide(5, 0)
    console.log('result 3: ', result3)
} catch (e) {
    console.error('General error appeared:', e.message);
} finally {
    console.log('The work is complete')
}
