
var app = new Vue({
  el: "#app",
  data: {
    style: {color:"blue",fontSize:'13px'},
    style2:{margin: "5px", padding: "20px"},
    product: "Socs",
    image: "./assets/vmSocks-green-onWhite.jpg",
    // url: "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks"
    inStock: false,
    onSale: true,
    details: ["80 % Coton", "20% Poliester", "Gender neutral"],
    variants: [
      {
        variantId:234,
        variantColor:"green",
        variantImage: "./assets/vmSocks-green-onWhite.jpg"
      },
      {
        variantId:235,
        variantColor:"blue",
        variantImage: "./assets/vmSocks-blue-onWhite.jpg"
      }
    ],
    cart: 0,
  },
  methods: {
    addToCart: function () {
      this.cart += 1
    },
    updateProduct: function(variantImage){
      this.image = variantImage
    }
  }
});
