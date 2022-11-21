<template>
  <section id="about-us" class="about-us">
    <g-image src="../assets/images/sprachen.png" />
    <div>
      <h2>
        Wir helfen Flüchtlingen in Wien, um Perspektiven zu eröffnen. Sei auch
        dabei!
      </h2>
      <p>
        Die Initiative „Don Bosco für Flüchtlinge“ wurde im 2015 von Salesianern
        Don Boscos gemeinsam mit Freiwilligen gestartet. Derzeit im Angebot sind
        zwei Deutsch-Intensivkurse, Beratung sowie Kultur- und Freizeitangebote,
        die alle im Salesianum abgehalten werden. Mit den Angeboten werden
        derzeit rund 70 geflüchtete Menschen erreicht. Alle Aktivitäten für
        Flüchtlinge beruhen auf freiwilligem Engagement und rund 60 Freiwillige
        engagieren sich ein oder mehrmals pro Woche.
      </p>
      <!-- <button>Probetermin vereinbaren</button> -->
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "../assets/styles/global.scss";

g-image {
  width: max(25vw, 51.6rem);

  @media (max-width: $tablet-break) {
    width: 40rem;
  }
  @media (max-width: $mobile-break) {
    width: 100%;
  }
}
.about-us {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 9rem min(16vw, 19.5rem);

  @media (max-width: $first-break) {
    padding-inline: var(--padding-global-inline);
  }
}

.about-us div {
  text-align: center;
  background-image: url("../assets/images/bg_img.png");

  padding: 5.5rem 7.75rem;

  h2 {
    max-width: 30ch;
    margin-inline: auto;
  }
  @media (max-width: $tablet-break) {
    padding: 8vw 8vw;
  }
}
.about-us p {
  margin-block: 2.8rem 2rem;
  max-width: 70ch;
  margin-inline: auto;
}
</style>
