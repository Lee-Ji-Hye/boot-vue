<template>
<v-card
    class="mx-auto overflow-hidden"
    height="600"
  >
    <v-app-bar
      color="deep-purple"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>롤링페이퍼</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>메인</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title><router-link to="/loginForm">로그인</router-link></v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title><router-link to="/">로그아웃</router-link></v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <router-view/>
  </v-card>
</template>

<script>
// import Header from '@/components/layout/Header.vue'
// export default {
//   name: "App",
//   data: () => ({
//     //
//   }),
//   components: {
//     Header
//   }
// };
export default {
  name: 'App',
  data: () => ({
    drawer: false,
    group: null,
  }),
}
</script>
