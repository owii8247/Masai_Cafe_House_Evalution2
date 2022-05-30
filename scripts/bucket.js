// On clicking remove button the item should be removed from DOM as well as localstorage.

let coffeeData = JSON.parse(localStorage.getItem("coffee"))

let x = coffeeData.reduce(function(sum,el,index,arr){
    return sum + (el.price)
},0)
console.log(x)

let length = coffeeData.length

document.getElementById("total_amount").innerText = `${x}`;


let box = document.getElementById("bucket")

coffeeData.map(function(el,index){
    let div = document.createElement("div")
    div.setAttribute("id","box")

    let image = document.createElement("img")
    image.src = el.image

    let type = document.createElement("h3")
    type.innerText = `Coffee Type : ${el.title}`

    let price = document.createElement("h3")
    price.innerText = `Rs : ${el.price}`;

    let remove = document.createElement("button")
    remove.innerText = "Remove"
    remove.setAttribute("id","remove_coffee")
    remove.addEventListener("click",function(el,index){
        removeCoffee(el,index)
    })
    div.append(image,type,price,remove)
    // document.getElementById("bucket").append(div)
    box.append(div)


})

function removeCoffee(el,index){
    coffeeData.splice(index,1)

    localStorage.setItem("coffee",JSON.stringify(coffeeData))
    window.location.reload()
}