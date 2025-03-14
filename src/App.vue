<template>
  <NavBar />
  <router-view/>
  <Footer />
</template>

<script>
  import Footer from './components/Footer.vue';
  import NavBar from './components/NavBar.vue';

  export default {
      name: "App",
      components: {
        NavBar,
        Footer
      }
  }

</script>

<style scop>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
</style>