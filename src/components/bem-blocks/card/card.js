let currency = document.querySelectorAll(".card-price-currency"),
    prices = document.querySelectorAll(".card-price-value"),
    period = document.querySelectorAll(".card-price-period")

const dollarsCardOne = 30,
    dollarsCardTwo = 276,
    dollarsCardThree = 420,
    rublesCardOne = Math.round(dollarsCardOne * 89.61),
    rublesCardTwo =  Math.round(dollarsCardTwo * 89.61),
    rublesCardThree = Math.round(dollarsCardThree * 89.61),
    eurosCardOne = Math.round(rublesCardOne / 96.98),
    eurosCardTwo = Math.round(rublesCardTwo / 96.98),
    eurosCardThree = Math.round(rublesCardThree / 96.98)

const rubles = (index) => {
    switch (index) {
        case 0:
            return rublesCardOne
        case 1:
            return rublesCardTwo
        case 2:
            return rublesCardThree
    }
}

const euros = (index) => {
    switch (index) {
        case 0:
            return eurosCardOne
        case 1:
            return eurosCardTwo
        case 2:
            return eurosCardThree
    }
}

const dollars = (index) => {
    switch (index) {
        case 0:
            return dollarsCardOne
        case 1:
            return dollarsCardTwo
        case 2:
            return dollarsCardThree
    }
}

const setPrice = (period, price, func, ind) => {
    if(period === '/Months') {
        price.textContent = String(func(ind))
    } else {
        price.textContent = String(Math.round(func(ind) / 30))
    }
}

const changePrices = () => {
    currency.forEach((element, index) => {
        let parent = element.parentNode
        let price = parent.querySelector('.card-price-value')
        let period = parent.querySelector('.card-price-period').textContent

        if (element.textContent === "$") {
            element.textContent = "₽"
            setPrice(period, price, rubles, index)
        } else if (element.textContent === "₽") {
            element.textContent = "€"
            setPrice(period, price, euros, index)
        } else {
            element.textContent = "$"
            setPrice(period, price, dollars, index)
        }
    })
}

const monthOrDay = (elem, priceEl, func, ind) => {
    if (elem.textContent === '/Months') {
        elem.textContent = '/Day'
        priceEl.textContent = String(Math.round(func(ind) / 30))
    } else {
        elem.textContent = '/Months'
        priceEl.textContent = String(func(ind))
    }
}

const changePeriod = () => {
    period.forEach((element, index) => {
        let parent = element.parentNode
        let price = parent.querySelector('.card-price-value')
        let currency = parent.querySelector('.card-price-currency')

        if (currency.textContent === "$") {
            monthOrDay(element, price, dollars, index)
        } else if (currency.textContent === "₽") {
            monthOrDay(element, price, rubles, index)
        } else {
            monthOrDay(element, price, euros, index)
        }
    })
}

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