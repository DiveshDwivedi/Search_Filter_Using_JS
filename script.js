let products = {
    data : [
        {
            productName: "Regular white T-shirt",
            category: "Topwear",
            price: "30",
            image: "white-tshirt.jpg",
        },
        {
            productName: "Beige Short Skirt",
            category: "Bottomwear",
            price: "49",
            image: "short-skirt.jpg",
        },
        {
            productName: "Sporty SmartWatch",
            category: "Watch",
            price: "99",
            image: "sporty-smartwatch.jpg",
        },
        {
            productName: "Basic Knitted Top",
            category: "Topwear",
            price: "29",
            image: "knitted-top.jpg",
        },
        {
            productName: "Black Leather Jacket",
            category: "Jacket",
            price: "129",
            image: "black-leather-jacket.jpg",
        },
        {
            productName: "Stylish Trousers",
            category: "Bottomwear",
            price: "89",
            image: "trousers.jpg",
        },
        {
            productName: "Brown Men's Jacket",
            category: "Jacket",
            price: "189",
            image: "brown-jacket.jpg",
        },
        {
            productName: "Comfy Gray Pants",
            category: "Bottomwear",
            price: "49",
            image: "comfy-gray-pants.jpg",
        },
    ],
};

// Access object data 
for (let i of products.data) {
    // create card 
    let card = document.createElement("div");

    // card should have category
    card.classList.add("card", "i.category");    

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
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}
