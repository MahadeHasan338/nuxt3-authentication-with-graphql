<template>
  <v-app
  >

    <v-main>
      <TheHeader  />
      <TheSidebar  />
      <v-container fluid class="page-wrapper">
        <slot/>
      </v-container>
    </v-main>
  </v-app>
</template>
