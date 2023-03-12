let products = {
    data : [
        {
            productName: "Regular white T-shirt",
            category: "Topwear",
            price: "30",
            image: "img/white-tshirt.jpg",
        },
        {
            productName: "Beige Short Skirt",
            category: "Bottomwear",
            price: "49",
            image: "img/short-skirt.jpg",
        },
        {
            productName: "Sporty SmartWatch",
            category: "Watch",
            price: "99",
            image: "img/sporty-smartwatch.jpg",
        },
        {
            productName: "Basic Knitted Top",
            category: "Topwear",
            price: "29",
            image: "img/knitted-top.jpg",
        },
        {
            productName: "Black Leather Jacket",
            category: "Jacket",
            price: "129",
            image: "img/black-leather-jacket.jpg",
        },
        {
            productName: "Stylish Trousers",
            category: "Bottomwear",
            price: "89",
            image: "img/trousers.jpg",
        },
        {
            productName: "Brown Men's Jacket",
            category: "Jacket",
            price: "189",
            image: "img/brown-jacket.jpg",
        },
        {
            productName: "Comfy Gray Pants",
            category: "Bottomwear",
            price: "49",
            image: "img/comfy-gray-pants.jpg",
        },
    ],
};

// Access object data 
for (let i of products.data) {
    // create card 
    let card = document.createElement("div");

    // card should have category and initially hide
    card.classList.add("card", i.category, "hide");    

    // image div 
    let imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");
    // img tag 
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imageContainer.appendChild(image);
    card.appendChild(imageContainer);

    // container

    let container = document.createElement("div");
    container.classList.add("container");
    // product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);

    // price of products

    let price = document.createElement("h3");
    price.classList.add("product-price");
    price.innerText = "$ " + i.price;
    container.appendChild(price);

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}

// category
function filterProduct(value) {
    // Button class code
    let buttons = document.querySelectorAll(".button-value");
    console.log(buttons);
    buttons.forEach((button) => {
        // check if value equals to innerText
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    // select all cards

    let elements = document.querySelectorAll(".card");
    // loop through all cards

    elements.forEach((element) => {
        // display all card on 'all' button click
        if (value == "all") {
            element.classList.remove("hide");
        } else {
            // check if elements contains category
            if (element.classList.contains(value)) {
                // display element based on category
                element.classList.remove("hide");
            } else {
                // hide other element 
                element.classList.add("hide");
            } 
        }
    });
}


 // search button click 
 document.getElementById("search").addEventListener
 ("click", () => {
     // Initializations
     let searchInput = document.getElementById("search-input").value;

     let elements = document.querySelectorAll(".product-name");

     let cards = document.querySelectorAll(".card");

    elements.forEach((element, index) => {
        if (element.innerText.includes(searchInput.toUpperCase())) {
            // display matching 
            cards[index].classList.remove("hide");
        } else {
            cards[index].classList.add("hide");
        }
     });
 });


// initially display all products
window.onload = () => {
    filterProduct("all");
};