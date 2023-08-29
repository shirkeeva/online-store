<template>
    <ProductDetails/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProductDetails from '@/components/ProductDetails.vue'

export default defineComponent({
  name: 'ProductView',
  components: {
    ProductDetails,
  },
});
</script>