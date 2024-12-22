import audioFile from "../../assets/dj-large.jpg";
import img1Large from "../../assets/img-large.jpg";
import img2Large from "../../assets/marcela-laskoski-YrtFlrLo2DQ-unsplash-large.jpg";
import fanbaseImg1Large from "../../assets/marcela-laskoski-YrtFlrLo2DQ-unsplash-large.jpg";
import fanbaseImg1Small from "../../assets/marcela-laskoski-YrtFlrLo2DQ-unsplash-small.jpg";
import img3Large from "../../assets/jiroe-matia-rengel-b9kh72kOcdM-unsplash-large.jpg";
import fanbaseImg3Large from "../../assets/jiroe-matia-rengel-b9kh72kOcdM-unsplash-large.jpg";
import fanbaseImg3Small from "../../assets/jiroe-matia-rengel-b9kh72kOcdM-unsplash-small.jpg";
import single1Large from "../../assets/singles/rene-bohmer-YeUVDKZWSZ4-unsplash-large.jpg";
import single1Small from "../../assets/singles/rene-bohmer-YeUVDKZWSZ4-unsplash-small.jpg";
import single2Large from "../../assets/singles/xu-haiwei-iE7AmEF-9wk-unsplash-large.jpg";
import single2Small from "../../assets/singles/xu-haiwei-iE7AmEF-9wk-unsplash-small.jpg";
import single3Large from "../../assets/singles/daniele-levis-pelusi-Vo6A7rwmAJk-unsplash-large.jpg";
import single3Small from "../../assets/singles/daniele-levis-pelusi-Vo6A7rwmAJk-unsplash-small.jpg";
import fanbaseImg2Large from "../../assets/djvibe-studiox-BcPOnSqC4Cw-unsplash-large.jpg";
import fanbaseImg2Small from "../../assets/djvibe-studiox-BcPOnSqC4Cw-unsplash-small.jpg";
import ArtistSlide from "./ArtistSlide/ArtistSlide";
import ServicesSection from "./ServicesSection/ServicesSection";

const Main = () => {
  return (
    <>
      <section className="feel">
        <div className="container feel__container">
          <h2 className="title">Ваше событие - Наш ритм!</h2>
          <svg className="feel__subtitle">
            <text x="0" y="85%">
              Место, где музыка встречает ваше вдохновение.
            </text>
          </svg>

          <audio className="audio" controls>
            <source src={audioFile} type="audio/mpeg" />
              Your browser does not support the audio element.
          </audio>
        </div>
      </section>

      <ArtistSlide />
      <section className="gallery-home">
        <div className="gallery-home__top">
          <div className="gallery-home__item">
            <img className="gallery-home__img" src={img1Large} alt="Gallery Home Item" />
          </div>
          <div className="gallery-home__item">
            <img className="gallery-home__img" src={img2Large} alt="Gallery Home Item" />
          </div>
          <div className="gallery-home__item">
            <img className="gallery-home__img" src={img3Large} alt="Gallery Home Item" />
          </div>
        </div>
        <div className="gallery-home__bottom">
          <div className="gallery-home__item">
            <img className="gallery-home__img" src={img1Large} alt="Gallery Home Item" />
          </div>
          <div className="gallery-home__item">
            <img className="gallery-home__img" src={img2Large} alt="Gallery Home Item" />
          </div>
        </div>
      </section>

      <ServicesSection />
      
      <section className="fanbase">
        <div className="container fanbase__container">
          <div className="fanbase__parallax-pics">
            <picture>
              <source srcSet={fanbaseImg1Small} media="(max-width: 480px)" />
              <img src={fanbaseImg1Large} alt="Fanbase" width="178px" height="126px" />
            </picture>
            <picture>
              <source srcSet={fanbaseImg2Small} media="(max-width: 480px)" />
              <img src={fanbaseImg2Large} alt="Fanbase" width="217px" height="152px" />
            </picture>

            <picture>
              <source srcSet={fanbaseImg3Small} media="(max-width: 480px)" />
              <img src={fanbaseImg3Large} alt="Fanbase" width="216px" height="153px" />
            </picture>
          </div>
          <div className="fanbase__content">
            <h3 className="title">Join the Fanbase</h3>
            <span className="fanbase__text">
              Take your chance to join DJ Angerone’s fan club to receive exclusive tracks, free
              downloads, and other great offers.
            </span>
            <div className="fanbase__list-item">
              <div className="fanbase__deco"></div>
              <div className="fanbase__list-item__content">
                <h4 className="fanbase__subtitle">Exclusive Releases</h4>

                <span className="fanbase__text">
                  Get access to unreleased albums and EPs before they are published.
                </span>
              </div>
            </div>

            <div className="fanbase__list-item">
              <div className="fanbase__deco"></div>
              <div className="fanbase__list-item__content">
                <h4 className="fanbase__subtitle">Full DJ Sets & Podcasts</h4>

                <span className="fanbase__text">
                  Listen and download full sets and podcasts with tracklists by DJ Angerone.
                </span>
              </div>
            </div>

            <div className="fanbase__list-item">
              <div className="fanbase__deco"></div>
              <div className="fanbase__list-item__content">
                <h4 className="fanbase__subtitle">Шоу диджеев</h4>

                <span className="fanbase__text">
                  Free tracks and remixes are regularly published for DJ Angerone’s fan club.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="release">
        <div className="container release__container">
          <h3 className="title release__title">Latest Releases</h3>
          <span className="release__text">
            Here are the most recent singles, EPs, and other releases that DJ Angerone has worked
            on. You can stream and buy them on our website and a variety of digital stores.
          </span>
          <div className="release__singles">
            <div className="release__card">
              <picture className="release__rect">
                <source srcSet={single1Small} media="(max-width: 480px)" />
                <img src={single1Large} width="318" height="335" alt="" />
              </picture>
              <h4 className="release__card_title">Intense</h4>
              <span className="release__description">Intense</span>
              <span className="release__date">2017</span>
            </div>

            <div className="release__card">
              <picture className="release__rect">
                <source srcSet={single2Small} media="(max-width: 480px)" />
                <img src={single2Large} width="318" height="335" alt="" />
              </picture>
              <h4 className="release__card_title">2018</h4>
              <span className="release__description">Trance Year Mix</span>
              <span className="release__date">2019</span>
            </div>

            <div className="release__card">
              <picture className="release__rect">
                <source srcSet={single3Small} media="(max-width: 480px)" />
                <img src={single3Large} width="318" height="335" alt="" />
              </picture>
              <h4 className="release__card_title">MY SPACE</h4>
              <span className="release__description">My space</span>
              <span className="release__date">2020</span>
            </div>
          </div>
        </div>
      </section>

      <section className="subscribe">
        <div className="container subscribe__container">
          <h2 className="title">Subscribe to Stay Informed</h2>
          <form action="" className="subscribe__form">
            <input
              type="email"
              className="subscribe__form__email"
              placeholder="Your e-mail"
              required
            />

            <input
              type="submit"
              value="Subscribe"
              className="button primary subscribe__form__button"
            />
          </form>
        </div>
      </section>
      <section className="anonces container">
        <div className="title anonces__title">Ближайшие мероприятия</div>
        <div className="anonces__items">
          <div className="anonces__item">
            <div className="anonces__date">
              14 Сен<i>|</i>Сб<i>|</i>10:00
            </div>
            <h3 className="anonces__subtitle">Фандом фест вконтакте</h3>
          </div>
          <div className="anonces__item">
            <div className="anonces__date">
              14 Сен<i>|</i>Сб<i>|</i>10:00
            </div>
            <h3 className="anonces__subtitle">Фандом фест вконтакте</h3>
          </div>
          <div className="anonces__item">
            <div className="anonces__date">
              14 Сен<i>|</i>Сб<i>|</i>10:00
            </div>
            <h3 className="anonces__subtitle">Фандом фест вконтакте</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
