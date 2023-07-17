import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "Monitor Gamer Curvo Samsung Odyssey G6 27",
      description:
        "Monitor Gamer Curvo Samsung Odyssey G6 27 WQHD 240Hz 1MS Tizen HDMI DP USB Bluetooth Freesync Preto.",
      price: 2150,
      image:"../assets/images/products/product1.jpg",
    },
    {
      id: 2,
      title: "Console Xbox Series X",
      description:
        "Console Xbox Series X Microsoft SSD 1TB  + 1 Controle Sem Fio + 1 Jogo grátis - Preto ",
      price: 5320.0,
      image:"../assets/images/products/product2.jpg",
    },
    {
      id: 3,
      title: "Console Playstation 5 - PS5",
      description:
        "Console Playstation 5 825GB SSD + Controle Sony DualSense + 1 jogo grátis - Preto",
      price: 4999.0,
      image:"../assets/images/products/product3.jpg",
    },
    {
      id: 4,
      title: "Notebook Gamer Lenovo Legion 5 R7",
      description:
        "Notebook Gamer Lenovo Legion 5 R7-5800H 16GB 512GB SSD PCIe Dedicada RTX 3050 4GB 15.6 FHD W11 Preto",
      price: 4150.0,
      image:"../assets/images/products/product4.jpg",
    },
    {
      id: 5,
      title: "Notebook Asus 15.6 Core I7",
      description:
        "Notebook Asus 15.6 Core I7 8GB RAM 256GB Full HD X513EA-EJ3010W W11 Preto",
      price: 3458.0,
      image:"../assets/images/products/product5.jpg",
    },
    {
      id: 6,
      title: "Smart TV 65 LG 4K NanoCell",
      description:
        "Smart TV 65 LG 4K NanoCell 65NANO80 2022 Inteligência Artificial AI ThinQ Smart Magic Google Alexa Preto",
      price: 6489.0,
      image:"../assets/images/products/product6.jpg",
    },
    {
      id: 7,
      title: "Smartphone iPhone 14",
      description:
        "Smartphone Apple iPhone 14 256GB 6.1 Estelar",
      price: 9499.0,
      image:"../assets/images/products/product7.jpg",
    },
    {
      id: 8,
      title: "Smartphone Apple iPhone 13 Pro",
      description:
        "Smartphone Apple iPhone 13 Pro 5G 1TB 6.1 Prateado",
      price: 6350.0,
      image:"../assets/images/products/product8.jpg",
    },
    {
      id: 9,
      title: "Smartphone Motorola XT2321-1 RAZR",
      description:
        "Smartphone Motorola XT2321-1 RAZR 40 Ultra 5G 256GB Magenta",
      price: 5799.0,
      image:"../assets/images/products/product9.jpg",
    },
    {
      id: 10,
      title: "Smartphone Samsung Galaxy S23",
      description:
        "Smartphone Samsung Galaxy S23 5G 128GB 6.1 Preto e Snapdragon",
      price: 5399.0,
      image:"../assets/images/products/product10.jpg",
    },
    {
      id: 11,
      title: "Tablet Samsung Galaxy A7 Lite",
      description:
        "Tablet Samsung Galaxy A7 Lite 32GB 8.7 Processador Octa-Core 2.3GHz Grafite",
      price: 799.0,
      image:"../assets/images/products/product11.jpg",
    },
    {
      id: 12,
      title: "Impressora HP Laser",
      description:
        "Impressora HP Laser 107W Monocromática USB Wireless Branca",
      price: 1000.0,
      image:"../assets/images/products/product12.jpg",
    },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
    
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
