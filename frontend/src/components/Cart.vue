<template>
    <div class="cart">
        <div class="cart__head">
            <h1 class="cart__header">Корзина</h1>
            <button class="cart__order">Оформить заказ</button>
        </div>
        <div class="cart__body">
            <div class="cart__body_item" v-for="product, index in productsInCart" v-bind:key="product">
                <img  :src="product.photo" :alt=product.name class="cart__body_item_img">
                <p class="cart__body_item_name">{{ product.name }}</p>
                <p class="cart__body_item_price">{{ product.price }}</p>
                <button class="cart__body_item_delete" @click="removeProductInCart(index)">Удалить</button>
            </div>
        </div>
    </div>
</template>

<script  lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { useStore, mapState, mapActions } from 'vuex'

export default defineComponent({
    name: 'CartDetails',
    setup() {
        const store = useStore()
        let productsInCart = computed(() => store.state.productsInCart)
        return {
            productsInCart,
            store
        }
    },
    computed: {
        ...mapState(['products', 'productsInCart'])
    },
    methods: {
        ...mapActions(['setProductsInCart']),
        ...mapActions(['setSelectedProductIndex']),
        removeProductInCart(index: number) {
            this.store.state.productsInCart.splice(index, 1);
        },
    },
})


</script>

<style>

.cart {
    padding: 0 140px;
}

.cart__head {
    display: flex;
    margin-top: 36px;
}

.cart__header {
    margin: 0;
    padding: 0;
    font-size: 36px;
}

.cart__order {
    margin-left: auto;
    color: white;
    background-color: #7A65E0;
    border: 0;
    border-radius: 8px;
    /* width: 170px; */
    padding: 0 17px;
    height: 40px;
    font-size: 16px;
    transition-duration: .2s;
    cursor: pointer;
    font-family: 'Comfortaa';
}

.cart__order:hover {
    background-color: #9683F1;
}

.cart__body {
    margin: 36px 0;
}

.cart__body_item {
    background-color: #2C2947;
    border-radius: 20px;
    display: flex;
    padding: 14px 18px;
}

.cart__body_item + .cart__body_item {
    margin-top: 20px;
}

.cart__body_item_img {
    height: 50px;
    border-radius: 8px;
}

.cart__body_item_name {
    margin-left: 19px;
}

.cart__body_item_price {
    margin-left: auto;
    margin-right: 19px;
}

.cart__body_item_price::after {
    content: ' р';
}

.cart__body_item_delete {
    background-color: #fff;
    border: 0;
    border-radius: 8px;
    transition-duration: .2s;
    width: 100px;
    height: 30px;
    margin-top: auto;
    margin-bottom: auto;
    cursor: pointer;
    font-family: 'Comfortaa';
}

.cart__body_item_delete:hover {
    background-color: #F06C2D;
    color: white;
}

</style>