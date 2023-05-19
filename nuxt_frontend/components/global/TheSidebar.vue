<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores/auth";

const sidebarMenu = ref([
  { header: "Home" },
  {
    title: "Dashboard",
    to: "/dashboard",
  },
  {
    title: "Graphical",
    to: "/dashboard/graphical",
  },
  {
    title: "Classic",
    to: "/dashboard/classic",
  }
]);

const authStore = useAuthStore();
const { getUserProfile: profile } = storeToRefs(authStore);
</script>

<template>
  <v-navigation-drawer
    left
    color="white"
    elevation="10"
    mobile-breakpoint="960"
    app
  >
      <div class="profile">
        <div class="profile-pic">
          <v-avatar size="45">
            <img src="@/assets/images/users/user2.jpg" width="50" alt="Julia" />
          </v-avatar>
        </div>
        <div class="profile-name">
          <h5>Jonathan Deo</h5>
        </div>
      </div>
      <v-list class="pa-3 mt-n10">
        <template v-for="(item, index) in sidebarMenu" :key="index">        
          <v-list-item :to="item.to" rounded="lg" class="mb-1">
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item>
        </template>
      </v-list>
  </v-navigation-drawer>
</template>

<style>
.profile {
  background: url("@/assets/images/background/user-info.jpg") no-repeat;
}
.profile-pic {
  padding: 30px 15px;
}
.profile-name {
  background: rgba(0, 0, 0, 0.5);
}
.profile-name h5 {
  padding: 10px;
  color: white;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>
