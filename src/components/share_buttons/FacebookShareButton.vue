<template>
  <div>
    <a
      target="_blank"
      :href="`https://www.facebook.com/sharer/sharer.php?u=${url}`"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
          d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
        />
      </svg>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  align-items: center;
  aspect-ratio: 1;
  // facebook blue
  background-color: #4267b2;
  display: flex;
  justify-content: center;
  position: relative;
  transition: filter 250ms ease;
  width: 3rem;
  &:hover,
  &:focus-visible {
    filter: brightness(120%);
  }
}
div {
  display: inline-block;
  vertical-align: top;
}
svg {
  fill: white;
  width: 40%;
}
</style>
