<template>
  <v-app id="inspire">
      <v-navigation-drawer
        v-model="drawer"
        app
      > 
        <v-list dense >
          <v-list-item router :to="{name: 'home'}" exact>
            <v-list-item-action>
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item v-if="isLogin === false" router :to="{name: 'login'}" exact>
            <v-list-item-action>
              <v-icon>mdi-gavel</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Login</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item v-else router :to="{name: 'mainpage'}" exact>
            <v-list-item-action>
              <v-icon>mdi-widgets</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>메인페이지</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        
      </v-navigation-drawer>
  
      <v-app-bar
        app
        color="indigo"
        dark
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Application</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-sm-and-down">
          <v-menu offset-y v-if="isLogin">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="white"
              dark
              v-bind="attrs"
              v-on="on"
              icon
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item router :to="{name:'mainpage'}"> 
            <v-list-item-title>메인페이지</v-list-item-title>
            </v-list-item>
            <v-list-item @click="logout">  <!-- 만약 mapActions를 선언 안했으면 $store.dispatch('logout') 이렇게 선언해야함 --> 
            <v-list-item-title>로그아웃</v-list-item-title>
            </v-list-item>
          </v-list>
            </v-menu>

          <v-btn color="white" icon flat v-else router :to="{name: 'login'}">LOG IN</v-btn>
        </v-toolbar-items>
      </v-app-bar>
      <v-content>
        <router-view></router-view>
      </v-content>
      
      <v-footer
        color="indigo"
        app
      >
        <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
      </v-footer>
  </v-app>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data: () => ({
    drawer: null,
    
  }),
  computed: {
    ...mapState(["isLogin"])
  },
  methods: {
    ...mapActions(["logout"])
  },
  props: {
    source: String
  }
}
</script>

<style>

</style>