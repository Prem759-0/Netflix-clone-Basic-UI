// DATA
const movies = {
  trending: [
    { id: 1, title: 'Stranger Things', year: 2024, rating: '8.7', genre: 'Sci-Fi', duration: '4 Seasons', desc: 'A boy vanishes. A town uncovers a mystery involving secret experiments and supernatural forces.', cast: 'Millie Bobby Brown, Finn Wolfhard', dir: 'The Duffer Brothers', mood: 'Mind-bending, Supernatural, Dark', color: '#1a0533' },
    { id: 2, title: 'The Crown', year: 2023, rating: '8.6', genre: 'Drama', duration: '6 Seasons', desc: 'The personal and political life of Queen Elizabeth II from the 1940s to modern day.', cast: 'Claire Foy, Olivia Colman', dir: 'Peter Morgan', mood: 'Royal, Dramatic, Historical', color: '#0d1a2a' },
    { id: 3, title: 'Wednesday', year: 2023, rating: '8.1', genre: 'Comedy', duration: '2 Seasons', desc: "Wednesday Addams navigates her years at Nevermore Academy in this supernatural mystery series.", cast: 'Jenna Ortega, Gwendoline Christie', dir: 'Tim Burton', mood: 'Quirky, Dark Comedy, Mystery', color: '#1a1a0d' },
    { id: 4, title: 'Dark', year: 2020, rating: '8.8', genre: 'Thriller', duration: '3 Seasons', desc: "A time-travel conspiracy mystery set in a German town across multiple time periods.", cast: 'Louis Hofmann, Lisa Vicari', dir: 'Baran bo Odar', mood: 'Complex, Mysterious, Slow-burn', color: '#0d0d1a' },
    { id: 5, title: 'Ozark', year: 2022, rating: '8.5', genre: 'Crime', duration: '4 Seasons', desc: 'A financial adviser drags his family from Chicago to the Ozarks to launder money for a drug boss.', cast: 'Jason Bateman, Laura Linney', dir: 'Jason Bateman', mood: 'Gripping, Dark, Intense', color: '#0a1a14' },
    { id: 6, title: 'Money Heist', year: 2021, rating: '8.3', genre: 'Action', duration: '5 Seasons', desc: 'A criminal mastermind who goes by "The Professor" recruits criminals to carry out elaborate heists.', cast: 'Álvaro Morte, Itziar Ituño', dir: 'Álex Pina', mood: 'Thrilling, Smart, Emotional', color: '#1a0d0d' },
    { id: 7, title: 'Squid Game', year: 2021, rating: '8.0', genre: 'Thriller', duration: '2 Seasons', desc: '456 desperate people play deadly children games for prize money of 45.6 billion won.', cast: 'Lee Jung-jae, Park Hae-soo', dir: 'Hwang Dong-hyuk', mood: 'Violent, Thrilling, Shocking', color: '#1a0d14' },
    { id: 8, title: 'Breaking Bad', year: 2013, rating: '9.5', genre: 'Drama', duration: '5 Seasons', desc: 'A high school chemistry teacher diagnosed with cancer turns to manufacturing drugs.', cast: 'Bryan Cranston, Aaron Paul', dir: 'Vince Gilligan', mood: 'Intense, Dark, Transformative', color: '#1a1a0a' },
  ],
  topRated: [
    { id: 9, title: 'The Witcher', year: 2023, rating: '8.2', genre: 'Fantasy', duration: '3 Seasons', desc: 'Geralt of Rivia, a mutated monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.', cast: 'Henry Cavill, Freya Allan', dir: 'Lauren Schmidt Hissrich', mood: 'Epic, Fantasy, Dark', color: '#0d1a0d' },
    { id: 10, title: 'Narcos', year: 2017, rating: '8.8', genre: 'Crime', duration: '3 Seasons', desc: 'The story of drug kingpin Pablo Escobar and the Medellín Cartel.', cast: 'Wagner Moura, Boyd Holbrook', dir: 'Chris Brancato', mood: 'Gritty, Historical, Intense', color: '#1a1505' },
    { id: 11, title: 'The Last Dance', year: 2020, rating: '9.1', genre: 'Documentary', duration: '1 Season', desc: "Michael Jordan and the Chicago Bulls' dynasty as seen through the 1997-98 NBA season.", cast: 'Michael Jordan, Dennis Rodman', dir: 'Jason Hehir', mood: 'Inspiring, Competitive, Emotional', color: '#08101a' },
    { id: 12, title: 'Peaky Blinders', year: 2022, rating: '8.8', genre: 'Drama', duration: '6 Seasons', desc: 'A gangster family epic set in 1900s England, centering on the Shelby crime family.', cast: 'Cillian Murphy, Helen McCrory', dir: 'Steven Knight', mood: 'Stylish, Violent, Atmospheric', color: '#0a0a0a' },
    { id: 13, title: 'House of Cards', year: 2018, rating: '8.7', genre: 'Political', duration: '6 Seasons', desc: 'A Congressman works with his wife to exact revenge on those who betrayed him.', cast: 'Kevin Spacey, Robin Wright', dir: 'Beau Willimon', mood: 'Political, Scheming, Dramatic', color: '#0d1420' },
    { id: 14, title: 'Mindhunter', year: 2019, rating: '8.6', genre: 'Thriller', duration: '2 Seasons', desc: 'Set in the late 1970s, FBI agents interview imprisoned serial killers to solve ongoing murder cases.', cast: 'Jonathan Groff, Holt McCallany', dir: 'David Fincher', mood: 'Psychological, Disturbing, Intelligent', color: '#0a0d1a' },
  ],
  tvShows: [
    { id: 15, title: 'Bridgerton', year: 2023, rating: '7.3', genre: 'Romance', duration: '3 Seasons', desc: 'Follows the competitive world of Regency era London high society and the Bridgerton family.', cast: 'Phoebe Dynevor, Regé-Jean Page', dir: 'Chris Van Dusen', mood: 'Romantic, Dramatic, Escapist', color: '#1a0a1a' },
    { id: 16, title: "Emily in Paris", year: 2023, rating: '7.0', genre: 'Comedy', duration: '4 Seasons', desc: "An American woman moves to Paris unexpectedly and navigates a new city and love life.", cast: 'Lily Collins, Ashley Park', dir: 'Darren Star', mood: 'Light, Romantic, Fun', color: '#1a0d0a' },
    { id: 17, title: 'Cobra Kai', year: 2023, rating: '8.5', genre: 'Action', duration: '6 Seasons', desc: "Thirty-four years after the 1984 All Valley Karate Tournament, Johnny Lawrence and Daniel LaRusso reignite their rivalry.", cast: 'Ralph Macchio, William Zabka', dir: 'Jon Hurwitz', mood: 'Nostalgic, Action, Emotional', color: '#1a1a08' },
    { id: 18, title: 'The Umbrella Academy', year: 2023, rating: '7.9', genre: 'Superhero', duration: '3 Seasons', desc: 'Follows a dysfunctional family of adopted sibling superheroes who reunite to solve the mystery of their father\'s death.', cast: 'Elliot Page, Tom Hopper', dir: 'Steve Blackman', mood: 'Quirky, Action, Unique', color: '#120a1a' },
  ],
  action: [
    { id: 19, title: 'Extraction', year: 2023, rating: '7.2', genre: 'Action', duration: 'Film', desc: 'A black market mercenary embarks on the most deadly extraction mission of his career.', cast: 'Chris Hemsworth, Rudhraksh Jaiswal', dir: 'Sam Hargrave', mood: 'Intense, Action, Violent', color: '#1a0a05' },
    { id: 20, title: 'The Old Guard', year: 2020, rating: '6.6', genre: 'Action', duration: 'Film', desc: 'Led by a warrior named Andy, a covert group of immortal mercenaries take on an unexpected threat.', cast: 'Charlize Theron, KiKi Layne', dir: 'Gina Prince-Bythewood', mood: 'Action, Fantasy, Emotional', color: '#0a0a1a' },
    { id: 21, title: 'Bright', year: 2017, rating: '6.3', genre: 'Action', duration: 'Film', desc: 'In an alternate present-day, two cops patrol the streets of Los Angeles in a world where humans, orcs, and elves co-exist.', cast: 'Will Smith, Joel Edgerton', dir: 'David Ayer', mood: 'Fantasy, Action, Gritty', color: '#0d1408' },
    { id: 22, title: 'Project Power', year: 2020, rating: '6.0', genre: 'Action', duration: 'Film', desc: 'When a new pill grants unpredictable superpowers, a cop and ex-soldier must hunt down its supplier.', cast: 'Jamie Foxx, Joseph Gordon-Levitt', dir: 'Henry Joost', mood: 'Action, Superhero, Thriller', color: '#140a1a' },
    { id: 23, title: 'Red Notice', year: 2021, rating: '6.3', genre: 'Action', duration: 'Film', desc: 'An Interpol agent tracks the world\'s most wanted art thief in a heist gone wrong.', cast: 'Dwayne Johnson, Ryan Reynolds', dir: 'Rawson Marshall Thurber', mood: 'Fun, Action, Comedy', color: '#1a0f0a' },
    { id: 24, title: 'The Gray Man', year: 2022, rating: '6.5', genre: 'Action', duration: 'Film', desc: 'A CIA agent discovers agency secrets and suddenly becomes a target along with a mercenary.', cast: 'Ryan Gosling, Chris Evans', dir: 'Anthony & Joe Russo', mood: 'Slick, Action, Intense', color: '#080d1a' },
  ]
};

const gradients = [
  'linear-gradient(135deg, #1a0533, #2d0a1e)',
  'linear-gradient(135deg, #0d1a2a, #1a2d1a)',
  'linear-gradient(135deg, #1a1a0d, #2a1a0a)',
  'linear-gradient(135deg, #0a1a14, #1a2a0a)',
  'linear-gradient(135deg, #1a0d0d, #2a0a14)',
  'linear-gradient(135deg, #0d0d1a, #1a0d2a)',
  'linear-gradient(135deg, #0a0a1a, #1a0a2a)',
  'linear-gradient(135deg, #1a0a0a, #2a1a0a)',
];

let myList = JSON.parse(localStorage.getItem('netflixx_mylist') || '[]');

// RENDER CARDS
function renderCards(containerId, items) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  items.forEach((item, index) => {
    const grad = gradients[index % gradients.length];
    const isAdded = myList.includes(item.title);
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `
      <div class="movie-card-bg" style="background: ${grad};"></div>
      <div class="rank-badge">#${index + 1}</div>
      <div class="movie-card-overlay">
        <div class="card-title">${item.title}</div>
        <div class="card-meta">${item.year} · ${item.genre} · ⭐${item.rating}</div>
        <div class="card-actions">
          <button class="card-btn play" onclick="showModal('${item.title}')">▶</button>
          <button class="card-btn" onclick="toggleMyList('${item.title}', this)">${isAdded ? '✓' : '+'}</button>
        </div>
      </div>
    `;
    card.addEventListener('click', (e) => {
      if (!e.target.classList.contains('card-btn')) showModal(item.title);
    });
    container.appendChild(card);
  });
}

function getAllMovies() {
  return [...movies.trending, ...movies.topRated, ...movies.tvShows, ...movies.action];
}

function findMovie(title) {
  return getAllMovies().find(m => m.title === title);
}

// MODAL
function showModal(title) {
  const movie = findMovie(title);
  if (!movie) return;
  document.getElementById('modalTitle').textContent = movie.title;
  document.getElementById('modalRating').textContent = `⭐ ${movie.rating}`;
  document.getElementById('modalYear').textContent = movie.year;
  document.getElementById('modalGenre').textContent = movie.genre;
  document.getElementById('modalDesc').textContent = movie.desc;
  document.getElementById('modalCast').textContent = movie.cast;
  document.getElementById('modalDir').textContent = movie.dir;
  document.getElementById('modalTags').textContent = `${movie.genre}, Thriller, Drama`;
  document.getElementById('modalMood').textContent = movie.mood;
  document.getElementById('modalBg').style.background = `linear-gradient(135deg, ${movie.color || '#1a0533'}, #2d0a1e)`;
  const addBtn = document.getElementById('modalAddBtn');
  const isAdded = myList.includes(title);
  addBtn.textContent = isAdded ? '✓ Added' : '+ My List';
  addBtn.className = isAdded ? 'btn-add added' : 'btn-add';
  addBtn.onclick = () => toggleMyList(title, addBtn);
  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

// MY LIST
function toggleMyList(title, btn) {
  event.stopPropagation();
  const idx = myList.indexOf(title);
  if (idx > -1) {
    myList.splice(idx, 1);
    showToast(`Removed "${title}" from My List`);
    btn.textContent = '+';
    btn.classList.remove('added');
  } else {
    myList.push(title);
    showToast(`Added "${title}" to My List ✓`);
    btn.textContent = '✓';
    btn.classList.add('added');
  }
  localStorage.setItem('netflixx_mylist', JSON.stringify(myList));
}

// TOAST
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// SLIDER
function slide(btn, dir) {
  const row = btn.parentElement.querySelector('.movie-row');
  row.scrollBy({ left: dir * 700, behavior: 'smooth' });
}

// SEARCH
document.getElementById('searchInput').addEventListener('input', function () {
  const val = this.value.toLowerCase().trim();
  let existing = document.querySelector('.search-results');
  if (existing) existing.remove();
  if (!val) return;
  const results = getAllMovies().filter(m => m.title.toLowerCase().includes(val) || m.genre.toLowerCase().includes(val));
  if (!results.length) return;
  const box = document.createElement('div');
  box.className = 'search-results';
  results.slice(0, 6).forEach(m => {
    const item = document.createElement('div');
    item.className = 'search-result-item';
    item.innerHTML = `${m.title} <span>${m.genre} · ${m.year}</span>`;
    item.onclick = () => { showModal(m.title); this.value = ''; box.remove(); };
    box.appendChild(item);
  });
  this.parentElement.appendChild(box);
});

document.addEventListener('click', () => {
  const r = document.querySelector('.search-results');
  if (r) r.remove();
});

// NAVBAR SCROLL
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  nav.classList.toggle('scrolled', window.scrollY > 80);
});

// KEYBOARD
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// INIT
window.addEventListener('DOMContentLoaded', () => {
  renderCards('trending', movies.trending);
  renderCards('topRated', movies.topRated);
  renderCards('tvShows', movies.tvShows);
  renderCards('action', movies.action);
});
