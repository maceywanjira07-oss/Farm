<script setup>
import { ref } from 'vue'
import{useAuth}  from  '../services/auth'
import{useRouter} from "vue-router";

const router = useRouter();
const{checkCredentials} = useAuth()

const rules = 
  {
    required: value => !!value || 'Required.',//if statement
    min: v => v.length >= 8 || 'Min 8 characters',
  }

//data models
const email = ref(null)
const password = ref(null) //model
const showPassword = ref (false)

function login()
{
    const data = 
     {
        email: email.value,
        password: password.value,
     }
    checkCredentials(data)
    router.push('/').then(()=> {
        router.go(0)
    });
}

</script>

<template>
    <v-container align="center" class="mt-16">
        <v-row no-gutters>
            <v-col>
                <v-card max-width="80%" class="bg-secondary">
                    <v-img src="/logo.png" height="300" width="200" class="mb-0 mt-0" ></v-img>
                    <v-card-title class="text-display-medium mb-12  mt-0" >Login</v-card-title>
                    <v-form class="mt-12" mb-6>
                         <v-row>
                            <v-col md="4"> 
                                <div> Email</div>
                            </v-col>
                            <v-col md="3">
                                <v-text-field v-model="email"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col md="4"> 
                                <div> Password</div>
                            </v-col>
                            <v-col md="4">
                              	<v-text-field v-model="password"
                                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, rules.min]"
                                :type="showPassword ? 'text' : 'password'"
                                variant="outlined"
                                @click:append="showPassword = !showPassword">
                                </v-text-field>
                            </v-col> 
                        </v-row>
                        <v-row>
                            <v-col md="6" >
                                <v-btn @click="login()" width="300" class="mb-5 " > login</v-btn>
                            </v-col>
                            <v-col md="6">
                                <div>New user?? 
                                    <router-link to="/sign_up">Create account</router-link>
                                </div>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>