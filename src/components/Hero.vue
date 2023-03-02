<template>
  <section class="hero" id="hero">
    <figure class="image-container">
      <div class="image">
        <g-image
          src="../assets/images/photo-section/mithelfen-img1.png"
          alt=""
        />
      </div>
      <figcaption>
        <blockquote>
          Der Deutschkurs hat mein Leben verändert und mir eine Perspektive
          eröffnet.
        </blockquote>
        <p class="author">Rami, 2015 vor dem Krieg in Syrien geflüchtet.</p>
      </figcaption>
    </figure>
    <div class="content">
      <h1>Du willst dich in Wien <br />für Flüchtlinge einsetzen?</h1>
      <p>
        Nimm dir 2 Stunden, teile deine Sprache Deutsch und bereichere damit
        (d)ein ganzes Leben.
      </p>
      <p>
        Komm zu einem unserer Deutschkurse <br />für Flüchtlinge aus
        verschiedenen Ländern.
      </p>
      <button>Probetermin vereinbaren</button>
    </div>
    <div class="background-languages">
      <span class="welcome">
        Willkommen.<br />
        اهلا وسهلا <br />
        Ласкаво просимо<br />
        Willkommen.<br />
        اهلا وسهلا <br />
        Ласкаво просимо<br />
        Willkommen.<br />
        اهلا وسهلا <br />
        Ласкаво просимо<br />
        Willkommen.<br />
        اهلا وسهلا <br />
        Ласкаво просимо<br />
        Willkommen.<br />
        اهلا وسهلا <br />
        Ласкаво просимо<br />
      </span>
    </div>
  </section>
</template>

<script lang="js">

export default {
  mounted() {
    const welcomeContainer = document.querySelector(".background-languages");
    const welcomeSpan = document.querySelector(".welcome");

    for (let i = 1; i < 11; i++) {
    const newNode = welcomeSpan.cloneNode(true);
    newNode.style.left = `-${3 * i}rem`;

    welcomeContainer.appendChild(newNode);
    }
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/global.scss";

.hero {
  --clr-fig-caption: #707070;
  --clr-languages-bg: #d4c5b581;
  --clr-languages-font: #ffffff74;

  overflow: hidden;
}

blockquote {
  color: var(--clr-fig-caption);
  font-family: var(--ff-primary);
  font-size: var(--fs-300);
  font-style: italic;
  line-height: 1.13;

  margin-block-end: 0.75rem;
}

blockquote::before {
  content: "„";
}

blockquote::after {
  content: "“";
}

button {
  margin-block-start: 2.5rem;
}

figcaption {
  text-align: center;
  max-width: 100%;

  padding-block-start: 1rem;

  padding-inline: min(5vw, 5.5rem);

  @media (max-width: $first-break) {
    padding-inline: 2.5vw;
  }
}

p.author {
  color: var(--clr-fig-caption);
  font-family: var(--ff-primary);
  font-size: var(--fs-100);
  line-height: 1.2;
}

.background-languages {
  position: absolute;
  inset: 0 75% 0 -1rem;
  padding-block-start: 0.75rem;

  background-color: var(--clr-languages-bg);

  color: var(--clr-languages-font);
  font-family: var(--ff-secondary);
  font-size: var(--fs-600);
  font-weight: bold;
  line-height: 1.4;
}

.content {
  margin-block-end: 1rem;

  margin-left: min(9vw, 10rem);
}

.content p,
button {
  margin-inline-start: 2.5rem;
}

.content p:nth-of-type(1) {
  margin-block-start: 1.75rem;
  max-width: 28ch;
}

.content p:nth-of-type(2) {
  margin-block-start: 1.125rem;
  max-width: 34ch;
}

.hero {
  background-image: url("../assets/images/index/bg_img.png");

  display: flex;
  padding-block: 6rem;
  align-items: center;

  position: relative;

  padding-inline: var(--padding-global-inline);
}

.hero::after {
  content: "";

  position: absolute;
  bottom: 0;
  right: min(9%, 10.5rem);

  width: min(12%, 13.5rem);
  aspect-ratio: 0.96;

  background-image: url("../assets/images/index/heart-with-hands.svg");
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: $first-break) {
    right: 4%;
  }
}

.image-container,
.content {
  z-index: 1;
}

.image-container {
  display: flex;
  flex-direction: column;

  background-color: var(--clr-neutral);

  padding-block: 2.5rem 7rem;
  padding-inline: 1rem;

  max-width: min(35vw, 39.5rem);
}

.image {
  position: relative;

  background-image: url("../assets/images/index/rahmen.png");
  background-repeat: no-repeat;
  background-size: 100%;

  width: 100%;
}

.image > img {
  width: 100%;
  padding: 13% 12% 20% 11%;
}

@media (max-width: $tablet-break) {
  button {
    margin-block-start: 3rem;
    margin-inline: auto;
  }

  figcaption {
    padding-block-start: 0;
    padding-inline-start: 0;
  }

  .background-languages {
    padding-top: 0;
    right: 0;
    bottom: 80%;

    font-size: 20px;

    white-space: nowrap;

    span {
      position: relative;
      display: block;
    }

    br {
      display: none;
    }
  }

  .content {
    margin-left: 0;

    text-align: center;

    margin-block: 8% 10%;
  }

  .content p {
    margin-inline: auto;
  }

  .hero {
    flex-direction: column;
  }

  .hero::after {
    right: min(12%, 14.5rem);
    width: min(40%, 27rem);
    opacity: 0.25;
  }

  .image-container {
    flex-direction: row;
    align-items: center;
    max-width: 90%;

    padding: 1rem;
  }

  .image {
    width: 80%;
  }

  .image img {
    padding-bottom: 20%;
  }
}

@media (max-width: $mobile-break) {
  figcaption {
    text-align: center;

    padding-inline: 3rem;
  }

  .background-languages {
    display: none;
  }

  .content {
    margin-block-start: 4rem;
  }

  .hero {
    padding-block-start: 2rem;
  }

  .hero::after {
    right: min(9%, 10.5rem);
    width: min(60%, 23.5rem);
    opacity: 0.3;
  }

  .image-container {
    max-width: 100%;
    padding: 0;
    padding-block-end: 2rem;
    flex-direction: column;
    justify-content: center;
  }

  .image {
    width: 100%;
  }
}
</style>
