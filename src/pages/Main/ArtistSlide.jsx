import { useEffect, useState } from 'react';
import { artistsData } from '../../utils';
import './ArtistSlide.scss';
import pickRandomArtists from './utils';

const randomArtists = pickRandomArtists(artistsData, 3); // делаем подборку из 3 случайных артистов

const ArtistSlide = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % randomArtists.length); // % - вычисление остатка делает слайдер бесконечным
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + randomArtists.length) % randomArtists.length);
  };

  // таймер для слайдов
  useEffect(() => {
    const intervalId = setInterval(handleNext, 4000);
    return () => clearInterval(intervalId);
  }, [activeIndex]);

  return (
      <section className="carousel">
        <div className="carousel__inner">
          {randomArtists.map((artist, index) => (
            <div key={index} className={`dj ${index === activeIndex ? 'active' : ''}`}>
              <div className="dj__wrap">
                <img src={artist.image} alt="Slide" className="dj__image" />
                <div className="figure dj__figure"></div>
              </div>
              <div className="dj__content">
                <h3 className="title dj__title">About {artist.name}</h3>
                <p className="dj__text">{artist.shortDescription}</p>
                <p className="dj__quote">
                  I try to experiment with various music genres in every track that I make.
                </p>
                <p className="dj__text" id="text">
                  {artist.fullDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="arrow left-arrow" onClick={handlePrev}>
          ←
        </div>
        <div className="arrow right-arrow" onClick={handleNext}>
          →
        </div>
      </section>
  );
};

export default ArtistSlide;
