<template>
    <div class="list"> 
        <div class="list__header"> 
            <h1 class="list__name">Список</h1>
            <input class="list__search" id="search" type="text" placeholder="Поиск" v-model="searchQuery">
        </div> 
        <div class="list__items">
            <div class="list__item" v-for="product, index in filteredProducts" v-bind:key="product">
                <router-link class="list__item_link" :to="'/product/' + index">
                        <img class="list__item_img" :src="product.photo" :alt=product.name>
                        <p class="list__item_name">{{ product.name }}</p>
                        <p class="list__item_price">{{ product.price }}</p>
                </router-link>
                <button class="list__item_button" @click="addProductInCart(index)">Купить</button>
            </div>
        </div>
    </div>
</template>

<script  lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { useStore, mapState, mapActions } from 'vuex'

export default defineComponent({
    name: 'ProductList',
    setup() {
        const store = useStore()
        let productsInCart = computed(() => store.state.productsInCart)
        let products = computed(() => store.state.products)
        let selectedProduct = computed(() => store.state.selectedProduct)
        return {
            products,
            productsInCart,
            selectedProduct,
            store,
            searchQuery: ref(""),
        }
    },
    computed: {
        ...mapState(['products', 'productsInCart']),
        filteredProducts(): Array<any> {
            if (this.searchQuery.length == 0) return this.products
            else return this.products.filter((product: any) => product.name.toLowerCase().includes(this.searchQuery.toLowerCase()))
        }
    },
    methods: {
        ...mapActions(['setProductsInCart']),
        ...mapActions(['setSelectedProduct']),
        addProductInCart(index: number) {
            if (!this.productsInCart.includes(this.products[index])) this.productsInCart.push(this.products[index])
            this.setProductsInCart(this.productsInCart)
        },
        setSelectedProduct(index: number) {
            this.setSelectedProduct(this.products[index])
        },
    },
})


</script>

<style>

.list {
    padding: 0 140px;
}

.list__header {
    display: flex;
    font-size: 24px;
    margin-top: 36px;
}

.list__name {
    margin: 0;
    padding: 0;
    font-size: 36px;
}

.list__search {
    width: 210px;
    height: 40px;
    border: 0;
    border-radius: 8px;
    background-color: #2C2947;
    font-size: 20px;
    margin-left: auto;
    color: #fff;
    padding: 0 10px;
}

.list__items {
    margin: 36px 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
}

.list__item {
    background-color: #2C2947;
    border-radius: 20px;
    padding: 21px 18px;
    box-sizing: border-box;
}

.list__item_link {
    text-decoration: none;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.list__item_img {
    height: 140px;
    border-radius: 8px;
    display: flex;
}

.list__item_name, .list__item_price {
    margin: 0;
    padding: 0;
    text-decoration: none;
    font-size: 20px;
    text-align: center;
}

.list__item_name {
    margin-top: 19px;
}

.list__item_price {
    margin-top: 8px;
}

.list__item_price::after {
    content: ' p';
}

.list__item_button {
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

.list__item_button:hover {
    background-color: #9683F1;
}

</style>
