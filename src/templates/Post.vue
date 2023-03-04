<template>
  <Layout>
    <section class="article">
      <div>
        <g-image
          :src="$page.post.featured_image.src"
          :alt="$page.post.featured_image.alt"
        ></g-image>
        <article>
          <h1>{{ $page.post.title }}</h1>
          <div class="date">
            <svg
              class="calendar-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"
              />
            </svg>
            <span>{{ $page.post.date }}</span>
          </div>
          <div class="share-buttons">
            <FacebookShareButton
              :url="
                $route
                  ? $static.metadata.siteUrl + $route.path
                  : $static.metadata.siteUrl
              "
            />
            <TwitterShareButton
              :url="
                $route
                  ? $static.metadata.siteUrl + $route.path
                  : $static.metadata.siteUrl
              "
            />
            <EmailShareButton
              :url="
                $route
                  ? $static.metadata.siteUrl + $route.path
                  : $static.metadata.siteUrl
              "
            />
            <PinterestShareButton
              :url="
                $route
                  ? $static.metadata.siteUrl + $route.path
                  : $static.metadata.siteUrl
              "
              :imagePath="
                `${$static.metadata.siteUrl}${
                  $page.post.featured_image.src.src
                }`
              "
              :description="$page.post.description"
            />
          </div>
          <div class="article-content" v-html="$page.post.content"></div>
          <div class="gallery" v-if="$page.post.gallery_images.length > 0">
            <h2>Gallerie</h2>
            <div class="gallery-container">
              <figure
                v-for="(image, index) in $page.post.gallery_images"
                :key="index"
              >
                <g-image
                  @click="showLightBox"
                  :src="image.src"
                  :alt="image.alt"
                ></g-image>
              </figure>
            </div>
            <LightBox
              :imageObjects="$page.post.gallery_images"
              :visible="lightBoxVisible"
              @closeLightBox="hideLightBox"
            >
            </LightBox>
          </div>
        </article>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    id
    title
    description
    date (format: "DD.MM.YYYY")
    content
    gallery_images {
      src
      alt
    }
    featured_image {
      src
      alt
    }
  }
  metadata {
    siteUrl
  }
}
</page-query>

<script>
import EmailShareButton from "../components/share_buttons/EmailShareButton.vue";
import FacebookShareButton from "../components/share_buttons/FacebookShareButton.vue";
import PinterestShareButton from "../components/share_buttons/PinterestShareButton.vue";
import TwitterShareButton from "../components/share_buttons/TwitterShareButton.vue";
import LightBox from "../components/LightBox.vue";
import SEO from "../mixins/SEO.vue";

export default {
  components: {
    EmailShareButton,
    FacebookShareButton,
    PinterestShareButton,
    TwitterShareButton,
    LightBox,
    SEO,
  },
  mixins: [SEO],
  data() {
    return {
      lightBoxVisible: false,
    };
  },
  methods: {
    showLightBox() {
      this.lightBoxVisible = true;
    },
    hideLightBox() {
      this.lightBoxVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/global.scss";
h1 {
  max-width: 800px;
  word-wrap: break-word;

  @media (max-width: $mobile-break) {
    font-size: 8vw;
    line-height: 1.1;
  }
}

section {
  padding-block: 6rem;
}

section.article > div {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 2rem;
  margin-block-end: 6rem;
  padding-inline: var(--padding-global-inline);

  @media (max-width: 800px) {
    grid-template-columns: 1fr 2fr;
  }
  @media (max-width: $mobile-break) {
    display: block;
  }
  & > img {
    padding-block-start: 1em;
  }
  .article-content {
    margin-block-start: 2em;
  }
}

.date {
  // @include font-text;
  span {
    padding-inline-start: 0.5em;
    font-family: var(--ff-primary);
  }
  .calendar-icon {
    fill: black;
    aspect-ratio: 1;
    display: inline-block;
    vertical-align: top;
    width: 1.2em;
  }
}
.gallery {
  @media (max-width: $mobile-break) {
    pointer-events: none;
  }
  h2 {
    //@include font-title;
    margin-block-end: 0.5em;
    margin-block-start: 1em;
    word-wrap: break-word;
    @media (max-width: $mobile-break) {
      font-size: 6vw;
    }
  }
  .gallery-container {
    display: block;
    columns: 20rem;
    gap: 1rem;
    figure {
      cursor: pointer;
      margin-bottom: 1rem;
      break-inside: avoid;
    }
  }
}

.share-buttons {
  margin-block-start: 1rem;
}
</style>
