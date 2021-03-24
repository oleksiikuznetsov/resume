<template>
  <div id="app">
    <VdDashboard
      pageBackground="#f8f8f8"
      sidebarHeaderHeight="175px"
      headerBackground="white"
      sidebarBackground="white"
    >
      <template v-slot:main-content>
        <router-view />
      </template>
      <template v-slot:sidebar-header>
        <SidebarHeader></SidebarHeader>
      </template>
      <template v-slot:sidebar-content>
        <SidebarItems></SidebarItems>
      </template>
      <template v-slot:social-content>
        <SidebarSocial></SidebarSocial>
      </template>
    </VdDashboard>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import SidebarHeader from './components/SidebarHeader.vue';
import SidebarItems from './components/SidebarItems.vue';
import SidebarSocial from './components/SidebarSocial.vue';
@Component({
  components: {
    SidebarHeader,
    SidebarItems,
    SidebarSocial,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.title {
  margin-top: 15px;
}
</style>
