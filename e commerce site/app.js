const wrapper = document.querySelector(".sliderwrapper")
const menuitem = document.querySelectorAll(".menuitem")

const products = [
    {
        id: 1,
        title: "Purses",
        price: 34.99
        colors: [
            {
                code: "red",
                image: "./image/purses.png",
            },
            {
                code: "#fbdfdf",
                image: "./image/purses.png",
            },
        ],
    },
    {
        id: 2
        title: "Clutches"
        price: 45.00
        colors: [
            {
                code: "Black"
                image: "./image/clutches.png",
            },
        ],
    },
    {
        id: 3,
        title: "Designer Bags",
        price: 350.00,
    },
{
    id: 4,
    title: "CrossBody Bags",
    price: 78.00
    colors: [
        {
            code: "black",
            image: "./image/cross_body_bags-removebg-preview.png",
        },
        {
            code: "darkblue",
            image: "./image/cross_body_bags-removebg-preview.png"
        },
    ],
},
{
    id: 5,
    title: "Tote bags",
    price: 129.00
    colors: [
        {
            code: "black",
            image: "./image/tote_bags-removebg-preview.png",
        },
        {
            code: "silver",
            image: "./image/tote_bags-removebg-preview.png"
        },
    ],
},
];

 let chosenProduct = products[0]

 const currentProductimg = document.querySelector(".productimage");
 const currentProductTitle = document.querySelector(".producttitles");
 const currentProductPrice = document.querySelector(".productprices");
 const currentProductColors = document.querySelectorAll(".colors");


menuitem.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change the current slide

        wrapper.style.transform = 'translateX(${-100 * index}vw)';
        //change the chosen product

        chosenProduct = products[index]
        //change texts of currentProduct
        currentProductTitle.textContent = chosenProduct.title;
        currentProductPrice.textContent = "£" + chosenProduct.price;
        currentProductimg.src = chosenProduct.colors[0].image;

        //assinging new colors
        currentProductColors.forEach((color, index) => {
            color.style.backroundColor = chosenProduct.colors[index].code;

        });
    
    });
});


currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductimg.src = chosenProduct.colors[index].image;

    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display = "flex";
});

close.addEventListener("click", () => {
    payment.style.display = "none";
});