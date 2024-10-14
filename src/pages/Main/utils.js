// подбор случайных артистов для слайдов
export default function pickRandomArtists(array, numItems) { // numItems - количество случайных артистов
    const result = [];
    const randomArray = [...array];
  
    for (let i = 0; i < numItems; i++) {
      const randomIndex = Math.floor(Math.random() * randomArray.length);
      result.push(randomArray[randomIndex]);
      randomArray.splice(randomIndex, 1);
    }
  
    return result;
  }
