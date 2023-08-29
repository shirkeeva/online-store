<template>
    <CartDetails/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CartDetails from '@/components/Cart.vue'

export default defineComponent({
  name: 'CartView',
  components: {
    CartDetails,
  },
});
</script>