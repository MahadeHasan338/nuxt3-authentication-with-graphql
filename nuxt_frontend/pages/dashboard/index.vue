<script setup lang="ts">
definePageMeta({
  layout: "custom",
});
const page = ref({ title: "Dashboard" });
const breadcrumbs = ref([
  {
    title: "Dashboard",
    disabled: true,
    href: "/",
  },
]);
</script>

<template>
  <BaseBreadcrumb
    :title="page.title"
    :breadcrumbs="breadcrumbs"
  ></BaseBreadcrumb>
</template>