<template>
  <Header></Header>
  <div class="wrapper">
    <div class="content">
      <RouterView></RouterView>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    Footer,
    RouterView
  },

}

</script>

<style>
@import '@/assets/base.css';
</style>
