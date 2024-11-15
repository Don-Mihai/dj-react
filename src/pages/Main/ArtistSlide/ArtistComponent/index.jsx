const ArtistComponent = ({ index, artist, activeIndex, handleNavArtist }) => {
  return (
    <div
      key={index}
      className={`dj ${index === activeIndex ? "active" : ""}`}
      onClick={index === activeIndex ? () => handleNavArtist(artist.category) : null}
    >
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
  );
};

export default ArtistComponent;
