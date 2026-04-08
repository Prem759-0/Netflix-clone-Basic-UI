// ============================================================
//  NETFLIXX — Complete App Logic
// ============================================================

/* ---- STATE ---- */
let myList = JSON.parse(localStorage.getItem('nx_mylist') || '[]');
let currentModal = null;
let playerInterval = null;
let playerProgress = 0;
let playerPlaying = false;
let currentFilterGenre = 'All';
let currentPage = 'home';

/* ============================================================
   INIT
============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  renderAllRows();
  buildGenreFilters();
  renderTVShows();
  renderMovies();
  renderMyList();
  renderNewPopular();
  updateHeroListBtn();
  startHeroCycle();

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('solid', window.scrollY > 60);
  });

  // Close dropdowns on outside click
  document.addEventListener('click', e => {
    if (!e.target.closest('.profile-menu')) closeProfileMenu();
    if (!e.target.closest('.notif-btn')) closeNotifPanel();
    if (!e.target.closest('.search-container')) {
      const si = document.getElementById('searchInput');
      if (!si.value) si.classList.remove('open');
    }
  });
});

/* ============================================================
   HERO CAROUSEL
============================================================ */
const heroItems = [0, 1, 2, 3, 5]; // indices into ALL_CONTENT
let heroIndex = 0;

function startHeroCycle() {
  setHero(heroItems[heroIndex]);
  setInterval(() => {
    heroIndex = (heroIndex + 1) % heroItems.length;
    setHero(heroItems[heroIndex]);
  }, 8000);
}

function setHero(id) {
  const item = ALL_CONTENT[id];
  if (!item) return;
  const bg = document.getElementById('heroBg');
  bg.style.background = `linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 60%, transparent 100%),
    linear-gradient(135deg, ${item.color} 0%, #141414 100%)`;
  document.getElementById('heroTitle').innerHTML = item.title.replace(/ /, '<br/><em>') + '</em>';
  document.getElementById('heroDesc').textContent = item.desc;
  document.getElementById('heroBadge').textContent = `🏆 #${id + 1} in India Today`;
  document.getElementById('heroTags').innerHTML = item.tags.map(t => `<span>${t}</span>`).join('');
  // Update play/more buttons
  document.querySelector('.hero-btns .btn-play').onclick = () => openPlayer(item.id);
  document.querySelector('.hero-btns .btn-more').onclick = () => openModal(item.id);
  document.querySelector('.hero-btns .btn-list').onclick = function(){ toggleMyList(item.id, this); };
  updateHeroListBtn();
}

function updateHeroListBtn() {
  const btn = document.getElementById('heroListBtn');
  if (!btn) return;
  const id = ALL_CONTENT[heroItems[heroIndex]]?.id;
  btn.textContent = myList.includes(id) ? '✓ My List' : '＋ My List';
  btn.classList.toggle('added', myList.includes(id));
}

/* ============================================================
   RENDER ROWS
============================================================ */
function renderAllRows() {
  Object.entries(CONTENT_ROWS).forEach(([rowId, ids]) => {
    const container = document.getElementById(rowId);
    if (!container) return;
    container.innerHTML = '';
    ids.forEach((id, idx) => {
      const item = getById(id);
      if (!item) return;
      container.appendChild(createCard(item, idx + 1));
    });
  });
}

function createCard(item, rank) {
  const div = document.createElement('div');
  div.className = 'movie-card';
  div.innerHTML = `
    <div class="card-bg" style="background: linear-gradient(135deg, ${item.color}, #141414);"></div>
    ${rank ? `<div class="card-rank">#${rank}</div>` : ''}
    <div class="card-overlay">
      <div class="card-title">${item.emoji} ${item.title}</div>
      <div class="card-meta">${item.year} · ${item.genre} · ⭐${item.rating}</div>
      <div class="card-actions-row">
        <button class="card-btn play" onclick="event.stopPropagation();openPlayer(${item.id})">▶</button>
        <button class="card-btn" onclick="event.stopPropagation();toggleMyListCard(${item.id}, this)">${myList.includes(item.id) ? '✓' : '＋'}</button>
        <button class="card-btn" onclick="event.stopPropagation();openModal(${item.id})">ℹ</button>
      </div>
    </div>
  `;
  div.addEventListener('click', () => openModal(item.id));
  return div;
}

/* ============================================================
   TV SHOWS PAGE
============================================================ */
function renderTVShows() {
  const grid = document.getElementById('tvshowsGrid');
  if (!grid) return;
  grid.innerHTML = getAllShows().map(item => createPageCard(item)).join('');
}

/* ============================================================
   MOVIES PAGE
============================================================ */
function buildGenreFilters() {
  const container = document.getElementById('genreFilters');
  if (!container) return;
  container.innerHTML = GENRES.map(g => `
    <button class="genre-btn ${g === 'All' ? 'active' : ''}" onclick="filterMovieGenre('${g}', this)">${g}</button>
  `).join('');
}

function filterMovieGenre(genre, btn) {
  currentFilterGenre = genre;
  document.querySelectorAll('.genre-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderMovies();
}

function renderMovies() {
  const grid = document.getElementById('moviesGrid');
  if (!grid) return;
  let items = ALL_CONTENT.filter(c => c.type === 'movie' || c.type === 'show');
  if (currentFilterGenre !== 'All') {
    items = items.filter(c => c.genres && c.genres.includes(currentFilterGenre) || c.genre.includes(currentFilterGenre));
  }
  grid.innerHTML = items.length ? items.map(item => createPageCard(item)).join('') :
    `<div class="empty-state"><div class="empty-icon">🎬</div><h3>No titles found</h3><p>Try a different genre</p></div>`;
}

function createPageCard(item) {
  return `
    <div class="page-card" onclick="openModal(${item.id})">
      <div class="card-bg" style="background: linear-gradient(135deg, ${item.color}, #141414);"></div>
      <div class="card-overlay">
        <div class="card-title">${item.emoji} ${item.title}</div>
        <div class="card-meta">${item.year} · ${item.genre}</div>
        <div class="card-actions-row" style="margin-top:6px">
          <button class="card-btn play" onclick="event.stopPropagation();openPlayer(${item.id})">▶ Play</button>
          <button class="card-btn" onclick="event.stopPropagation();toggleMyListCard(${item.id},this)">${myList.includes(item.id)? '✓':'＋'}</button>
        </div>
      </div>
    </div>
  `;
}

/* ============================================================
   MY LIST PAGE
============================================================ */
function renderMyList() {
  const grid = document.getElementById('mylistGrid');
  const sub = document.getElementById('mylistSubtitle');
  if (!grid) return;
  const items = myList.map(id => getById(id)).filter(Boolean);
  sub.textContent = `${items.length} title${items.length !== 1 ? 's' : ''} saved`;
  grid.innerHTML = items.length ? items.map(item => createPageCard(item)).join('') :
    `<div class="empty-state"><div class="empty-icon">📋</div><h3>Your list is empty</h3><p>Add movies and shows to keep track of what you want to watch.</p></div>`;
}

/* ============================================================
   NEW & POPULAR PAGE
============================================================ */
function renderNewPopular() {
  const section = document.getElementById('top10Section');
  if (!section) return;
  const items = [...ALL_CONTENT].sort((a,b) => parseFloat(b.rating) - parseFloat(a.rating)).slice(0, 10);
  section.innerHTML = items.map((item, i) => `
    <div class="top10-card" onclick="openModal(${item.id})">
      <div class="top10-number">${i + 1}</div>
      <div class="top10-thumb" style="background: linear-gradient(135deg, ${item.color}, #141414);">${item.emoji}</div>
      <div class="top10-info">
        <div class="top10-title">${item.title}</div>
        <div class="top10-meta">${item.genre} · ${item.year} · ⭐ ${item.rating}</div>
      </div>
      <button class="top10-btn" onclick="event.stopPropagation();openPlayer(${item.id})">▶ Play</button>
    </div>
  `).join('');
}

/* ============================================================
   SLIDER
============================================================ */
function slideRow(rowId, direction) {
  const row = document.getElementById(rowId);
  if (!row) return;
  row.scrollBy({ left: direction * 800, behavior: 'smooth' });
}

function checkArrows(rowId) { /* optional: show/hide arrows based on scroll */ }

/* ============================================================
   VIDEO PLAYER
============================================================ */
function openPlayer(id) {
  const item = getById(id);
  if (!item) return;
  const overlay = document.getElementById('playerOverlay');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Simulate loading then playing
  const screen = document.getElementById('playerScreen');
  screen.innerHTML = `
    <div class="player-fake-video">
      <div class="player-spinner"></div>
      <div class="loading-text">Loading "${item.title}"…</div>
    </div>
  `;

  setTimeout(() => {
    screen.innerHTML = `
      <div class="player-now-playing" style="background: linear-gradient(135deg, ${item.color}, #0a0a0a);">
        <div style="font-size:80px;margin-bottom:20px">${item.emoji}</div>
        <h2 style="font-family:'Bebas Neue';font-size:52px;color:#fff;text-align:center">${item.title}</h2>
        <p style="color:#aaa;font-size:16px;text-align:center;max-width:500px;margin:0 auto">${item.desc}</p>
        <div style="margin-top:24px;display:flex;gap:16px;align-items:center;">
          <button onclick="playerAction('playpause')" style="background:var(--red);border:none;color:#fff;padding:14px 36px;border-radius:4px;font-size:18px;cursor:pointer;font-weight:700;">⏸ Playing</button>
          <span style="color:#888;font-size:14px">HD · Dolby Atmos</span>
        </div>
      </div>
    `;
    startPlayerProgress(item);
  }, 2000);

  document.getElementById('epInfo').textContent = `Now Playing: ${item.title}`;
}

function startPlayerProgress(item) {
  playerPlaying = true;
  playerProgress = 0;
  document.getElementById('ppBtn').textContent = '⏸';
  const totalSecs = 3600; // 1 hour fake

  playerInterval = setInterval(() => {
    if (!playerPlaying) return;
    playerProgress += 0.5;
    if (playerProgress >= 100) { playerProgress = 0; }
    document.getElementById('playerFill').style.width = playerProgress + '%';
    const elapsed = Math.round(totalSecs * playerProgress / 100);
    document.getElementById('playerTime').textContent = fmtTime(elapsed);
    document.getElementById('playerDuration').textContent = fmtTime(totalSecs);
  }, 500);
}

function fmtTime(secs) {
  const h = Math.floor(secs / 3600);
  const m = Math.floor((secs % 3600) / 60);
  const s = secs % 60;
  if (h > 0) return `${h}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  return `${m}:${String(s).padStart(2,'0')}`;
}

function playerAction(action) {
  if (action === 'playpause') {
    playerPlaying = !playerPlaying;
    document.getElementById('ppBtn').textContent = playerPlaying ? '⏸' : '▶';
  } else if (action === 'back30') {
    playerProgress = Math.max(0, playerProgress - 1.4);
  } else if (action === 'forward30') {
    playerProgress = Math.min(100, playerProgress + 1.4);
  } else if (action === 'fullscreen') {
    const el = document.getElementById('playerOverlay');
    if (document.fullscreenElement) document.exitFullscreen();
    else el.requestFullscreen?.();
  }
}

function seekVideo(e) {
  const bar = e.currentTarget;
  const rect = bar.getBoundingClientRect();
  playerProgress = ((e.clientX - rect.left) / rect.width) * 100;
  document.getElementById('playerFill').style.width = playerProgress + '%';
}

function setVol(v) { /* would control audio volume */ }

function closePlayer() {
  document.getElementById('playerOverlay').classList.remove('open');
  document.body.style.overflow = '';
  clearInterval(playerInterval);
  playerPlaying = false;
}

/* ============================================================
   DETAIL MODAL
============================================================ */
function openModal(id) {
  const item = getById(id);
  if (!item) return;
  currentModal = item;

  document.getElementById('modalHeroBg').style.background =
    `linear-gradient(135deg, ${item.color} 0%, #2a1a3e 50%, #141414 100%)`;
  document.getElementById('modalTitle').textContent = item.emoji + ' ' + item.title;
  document.getElementById('modalTags').innerHTML = item.tags.map(t => `<span>${t}</span>`).join('');
  document.getElementById('modalDesc').textContent = item.desc;
  document.getElementById('modalFullDesc').textContent = item.fullDesc || item.desc;
  document.getElementById('modalMatch').textContent = item.match + '%';
  document.getElementById('modalMeta').innerHTML = `
    <div>🎂 Rating: ${item.age || '16+'}</div>
    <div>⏱ ${item.type === 'show' ? item.seasons + ' Season' + (item.seasons > 1 ? 's' : '') : item.duration}</div>
    <div>📅 ${item.year}</div>
  `;
  document.getElementById('modalCast').textContent = item.cast || '–';
  document.getElementById('modalGenres').textContent = item.genres || item.genre;
  document.getElementById('modalMoods').textContent = item.moods || '–';

  // Play & list buttons
  document.getElementById('modalPlayBtn').onclick = () => openPlayer(id);
  const listBtn = document.getElementById('modalListBtn');
  listBtn.textContent = myList.includes(id) ? '✓ My List' : '＋ My List';
  listBtn.classList.toggle('added', myList.includes(id));
  listBtn.onclick = () => {
    toggleMyList(id, listBtn);
    listBtn.textContent = myList.includes(id) ? '✓ My List' : '＋ My List';
    listBtn.classList.toggle('added', myList.includes(id));
  };

  // Episodes
  buildEpisodes(item);
  // Related
  buildRelated(id);

  const overlay = document.getElementById('modalOverlay');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function buildEpisodes(item) {
  const sec = document.getElementById('modalEpisodes');
  if (!item.episodes || !item.episodes.length) { sec.innerHTML = ''; return; }
  sec.innerHTML = `
    <h3>Episodes</h3>
    <select class="season-select" id="seasonSelect" onchange="changeSeason(this.value, ${item.id})">
      ${Array.from({length: item.seasons || 1}, (_,i) => `<option value="${i+1}">Season ${i+1}</option>`).join('')}
    </select>
    <div class="ep-list" id="epList">
      ${item.episodes.map((ep, i) => `
        <div class="ep-item" onclick="openPlayer(${item.id})">
          <div class="ep-num">${i + 1}</div>
          <div class="ep-thumb" style="background: linear-gradient(135deg, ${item.color}, #1a1a1a)">
            ${ep.emoji}
            <div class="ep-play">▶</div>
          </div>
          <div class="ep-info-col">
            <div class="ep-title">${ep.title}</div>
            <div class="ep-desc">${ep.desc}</div>
          </div>
          <div class="ep-duration">${ep.dur}</div>
        </div>
      `).join('')}
    </div>
  `;
}

function changeSeason(season, id) {
  showToast(`Loading Season ${season}…`);
}

function buildRelated(id) {
  const grid = document.getElementById('moreLikeThis');
  const related = getRelated(id);
  grid.innerHTML = related.map(item => `
    <div class="more-card" onclick="openModal(${item.id})">
      <div class="more-card-thumb" style="background: linear-gradient(135deg, ${item.color}, #1a1a1a)">${item.emoji}</div>
      <div class="more-card-info">
        <div class="more-card-title">${item.title}</div>
        <div class="more-card-meta">⭐ ${item.rating} · ${item.genre}</div>
      </div>
    </div>
  `).join('');
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
  currentModal = null;
}

function handleModalClick(e) {
  if (e.target === e.currentTarget) closeModal();
}

function toggleLike(btn) {
  btn.textContent = btn.textContent === '👍' ? '👍✓' : '👍';
  showToast('Thanks for your feedback!');
}

function shareTitle() {
  if (navigator.share) {
    navigator.share({ title: currentModal?.title, text: currentModal?.desc });
  } else {
    navigator.clipboard?.writeText(window.location.href);
    showToast('Link copied to clipboard!');
  }
}

/* ============================================================
   MY LIST
============================================================ */
function toggleMyList(id, btn) {
  const idx = myList.indexOf(id);
  if (idx > -1) {
    myList.splice(idx, 1);
    showToast(`Removed from My List`);
  } else {
    myList.push(id);
    const item = getById(id);
    showToast(`${item?.title} added to My List ✓`);
  }
  localStorage.setItem('nx_mylist', JSON.stringify(myList));
  if (btn) {
    btn.textContent = myList.includes(id) ? '✓ My List' : '＋ My List';
    btn.classList.toggle('added', myList.includes(id));
  }
  renderMyList();
  renderAllRows();
}

function toggleMyListCard(id, btn) {
  toggleMyList(id, null);
  btn.textContent = myList.includes(id) ? '✓' : '＋';
}

/* ============================================================
   SEARCH
============================================================ */
function toggleSearch() {
  const input = document.getElementById('searchInput');
  input.classList.toggle('open');
  if (input.classList.contains('open')) input.focus();
  else { input.value = ''; if (currentPage === 'search') showPage('home'); }
}

function liveSearch(val) {
  if (val.length < 2) {
    if (currentPage === 'search') showPage('home');
    return;
  }
  const results = searchContent(val);
  document.getElementById('searchResultsLabel').textContent = `Showing ${results.length} results for "${val}"`;
  const grid = document.getElementById('searchGrid');
  grid.innerHTML = results.length ? results.map(item => createPageCard(item)).join('') :
    `<div class="empty-state"><div class="empty-icon">🔍</div><h3>No results for "${val}"</h3><p>Try a different keyword</p></div>`;
  showPage('search');
}

/* ============================================================
   PAGE NAVIGATION
============================================================ */
function showPage(page) {
  currentPage = page;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page)?.classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  window.scrollTo(0, 0);
}

function closeAll() { showPage('home'); }

/* ============================================================
   NAVBAR UTILITIES
============================================================ */
function toggleMobileNav() {
  const links = document.getElementById('navLinks');
  links.classList.toggle('mobile-open');
}

function toggleProfileMenu() {
  document.getElementById('profileDropdown').classList.toggle('open');
}
function closeProfileMenu() {
  document.getElementById('profileDropdown').classList.remove('open');
}

function toggleNotif() {
  document.getElementById('notifPanel').classList.toggle('open');
  document.getElementById('notifDot').style.display = 'none';
}
function closeNotifPanel() {
  document.getElementById('notifPanel').classList.remove('open');
}

/* ============================================================
   TOAST
============================================================ */
let toastTimeout;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => t.classList.remove('show'), 3500);
}

/* ============================================================
   KEYBOARD SHORTCUTS
============================================================ */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
    closePlayer();
    const si = document.getElementById('searchInput');
    si.value = '';
    si.classList.remove('open');
  }
  if (e.key === ' ' && document.getElementById('playerOverlay').classList.contains('open')) {
    e.preventDefault();
    playerAction('playpause');
  }
});
