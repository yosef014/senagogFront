<template>
    <section class="login">
        <div class="main-container">
            <div class="header">
                <h1>התחברות</h1>
            </div>
            <!-- <div class="wellcome">
                <span>ברוך הבא למערכת</span>
                <span>👋🏻</span>
            </div> -->
            <div class="inputs">
                <v-text-field v-model="form.user_name" color="#9155fd" label="שם משתמש" outlined />

                <v-text-field v-model="form.password" label="סיסמה" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPassword ? 'text' : 'password'" color="#9155fd" @click:append="showPassword = !showPassword"
                    outlined />

            </div>
            <v-btn color="#9155fd" @click="login">
                התחברות</v-btn>
        </div>
        <v-snackbar v-model="showSnackbar" :multi-line="multiLine">
          {{ snackbarText }}
          <template v-slot:action="{ attrs }">
            <v-btn color="blue" text v-bind="attrs" @click="showSnackbar = false">
              Close
            </v-btn>
          </template>

        </v-snackbar>
    </section>
</template>
<script>
export default {
    layout: 'auth',
    name: 'Login',
    data() {
        return {
            snackbarText: '',
            showSnackbar: false,
            showPassword: false,
            form: {
                user_name: null,
                password: null
            }
        }
    },
    methods: {
        async login() {
            try {

                const response = await this.$auth.loginWith('local', { data: this.form })
                const user = await this.$userService.getUserByToken({ token: `Bearer%20${response.data.token}` })
                if (user) {
                    await this.$auth.setUser(user)
                    this.$router.push('/')
                }
            } catch (e) {
               this.snackbarText = e.response?.data?.message || 'login error'
               this.showSnackbar = true
                console.log(e, 'login error');
            }
        }
    }
}

</script>
<style lang="scss" scoped>
.login {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    .main-container {
        display: flex;
        flex-direction: column;
        padding: 30px;
        width: 450px;
        margin: auto;
        background-color: white;
        border: 1px solid rgba(224, 224, 224, 1);
        border-radius: 6px;
        box-shadow: 5px 6px 16px 5px rgba(58, 53, 65, 0.12);

        .v-btn {
            color: white;
        }

        .header {
            margin-bottom: 20px;
            display: flex;
            justify-content: center;
        }
    }
}
</style>