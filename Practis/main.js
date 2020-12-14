Vue.component("product", {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },

  template: `
  <div class="product">
  <div class="product-image">
    <img v-bind:src="image" />
  </div>
  <div class="product-info">
    <h1>{{ product }}</h1>
    <!-- <a :href="url">More products like this</a> -->
    <p v-if="inStock">In Stock</p>
    <p v-else :class="{outOfStock: !inStock}">Out of Stock</p>
    <span v-if="onSale">On Sale!</span>
    <p>{{shipping}}</p>
    <ul>
      <li v-for="detail in details">{{detail}}</li>
    </ul>

    <div
      v-for="variant in variants"
      :key="variant.variantId"
      class="color-box"
      :style="{backgroundColor: variant.variantColor}"
      v-on:mouseover="updateProduct(variant.variantImage)">
    </div>
    <button v-on:click="addToCart" :disabled="!inStock" :class="{disabledButton: !inStock}">Add to Cart</button>
    <div class="cart">
      <p>Cart({{cart}})</p>
    </div>
  </div>
</div>
    `,
  data() {
    return {
      style: { color: "blue", fontSize: "13px" },
      style2: { margin: "5px", padding: "20px" },
      product: "Socs",
      brand: "Vue Mastery",
      image: "./assets/vmSocks-green-onWhite.jpg",
      inStock: true,
      onSale: true,
      details: ["80 % Coton", "20% Poliester", "Gender neutral"],
      variants: [
        {
          variantId: 234,
          variantColor: "green",
          variantImage: "./assets/vmSocks-green-onWhite.jpg",
        },
        {
          variantId: 235,
          variantColor: "blue",
          variantImage: "./assets/vmSocks-blue-onWhite.jpg",
        },
      ],
      cart: 0,

    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateProduct(variantImage) {
      this.image = variantImage;
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    shipping() {
      if (this.premium){
        return "Free"
      }
      return 2.99
    },
  },
});

var app = new Vue({
  el: "#app",
  data: {
    premium: false,
  },
});
