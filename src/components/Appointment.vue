<template>
  <section class="appointment">
    <div class="content">
      <h2>
        Tu anderen und<br />
        damit auch dir selbst etwas Gutes.
      </h2>
      <p>
        Nimm dir 2 Stunden, teile deine Sprache Deutsch und bereichere damit
        (d)ein ganzes Leben.
      </p>
      <button>Probetermin vereinbaren</button>
    </div>
    <div class="image">
      <g-image src="../assets/images/photo-section/haende.jpg" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "~/assets/styles/global.scss";
.appointment {
  background-image: url("../assets/images/index/bg_img.png");

  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding-block: 3.75rem;
}
.content {
  padding-inline-end: min(10.5vw, 12.5rem);

  @media (max-width: $first-break) {
    padding-inline-end: 8vw;
  }
}
h2 {
  max-width: 16ch;
}
p,
button {
  margin-inline-start: 2.5rem;
}

p {
  margin-block: 3.25rem 2.5rem;
  max-width: 28ch;
}

.image {
  width: min(50vw, 61rem);
  aspect-ratio: 1.3;
  object-fit: cover;

  @media (max-width: 1600px) {
    aspect-ratio: 1.2;
  }
  @media (max-width: 1400px) {
    aspect-ratio: 1.3;
  }
}

@media (max-width: $tablet-break) {
  .appointment {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    text-align: center;

    padding-block: 7rem;
    padding-inline: var(--padding-global-inline);
  }
  .content {
    padding: 0;
  }
  h2 {
    max-width: 20ch;
    margin-inline: auto;
    br {
      display: none;
    }
  }
  p,
  button {
    margin-inline-start: 0;
  }
  p {
    margin-block: 2.8rem 2rem;
    max-width: 40ch;
  }
  .image {
    display: none;
  }
}
</style>
