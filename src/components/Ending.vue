<template>
  <section class="ending">
    <h2>
      Es ist nie zu spät, etwas Gutes zu tun.<br />
      Bei uns bewirkst du<br />
      mit deiner Anwesenheit ganz viel.
    </h2>
  </section>
</template>

<style lang="scss" scoped>
@import "~/assets/styles/global.scss";

.ending {
  text-align: center;

  padding-block: clamp(3rem, 7.5vw, 9rem);
  padding-inline: var(--padding-global-inline);

  h2 {
    font-size: min(2.6vw, var(--fs-600));

    br:last-of-type {
      display: none;
    }

    @media (max-width: $tablet-break) {
      font-size: 3.4vw;
    }

    @media (max-width: $mobile-break) {
      br:last-of-type {
        display: block;
      }
      font-size: 4vw;
    }
  }
}
</style>
