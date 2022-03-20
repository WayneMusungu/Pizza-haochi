// EFFECTS ON THE HOME SECTION
$(document).ready(function () {
    $(".col-md-4").click(function () {
        // create a variable speed for our slideToggle
        var speed = 2000
        $(this).children(".hide").slideToggle(speed)
    });
});



function pizzaCosts(crust, size, topping) {
    this.crust = crust;
    this.size = size;
    this.toppings = topping;
};

function Cost(price, count, delivery) {
    this.price = price;
    this.count = count;
    this.delivery = delivery;

};
Cost.prototype.initialCost = function () {
    return this.price * this.count + this.delivery;
};


var pizzaPrices = [500, 750, 1250];
var crustCost = [100, 150, 200];
var toppingCost = [80, 60, 100, 120, 90];
var deliveryCost = [300, 0];


$(document).ready(function (event) {
    $("#form1").submit(function (event) {
        event.preventDefault();
        var pizzaSize = parseInt($("#size").val());
        var pizzaCrust = parseInt($("#crust").val());
        var pizzaTopping = parseInt($("#topping").val());
        var pizzaNumber = parseInt($("#num").val());
        var pizzaDelivery = document.getElementById("mode").selectedIndex

        console.log(pizzaDelivery)



        var priceWithoutDelivery = pizzaPrices[pizzaSize] + toppingCost[pizzaTopping] + crustCost[pizzaCrust];
        var finalDelivery = deliveryCost[pizzaDelivery];

        var myPizza = new pizzaCosts(pizzaSize, pizzaCrust, pizzaTopping);
        var total2 = new Cost(finalDelivery, pizzaNumber, priceWithoutDelivery);
        //  console.log(pizzaDelivery);
        
        if (pizzaDelivery === 0) {
            prompt("Enter the place where Your pizza will be delivered.");
            alert("Thank for choosing pizza-haochi your order will be delivered in the next 20 minutes with a total cost of ksh" + total2.initialCost());

        } else if (pizzaDelivery === 1) {

            alert("Thank you for choosing Pizza-haochi your cost is ksh " + total2.initialCost());

        }


    });

});