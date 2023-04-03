<template>
  <section class="defualt-page-container">
    <div class="header">
      <h1>הכנסות</h1>
      <v-btn color="primary">
        <v-icon>mdi-plus</v-icon>
        הוספת הכנסה</v-btn>
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
  name: 'Receipts',
  data: () => ({
      headers: [
        {
          text: 'שם המתפלל',
          align: 'right',
          sortable: true,
          value: 'name',
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
