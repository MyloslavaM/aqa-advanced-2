function getCardType(cardNumber){
    switch (true){
        case cardNumber.startsWith('4111'):
            return "Visa"
        case cardNumber.startsWith('5555') && cardNumber.endsWith('4444'):
            return "Mastercard"
        default:
            throw new Error("Unknown card provider")
    }
}

function processPayment(cb){
    console.log("Before payment actions")
    cb()
}