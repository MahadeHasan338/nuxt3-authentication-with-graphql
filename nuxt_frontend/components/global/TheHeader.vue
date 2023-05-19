<script setup lang="ts">
import { useAuthStore } from "@/stores/auth";

const message = [
  {
    image: "1.jpg",
    avatarstatus: "success",
    title: "Romen Joined the Team!",
    desc: "Congratulate him",
    time: "9:30 AM",
  },
  {
    image: "2.jpg",
    avatarstatus: "warning",
    title: "New message received",
    desc: "Salma sent you new message",
    time: "9:08 AM",
  },
  {
    image: "3.jpg",
    avatarstatus: "error",
    title: "New Payment received",
    desc: "Check your earnings",
    time: "9:08 AM",
  },
];

const notification = [
  {
    color: "error",
    icon: "home",
    title: "Luanch Admin",
    desc: "Just see the my new admin!",
  },
  {
    color: "primary",
    icon: "calendar",
    title: "Event today",
    desc: "Just a reminder that you have event",
  },
  {
    color: "warning",
    icon: "settings",
    title: "Settings",
    desc: "You can customize this template as you want",
  },
];

const profile = [
  {
    color: "error",
    icon: "dollar-sign",
    title: "My Profile",
    desc: "Account Settings",
  },
  {
    color: "success",
    icon: "shield",
    title: "My Inbox",
    desc: "Messages & Emails",
  },
  {
    color: "secondary",
    icon: "credit-card",
    title: "My Tasks",
    desc: "To-do and Daily Tasks",
  },
];

const messages = ref(message);
const notifications = ref(notification);
const userprofile = ref(profile);

const authUserStore = useAuthStore();
const { logOut } = authUserStore;

</script>

<template>
  <v-app-bar
    color="primary"
    elevation="5"
  >
    <LogoLight class="pa-4" />
    <v-app-bar-nav-icon
      color="white"
      class="hidden-sm-and-down"
    />
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
    />

    <v-spacer />
    <v-menu anchor="bottom end" origin="auto" max-width="300">
      <template v-slot:activator="{ props }">
        <v-btn icon color="white" v-bind="props">
          <v-badge color="error" dot>
            <v-icon>mdi-message</v-icon>
          </v-badge>
        </v-btn>
      </template>

      <v-list class="pa-5" elevation="10" rounded="lg">
        <h4 class="d-flex">
          Messages
          <v-chip label small color="secondary" class="ml-auto"> 5 new </v-chip>
        </h4>

        <v-list-item
          v-for="(item, i) in messages"
          class="my-2 pa-3"
          :key="i"
          rounded="lg"
          :value="item"
          :title="item.title"
          :subtitle="item.desc"
        >
          <template v-slot:prepend>
              <v-avatar size="50">
                <img
                  src="@/assets/images/users/7.jpg"
                  :alt="item.image"
                  width="50"
                /></v-avatar
            >
          </template>
        </v-list-item>
        <v-btn flat color="primary" class="mt-4" variant="flat" block
          >See all Messages</v-btn
        >
      </v-list>
    </v-menu>
    <v-menu anchor="bottom end" origin="auto">
      <template v-slot:activator="{ props }">
        <v-btn icon color="white" v-bind="props">
          <v-badge color="error" dot>
            <v-icon>mdi-bell</v-icon>
          </v-badge>
        </v-btn>
      </template>

      <v-list class="pa-6" elevation="10" rounded="lg" max-width="300">
        <h4 class="d-flex">
          Notifications
          <v-chip class="ml-auto" label small color="error"> 5 new </v-chip>
        </h4>
        <v-list-item
          class="pa-3 mt-2"
          v-for="(item, i) in notifications"
          :key="i"
          :value="item"
          rounded="lg"
          :title="item.title"
          :subtitle="item.desc"
        >
          <template v-slot:prepend>
            <v-list-item-media start>
              <v-btn
                :color="item.color"
                icon
                variant="flat"
                elevation="0"
                class="mr-3"
              >
                <v-icon size="18"></v-icon>
              </v-btn>
            </v-list-item-media>
          </template>
        </v-list-item>
        <v-btn block variant="flat" color="secondary" class="mt-4 py-4"
          >See all Notifications</v-btn
        >
      </v-list>
    </v-menu>
    <v-menu anchor="bottom end" origin="auto" min-width="300">
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          class="pa-0 px-1"
          elevation="0"
          color="transparent"
          plain
          :ripple="false"
        >
          <v-avatar size="35">
            <img src="@/assets/images/users/user2.jpg" width="40" alt="Julia" />
          </v-avatar>
        </v-btn>
      </template>

      <v-list class="pa-6" elevation="10" rounded="lg">
        <h4 class="font-weight-medium fs-18">User Profile</h4>
        <div class="d-flex align-center my-4">
          <img
            src="@/assets/images/users/user2.jpg"
            alt="Julia"
            class="rounded-circle"
            width="90"
          />
          <div class="ml-4">
            <h4 class="font-weight-medium fs-18">Julia Roberts</h4>
            <span class="subtitle-2 font-weight-light">Administrator</span>
            <div class="d-flex align-center">
              <v-icon
                class="d-flex grey--text"
              ></v-icon>
              <span class="subtitle-2 font-weight-light ml-1"
                >info@flexy.com</span
              >
            </div>
          </div>
        </div>
        <v-list-item
          class="pa-3 mb-2"
          v-for="(item, i) in userprofile"
          :key="i"
          :value="item"
          :title="item.title"
          :subtitle="item.desc"
          rounded="lg"
        >
          <template v-slot:prepend>
            <v-list-item-media start>
              <v-btn
                :color="item.color"
                variant="flat"
                icon
                elevation="0"
                size="small"
                class="mr-3"
              >
                <v-icon size="18"></v-icon>
              </v-btn>
            </v-list-item-media>
          </template>
        </v-list-item>
        <v-btn
          block
          color="secondary"
          variant="flat"
          class="mt-4 py-4"
          @click="logOut"
          >Logout</v-btn
        >
      </v-list>
    </v-menu>
  </v-app-bar>
</template>