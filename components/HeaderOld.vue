<template>
<div>
    <v-app-bar
      color="gray"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>חב"ד גני אייליון</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      right
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>ראשי</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>אזור אישי</v-list-item-title>
          </v-list-item>

          <v-list-item  @click="$router.push('/customers')">
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>מתפללים</v-list-item-title>
          </v-list-item>

          <v-list-item @click="$router.push('/vows')">
            <v-list-item-icon>
              <v-icon>mdi-cash-clock</v-icon>
            </v-list-item-icon>
            <v-list-item-title>נדרים</v-list-item-title>
          </v-list-item>

          <v-list-item @click="$router.push('/receipts')">
            <v-list-item-icon>
              <v-icon>mdi-cash-check</v-icon>
            </v-list-item-icon>
            <v-list-item-title>הכנסות</v-list-item-title>
          </v-list-item>

          <v-list-item  @click="$router.push('/expenses')">
            <v-list-item-icon>
              <v-icon>mdi-cash-refund</v-icon>
            </v-list-item-icon>
            <v-list-item-title>הוצאות</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-cog-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>הגדרות</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
</div>
</template>
<script>
export default {
  name: 'Header',
  data: () => ({
      drawer: false,
      group: null,
    }),
}
</script>
