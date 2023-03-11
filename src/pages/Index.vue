<template>
  <Layout>
    <Hero />
    <AboutUs />
    <Appointment />
    <Participate />
    <Blog />
    <Photos />
    <Testimonial />
    <Ending />
  </Layout>
</template>

<script>
import Hero from "../components/Hero.vue";
import AboutUs from "../components/AboutUs.vue";
import Appointment from "../components/Appointment.vue";
import Participate from "../components/Participate.vue";
import Blog from "../components/Blog.vue";
import Photos from "../components/Photos.vue";
import Testimonial from "../components/Testimonial.vue";
import Ending from "../components/Ending.vue";

export default {
  metaInfo: {
    title: "Don Bosco für Flüchtlinge",
  },
  components: {
    Hero,
    AboutUs,
    Appointment,
    Participate,
    Blog,
    Photos,
    Testimonial,
    Ending,
  },
};
</script>

<style></style>
