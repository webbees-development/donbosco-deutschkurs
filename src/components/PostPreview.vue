<template>
  <transition name="fade" appear>
    <g-link :to="link">
      <figure>
        <g-image
          immediate
          class="post-image"
          :src="image.src"
          :alt="image.alt"
        ></g-image>
        <figcaption>
          <h3>{{ title }}</h3>
          <p class="excerpt">{{ excerpt }}...</p>
          <p class="read-more">
            <span class="underline-animation">weiterlesen ></span>
          </p>
        </figcaption>
      </figure>
    </g-link>
  </transition>
</template>

<script>
export default {
  props: {
    excerpt: {
      type: String,
      required: true,
    },
    image: {
      type: Object,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/global.scss";

figure {
  //max-width: 40rem;
  min-width: 0;
  margin: 0 auto;
}

figcaption {
  max-width: 50ch;
  margin-block-start: 2.5rem;
  margin-inline: auto;
}

img {
  width: 26.5rem;
  max-width: 100%;

  border: 1.5rem solid white;
  margin: 0 auto;
}

h3 {
  display: -webkit-box;
  overflow: hidden;

  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
p.excerpt {
  display: -webkit-box;
  margin-block-start: 1.9rem 2rem;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
}

p.read-more {
  margin-block-start: 0.2em;
  text-underline-offset: 0.3rem;
  color: var(--clr-primary);
}
</style>
