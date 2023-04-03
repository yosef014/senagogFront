<template>
  <section class="defualt-page-container">
    <div class="header">
      <h1>נדרים</h1>
      <v-btn color="primary">
        <v-icon>mdi-plus</v-icon>
        הוספת נדר</v-btn>
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
          text: 'שם מתפלל',
          align: 'right',
          sortable: true,
          value: 'first_name',
        },
        { text: 'סכום', value: 'price', sortable: true,  align:'left' },
        { text: 'תאריך', value: 'created_at', sortable: true, align:'left' },
        { text: 'תיאור', value: 'description', align:'left' },
      ],
    }),
}
</script>
<style lang="scss" scoped>

</style>
