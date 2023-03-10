<template>
  <footer>
    <div class="footer_content_1">
      <g-link class="logo" href="#"
        ><g-image src="../assets/images/logo/logo.png" alt="Don Bosco Logo" />
      </g-link>
    </div>
    <div class="footer_content_2">
      <div>
        <h3>
          Wir helfen Flüchtlingen in Wien, um <br />Perspektiven zu eröffnen.
          Sei’ auch dabei.
        </h3>
        <g-link class="btn" :to="$static.metadata.calendly_url"
          >Probetermin vereinbaren</g-link
        >
      </div>

      <nav>
        <ul aria-label="Primary" role="list" class="nav-list">
          <li><g-link to="/">Startseite</g-link></li>
          <li><g-link to="/#about-us">Über uns</g-link></li>
          <li><g-link to="/#blog">Blog</g-link></li>
          <li><g-link to="/#photos">Fotos</g-link></li>
        </ul>
      </nav>

      <div id="contact" class="contact">
        <div>
          <h4>Don Bosco für Flüchtlinge</h4>
          <p>Hagenmüllergasse 31</p>
          <p>1030 Wien</p>
          <p>
            Mail:
            <g-link href="mailto:donbosco.deutschkurs@gmail.com"
              >donbosco.deutschkurs@gmail.com</g-link
            >
          </p>
        </div>

        <div class="social-media">
          <g-link
            class="facebook"
            href="https://www.facebook.com/donbosco.fuerfluechtlinge"
          >
          </g-link
          ><g-link
            class="instagram"
            href="https://www.instagram.com/donbosco4refugees/"
          >
          </g-link>
        </div>
      </div>
    </div>
    <div class="footer_content_3">
      <p>© <span id="year"></span> Don Boscos für Flüchtlinge</p>
      <p>
        <g-link to="/impressum">Impressum</g-link> |
        <g-link to="/datenschutz">Datenschutz</g-link>
      </p>
    </div>
  </footer>
</template>

<static-query>
query {
  metadata {
    calendly_url
  }
}
</static-query>

<script>
export default {
  mounted() {
    document.getElementById(
      "year"
    ).innerHTML = new Date().getFullYear().toString();
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/global.scss";

footer {
  color: var(--clr-primary);
  font-family: var(--ff-primary);
  background-image: url("../assets/images/index/bg_img.png");
  padding-block: 4.5rem 1rem;
}

h3 {
  margin-bottom: 1.5rem;
}

h4 {
  font-size: var(--fs-200);
  font-style: italic;
  font-weight: bold;
  line-height: 1.4;
}

nav ul {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

p {
  font-size: var(--fs-200);
  font-style: normal;
  line-height: 1.5;
  color: inherit;

  strong {
    opacity: 0.6;
    font-weight: 600;
  }
}

nav {
  a {
    transition: filter 200ms ease;
  }

  a:hover,
  a:focus-visible {
    filter: brightness(105%);
  }

  @media (max-width: $tablet-break) {
    font-size: var(--fs-200);
    line-height: 1.6;
  }
}

.footer_content_1,
.footer_content_2,
.footer_content_3 {
  padding-inline: var(--padding-global-inline);
}

.footer_content_2 {
  display: flex;
  justify-content: space-between;
  padding-block: 2.5rem 7rem;
  white-space: nowrap;

  @media (max-width: 960px) {
    nav {
      display: none;
    }
  }

  @media (max-width: 850px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    padding-block-end: 0.4rem;

    h3 {
      margin-bottom: 0;
    }
    .btn {
      display: none;
    }
  }
}
.footer_content_3 {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid var(--clr-primary);
  padding-block-start: 1rem;

  p {
    font-size: var(--fs-200);
  }

  @media (max-width: 500px) {
    flex-direction: column-reverse;
    text-align: center;

    p:first-child {
      padding-block-start: 0.4rem;
    }
  }
}
.logo {
  display: block;
  max-width: 9.5rem;

  @media (max-width: 850px) {
    margin-inline: auto;
  }
}
.contact {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 850px) {
    padding-block: 4rem;
  }
}
.social-media {
  padding-block-start: 0.6rem;
}
.facebook,
.instagram {
  background-repeat: no-repeat;
  display: inline-block;
  width: 2rem;
  height: 2rem;
}
.facebook {
  background-image: url("../assets/images/icon/facebook-f.svg");
  padding-right: 2.5rem;
}
.instagram {
  background-image: url("../assets/images/icon/instagram.svg");
}
</style>
