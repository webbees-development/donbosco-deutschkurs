<template>
  <header>
    <div class="container">
      <div class="logo">
        <g-link
          ><g-image
            src="../assets/images/logo.png"
            alt="Don Bosco für Flüchtlinge Logo"
          ></g-image
        ></g-link>
      </div>
      <div class="stop-war">
        <span>Please stop war in</span>
        <g-image
          v-for="(flag, index) in flags"
          :key="index"
          class="flag"
          data-visible="false"
          :src="require(`!!assets-loader!~/data/flags/${flag.src}`)"
          alt=""
        ></g-image>
      </div>
    </div>

    <button
      class="mobile-nav-toggle"
      aria-controls="primary-navigation"
      aria-expanded="false"
    >
      <span class="sr-only">Menu</span>
    </button>

    <nav id="primary-navigation" data-visible="false">
      <ul>
        <li><a href="#about-us">Über uns</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#photos">Fotos</a></li>
        <li><a href="#contact">Kontakt</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { flags } from "~/data/flags/flags.json";

export default {
  data() {
    return {
      flags,
    };
  },
  mounted() {
    this.toggleMobileNavigation();
    this.initSectionObserver();
    this.changeFlag();
  },
  methods: {
    toggleMobileNavigation() {
      // toggle mobile navigation
      const primaryNav = document.querySelector("nav");
      const navToggle = document.querySelector(".mobile-nav-toggle");

      navToggle.addEventListener("click", () => {
        const visibility = primaryNav.getAttribute("data-visible");
        if (visibility === "false") {
          primaryNav.setAttribute("data-visible", "true");
          navToggle.setAttribute("aria-expanded", "true");
        } else if (visibility === "true") {
          primaryNav.setAttribute("data-visible", "false");
          navToggle.setAttribute("aria-expanded", "false");
        }
      });
    },
    initSectionObserver() {
      // section Observer
      let currentSection = undefined;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            currentSection = undefined;
            if (entry.isIntersecting) {
              currentSection = entry.target.getAttribute("id");
            }
          });

          document.querySelectorAll("nav a").forEach((link) => {
            link.classList.remove("active");

            if (link.getAttribute("href").includes(currentSection)) {
              link.classList.add("active");
            }
          });
        },
        { threshold: 0.55 }
      );

      document
        .querySelectorAll("#about-us, #blog, #photos, #contact")
        .forEach((section) => {
          observer.observe(section);
        });
    },
    changeFlag() {
      //change image with timer
      const images = document.getElementsByClassName("flag");
      let i = 0;
      images[i].dataset.visible = "true";

      function changeFlag() {
        images[i].dataset.visible = "false";
        i < images.length - 1 ? (i += 1) : (i = 0);
        images[i].dataset.visible = "true";
      }
      setInterval(changeFlag, 4000);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/global.scss";

header,
.container,
.stop-war {
  display: flex;
  align-items: center;
}
header {
  color: var(--clr-primary);
  background: var(--clr-neutral);
  font-family: var(--ff-primary);
  font-size: var(--fs-nav);
  font-weight: bold;
  text-transform: uppercase;

  position: sticky;
  top: 0;
  z-index: 100;

  justify-content: space-between;
  padding-block: 1.5rem;
  padding-inline: var(--padding-global-inline);
}

nav a {
  position: relative;
  &::after {
    content: "";
    width: 0;
    height: 0.2rem;
    display: block;
    position: absolute;
    bottom: -5px;
    background: var(--clr-primary);
    transition: 250ms;
  }

  &:hover::after,
  &:focus-visible::after,
  &.active::after {
    width: 100%;
  }
  &:focus-visible {
    outline: none;
  }
}

ul {
  display: flex;
}
li + li {
  margin-inline-start: min(1.8vw, 2.5rem);
}

.logo {
  max-width: 7.5rem;
  padding-inline-end: 1.5rem;
}
.flag {
  max-width: 6rem;
}
.flag {
  &[data-visible="false"] {
    display: none;
  }
  &[data-visible="true"] {
    display: block;
  }
}
.stop-war img {
  max-width: 6rem;
  @media (max-width: $mobile-break) {
    max-width: 3rem;
  }
}
.stop-war span {
  padding-inline: 1rem 2rem;
  @media (max-width: $mobile-break) {
    padding-inline: 0.5rem;
    font-size: 1rem;
  }
}

.mobile-nav-toggle {
  display: none;
  padding: 0;

  @media (max-width: $tablet-break) {
    --item-width: 2rem;
    display: block;
    position: absolute;
    top: calc(50% - var(--item-width) / 2);
    right: var(--padding-global-inline);
    z-index: 9999;
    background-color: transparent;
    background-image: url("../assets/images/icon-hamburger.svg");
    background-repeat: no-repeat;
    width: var(--item-width);
    border: none;
    aspect-ratio: 1;
    &[aria-expanded="true"] {
      background-image: url("../assets/images/icon-close.svg");
    }

    @media (max-width: $mobile-break) {
      --item-width: 2.5rem;
      top: 3rem;
    }
  }
}

@media (max-width: $tablet-break) {
  nav {
    position: fixed;
    inset: 0 0 0 65%;
    z-index: 1000;

    background-color: rgba(255, 255, 255, 0.9);
    padding: min(30vh, 13rem) 2em;

    transform: translateX(100%);
    transition: transform 450ms ease-out;

    &[data-visible="true"] {
      transform: translateX(0%);
    }
    @supports (backdrop-filter: blur(1rem)) {
      background-color: rgba(255, 255, 255, 0.4);
      backdrop-filter: blur(2rem);
    }
  }

  ul {
    flex-direction: column;
  }

  li + li {
    margin-inline-start: 0;
    margin-block-start: max(4vh, 2rem);
  }
}
</style>
