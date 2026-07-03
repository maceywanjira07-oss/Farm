<script setup>
import { ref } from 'vue'
import { useProductStore } from '../stores/product'
import { useCartStore } from '../stores/cart'

const emit = defineEmits(['close'])
const productStore = useProductStore()
const product = productStore.selectedProduct

//cart
const cartStore = useCartStore()
const quantity = ref(1)

function buy(product){
  if (!product) return
  product.quantity = quantity.value
  cartStore.updateCart(product)
}
</script>

<template>
  <v-card>
    <v-card-title class="d-flex justify-space-between align-center">
      <span>{{ product?.name || 'Product details' }}</span>
      <v-btn icon="mdi-close" variant="text" @click="emit('close')"></v-btn>
    </v-card-title>

    <v-card-text>
      <v-row>
        <v-col cols="12" md="6">
          <v-card>
            <v-img class="align-end text-white" height="420" :src="product?.image"></v-img>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card height="100%" color="secondary">
            <v-card-item>
              <v-chip class="mb-4">{{ product?.category }}</v-chip>
              <v-row>
                <v-col cols="12">
                  <v-btn color="lime-lighten-2" variant="outlined" density="compact" readonly>In Stock</v-btn>
                </v-col>
              </v-row>
              <v-card-text style="height:220px; overflow-y: auto">{{ product?.short_description }}</v-card-text>
              <v-card-subtitle>ksh {{ product?.price }}</v-card-subtitle>
              <v-card-text>
                <v-row align="center">
                  <v-col cols="4">Quantity</v-col>
                  <v-col cols="8">
                    <v-number-input v-model="quantity" control-variant="split" density="compact" :min="1" :max="10"></v-number-input>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card-item>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn elevation="4" variant="elevated" @click="buy(product)">Add to Cart</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>