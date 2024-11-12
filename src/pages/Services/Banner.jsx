import { useState } from 'react';
import { artistsData } from '../../utils';
import ArtistCard from '../Artists/ArtistCard';

const Banner = ({ text, category }) => {
  const [active, setActive] = useState(false);
  const filteredArtists = artistsData.filter((artist) => artist.category === category);

  const handleServiceClick = (category) => {
    if (artistsData.some((artist) => artist.category === category)) {
      setActive(category === active ? false : category);
    }
  };

  return (
    <div
      className={`banner ${active ? 'active' : ''}`}
      onClick={() => handleServiceClick(category)}>
      <img
        src={`https://via.placeholder.com/300x200?text=${text}`}
        alt={`${text}`}
        className="banner-image"
      />
      <div className="banner-text">{text}</div>
      <div className="banner-artists">
        {filteredArtists.map((artist, i) => (
          <ArtistCard key={i} artist={artist} />
        ))}
      </div>
    </div>
  );
};

export default Banner;
