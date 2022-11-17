//THINGS TO DO & ASK UTKU
//HOVER TO SEE QUICK VIEW USING JAVA

//List of Products

let products_cards_array = [
    {
        picture: './images/products/maracuja-body-soap-bar.png',
        product_name: 'Ekos Maracuja Soap Bar',
        favourite_icon: './images/favourite.svg',
        category: 'Body',
        brand: 'Natura',
        description:'Vegan mini bar soap set to gently cleanse, exfoliate and moisturize skin, enriched with Maracujá oil from Brazilian biodiversity ',
        price: '$20',
        id: 'b1'
    },

    {
        picture: './images/products/ekos-maracuja-shower-gel.png',
        product_name: 'Ekos Maracuja Shower Gel',
        favourite_icon: './images/favourite.svg',
        category: 'Body',
        brand: 'Natura',
        description:'This calming shower gel leaves a soothing and fruity scent on the skin while gently cleansing skin',
        price: '$17',
        id: 'b2'
    },

    {
        picture: './images/products/acai-body-lotion.png',
        product_name: 'Ekos Acai Body Lotion',
        favourite_icon: './images/favourite.svg',
        category: 'Body',
        brand: 'Natura',
        description:'A body-smoothing indulgence blended with energizing açaí oil for 24 hours of deliciously soft, refreshed skin.',
        price: '$27',
        id: 'b3'
    },

    {
        picture: './images/products/buriti-body-lotion.png',
        product_name: 'Ekos Buriti Body Lotion',
        favourite_icon: './images/favourite.svg',
        category: 'Body',
        brand: 'Natura',
        description:'The after-sun body lotion protects and recovers the skin, preventing skin dryness and flaking and leaving your skin resistant to sun damage.',
        price: '$27',
        id: 'b4'
    },

    {
        picture: './images/products/chronos-face-cream-45.png',
        product_name: 'Chronos Face Cream 45+',
        favourite_icon: './images/favourite.svg',
        category: 'Face',
        brand: 'Natura',
        description:'This anti-signs face cream charged with Brazilian Jatobá Extract and amino acids, deeply moisturizes and firms skin.',
        price: '$45',
        id: 'f1'
    },

    {
        picture: './images/products/castanha-fragance.png',
        product_name: 'Castanha Frescour Eau de Toilette',
        favourite_icon: './images/favourite.svg',
        category: 'Fragance',
        brand: 'Natura',
        description:'A light fragrance with sweet almond notes of Castanha combined with a fresh touch of citric notes.',
        price: '$50',
        id: 'fr1'
    },

    {
        picture: './images/products/glow-lab-thick-shampoo.png',
        product_name: 'Thick & Full Shampoo',
        favourite_icon: './images/favourite.svg',
        category: 'Hair',
        brand: 'Glow Lab',
        description:'A naturally reviving formula for thicker fuller hair. Clinically proven Rice Tein NPNF™ increases volume and bounce.',
        price: '$12',
        id: 'h1'
    },

    {
        picture: './images/products/glow-lab-purple-shampoo.png',
        product_name: 'Purple Shampoo',
        favourite_icon: './images/favourite.svg',
        category: 'Hair',
        brand: 'Glow Lab',
        description:'A restoring formula that neutralises yellow or brassy tones to enhance the vibrancy and colour longevity of blonde, lightened or highlighted hair. ',
        price: '$12',
        id: 'h2'
    },

    {
        picture: './images/products/glow-lab-bright-exfoliator.png',
        product_name: 'Brightening Exfoliator',
        favourite_icon: './images/favourite.svg',
        category: 'Hair',
        brand: 'Glow Lab',
        description:'A restoring formula that neutralises yellow or brassy tones to enhance the vibrancy and colour longevity of blonde, lightened or highlighted hair. ',
        price: '$15',
        id: 'f2'
    },

    {
        picture: './images/products/essano-body-luxe-restoring.png',
        product_name: 'Body Luxe Restoring Set',
        favourite_icon: './images/favourite.svg',
        category: 'Body',
        brand: 'Essano',
        description:'For the love of good skin, grab this Body Luxe restoring giftset to nourish, repair and treat your body.',
        price: '$30',
        id: 'b4'
    },

    {
        picture: './images/products/essano-facial-elixir.png',
        product_name: 'Visible Repair Facial Elixir',
        favourite_icon: './images/favourite.svg',
        category: 'Face',
        brand: 'Essano',
        description:'essano™ Visible Repair Facial Elixir contains powerful, natural ingredients to reduce visible signs of ageing and leaves skin with a luminous glow.',
        price: '$35',
        id: 'f3'
    },

    {
        picture: './images/products/ethique-lipstick.png',
        product_name: 'Poppy™ Satin Matte Lipstick',
        favourite_icon: './images/favourite.svg',
        category: 'Make Up',
        brand: 'Ethique',
        description:'Like our lip balms, our luxurious lipsticks feature organic and fairly traded moringa oil, which is packed with antioxidants and vitamins to nourish lips.',
        price: '$30',
        id: 'm1'
    },
 
]

//create card
let cards_section = document.getElementsByClassName('cards-section')[0];

function create_products_cards(productsObj){
    //new card
    let new_card = document.createElement('div');
    new_card.id = productsObj.id;
    new_card.classList.add('product-card-wrapper');
    new_card.classList.add('cards-view');
    cards_section.appendChild(new_card);

    //img div
    let img_card_wrapper = document.createElement('div');
    img_card_wrapper.classList.add('img-card-wrapper');
    new_card.appendChild(img_card_wrapper);

    //quick view btn
    let quick_view_btn = document.createElement('span');
    quick_view_btn.classList.add('quick-view-btn');
    // quick_view_btn.classList.add('no-display');
    quick_view_btn.innerHTML = 'Quick View';
    img_card_wrapper.appendChild(quick_view_btn);

    //img 
    let product_img = document.createElement('img');
    product_img.classList.add('product-img');
    product_img.src = productsObj.picture;
    img_card_wrapper.appendChild(product_img);

    //div product description
    let product_description_div = document.createElement('div');
    product_description_div.classList.add('product-description');
    new_card.appendChild(product_description_div)

    //product title and heart icon div
    let card_title_div = document.createElement('div');
    card_title_div.classList.add('card');
    product_description_div.appendChild(card_title_div)

    //h3 card title
    let h3_card_title = document.createElement('h3');
    h3_card_title.classList.add('card-title-h3');
    h3_card_title.innerHTML = productsObj.product_name;
    card_title_div.appendChild(h3_card_title);

    //favourite icon
    let favourite_icon_img = document.createElement('img');
    favourite_icon_img.src = productsObj.favourite_icon;
    card_title_div.appendChild(favourite_icon_img);

    // let favourite_icon_img = document.createElement('i');
    // favourite_icon_img.src = productsObj.favourite_icon;
    // card_title_div.appendChild(favourite_icon_img);

    //product category
    let product_category = document.createElement('p');
    product_category.classList.add('product-category');
    product_category.innerHTML = productsObj.category;
    product_description_div.appendChild(product_category);

    let product_brand = document.createElement('p');
    product_brand.classList.add('product-brand');
    product_brand.innerHTML = productsObj.brand;
    product_description_div.appendChild(product_brand);


    //product description
    let product_description = document.createElement('p');
    product_description.classList.add('description-detail');
    product_description.innerHTML = productsObj.description;
    product_description_div.appendChild(product_description);

    //price and add to cart btn div
    let card_price_div = document.createElement('div');
    card_price_div.classList.add('card-price-btn');
    product_description_div.appendChild(card_price_div)

    //product price
    let product_price = document.createElement('p');
    product_price.classList.add('card-price');
    product_price.innerHTML = productsObj.price;
    card_price_div.appendChild(product_price);

    //add to bag btn
    let add_to_cart_btn = document.createElement('span');
    add_to_cart_btn.classList.add('add-product-btn');
    add_to_cart_btn.innerHTML = 'ADD TO BAG'
    card_price_div.appendChild(add_to_cart_btn);
}

for (let i = 0; i < products_cards_array.length; i++)
create_products_cards(products_cards_array[i]);

// VIEWS
let cards_view_btn = document.getElementById('cards-view');
let list_view_btn = document.getElementById('list-view');

let card = document.getElementsByClassName('product-card-wrapper');

cards_view_btn.onclick = function(){
    for(i = 0; i <= card.length; i++){
        card[i].classList.remove('list-view');
        card[i].classList.add('cards-view');
    }
}

list_view_btn.onclick = function(){
    for(i = 0; i <= card.length; i++){
        card[i].classList.remove('cards-view');
        card[i].classList.add('list-view');
    }
}

//Filter radio buttons
document.getElementById('face').oninput = filter_function;
document.getElementById('body').oninput = filter_function;
document.getElementById('hair').oninput = filter_function;
document.getElementById('make-up').oninput = filter_function;
document.getElementById('fragance').oninput = filter_function;
document.getElementById('all-btn').oninput = filter_function;

function filter_function(){
    console.log(this.value);
    let selection_filter = this.value;

    let filtered_products = products_cards_array.filter(
        function(productsObj){
            // console.log(productsObj);
            return productsObj.category.includes(selection_filter);
        }
    );
    console.log(filtered_products);

    
    let product_cards = document.getElementsByClassName('product-card-wrapper');

    for(let product_card of product_cards){
        if(filtered_products.some(
            function(productsObj){
                return productsObj.id == product_card.id
            }
        ))
        product_card.classList.remove('no-display');

        else
            product_card.classList.add('no-display');
    }


    
}

//Clear all filters 
// let clear_all_btn = document.getElementById('clear-all');

// clear_all_btn.onclick = clear_all_function;

// function clear_all_function(){
//     console.log(this.value);
//     let selection_filter = '';

//     let filtered_products = products_cards_array.filter(
//         function(productsObj){
//             // console.log(productsObj);
//             return productsObj.category.includes(selection_filter);
//         }
//     );
//     console.log(filtered_products);

    
//     let product_cards = document.getElementsByClassName('product-card-wrapper');

//     for(let product_card of product_cards){
//         if(filtered_products.some(
//             function(productsObj){
//                 return productsObj.id == product_card.id
//             }
//         ))
//         product_card.classList.remove('no-display');

//         else
//             product_card.classList.add('no-display');
//     }
// }

//modal
//declare info to populate
let modal = document.getElementById('modal');
let modal_bg = document.getElementById('modal-bg');
let modal_popping_card_index;
let quick_view_btn = document.getElementsByClassName('quick-view-btn');

//iterate through the array
for(i = 0; i < quick_view_btn.length; i++)
    quick_view_btn[i].onclick = modal_toggle_on;

//function modal
function modal_toggle_on(){
    modal_toggle();
    let replica_array = Array.from(quick_view_btn);
        let found_index = replica_array.indexOf(this);
    modal_popping_card_index = found_index;

    //populate divs
    document.getElementById('modal-image').src = products_cards_array[found_index].picture;
    document.getElementById('modal-name').innerHTML = products_cards_array[found_index].product_name;
    document.getElementById('modal-brand').innerHTML = products_cards_array[found_index].brand;
    document.getElementById('modal-price').innerHTML = products_cards_array[found_index].price;
    document.getElementById('modal-desc').innerHTML = products_cards_array[found_index].description;
}

function modal_toggle(){
    modal.classList.toggle('no-display');
    modal_bg.classList.toggle('no-display');
} 

document.getElementById('modal-close-btn').onclick = modal_toggle;
modal_bg.onclick = modal_toggle;

//Search need to work on it 
// let search_btn = document.getElementById('search-btn');

// search_btn.onclick = search_function;

// function search_function(productsObj){
//     let input = document.getElementById('search-input').value.toLowerCase();
//     console.log(input);
    
//     let filtered_products_input = 
//     products_cards_array.filter(productsObj => productsObj.product_name.toLowerCase().includes(input));
//     console.log(filtered_products_input);

//     let product_cards = document.getElementsByClassName('product-card-wrapper');
    
//     for(let product_card of product_cards){
//         if(filtered_products_input.some(
//             function(productsObj){
//                 return productsObj.id == product_card.id
//             }
//         ))

//         product_card.classList.remove('no-display');

//         else
//             product_card.classList.add('no-display');
//     }
   
// };


//all value search
let search_btn = document.getElementById('search-btn');

search_btn.onclick = search_function;

function search_function(productsObj){
    let input = document.getElementById('search-input').value.toLowerCase();
    console.log(input);
    
    let filtered_products_input = 
    products_cards_array.filter(productsObj => productsObj.product_name.toLowerCase().includes(input));
    console.log(filtered_products_input);

    let product_cards = document.getElementsByClassName('product-card-wrapper');
    
    for(let product_card of product_cards){
        if(filtered_products_input.some(
            function(productsObj){
                return productsObj.id == product_card.id
            }
        ))

        product_card.classList.remove('no-display');

        else
            product_card.classList.add('no-display');
    }
   
};

