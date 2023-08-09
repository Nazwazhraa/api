import { createStore } from 'vuex'
import axios from "axios"
export default createStore({
    state: {
        products: []
    },
    getters: {
        getProduct: (state) => state.products
    },
    actions: {
        async fetchProduct({ commit }) {
            try {
                const dataProduct = await axios.get("https://fakestoreapi.com/products")
                commit('SET_PRODUCTS', dataProduct.data)
            } catch (error) {
                alert('Ada Error')
                console.log(error);
            }
        }
    },
    mutations: {
        SET_PRODUCTS(state, products) {
            state.products = products
        }
    }
})