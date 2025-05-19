pizzaToppings = ["cheese", "sauce" , "sausage", "onion", "peperoni", "green onions"];

function greetCustomer(name) {

    console.log(`Greetings and welcome to pizza house ${name}! Our available toppings are:`)
    for (let topping of pizzaToppings)

        console.log( topping)


}


greetCustomer("Amanzi")

function getPizzaOrder(quanity,size, crust, ...toppings){
    console.log(`Pizza Ordered: ${quanity}, ${size}, ${crust}, ${toppings}`)
    return[ quanity, size, crust, ...toppings]
}


function preparePizza([quanity, size, crust, ...toppings]){
    console.log("..........cooking pizza.......")
    return {
        quanity: quanity,
        size: size,
        crust: crust,
        toppings: toppings
    }; 
}

function servePizza(pizza){
    console.log(`Order is up!  Here's your ${pizza.size} ${pizza.crust} pizza with  ${pizza.toppings}`)


}

let order = getPizzaOrder(1, "large", "thick crust", "cheese" , "more cheese", "onion");
let pizza = preparePizza(order)

servePizza(pizza)

//console.log(pizza)