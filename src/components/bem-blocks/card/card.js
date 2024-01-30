let currency = document.querySelectorAll(".card-price-currency")
let prices = document.querySelectorAll(".card-price-value")
let period = document.querySelectorAll(".card-price-period")
const dollarsCardOne = 30 
const dollarsCardTwo = 276
const dollarsCardThree = 420
const rublesCardOne = Math.round(dollarsCardOne * 89.61)
const rublesCardTwo =  Math.round(dollarsCardTwo * 89.61)
const rublesCardThree = Math.round(dollarsCardThree * 89.61)
const eurosCardOne = Math.round(rublesCardOne / 96.98)
const eurosCardTwo = Math.round(rublesCardTwo / 96.98)
const eurosCardThree = Math.round(rublesCardThree / 96.98)

currency.forEach(element => {
    element.addEventListener('click', () => {
        changePrices()
    })
});

prices.forEach(element => {
    element.addEventListener('click', () => {
        changePrices()
    })
});

period.forEach(element => {
    element.addEventListener('click', () => {
        changePeriod()
    })
});

const changePrices = () => {
    currency.forEach((element, index) => {
        let parent = element.parentNode
        let price = parent.querySelector('.card-price-value')
        if (element.textContent === "$") {
            element.textContent = "₽"
            if (index === 0) {
                price.textContent = rublesCardOne
            } else if (index === 1) {
                price.textContent = rublesCardTwo
            } else {
                price.textContent = rublesCardThree
            }
        } else if (element.textContent === "₽") {
            element.textContent = "€"
            if (index === 0) {
                price.textContent = eurosCardOne
            } else if (index === 1) {
                price.textContent = eurosCardTwo
            } else {
                price.textContent = eurosCardThree
            }
        } else {
            element.textContent = "$"
            if (index === 0) {
                price.textContent = dollarsCardOne
            } else if (index === 1) {
                price.textContent = dollarsCardTwo
            } else {
                price.textContent = dollarsCardThree
            }
        }
    })
}

const changePeriod = () => {
    period.forEach((element, index) => {
        let parent = element.parentNode
        let price = parent.querySelector('.card-price-value')
        let currency = parent.querySelector('.card-price-currency')
        if (element.textContent === '/Months') {
            element.textContent = '/Day'
            if (index === 0) {
                if (currency.textContent === "$") {
                    price.textContent = Math.round(dollarsCardOne / 30)
                } else if (currency.textContent === "₽") {
                    price.textContent = Math.round(rublesCardOne / 30)
                } else {
                    price.textContent = Math.round(eurosCardOne / 30)
                }
            } else if (index === 1) {
                if (currency.textContent === "$") {
                    price.textContent = Math.round(dollarsCardTwo / 30)
                } else if (currency.textContent === "₽") {
                    price.textContent = Math.round(rublesCardTwo / 30)
                } else {
                    price.textContent = Math.round(eurosCardTwo / 30)
                }
            } else {
                if (currency.textContent === "$") {
                    price.textContent = Math.round(dollarsCardThree / 30)
                } else if (currency.textContent === "₽") {
                    price.textContent = Math.round(rublesCardThree / 30)
                } else {
                    price.textContent = Math.round(eurosCardThree / 30)
                }
            }
        } else {
            element.textContent = '/Months'
            if (index === 0) {
                if (currency.textContent === "$") {
                    price.textContent = dollarsCardOne
                } else if (currency.textContent === "₽") {
                    price.textContent = rublesCardOne
                } else {
                    price.textContent = eurosCardOne
                }
            } else if (index === 1) {
                if (currency.textContent === "$") {
                    price.textContent = dollarsCardTwo
                } else if (currency.textContent === "₽") {
                    price.textContent = rublesCardTwo
                } else {
                    price.textContent = eurosCardTwo
                }
            } else {
                if (currency.textContent === "$") {
                    price.textContent = dollarsCardThree
                } else if (currency.textContent === "₽") {
                    price.textContent = rublesCardThree
                } else {
                    price.textContent = eurosCardThree
                }
            }
        }
    })
}