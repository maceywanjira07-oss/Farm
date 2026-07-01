import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product',  {
   state: () => {
      const product ={
        0:{
            id: 1 ,
            name:"Tomatoes",
            price:25,
            availability: "available",
            category: "Fruit",
            short_description:"Freshly picked Tomatoes from the african forest lol ",
            image:"product1.jpg"
        },
        1:{
            id: 2 ,
            name:"Carrots",
            category:"vegetable",
            price:20,
            availability: "available",
            short_description:"Freshly picked Carrots from the african forest lol ",
            image:"product 2.jpg"
        },
        2:{
            
            id: 3 ,
            name:"Onions",
            price:30,
            availability: "available",
            category: "Vegetable",
            short_description:"Freshly picked Onions from the african forest lol ",
            image:"product3.jpg"
        },
        3:{
            id: 4 ,
            name:"Strawberries",
            price:150,
            availability: "available",
            category: "Fruit",
            short_description:"Freshly picked fruit from the african forest lol ",
            image:"image5.jpg"
        },
        4:{
            id: 5 ,
            name:"Spinach",
            price:40,
            availability: "available",
            category: "Vegetable",
            short_description:"Freshly picked vegetable from the african forest lol ",
            image:"image6.jpg"
        },
        5:{
             id: 6,
            name:"Cucumbers",
            price:75,
             availability: "available",
            category: "Vegetable",
            short_description:"Freshly picked vegetable from the african forest lol ",
            image:"image7.jpg"
            
        },
        6:{
            id: 7 ,
            name:"Bananas",
            price:300,
            availability: "available",
            category: "Fruit",
            short_description:"Freshly picked fruit from the african forest lol ",
            image:"product4.jpg"
        },
        7:{
            id: 8,
            name:"pineapples",
            price:200,
            availability: "available",
            category: "Fruit",
            short_description:"Freshly picked fruit from the african forest lol ",
            image:"product5.jpg"
        },
        8:{
            id: 9,
            name:"Mangoes",
            price:100,
            availability: "available",
            category: "Fruit",
            short_description:"Freshly picked fruit from the african forest lol ",
            image:"product6.jpg"
        },
        9:{
            
            id:10 ,
            name:"Capsicums",
            price:50,
            availability: "available",
            category: "Vegetable",
            short_description:"Freshly picked vegetable from the african forest lol ",
            image:"product7.jpg"
        },
        10:{
            
            id: 11 ,
            name:"Cauliflower",
            price:100,
            availability: "available",
            category: "Vegetable",
            short_description:"Freshly picked vegetable from the african forest lol ",
            image:"product8.jpg"
        },
        11:{
        
            id: 12,
            name:"Ginger",
            price:30,
            availability: "available",
            category: "Vegetable",
            short_description:"Freshly picked vegetable from the african forest lol ",
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