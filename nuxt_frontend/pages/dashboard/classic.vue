<script setup lang="ts">
definePageMeta({
  layout: "custom",
});

const page = ref({ title: "Classic" });
const breadcrumbs = ref([
  {
    title: "Classic",
    disabled: true,
    href: "/classic",
  },
]);
</script>

<template>
  <BaseBreadcrumb
    :title="page.title"
    :breadcrumbs="breadcrumbs"
  ></BaseBreadcrumb>
</template>
