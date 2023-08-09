<template>
    <div><center>
        <h1>Halaman Product</h1>
        <div v-for="product in products" :key="product.id">
        
            <img :src="product.image" alt="" style="height: 140px;">
            <br>
            <table align="center">
                <tr>
                    <td>Nama Produk</td>
                    <td>:</td>
                    <td>{{ product.title }}</td>
                </tr>
                <tr>
                    <td>Kategori</td>
                    <td>:</td>
                    <td>{{ product.category }}</td>
                </tr>
                <tr>
                    <td>Deskripsi</td>
                    <td>:</td>
                    <td>{{ product.description }}</td>
                </tr>
                <tr>
                    <td>Harga</td>
                    <td>:</td>
                    <td>{{ product.price }}</td>
                </tr>
                <tr>
                    <td>Rating</td>
                    <td>:</td>
                    <td>{{ product.rating }}</td>
                </tr>
            </table>
        </div></center>
    </div>
</template>

<script>
// import { useStore } from 'vuex';
// const store = useStore();
// const getProducts = computed(() => {
//     return store.getters.getProducts
// })
// const products = computed(() => {
//     return store.state.products
// })
// onMounted(() => {
//     store.dispatch('fetchProduct')
// })

export default {
    mounted() {
        return this.$store.dispatch('fetchProduct')
    },
    computed: {
        products() {
            return this.$store.state.products
        }
    }
}
</script>

<style lang="scss" scoped></style>