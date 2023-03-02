<template>
  <section id="photos" class="photos">
    <h2>Freude erleben und teilen:</h2>
    <p>
      Unsere Fotogalerie ist bunt und voller Leben.<br />
      Schau’ dich gerne um:
    </p>
    <div class="photos-grid">
      <div class="photo">
        <g-image
          src="../assets/images/photo-section/photos-1.jpg"
          alt=""
        ></g-image>
      </div>
      <div class="photo">
        <g-image
          src="../assets/images/photo-section/photos-2.png"
          alt=""
        ></g-image>
      </div>
      <div class="photo">
        <g-image
          src="../assets/images/photo-section/photos-4.jpg"
          alt=""
        ></g-image>
      </div>
      <div class="photo">
        <g-image
          src="../assets/images/photo-section/photos-9.jpg"
          alt=""
        ></g-image>
      </div>
      <div class="photo">
        <g-image
          src="../assets/images/photo-section/photos-3.jpg"
          alt=""
        ></g-image>
      </div>
      <div class="photo">
        <g-image
          src="../assets/images/photo-section/photos-8.jpg"
          alt=""
        ></g-image>
      </div>
      <div class="photo">
        <g-image
          src="../assets/images/photo-section/photos-5.jpg"
          alt=""
        ></g-image>
      </div>
    </div>
    <g-link class="btn" to="/photos">Zu allen Fotos</g-link>
  </section>
</template>

<style lang="scss" scoped>
@import "../assets/styles/global.scss";

.photos {
  text-align: center;
  padding: 9rem min(16vw, 17.5rem);

  br {
    display: none;
  }
  @media (max-width: $tablet-break) {
    padding-inline: var(--padding-global-inline);
  }

  @media (max-width: $mobile-break) {
    br {
      display: block;
    }
  }
}
.photos h2 {
  padding-bottom: 0.5rem;
}

.photos-grid {
  padding-block: 3.5rem 6rem;
  display: grid;
  gap: 1.5rem;

  grid-template-columns: repeat(12, 1fr);

  @media (max-width: $tablet-break) {
    gap: 1rem;
  }
  @media (max-width: $mobile-break) {
    grid-template-columns: repeat(2, 1fr);
    .photo:nth-of-type(even) {
      grid-column: 2/3;
      img {
        aspect-ratio: 1;
      }
    }
    .photo:nth-of-type(odd) {
      grid-column: 1/2;
      img {
        aspect-ratio: 1;
      }
    }
    .photo:last-child {
      display: none;
    }
  }
  @media (max-width: 400px) {
    display: block;
    padding-block: 2.5rem 3rem;

    .photo:nth-child(n) {
      img {
        aspect-ratio: 1.4;
        padding-block-end: 2rem;
      }
    }
  }
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.photo:nth-child(1) {
  grid-column: 1/8;

  img {
    aspect-ratio: 9/2;
  }
}
.photo:nth-child(2) {
  grid-column: 8/13;

  img {
    aspect-ratio: 1.4;
  }
}
.photo:nth-child(3) {
  grid-column: 1/5;

  img {
    aspect-ratio: 1;
  }
}

.photo:nth-child(4) {
  grid-column: 5/9;

  img {
    aspect-ratio: 1;
  }
}

.photo:nth-child(5) {
  grid-column: 9/13;

  img {
    aspect-ratio: 1;
  }
}

.photo:nth-child(6) {
  grid-column: 1/6;

  img {
    aspect-ratio: 1.4;
  }
}
.photo:nth-child(7) {
  grid-column: 6/13;

  img {
    aspect-ratio: 9/2;
  }
}
</style>
