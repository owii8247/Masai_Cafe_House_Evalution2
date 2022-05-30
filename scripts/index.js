// Add the coffee to local storage with key "coffee"

let url = "https://masai-mock-api.herokuapp.com/coffee/menu";

fetch(url)

.then(function(res){
    return res.json()
})
.then(function(res){
    let takeData = res.menu.data
    console.log(takeData)
    append(takeData)


})
.catch(function(err){
    console.log("err:",err)
})

let arr = JSON.parse(localStorage.getItem("coffee")) || []
let x = arr.length
document.getElementById("coffee_count").innerText = `${x}`

function append(data){
    data.map(function(el,index){

        let div = document.createElement("div")
        div.setAttribute("id","box")

        let type = document.createElement("h3")
        type.innerText = `Coffee Type : ${el.title}`;

        let image = document.createElement("img")
        image.src = el.image;

        let price = document.createElement("h3")
        price.innerText = `Rs : ${el.price}`;

        let add = document.createElement("button")
        add.innerText ="Add To Bucket"
        add.setAttribute("id","add_to_bucket")
        add.addEventListener("click",function(){
            addToBucket(el,index)
        })

        div.append(image,type,price,add)
        document.getElementById("menu").append(div)
    })
}

function addToBucket(el,index){
    arr.push(el)
    console.log(arr)
    localStorage.setItem("coffee",JSON.stringify(arr))
    window.location.reload()
}
