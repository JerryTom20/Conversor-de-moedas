//Cotação do dia Valores
const USD = 4.87
const EUR = 5.32
const GBP = 6.08



const form = document.querySelector("form")
const amount = document.getElementById("amount");
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

//Manipulando o amount para receber somente numero
amount.addEventListener("input", (event) => {
    event.preventDefault()

    const regex = /\D+/g

    amount.value = amount.value.replace(regex, "")


})





//capturando o submit
form.onsubmit = (event) => {
    event.preventDefault()

    switch (currency.value) {
        case "USD":
            covertCurrency(amount.value, USD, "US$")
            break;
        case "EUR":
            covertCurrency(amount.value, EUR, "€")
            break;
        case "GBP":
            covertCurrency(amount.value, GBP, "	£")
            break;

    }

}

// função de converter moedas

function covertCurrency(amount, price, symbol) {
    try {
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`



        let total = amount * price

        total = formatCurrencyBRL(total).replace("R$", "")

        result.textContent = `${total} Reais`
        footer.classList.add("show-result")

    } catch (error) {
        footer.classList.remove("show-result")
        alert("Não foi possível converter")
    }
}

function formatCurrencyBRL(e) {
    return Number(e).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })

}