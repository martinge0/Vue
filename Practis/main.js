var app = new Vue({
  el: "#app",
  data: {
    product: "Socs",
    image: "./assets/vmSocks-green-onWhite.jpg",
    // url: "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks"
    inStock: true,
    onSale: true,
    details: ["80 % Coton", "20% Poliester", "Gender neutral"],
    variants: [
      {
        variantId:234,
        variantColor:"green"
      },
      {
        variantId:235,
        variantColor:"blue"
      }
    ]
  },
});
