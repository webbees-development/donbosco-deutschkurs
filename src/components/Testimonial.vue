<template>
  <section class="testimonial">
    <div>
      <blockquote>
        <h2>
          „Ich träume von einer Welt, wo jede Frau und jedes Mädchen groß und
          wild träumen darf und die volle Macht über ihr Leben haben kann.“
        </h2>
        <p>
          Nour, 2015 aus Syrien geflüchtet. <br />Hat bei uns Deutsch gelernt
          und ist nun <br />Turnusärztin in St. Pölten.
        </p>
      </blockquote>
    </div>
    <g-image
      style="visibility:hidden"
      src="../assets/images/index/zitat-img.png"
    />
  </section>
</template>

<style lang="scss" scoped>
@import "~/assets/styles/global.scss";

.testimonial {
  position: relative;
  background-image: url("../assets/images/index/zitat-img.png");
  background-color: rgba(0, 0, 0, 0.4);
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: overlay;

  @media (max-width: 1400px) {
    background-color: rgba(0, 0, 0, 0.5);
  }
}
img {
  width: 100%;
}
div {
  position: absolute;
  bottom: min(10vw, 12rem);
  right: min(5.6vw, 10rem);

  br:last-of-type {
    display: none;
  }
  @media (max-width: $first-break) {
    bottom: 5vw;
    right: var(--padding-global-inline);
    h2 {
      max-width: 33ch;
    }
  }
  @media (max-width: 1400px) {
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    h2 {
      font-size: 4em;
      line-height: 1.5;
    }
  }
}
h2,
p {
  color: var(--clr-neutral);
}

h2 {
  font-family: "Nothing You Could Do", "sans-serif";
  max-width: 38ch;
  margin-inline: auto;
  padding-block-end: 2.6rem;
}

p {
  font-size: var(--fs-400);
  line-height: 1.6;
}

@media (max-width: $tablet-break) {
  img {
    display: none;
  }
  div {
    position: relative;
    padding-inline: var(--padding-global-inline);
    padding-block: 10rem;

    h2 {
      font-size: 3.2em;
      line-height: 1.4;
    }
  }
}
@media (max-width: 800px) {
  div {
    padding-block: 7rem;
    h2 {
      font-size: 2.8em;
      line-height: 1.4;
    }
  }
}

@media (max-width: 700px) {
  div h2 {
    max-width: 32ch;
  }
}

@media (max-width: 470px) {
  p br:last-of-type {
    display: block;
  }
}
@media (max-width: 375px) {
  div h2 {
    max-width: 23ch;
  }
}
</style>
