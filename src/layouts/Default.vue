<template>
  <div class="layout">
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
    <BackToTopArrow />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import BackToTopArrow from "../components/BackToTopArrow.vue";

export default {
  components: {
    Header,
    Footer,
    BackToTopArrow,
  },
};
</script>

<style>
.layout {
  width: 100%;
}
</style>
