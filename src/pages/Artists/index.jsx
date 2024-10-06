import "./Artists.scss";
import { useState } from "react";
import ArtistCard from "./ArtistCard";
import { artistsData } from "../../utils";

// Создаем массив топ-диджеев
const topDjs = artistsData.filter((artist) => artist.category === "dj");

const Artists = () => {
  const [category, setCategory] = useState("dj");

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  // Фильтруем артистов по выбранной категории
  const filteredArtists = artistsData.filter(
    (artist) => artist.category === category,
  );

  return (
    <>
      <div className="artists wrapper">
        <div className="top-artists__wrap">
          <h2 className="top-artists__title">Топ Диджеи</h2>
          <div className="artist-cards">
            {topDjs.map((dj) => (
              <ArtistCard key={dj.id} artist={dj} />
            ))}
          </div>
        </div>

        <div className="artists-list__wrap">
          <div className="artists wrapper">
            <div className="search__filter">
              <ul className="search__filter-list">
                <button
                  className={`search__filter-button ${
                    category === "dj" ? "active" : ""
                  }`}
                  onClick={() => handleCategoryChange("dj")}
                >
                  Диджеи
                </button>
                <button
                  className={`search__filter-button ${
                    category === "mc" ? "active" : ""
                  }`}
                  onClick={() => handleCategoryChange("mc")}
                >
                  МС
                </button>
                <button
                  className={`search__filter-button ${
                    category === "artist" ? "active" : ""
                  }`}
                  onClick={() => handleCategoryChange("artist")}
                >
                  Артисты
                </button>
              </ul>
            </div>

            <div className="artists-list">
              {filteredArtists.map((artist) => (
                <ArtistCard key={artist.id} artist={artist} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Artists;
