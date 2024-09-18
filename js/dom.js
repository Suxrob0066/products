
let elProducts = document.querySelector(".products")
let elSearchInput = document.querySelector(".search")

function renderList(arr){
    elProducts.innerHTML = ""
    arr.map(item => {
        let elItem = document.createElement("li")
        elItem.className = "bg-blue-500 rounded-md text-center p-2"
        elItem.innerHTML = `
        <img class="bg-white" src="${item.images[0]}" width="300" />
        <h2 class="text-white text-[20px]">${item.title}</h2>
        `
        elProducts.appendChild(elItem)
    })
}



fetch("https://dummyjson.com/products").then(res => res.json()).then(data => {
    renderList(data.products)
    localStorage.setItem("products", JSON.stringify(data.products))

})


elSearchInput.addEventListener("input", function(e){
    const products = JSON.parse(localStorage.getItem("products"))
    const data = products.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase()))
    renderList(data)
})

