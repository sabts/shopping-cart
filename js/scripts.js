const filtersElement = document.getElementById("filters");
const galleryElement = document.getElementById("gallery");

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

  const createProduct = () => {
    PRODUCTS.forEach(product => {

        //product card: hijo 0 de gallery Element
        const productArticle = document.createElement('article');
        productArticle.classList.add('product-card');
        productArticle.id = product.id;

        //Imagen del producto 
        //div del producto hijo 0 de product card (hijo 0)
        const pictureDiv = document.createElement('div')

        //imagenes del producto
        const pictureElement = document.createElement('picture');
        const sourceDesktop = document.createElement('source');
        const sourceTablet = document.createElement('source');
        const sourceMobile = document.createElement('source');
        sourceDesktop.src = product.imgDesktop
        sourceTablet.src = product.imgTablet
        sourceMobile.src = product.imgMobile

        //Agrego todas al div
        pictureElement.append(sourceDesktop, sourceTablet, sourceMobile);
        pictureElement.append(pictureDiv);

        //Botones del producto hijo 1 de product card (hijo 0)
        const buttonDiv = document.createElement('div');
        buttonDiv.classList.add("product-buttons");

        //boton 1 (add to cart)
        const addToCartButton = document.createElement('button');
        addToCartButton.classList.add("button", "button-primary", "cart-action")
        const cartIcon = document.createElement('img');
        cartIcon.src = "./assets/images/icon-add-to-cart.svg";
        addToCartButton.textContent = 'Add to Cart';

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
        buttonDiv.append(addToCartButton,buttonPlusandMinusDiv)

        //cuando damos click a los botones eventos (posiblemente borre esto para hacerlo en otra funcion)
        addToCartButton.addEventListener('click', () => {
            addToCartButton.classList.add('hide');
            buttonPlusandMinusDiv.classList.remove('hide');
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
}

createProduct()