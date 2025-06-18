const pizzaToppings = ["cheese", "sauce", "sausage", "onion", "peperoni", "green onions"];

function greetCustomer(name) {
    let toppingsList = "";
    for (let i = 0; i < pizzaToppings.length; i++) {
        toppingsList += pizzaToppings[i];
        if (i < pizzaToppings.length - 1) {
            toppingsList += ", ";
        }
    }
    console.log(`Greetings and welcome to pizza house ${name}! Our available toppings are: ${toppingsList}.`);
}

function getPizzaOrder(quantity, size, crust, ...toppings) {
    let toppingsList = "";
    for (let i = 0; i < toppings.length; i++) {
        toppingsList += toppings[i];
        if (i < toppings.length - 1) {
            toppingsList += ", ";
        }
    }
    console.log(`Order received: ${quantity} ${size} ${crust} pizza with the following toppings: ${toppingsList}.`);
    return [quantity, size, crust, ...toppings];
}

function preparePizza([quantity, size, crust, ...toppings]) {
    console.log("..........cooking pizza.......");
    return {
        quantity: quantity,
        size: size,
        crust: crust,
        toppings: toppings
    };
}

function servePizza(pizza) {
    let toppingsList = "";
    for (let i = 0; i < pizza.toppings.length; i++) {
        toppingsList += pizza.toppings[i];
        if (i < pizza.toppings.length - 1) {
            toppingsList += ", ";
        }
    }
    console.log(`Order is up! Here's your ${pizza.size} ${pizza.crust} pizza with ${toppingsList}. Enjoy!`);
}

greetCustomer("Amanzi");
const customerOrder = getPizzaOrder(1, "large", "thick crust", "cheese", "more cheese", "onion");
const pizza = preparePizza(customerOrder);
servePizza(pizza);