import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users',  {
   state: () => {
        const users= {
            0:{
                id:1,
                firstname:"Macey",
                lastname: "Mungai",
                email:"maceybooks@gmail.com",
                phone:"0738344927",
                location:"Mombasa",
                address:"777 , Main Street",
            },
                1:{
                id:2,
                firstname:"Alvin",
                lastname: "Ogeto",
                email:"alvinbooks@gmail.com",
                phone:"0721584147",
                location:"Mombasa",
                address:"2223 , Main Street",
            },
                2:{
                id:3,
                firstname:"Naka",
                lastname: "Mukasa",
                email:"nakabooks@gmail.com",
                phone:"07454545",
                location:"Kisumu",
                address:"4441 ,first street ",
            },
                3:{
                id:4,
                firstname:"Hazel",
                lastname: "Kioko",
                email:"hazelbooks@gmail.com",
                phone:"073333333",
                location:"Nairobi",
                address:"7766 , 4th Avenue",
            },
                4:{
                id:5,
                firstname:"Mitsy",
                lastname: "Sandra",
                email:"mitsybooks@gmail.com",
                phone:"076564789",
                location:"Eldoret",
                address:"1001 , Nganga Road",
            },
                5:{
                id:6,
                firstname:"Daisy",
                lastname: "Roro",
                email:"daisybooks@gmail.com",
                phone:"0723344927",
                location:"Nakuru",
                address:"123, kamburu Road",
            },
        }

        return{
            users
        }
   },
   actions:{
     addUser(payload) {
            //get the last key in the users object
            const existingKeys = Object.keys(this.users).map(Number);
            const maxKey = existingKeys.length > 0 ? Math.max(...existingKeys) : 0;
            const nextKey = maxKey + 1;

            //insert into object
            this.users[nextKey] = {
                ...payload,
                id: nextKey
            };
        },
        editUser(id, payload) {
            // find the book in the object
            const user = Object.entries(this.users).find(
                ([key, item]) => item.id === id //compare the ids
            );

            if (!user) {
                console.error(`No user found with id: ${id}`);
                return;
            }

            const [objectKey] = user;

            //replace the existing user data with what was received in payload
            this.users[objectKey] = {
                ...this.users[objectKey], 
                ...payload
            };
        },
        deleteUser(id) {
            const user = Object.entries(this.users).find(
                ([key, item]) => item.id === id
            );
            if (!user) {
                console.error(`Cannot delete: No user found id: ${id}`);
                return;
            }

            const [objectKey] = user;

            delete this.users[objectKey];
        }
      
   },
   persist: true,
})