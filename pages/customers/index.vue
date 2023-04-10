<template>
  <section class="defualt-page-container">
    <div class="header">
      <h1>מתפללים</h1>
      <v-btn color="#9155fd">
        <i class="icon icon-plus"/>
        הוספת מתפלל</v-btn>
    </div>

    <div class="main-container">
      <div class="filters">
        <v-text-field style="width: 200px;"  append-icon="mdi-magnify" label="חיפוש"/>
      </div>
      <v-data-table :headers="headers" :items="[]" item-key="name"></v-data-table>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Customers',
  data: () => ({
      headers: [
        {
          text: 'שם פרטי',
          align: 'right',
          sortable: true,
          value: 'first_name',
        },
        { text: 'שם משפחה', value: 'last_name', sortable: true,  align:'left' },
        { text: 'טלפון', value: 'mobile', sortable: true, align:'left' },
        { text: 'מייל', value: 'email', align:'left' },
      ],
    }),
}
</script>
<style lang="scss" scoped>

</style>
