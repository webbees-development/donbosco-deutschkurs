<template>
  <section id="blog" class="blog">
    <h2>Erfolgsgeschichten & Worte der Dankbarkeit</h2>
    <!-- <GenericSlider>
      <PostPreview
        v-for="{ node } in loadedPosts"
        :key="node.id"
        class="slide generic-slide post-preview"
        :link="`/news/${node.id}`"
        :image="node.featured_image"
        :title="node.title"
        :excerpt="node.excerpt"
      />
    </GenericSlider> -->
  </section>
</template>

<!-- <static-query>
query Posts {
  posts: allPost(limit: 6, sortBy: "date") {
    edges {
      node {
        id
        title
        excerpt
        featured_image{
          src
          alt
        }
      }
    }
  }
}
</static-query> -->

<script>
// import GenericSlider from "./GenericSlider.vue";
// // import PostPreview from "./PostPreview.vue";

// export default {
//   components: {
//     // GenericSlider,
//     // PostPreview,
//   },
//   data() {
//     return {
//       loadedPosts: [],
//     };
//   },
//   created() {
//     // this.loadedPosts.push(...this.$static.posts.edges);
//   },
// };
// </script>

<style lang="scss" scoped>
@import "~/assets/styles/global.scss";

h2 {
  padding-block-end: 3.125rem;
}
.blog {
  background-image: url("../assets/images/index/bg_img.png");
  padding-block: 9rem;
  padding-inline: 15.8rem;
  @media (max-width: 1250px) {
    padding-inline: var(--padding-global-inline);
  }

  text-align: center;
}

.post-preview {
  --carousel-btn-spacing: -2.2rem;
  // --carousel-btn-upper-spacing: 20%;

  padding-bottom: 1px;
}
</style>
