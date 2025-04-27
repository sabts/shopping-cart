const filtersElement = document.getElementById("filters");
const galleryElement = document.getElementById("gallery");
const cartElement = document.getElementById('cart')

const PRODUCTS = [
    {
      id: '362eb9c8-7d07-476a-891c-7ff627e77070',
      name: 'Waffle',
      title: 'Waffle with Berries',
      price: 6.5,
      imgMobile: './assets/images/image-waffle-mobile.jpg',
      imgTablet: './assets/images/image-waffle-tablet.jpg',
      imgDesktop: './assets/images/image-waffle-desktop.jpg',
      imgThumbnail: './assets/images/image-waffle-thumbnail.jpg',
      alt: 'A waffle tower with sliced strawberries and icing sugar.'
    },
    {
      id: 'af2b4eb6-e180-4e7e-a2c7-221662c7e47b',
      name: 'Crème Brûlée',
      title: 'Vanilla Bean Crème Brûlée',
      price: 7.0,
      imgMobile: './assets/images/image-creme-brulee-mobile.jpg',
      imgTablet: './assets/images/image-creme-brulee-tablet.jpg',
      imgDesktop: './assets/images/image-creme-brulee-desktop.jpg',
      imgThumbnail: './assets/images/image-creme-brulee-thumbnail.jpg',
      alt: 'Two dishes of crème brûlée topped with berries, figs and mint.'
    },
    {
      id: 'a8255a6b-87de-4947-a6ec-64169afecd49',
      name: 'Macaron',
      title: 'Macaron Mix of Five',
      price: 8.0,
      imgMobile: './assets/images/image-macaron-mobile.jpg',
      imgTablet: './assets/images/image-macaron-tablet.jpg',
      imgDesktop: './assets/images/image-macaron-desktop.jpg',
      imgThumbnail: './assets/images/image-macaron-thumbnail.jpg',
      alt: 'Five different flavour macarons.'
    },
    {
      id: '14701468-4f6d-49ed-9480-61be223028ac',
      name: 'Tiramisu',
      title: 'Classic Tiramisu',
      price: 5.5,
      imgMobile: './assets/images/image-tiramisu-mobile.jpg',
      imgTablet: './assets/images/image-tiramisu-tablet.jpg',
      imgDesktop: './assets/images/image-tiramisu-desktop.jpg',
      imgThumbnail: './assets/images/image-tiramisu-thumbnail.jpg',
      alt: 'A tiramisu topped with berries, mint and cocoa powder.'
    },
    {
      id: '67897043-ff0e-4273-81e9-fec5059dd42b',
      name: 'Baklava',
      title: 'Pistachio Baklava',
      price: 4.0,
      imgMobile: './assets/images/image-baklava-mobile.jpg',
      imgTablet: './assets/images/image-baklava-tablet.jpg',
      imgDesktop: './assets/images/image-baklava-desktop.jpg',
      imgThumbnail: './assets/images/image-baklava-thumbnail.jpg',
      alt: 'Three triangle-shaped baklavas topped with crushed pistachios.'
    },
    {
      id: 'e44fa461-4bbc-4cd6-974f-682e31eb692c',
      name: 'Pie',
      title: 'Lemon Meringue Pie',
      price: 5.0,
      imgMobile: './assets/images/image-meringue-mobile.jpg',
      imgTablet: './assets/images/image-meringue-tablet.jpg',
      imgDesktop: './assets/images/image-meringue-desktop.jpg',
      imgThumbnail: './assets/images/image-meringue-thumbnail.jpg',
      alt: 'A slice of lemon pie coronated with meringue.'
    },
    {
      id: '8ce98d56-f960-4804-ae34-6218fa3bf312',
      name: 'Cake',
      title: 'Red Velvet Cake',
      price: 4.5,
      imgMobile: './assets/images/image-cake-mobile.jpg',
      imgTablet: './assets/images/image-cake-tablet.jpg',
      imgDesktop: './assets/images/image-cake-desktop.jpg',
      imgThumbnail: './assets/images/image-cake-thumbnail.jpg',
      alt: 'Red velvet cake portion with sliced strawberries on the inside and a berry on top.'
    },
    {
      id: '824f63cd-633e-42b6-b43a-3558966d6376',
      name: 'Brownie',
      title: 'Salted Caramel Brownie',
      price: 5.5,
      imgMobile: './assets/images/image-brownie-mobile.jpg',
      imgTablet: './assets/images/image-brownie-tablet.jpg',
      imgDesktop: './assets/images/image-brownie-desktop.jpg',
      imgThumbnail: './assets/images/image-brownie-thumbnail.jpg',
      alt: 'A portion of brownie with vanilla ice cream and caramel syrup.'
    },
    {
      id: '17cbeca7-4958-4b48-81d5-1820c2d42c6d',
      name: 'Cotta',
      title: 'Vanilla Panna Cotta',
      price: 6.5,
      imgMobile: './assets/images/image-panna-cotta-mobile.jpg',
      imgTablet: './assets/images/image-panna-cotta-tablet.jpg',
      imgDesktop: './assets/images/image-panna-cotta-desktop.jpg',
      imgThumbnail: './assets/images/image-panna-cotta-thumbnail.jpg',
      alt: 'Two crystal jars of panna cotta with cream.'
    }
  ];

  let shoppingCart = [];

  let quantity = 1;


const confirmProductinCart = (product) => {
  const productExists = shoppingCart.find(itemInCart => itemInCart.id === product.id);
  return productExists;
};

const addProduct = (event, product) => {
  const buttonclicked = event.target;

  const productCard = buttonclicked.parentElement.parentElement;
  const buttonsDiv = productCard.children[1];
  const addButton = buttonsDiv.children[0];
  const plusMinusDiv = buttonsDiv.children[1];
  //const minusButton = plusMinusDiv.children[0];
  const countSpan = plusMinusDiv.children[1]; 
  const pictureDiv = productCard.children[0];
  
  if (buttonclicked=== addButton || buttonclicked === addButton.children[0]) {
    addButton.classList.add('hide');
    plusMinusDiv.classList.remove('hide');
    pictureDiv.classList.add('product-picture-selected');
    shoppingCart.push({ ...product, quantity: 1 });
  }
  createCart(shoppingCart) 
};

const addamountOfProduct = (event, product) => {
  const buttonclicked = event.target;

  const productCard = buttonclicked.parentElement.parentElement; 
  const countSpan = productCard.children[1];
  //console.log(plusButton)
 // console.log(countSpan)

  const existingProduct = confirmProductinCart(product);
    
  if (existingProduct) {
    existingProduct.quantity += 1;
    countSpan.textContent = existingProduct.quantity;
  }
  //console.log('add amount button');
  //console.log(shoppingCart);
  createCart(shoppingCart)
};


const subtractamountOfProduct = (event, product) => {
  const buttonclicked = event.target;
  
  const plusButtonOrImg = buttonclicked;
  const plusMinusDiv = plusButtonOrImg.parentElement;
  const buttonsDiv = plusMinusDiv.parentElement;    
  const productCard = buttonsDiv.parentElement;     

  const addButton = buttonsDiv.children[0];         
  const countSpan = plusMinusDiv.children[1];      
  const pictureDiv = productCard.children[0]; 

  const existingProduct = confirmProductinCart(product);

  if (existingProduct) {
    existingProduct.quantity -= 1;

    if (existingProduct.quantity === 0) {
      addButton.classList.remove('hide');
      plusMinusDiv.classList.add('hide');
      pictureDiv.classList.remove('product-picture-selected');
      shoppingCart = shoppingCart.filter(item => item.id !== product.id);
    } else {
      countSpan.textContent = existingProduct.quantity;
    }
  }
  createCart(shoppingCart)
};

const createProduct = (products) => {
  galleryElement.textContent = "";
  const fragment = document.createDocumentFragment(); //hijo 0

    products.forEach(product => {

        //product card: hijo 0
        const productArticle = document.createElement('article');
        productArticle.classList.add('product-card');
        productArticle.id = product.id;

        //Imagen del producto 
        //div del producto hijo 0 de product card (hijo 0)
        const pictureDiv = document.createElement('div');
        pictureDiv.classList.add('product-picture')

        //imagenes del producto
        const pictureElement = document.createElement('picture');
        const sourceDesktop = document.createElement('source');
        const sourceTablet = document.createElement('source');
        const sourceMobile = document.createElement('source');
        sourceDesktop.media = "(min-width: 1040px)";
        sourceDesktop.srcset = product.imgDesktop

        sourceTablet.media = "(min-width: 768px)";
        sourceTablet.srcset = product.imgTablet;

        sourceMobile.media = "(min-width: 360px)"
        sourceMobile.srcset = product.imgMobile;

        const imgElement = document.createElement('img');
        imgElement.src = product.imgMobile;
        imgElement.alt = product.alt

        //Agrego todas al div
        pictureElement.append(sourceDesktop, sourceTablet, sourceMobile, imgElement);
        pictureDiv.append(pictureElement);

        //Botones del producto hijo 1 de product card (hijo 0)
        const buttonDiv = document.createElement('div');
        buttonDiv.classList.add("product-buttons");

        //boton 1 (add to cart)
        const addToCartButton = document.createElement('button');
        addToCartButton.classList.add("button", "button-primary", "cart-action")
        const cartIcon = document.createElement('img');
        cartIcon.src = "./assets/images/icon-add-to-cart.svg";
        addToCartButton.textContent = 'Add to Cart';

        addToCartButton.addEventListener('click', (event) => {
          addProduct(event, product);
        });
        
        addToCartButton.prepend(cartIcon)

        //boton 2 (agregar o quitar productos)
        const buttonPlusandMinusDiv = document.createElement('div');
        buttonPlusandMinusDiv.classList.add('button', 'button-secondary', 'cart-action', 'hide')

        const buttonMinus = document.createElement('button');
        const minusIcon = document.createElement('img');
        buttonMinus.classList.add('cartbutton-icon');
        minusIcon.src= "./assets/images/icon-decrement-quantity.svg"
        buttonMinus.append(minusIcon)

        const buttonNumberValue = document.createElement('span');
        buttonNumberValue.textContent = 1;

        const plusButton = document.createElement('button');
        const plusIcon = document.createElement('img');
        plusButton.classList.add('cartbutton-icon');
        plusIcon.src = "./assets/images/icon-increment-quantity.svg";
        plusButton.append(plusIcon)

        buttonPlusandMinusDiv.append(buttonMinus, buttonNumberValue, plusButton)
        buttonDiv.append(addToCartButton,buttonPlusandMinusDiv);

        const productExists = confirmProductinCart(product)

        if (productExists) {
          addToCartButton.classList.add('hide');
          buttonPlusandMinusDiv.classList.remove('hide');
          pictureDiv.classList.add('product-picture-selected');
          buttonNumberValue.textContent = productExists.quantity;
        } else {
          addToCartButton.classList.remove('hide');
          buttonPlusandMinusDiv.classList.add('hide');
          pictureDiv.classList.remove('product-picture-selected');
        }

        plusButton.addEventListener('click', (event) => {
          addamountOfProduct(event, product);
        });
       buttonMinus.addEventListener('click', (event) => {
        subtractamountOfProduct(event, product);
        });
        
        //text content del producto hijo 2 de product card
        const productTextContenDiv = document.createElement('div');
        productTextContenDiv.classList.add('product-content');

        const productName = document.createElement('span');
        productName.classList.add('product-name');
        productName.textContent = product.name;

        const productTitle = document.createElement('span');
        productTitle.classList.add('product-title');
        productTitle.textContent = product.title;

        const productPrice = document.createElement('span');
        productPrice.classList.add('product-price');
        productPrice.textContent = `$${product.price}`

        //lo guardamos el contenido en el div
        productTextContenDiv.append(productName, productTitle, productPrice)

    //guardamos todo

    productArticle.append(pictureDiv, buttonDiv, productTextContenDiv);
    galleryElement.append(productArticle);
    })
    galleryElement.append(fragment);
}

const filterProducts = (event) => {
  const filterSelected = event.target.dataset.filter;
  console.log(filterSelected);

  const sortByName = [...PRODUCTS];
  const sortByPrice = [...PRODUCTS];

  if(filterSelected === 'name'){
    filtersElement.children[1].classList.add('filter-active')
    filtersElement.children[0].classList.remove('filter-active')
    filtersElement.children[2].classList.remove('filter-active')
    sortByName.sort((a, b) => a.name.localeCompare(b.name));
    createProduct(sortByName);
    console.log(sortByName)
  } else if (filterSelected === 'price'){
    filtersElement.children[2].classList.add('filter-active')
    filtersElement.children[0].classList.remove('filter-active')
    filtersElement.children[1].classList.remove('filter-active')
    sortByPrice.sort((a, b) => a.price - b.price);
    createProduct(sortByPrice)
    console.log(sortByPrice)
  }else {
    filtersElement.children[0].classList.add('filter-active')
    filtersElement.children[1].classList.remove('filter-active')
    filtersElement.children[2].classList.remove('filter-active')
    createProduct(PRODUCTS);
    console.log(PRODUCTS)
  }
}

const createCart = (cartItems) => {
  cartElement.textContent = "";

  //hijo 0 de cart element
  const container = document.createElement("section");
  container.classList.add("shopping-cart-container");
  container.id = "cart";

  //hijo 0 de container
  const productsInDiv = document.createElement("div");
  const title = document.createElement("h2");
  title.textContent = `Your Cart (${cartItems.length})`;
  productsInDiv.append(title);

  //hijo 1 de container
  const cartContent = document.createElement("div");
  cartContent.classList.add("cart-content");

  //hijo 0 de cart content
  let emptyDiv = document.createElement("div");
  emptyDiv.classList.add("emtycart");
  
  if (cartItems.length === 0) {
    const emptyImg = document.createElement("img");
    emptyImg.src = "./assets/images/illustration-empty-cart.svg";
    const emptyText = document.createElement("p");
    emptyText.textContent = "Your added items will appear here";

    emptyDiv.append(emptyImg, emptyText);
    cartContent.append(emptyDiv);
  } else {
    emptyDiv.classList.add("hide");
  }

    //hijo 1 de cartcontent
    cartItems.forEach(item => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product-in-cart");

      const infoDiv = document.createElement("div");
      infoDiv.classList.add("product-infoCart");

      const nameSpan = document.createElement("span");
      nameSpan.classList.add("productname");
      nameSpan.textContent = item.title;

      const priceDetails = document.createElement("div");

      const quantitySpan = document.createElement("span");
      quantitySpan.classList.add("quantityin");
      quantitySpan.textContent = `${item.quantity}x`;

      const unitPriceSpan = document.createElement("span");
      unitPriceSpan.classList.add("price-by-unit");
      unitPriceSpan.textContent = `@$${item.price.toFixed(2)}`;

      const totalSpan = document.createElement("span");
      totalSpan.classList.add("total-product-price");
      totalSpan.textContent = `$${(item.quantity * item.price).toFixed(2)}`;

      priceDetails.append(quantitySpan, unitPriceSpan, totalSpan);
      infoDiv.append(nameSpan, priceDetails);

      const removeButton = document.createElement("button");
      removeButton.classList.add("icon-remove-item");
      removeButton.dataset.productId = item.id;

      const removeIcon = document.createElement("img");
      removeIcon.src = "./assets/images/icon-remove-item.svg";
      removeButton.append(removeIcon);

      removeButton.addEventListener('click', event => removeProductInCart(event))

      productDiv.append(infoDiv, removeButton);
      cartContent.append(productDiv);
    }); 

  //hijo 2 de cart content
  const checkoutDiv = document.createElement("div");
  checkoutDiv.classList.add("checkout");

  const totalText = document.createElement("span");
  totalText.classList.add("total-text");
  totalText.textContent = "Order Total";

  const totalAmount = cartItems.reduce((sum, p) => sum + p.price * p.quantity, 0);
  const totalPrice = document.createElement("span");
  totalPrice.classList.add("total-price");
  totalPrice.textContent = `$${totalAmount.toFixed(2)}`;

  checkoutDiv.append(totalText, totalPrice);

  const confirmButton = document.createElement("button");
  confirmButton.classList.add("button", "button-confirm");
  confirmButton.textContent = "Confirm Order";

  container.append(productsInDiv, cartContent, checkoutDiv, confirmButton);
  cartElement.append(container);

  emptyCartandProductIn(cartItems.length)
};

const emptyCartandProductIn = () => {
 const container = cartElement.children[0];
  const checkoutDiv = container.children[2];
  const totalText = checkoutDiv.children[0];
  const totalPrice = checkoutDiv.children[1];
  const checkoutButton = container.children[3];
  console.log(checkoutDiv.children)
  
  if (shoppingCart.length !== 0) {
    checkoutDiv.classList.remove("hide");
    checkoutButton.classList.remove("hide");
    totalText.classList.remove("hide");
    totalPrice.classList.remove("hide");
  } else {
    checkoutDiv.classList.add("hide");
    checkoutButton.classList.add("hide");
    totalText.classList.add("hide");
    totalPrice.classList.add("hide");
  }
};

const removeProductInCart = (event) => {
  const productId = event.target.dataset.productId; 
  shoppingCart = shoppingCart.filter(item => item.id !== productId);
  createCart(shoppingCart);
}

createProduct(PRODUCTS);
createCart(shoppingCart);
emptyCartandProductIn()
filtersElement.addEventListener('click', filterProducts);