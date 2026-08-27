const button = document.getElementById("button");
const prices = document.getElementsByClassName("prices");


const change_prices = () => {
    console.log("Debugging - function: change_prices")
    console.log(`Debug: Taxes: ${localStorage.getItem("taxes")}`);


    if (localStorage.getItem("taxes") === "exkl") {
        for (let i = 0; i < prices.length; i++) {

            console.log(`Debug: Inkl: ${prices.item(i).innerHTML}`);

            price_without_taxes = parseFloat(prices.item(i).innerHTML);
            price_with_taxes = price_without_taxes * 1.25;
            prices.item(i).innerHTML = price_with_taxes;
        }

        localStorage.setItem("taxes", "inkl");
        button.innerHTML = "Inkludera moms";

    } else {
        for (let i = 0; i < prices.length; i++) {

            console.log(`Debug: Exkl: ${prices.item(i).innerHTML}`);

            price_with_taxes = parseFloat(prices.item(i).innerHTML);
            price_without_taxes = price_with_taxes / 1.25;
            prices.item(i).innerHTML = price_without_taxes;
        }

        localStorage.setItem("taxes", "exkl");
        button.innerHTML = "Exkludera moms";

    }
}


if (localStorage.getItem("taxes") === "exkl") {
    change_prices();
}


button.addEventListener("click", change_prices);