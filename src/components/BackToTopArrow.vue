<template>
    <button aria-label="Scroll back to top" id="to-top" @click="scrollToTop">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
          d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
        />
      </svg>
    </button>
</template>

<script>
export default {
  data() {
    return {
      showBackToTop: false,
    }
  },
  mounted() {
    window.addEventListener("scroll", (event) => {
      if (this.showBackToTop) {
        if (event.target.scrollingElement.scrollTop < event.target.scrollingElement.clientHeight) {
          this.showBackToTop = false;
        }
      } else {
        if (event.target.scrollingElement.scrollTop > event.target.scrollingElement.clientHeight) {
          this.showBackToTop = true;
        }
      }
    });
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  },
  watch: {
    showBackToTop(val) {
      if (val) {
        document.getElementById('to-top').classList.add('show');
      } else {
        document.getElementById('to-top').classList.remove('show');
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/global.scss";
button{
  aspect-ratio: 1;
  position: fixed;
  right: 2%;
  bottom: 8%;
  border-radius: 50%;
  background:var(--clr-primary);
  border: none;
  cursor: pointer;
  opacity: 0;

  display:flex;
  justify-content: center;
  align-items: center;
  width: 3rem;

  transition: filter 300ms ease, opacity 400ms ease;
  &:hover, &:focus-visible {
    filter: brightness(120%)
  }
}

svg {
  width: 40%;
  fill: #fff;
}

.show {
  opacity: 1;
}
</style>
