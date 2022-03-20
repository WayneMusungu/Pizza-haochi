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

