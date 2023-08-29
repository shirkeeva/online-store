import { createStore, Store } from 'vuex'

const store = createStore({
    state: {
        products: [],
        productsInCart: [],
        selectedProduct: {}
    },
    mutations: {
        updateProducts(state, newProducts) {
            state.products = newProducts
        },
        updateProductsInCart(state, newProductsInCart) {
            state.productsInCart = newProductsInCart;
        },
        updateSelectedProductIndex(state, item) {
            state.selectedProduct = item;
        }
    },
    actions: {
        initializeProducts({commit}, initialProducts: Array<object>) {
            commit('updateProducts', initialProducts)
            commit('updateSelectedProduct', -1)
        },
        setProductsInCart({commit}, newProductsInCart) {
            commit('updateProductsInCart', newProductsInCart);
        },
        setSelectedProduct({commit}, newItem) {
            commit('updateSelectedProduct', newItem)
        }
    }
});

export default store;