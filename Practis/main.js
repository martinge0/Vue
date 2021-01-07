Vue.component("product", {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `
  <div class="product">
  <div class="product-image">
    <img :src="image" alt="" />
  </div>
  <div class="product-info">
    <h1>{{product}}</h1>
    <p v-if="inStock > 10">In Stock</p>
    <p v-else-if="inStock <= 10 && inStock > 1">All most sold!</p>
    <p v-else :class="{outOfStock: inStock < 1}">Out of Srock</p>
    <p>Shipping is {{shipping}}</p>
    <li v-for="detail in details">{{detail}}</li>
    <div v-for="(variant, index) in variants"
    :key="variants.key"
    class="color-box"
    :style="{backgroundColor: variant.color}"
    v-on:mouseover="updateProduct(index)">
    </div>
    <button v-on:click="addToCart" :disabled="inStock < 1" :class="{disabledButton: inStock < 1}">Add to Cart</button>
  </div>
</div>
  `,
  data() {
    return {
      product: "Socs",
      description: "Gender neutral",
      selectedVariant: 0,
      details: ["80% coton", "20% poliester", "Gender-neutral"],
      variants: [
        {
          key: 1234,
          color: "green",
          image: "./assets/vmSocks-green-onWhite.jpg",
          quantity: 10,
        },
        {
          key: 1235,
          color: "blue",
          image: "./assets/vmSocks-blue-onWhite.jpg",
          quantity: 0,
        },
      ],
    };
  },
  methods: {
    addToCart: function () {
      this.$emit("add-to-cart", this.variants[this.selectedVariant].key)
    },
    updateProduct: function (index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
    shipping(){
      if(this.premium){
        return "Free"
      }
      return 2.99
    },
  },
});


var app = new Vue({
  el: "#app",
  data:{
    premium: true,
    cart: [ ],
  },
  methods: {
    updateCart: function(id){
      this.cart.push(id)
    }
  }
});
