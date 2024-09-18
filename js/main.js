let elList = document.querySelector(".list")
let elPostsList = document.querySelector(".posts")
let elCommentsList = document.querySelector(".comments")


function rendernavbar(arr, list, isData) {
    if (isData == "users") {
        arr.forEach(item => {
            let elItem = document.createElement("li")
            elItem.innerHTML = `
            <div class="p-[10px] bg-blue-500 rounded-md w-[250px] text-center">
                <h2 class="text-white text-[30px]">${item.name}</h2>
                <p class="text-white text-[18px]">${item.email}</p>
                <a class="text-white text-[18px]" href="">${item.phone}</a>
            </div>
            `
            list.appendChild(elItem)
        })
    }
    else if (isData == "posts") {
        arr.forEach(item => {
            let elItem = document.createElement("li")
            elItem.innerHTML = `
            <div class="p-[10px] bg-blue-500 rounded-md w-[250px] text-center">
                <h2 class="text-white text-[30px]">${item.title}</h2>
                <p class="text-white text-[18px]">ID:${item.id}</p>
                <a class="text-white text-[18px]" href="">${item.body}</a>
            </div>
            `
            list.appendChild(elItem)
        })
    }
    else {
        arr.forEach(item => {
            let elItem = document.createElement("li")
            elItem.innerHTML = `
            <div class="p-[10px] bg-blue-500 rounded-md w-[250px] text-center">
                <h2 class="text-white text-[30px]">${item.name}</h2>
                <p class="text-white text-[18px]">ID:${item.id}</p>
                <p class="text-white text-[18px]">${item.email}</p>
                <a class="text-white text-[18px]" href="">${item.body}</a>
            </div>
            `
            list.appendChild(elItem)
        })
    }
}
function renderfetch(API, lists, isDataValue) {
    fetch(API, {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        }
    }).then(res => res.json()).then(data => {
        rendernavbar(data, lists, isDataValue)
    })
}


renderfetch("https://jsonplaceholder.typicode.com/users", elList, "users")
renderfetch("https://jsonplaceholder.typicode.com/posts", elPostsList, "posts")
renderfetch("https://jsonplaceholder.typicode.com/comments", elCommentsList, "comments")

