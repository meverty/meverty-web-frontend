<template>
  <HeaderLayout />
  <router-view/>
</template>

<script>
import HeaderLayout from './layouts/HeaderLayout.vue';
export default {
    name: "App",
    components: { HeaderLayout }
}
</script>


<style>
</style>
