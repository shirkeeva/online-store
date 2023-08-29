<template>
    <div class="header">
        <router-link class="header__main" to="/">OnlineStore</router-link>
        <router-link class="header__cart" to="/cart">
            <div class="header__cart_img">
                <img src="./img/cart.svg" alt="">
                <div class="header__cart_counter" v-if="productsInCart.length > 0"><span>{{ productsInCart.length }}</span></div>
            </div>
        </router-link>
    </div>
    <router-view/>
</template>

<script lang="ts">

import { computed, defineComponent, ref } from 'vue';
import { useStore, mapState, mapActions } from 'vuex'

export default defineComponent({
    name: 'App',
    setup() {
        const store = useStore()
        let productsInCart = computed(() => store.state.productsInCart)
        return {
            productsInCart,
            store
        }
    },
})

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');

body {
    font-family: 'Comfortaa';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  background-color: #19172A;
  margin: 0;
  padding: 0;
}

.header {
    border-bottom: 2px #292638 solid;
    height: 90px;
    padding: 0 140px;
    display: flex;
    align-items: center;
    justify-content: center; 
    font-size: 24px;
}

.header__main {
    margin-right: auto;
    text-decoration: none;
    color: #DDDDFF;
}

.header__cart{
    margin-left: auto;
}

.header__cart_img {
    position: relative;
    background-color: #DDDDFF;
    border-radius: 50px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    
    img {
        height: 24px;
        margin-top: auto;
        margin-bottom: auto;
    }
}

.header__cart_counter {
    position: absolute;
    background-color: #F06C2D;
    border-radius: 50px;
    bottom: -5px;
    right: -5px;
    text-decoration: none;
    font-size: 13px;
    color: white;
    height: 16px;
    min-width: 16px;
    display: flex;
    justify-content: center;
    span {
        margin-top: auto;
        margin-bottom: auto;
    }
}

</style>
