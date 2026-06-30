<script setup>
import { ref } from 'vue'
import{useAuth}  from  '../services/auth'
import{useRouter} from "vue-router";
const router = useRouter();

const{signup} = useAuth()


const showPassword = ref(false)
const password = ref(null) //model

const confirmPassword= ref(null)
const showConfirm = ref(false)
const rules = {
    required: value => !!value || 'Required.',//if statement
    min: v => v.length >= 8 || 'Min 8 characters',
    passwordMatch: () => password == confirmPassword || 'Passwords must match'//function to chack passwords match
  }

 
//data models
const firstname = ref(null)
const lastname = ref(null)
const email = ref(null)
const phone = ref(null)
const address = ref(null)
const location = ref(null)

function register()
{
    const data = {
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        phone: phone.value,
        location: location.value,
        address: address.value,
        password: password.value,
        role:2,

        //role 1 is for admin, role2 is for customer
    }
    signup(data)
    router.push('/').then(()=> {
        router.go(0)
    });
}

</script>

<template>
    <v-container align="center" class="mt-16 " >
        <v-row no-gutters>
            <v-col>
                <v-card max-width="80%" class="bg-primary">
                    <v-img src="/logo.png" height="300" width="200" class="mb-0 mt-0" ></v-img>
                    <v-card-title class="text-display-medium mb-12  mt-0" >Sign Up</v-card-title>
                    <v-form class="mt-12" mb-6>
                        <v-row>
                            <v-col md="3"> 
                                <div> First Name</div>
                            </v-col>
                            <v-col md="3">
                                <v-text-field v-model="firstname"></v-text-field>
                            </v-col>
                            <v-col md="3"> <div> Last Name</div></v-col>
                             <v-col md="3">
                                <v-text-field v-model="lastname" ></v-text-field>
                            </v-col>
                        </v-row>
                         <v-row>
                            <v-col md="3"> 
                                <div> Email</div>
                            </v-col>
                            <v-col md="3">
                                <v-text-field v-model="email"></v-text-field>
                            </v-col>
                            <v-col md="3"> <div> Phone</div></v-col>
                             <v-col md="3">
                                <v-text-field type="number" v-model="phone"></v-text-field>
                            </v-col>
                        </v-row>
                         <v-row>
                            <v-col md="3"> 
                                <div> Location</div>
                            </v-col>
                            <v-col md="3">
                                <v-select :items="['Nairobi', 'Kisumu', 'Mombasa',' Kiambu', 'Nakuru', 'Eldoret',]" v-model="location"></v-select>
                            </v-col>
                            <v-col md="3"> <div> Address</div></v-col>
                             <v-col md="3">
                                <v-text-field v-model="address"></v-text-field>
                            </v-col>
                        </v-row>
                         <v-row>
                            <v-col md="3"> 
                                <div> Password</div>
                            </v-col>
                            <v-col md="3">
                              				<v-text-field 
                                v-model="password"
                                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, rules.min]"
                                :type="showPassword ? 'text' : 'password'"
                                variant="outlined"
                                @click:append="showPassword = !showPassword"
                            ></v-text-field>
                            </v-col>
                            <v-col md="3"> <div> Confirm password</div></v-col>
                             <v-col md="3">
                               												<v-text-field 
                                v-model="confirmPassword"
                                :append-icon="showConfirm ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, rules.min, rules.passwordMatch,]"
                                :type="showConfirm ? 'text' : 'password'"
                                variant="outlined"
                                @click:append="showConfirm = !showConfirm"
                            ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col md="6" >
                                <v-btn @click="register()" width="300" class="mb-5 " > Sign Up</v-btn>
                            </v-col>
                            <v-col md="6">
                            <div>Already have an account?? 
                                 <router-link to="/login">Login </router-link>
                            </div>
                           
                            </v-col>
                        </v-row>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>