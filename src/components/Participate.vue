<template>
  <section class="participate">
    <h2>
      Komm’ einfach mal vorbei.<br />
      So geht’s:
    </h2>
    <div class="participate-container">
      <figure>
        <div class="image-container">
          <g-image
            class="image"
            src="../assets/images/photo-section/mithelfen-img1.jpg"
          />
        </div>
        <figcaption>
          <h3>1. Probetermin vereinbaren</h3>
          <p>
            Klicke auf den Button <a>„Probetermin vereinbaren“</a> und such’ dir
            einen Abend aus, an dem du dir 2 Stunden Zeit nimmst.
          </p>
        </figcaption>
      </figure>
      <figure>
        <div class="image-container">
          <g-image
            class="image"
            src="../assets/images/photo-section/mithelfen-img2.jpg"
          />
        </div>
        <figcaption>
          <h3>2. Sei bei einem Kurs dabei</h3>
          <p>
            Du kommst an dem Tag, den du dir ausgesucht hast und bist einmal
            live dabei, wenn wir einen Deutschkurs für Flüchtlinge veranstalten.
          </p>
        </figcaption>
      </figure>
      <figure>
        <div class="image-container">
          <g-image
            class="image"
            src="../assets/images/photo-section/mithelfen-img3.jpg"
          />
        </div>
        <figcaption>
          <h3>3. Erlebe die Freude vor Ort</h3>
          <p>
            Die Freude, selbstlos etwas Gutes zu tun, kann man gar nicht in
            Worte fassen. Auch du wirst das nach diesen 2 Stunden fühlen.<br />
            Komm’ vorbei!
          </p>
        </figcaption>
      </figure>
    </div>
    <button>Probetermin vereinbaren</button>
  </section>
</template>

<style lang="scss" scoped>
@import "~/assets/styles/global.scss";

figure {
  max-width: 40rem;
  min-width: 0;
}
figure:nth-child(2) {
  padding-inline: 4rem;
  img {
    object-position: 0 10%;
  }
}
figure:nth-child(3) {
  img {
    object-position: 0 10%;
  }
}

figcaption {
  margin-block-start: 2rem;
}
figcaption p {
  max-width: 28ch;
  line-height: 1.6;

  margin-inline: auto;
  padding-block-start: 0.75rem;

  br {
    display: none;
  }
}
a {
  text-decoration: underline;
  text-underline-offset: 0.3rem;
  color: var(--clr-primary);
  white-space: nowrap;
}

.participate {
  text-align: center;
  padding-inline: 11.25rem;
  padding-block: 9rem;

  @media (max-width: $first-break) {
    padding-inline: var(--padding-global-inline);
  }
}
.participate-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;

  padding-block: 2.5rem 5rem;
}
.image-container {
  background-image: url("../assets/images/index/rahmen2.png");
  background-repeat: no-repeat;
  background-size: 100%;

  width: 27.5rem;
  max-width: 100%;
}

.image-container > img {
  padding: 6.5% 4.1% 13% 4.5%;
  object-fit: cover;
  aspect-ratio: 1.3;
}

@media (max-width: $tablet-break) {
  .participate-container {
    flex-direction: column;
    align-items: center;

    padding-block: 4rem 7rem;

    a {
      white-space: normal;
    }

    figure {
      display: flex;
      align-items: center;
      text-align: justify;

      max-width: 65rem;
      width: 100%;
      min-width: 0;
    }
    figure:nth-child(2) {
      padding-inline: 0;
      flex-direction: row-reverse;

      padding-block: 9vw;
    }

    figcaption p {
      br {
        display: none;
      }
    }

    /* flex play */
    @media (min-width: 626px) {
      figure:nth-child(odd) {
        justify-content: left;

        .image-container {
          margin-inline-end: 5vw;
        }
      }

      figure:nth-child(even) {
        justify-content: right;

        .image-container {
          margin-inline-start: 5vw;
        }
      }
    }
    figcaption {
      margin-block-start: 1rem;
    }
    figcaption h3 {
      flex-shrink: 1;
    }
    figcaption p {
      max-width: 30ch;
    }

    h3 {
      min-width: 15ch;
    }
  }
}

@media (max-width: 1066px) {
  a {
    white-space: normal;
  }
  figcaption p {
    br {
      display: block;
    }
  }
}
@media (max-width: 625px) {
  .participate-container {
    figure {
      text-align: center;
      flex-direction: column;

      & > * {
        margin-inline: 0;
      }
    }
    figure:nth-child(2) {
      flex-direction: column;
    }

    .image-container {
      margin-block-end: 2rem;
      width: 30rem;
      max-width: 50rem;
    }
  }
}

@media (min-width: 450px) {
  h2 br {
    display: none;
  }
}
</style>
