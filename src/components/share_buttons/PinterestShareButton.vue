<template>
  <div>
    <a :href="href" class="pin-it-button" count-layout="horizontal">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
        <path
          d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"
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
    imagePath: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
  },
  computed: {
    href() {
      let route = `http://pinterest.com/pin/create/button/?url=${this.url}`;
      if (this.imagePath) {
        route += `&media=${this.imagePath}`;
      }
      if (this.description) {
        route += `&description=${this.description}`;
      }
      return route;
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  align-items: center;
  aspect-ratio: 1;
  // facebook blue
  background-color: #e60023;
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
