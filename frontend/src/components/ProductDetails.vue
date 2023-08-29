<template>
    <div class="product">
        <h1 class="product__header">{{ $route.params.index }}</h1>
        <div class="product__body">
            <!-- <img :src="selectedProduct.photo" :alt="selectedProduct.name" class="product__body_img"> -->
            <div class="product__body_info">
                <!-- <p class="product__body_description">{{ selectedProduct.description }}</p>
                <p class="product__body_price">{{ selectedProduct.price }}</p>
                <button class="product__body_button" @click="addProductInCart(selectedProduct)">Купить</button> -->
            </div>
        </div>
    </div>
</template>

<script  lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { useStore, mapState, mapActions } from 'vuex'

export default defineComponent({
    name: 'ProductDetails',
    // props: ['index']
    setup() {
        const store = useStore()
        let productsInCart = computed(() => store.state.productsInCart)
        let products = computed(() => store.state.products)
        // let selectedProduct = this.$route.params.index
        return {
            products,
            productsInCart,
            // selectedProduct,
            store
        }
    },
    computed: {
        ...mapState(['products', 'productsInCart'])
    },
    methods: {
        ...mapActions(['setProductsInCart']),
        addProductInCart(index: number) {
            this.setProductsInCart(this.productsInCart)
        },
        setSelectedProduct(index: number) {
            this.setSelectedProduct(this.products[index])
        }
    },
})


</script>

<style>

.product {
    margin: 0 140px;
}

.product__header {
    margin: 0;
    padding: 0;
    margin-top: 36px;
    font-size: 36px;
}

.product__body {
    margin: 35px 0;
    display: inline-flex;
}

.product__body_img {
    width: calc(50% - 15px);
}

.product__body_info {
    width: calc(50% - 15px);
    margin-left: 30px;
}

.product__body_description, .product__body_price {
    margin: 0;
    padding: 0;
    font-size: 16px;
}

.product__body_price {
    margin-top: 20px;
    font-size: 20px;
}

.product__body_price::after {
    content: ' р';
}

.product__body_button {
    width: 100%;
    height: 42px;
    color: white;
    background-color: #7A65E0;
    border: 0;
    border-radius: 8px;
    font-size: 20px;
    margin-top: 19px;
    transition-duration: .2s;
    cursor: pointer;
    font-family: 'Comfortaa';
}

.product__body_button:hover {
    background-color: #9683F1;
}

</style>