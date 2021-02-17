const filmTitles = [
  '39 Steps',
  'Rebecca',
  'Shadow of a Doubt',
  'Notorious',
  'Rope',
  'Strangers on a Train',
  'Dial M For Murder',
  'Rear Window',
  'To Catch A Thief',
  'The Man Who Knew Too Much',
  'The Wrong Man',
  'Vertigo',
  'North By Northwest',
  'Psycho',
  'The Birds',
  'Marnie'
];

const showPoster = (event) => {
  const poster = document.getElementById('poster');
  poster.innerHTML = '';
  const posterImage = document.createElement('img');
  posterImage.src = `./images/${event.target.classList}.jpg`;
  posterImage.classList.add('posterImage');
  poster.appendChild(posterImage);
};

const createFilmList = () => {
  let count = 1;
  const filmList = document.getElementById('filmList');
  filmTitles.forEach((film) => {
    const filmItem = document.createElement('p');
    filmItem.innerHTML = film;
    filmItem.id = 'filmItem';
    filmItem.classList.add(`poster${count}`);
    count += 1;
    filmItem.addEventListener('click', showPoster);
    filmList.appendChild(filmItem);
  });
};

createFilmList();
