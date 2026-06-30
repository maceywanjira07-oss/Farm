import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product',  {
   state: () => {
      const product ={
        0:{
            id: 1 ,
            name:"Tomatoes",
            price:"112 per kg",
            availability: "yes",
            image:"product1.jpg"
        },
        1:{
            id: 2 ,
            name:"Carrots",
            price:"112 per kg",
            availability: "yes",
            image:"product 2.jpg"
        },
        2:{
            
            id: 3 ,
            name:"Onions",
            price:"112 per kg",
            availability: "yes",
            image:"product3.jpg"
        },
        3:{
            id: 4 ,
            name:"Strawberries",
            price:"112 per kg",
            availability: "yes",
            image:"image5.jpg"
        },
        4:{
            id: 5 ,
            name:"Spinach",
            price:"112 per kg",
            availability: "yes",
            image:"image6.jpg"
        },
        5:{
             id: 6,
            name:"Cucumbers",
            price:"112 per kg",
            availability: "yes",
            image:"image7.jpg"
            
        },
        6:{
            id: 7 ,
            name:"Bananas",
            price:"112 per kg",
            availability: "yes",
            image:"product4.jpg"
        },
        7:{
            id: 8,
            name:"pineapples",
            price:"112 per kg",
            availability: "yes",
            image:"product5.jpg"
        },
        8:{
            id: 9,
            name:"Mangoes",
            price:"112 per kg",
            availability: "yes",
            image:"product6.jpg"
        },
        9:{
            
            id:10 ,
            name:"Capsicums",
            price:"ksh 50 per piece",
            availability: "yes",
            image:"product7.jpg"
        },
        10:{
            
            id: 11 ,
            name:"Cauliflower",
            price:"112 per kg",
            availability: "yes",
            image:"product8.jpg"
        },
        11:{
        
            id: 12,
            name:"Ginger",
            price:"112 per kg",
            availability: "yes",
            image:"product9.jpg"
        },
        }
      const selectedProduct = ref (null)
      return{
        product, selectedProduct
         }  
      },
     actions:{
       updateSelectedProduct (payload) {
           this.selectedProduct = payload
       },
     },
    }
)