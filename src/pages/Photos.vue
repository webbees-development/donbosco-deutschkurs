<template>
  <Layout>
    <section class="photos">
      <h2>Freude erleben und teilen:</h2>
      <p>
        Unsere Fotogalerie ist bunt und voller Leben. <br />Schau’ dich gerne
        um:
      </p>
      <!-- <div class="photos-container">
        <figure v-for="(photo, index) in photos" :key="index">
          <g-image :src="photo.pathLong"></g-image>
        </figure>
      </div> -->
      <div class="photos-container">
        <figure v-for="(photo, index) in photos" :key="index">
          <div class="photo-card">
            <g-image class="image" :src="photo.pathLong" />
          </div>
        </figure>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      photos: [],
    };
  },
  mounted() {
    this.importAll(
      require.context(
        "../assets/images/photo-section",
        true,
        /\.(png|jpg|svg)$/
      )
    );
  },
  methods: {
    importAll(r) {
      r.keys().forEach((key) =>
        this.photos.push({ pathLong: r(key), pathShort: key })
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/global.scss";

.photos {
  text-align: center;
  padding-inline: var(--padding-global-inline);
  padding-block: 4rem 10rem;
  br {
    display: none;
  }

  @media (max-width: 474px) {
    br {
      display: block;
    }
  }
}

.photos-container {
  padding-block: 4rem 6rem;

  @media (max-width: 720px) {
    padding-block: 2rem 3rem;
  }

  @media (max-width: 488px) {
    padding-block: 3rem 3rem;
  }
}

.photo-card {
  background-image: url("../assets/images/index/rahmen2.png");
  background-repeat: no-repeat;
  background-size: 100%;

  width: 25rem;
  max-width: 100%;
  @media (max-width: 1079px) {
    width: 20rem;
  }
  @media (max-width: 879px) {
    width: 16rem;
  }
  @media (max-width: 720px) {
    width: 20rem;
  }
  @media (max-width: 488px) {
    width: 28rem;
  }
}
.photo-card > img {
  padding: 6.5% 4.1% 13% 4.5%;
  object-fit: cover;
  aspect-ratio: 1.3;
}

figure {
  display: inline-block;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  margin: 1rem;

  max-width: 40rem;
  min-width: 0;

  @media (max-width: 488px) {
    transform: rotate(12deg);
  }
}

figure:nth-last-of-type(even) {
  transform: rotate(12deg);

  @media (max-width: 720px) {
    transform: rotate(0);
  }
}
</style>
