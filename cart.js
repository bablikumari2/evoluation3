var box = document.createElementById("box")

var get= JSON.parse(localStorage.getItem("categories"))


function appendgotocart(get){
    get.forEach(({name,image,price})=> {
  var div = document.createElement("div")

  var img = document.createElement("img")
  img.src= image

  var price = document.createElement("p")
  price.textContext = price
  
  var dish =document.createElement("p")
  dish.textContent = dish

   div.append(img,price,dish)

   box.append(div)
    })
}