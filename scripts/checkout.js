function placeOrder(){

    setTimeout(function(){
        alert("Your order is accepted")
    },0)

    setInterval(function(){
        alert("Your order is being Prepared")
    },3000)

    setInterval(function(){
        alert("Your order is being packed")
    },8000)

    setInterval(function(){
        alert("Your order is out for delivery")
    },10000)

    setInterval(function(){
        alert("Order Delivered")
    },12000)

}