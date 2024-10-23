import { useEffect, useState } from 'react';
import { artistsData } from '../../../utils';
import './ArtistSlide.scss';
import pickRandomArtists from '../utils';
import { useNavigate } from 'react-router-dom';
import ArtistComponent from './ArtistComponent';

const randomArtists = pickRandomArtists(artistsData, 3); // делаем подборку из 3 случайных артистов

const ArtistSlide = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % randomArtists.length); // % - вычисление остатка делает слайдер бесконечным
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + randomArtists.length) % randomArtists.length);
  };

  const handleNavArtist = (artistCategory) => {
    // Передаем данные категории артиста через state в navigate
    navigate('/artists', {
      state: { selectedCategory: artistCategory }, // Передаем данные категории артиста
    });
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
          <ArtistComponent
            key={index}
            artist={artist}
            index={index}
            activeIndex={activeIndex}
            handleNavArtist={handleNavArtist}
          />
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
