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

const createFilmList = () => {
  const filmList = document.getElementById('filmList');
  filmTitles.forEach((film) => {
    const filmItem = document.createElement('p');
    filmItem.innerHTML = film;
    filmItem.classList.add('filmItem');
    filmList.appendChild(filmItem);
  });
};

createFilmList();
