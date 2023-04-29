<template>
    <section class="defualt-page-container">
      <div class="header">
        <h1>הוספת מתפלל</h1>
        <v-btn color="black" @click="$router.push({name: 'customers-create-or-edit'})">
        <i class="icon icon-return"/>
        חזור</v-btn>
      </div>
  
      <div class="main-container">
        <span>שם פרטי</span>
        <v-text-field v-model="form.first_name"  color="#9155fd" label="שם פרטי" outlined />
        <span>שם משפחה</span>
        <v-text-field v-model="form.last_name"  color="#9155fd" label="שם משפחה" outlined />
        <span>מייל</span>
        <v-text-field v-model="form.email"  color="#9155fd" label="מייל" outlined />
        <span>טלפון</span>
        <v-text-field v-model="form.mobile" color="#9155fd" label="טלפון" outlined />
        <v-btn color="#9155fd" @click="saveCustomer"> שמור</v-btn>
      </div>
    </section>
  </template>
  <script>
  export default {
    name: 'CreateOrEditCustomer',
    data() {
        return {
            form: {
                first_name: null,
                last_name: null,
                email:null,
                mobile: null
            }
        }
    },
    methods: {
        async saveCustomer() {
            try{
                await this.$customerService.saveCustomer(this.form)
            } catch(e) {
                this.snackbarText = e.response?.data?.message || 'save customer error'
               this.showSnackbar = true
                console.log(e, 'save customer error');
            }
        }
    }
  }
  </script>
  <style lang="scss" scoped>
  .defualt-page-container {
    .header {
        margin-bottom: 20px;
        .icon {
            margin-left: 10px;
        }
    }
    .main-container {
        .v-btn {
            width: 100%;
            color: white;
        }
    }
  }
  </style>
  