// Uses Open-Meteo free API (no key needed) + geocoding
let isCelsius = true;
let currentData = null;

const API_GEO = 'https://geocoding-api.open-meteo.com/v1/search';
const API_WEATHER = 'https://api.open-meteo.com/v1/forecast';

const weatherCodes = {
  0: { label: 'Clear Sky', icon: '☀️', class: 'sunny' },
  1: { label: 'Mainly Clear', icon: '🌤️', class: 'clear' },
  2: { label: 'Partly Cloudy', icon: '⛅', class: 'cloudy' },
  3: { label: 'Overcast', icon: '☁️', class: 'cloudy' },
  45: { label: 'Foggy', icon: '🌫️', class: 'cloudy' },
  51: { label: 'Light Drizzle', icon: '🌦️', class: 'rain' },
  61: { label: 'Light Rain', icon: '🌧️', class: 'rain' },
  63: { label: 'Moderate Rain', icon: '🌧️', class: 'rain' },
  65: { label: 'Heavy Rain', icon: '🌧️', class: 'rain' },
  71: { label: 'Light Snow', icon: '🌨️', class: 'snow' },
  73: { label: 'Moderate Snow', icon: '❄️', class: 'snow' },
  80: { label: 'Rain Showers', icon: '🌦️', class: 'rain' },
  95: { label: 'Thunderstorm', icon: '⛈️', class: 'storm' },
  99: { label: 'Heavy Thunderstorm', icon: '⛈️', class: 'storm' },
};

function getWeatherInfo(code) {
  return weatherCodes[code] || { label: 'Unknown', icon: '🌡️', class: 'clear' };
}

async function searchCity(city) {
  showLoading();
  try {
    const geoRes = await fetch(`${API_GEO}?name=${encodeURIComponent(city)}&count=1`);
    const geoData = await geoRes.json();
    if (!geoData.results?.length) throw new Error('City not found');
    const { latitude, longitude, name, country } = geoData.results[0];

    const wRes = await fetch(`${API_WEATHER}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,visibility&daily=weather_code,temperature_2m_max,temperature_2m_min&forecast_days=5&timezone=auto`);
    const wData = await wRes.json();

    currentData = { ...wData.current, name: `${name}, ${country}`, daily: wData.daily };
    updateUI();
    document.getElementById('errorMsg').classList.remove('visible');
  } catch(e) {
    document.getElementById('errorMsg').textContent = e.message || 'Failed to fetch weather data';
    document.getElementById('errorMsg').classList.add('visible');
  }
}

function updateUI() {
  if (!currentData) return;
  const { temperature_2m: temp, apparent_temperature: feels, relative_humidity_2m: hum, wind_speed_10m: wind, weather_code: code, visibility, name, daily } = currentData;

  const info = getWeatherInfo(code);
  const displayTemp = isCelsius ? Math.round(temp) : Math.round(temp * 9/5 + 32);
  const displayFeels = isCelsius ? Math.round(feels) : Math.round(feels * 9/5 + 32);
  const unit = isCelsius ? '°C' : '°F';

  document.getElementById('temp').textContent = displayTemp;
  document.getElementById('feelsLike').textContent = `${displayFeels}${unit}`;
  document.getElementById('humidity').textContent = `${hum}%`;
  document.getElementById('wind').textContent = `${Math.round(wind)} km/h`;
  document.getElementById('visibility').textContent = `${Math.round(visibility / 1000)} km`;
  document.getElementById('cityName').textContent = name;
  document.getElementById('condition').textContent = info.label;
  document.getElementById('weatherIcon').textContent = info.icon;
  document.querySelector('.unit').textContent = unit;

  // Theme
  document.body.className = info.class;

  // Forecast
  const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  const fc = document.getElementById('forecast');
  fc.innerHTML = '';
  for (let i = 0; i < Math.min(5, daily.time.length); i++) {
    const d = new Date(daily.time[i]);
    const fcInfo = getWeatherInfo(daily.weather_code[i]);
    const hi = isCelsius ? Math.round(daily.temperature_2m_max[i]) : Math.round(daily.temperature_2m_max[i] * 9/5 + 32);
    const lo = isCelsius ? Math.round(daily.temperature_2m_min[i]) : Math.round(daily.temperature_2m_min[i] * 9/5 + 32);
    const card = document.createElement('div');
    card.className = 'fc-card';
    card.innerHTML = `<div class="fc-day">${days[d.getDay()]}</div><div class="fc-icon">${fcInfo.icon}</div><div class="fc-hi">${hi}°</div><div class="fc-lo">${lo}°</div>`;
    fc.appendChild(card);
  }

  // Rain effect
  updateBgEffect(info.class);
}

function updateBgEffect(cls) {
  const bg = document.getElementById('bgAnim');
  bg.innerHTML = '';
  if (cls === 'rain' || cls === 'storm') {
    for (let i = 0; i < 80; i++) {
      const drop = document.createElement('div');
      drop.className = 'raindrop';
      drop.style.cssText = `left:${Math.random()*100}%;height:${Math.random()*15+8}px;animation-duration:${Math.random()*0.8+0.5}s;animation-delay:${Math.random()*2}s;opacity:${Math.random()*0.4+0.1}`;
      bg.appendChild(drop);
    }
  } else if (cls === 'snow') {
    for (let i = 0; i < 50; i++) {
      const flake = document.createElement('div');
      flake.className = 'raindrop';
      flake.style.cssText = `left:${Math.random()*100}%;width:${Math.random()*4+2}px;height:${Math.random()*4+2}px;border-radius:50%;animation-duration:${Math.random()*3+3}s;animation-delay:${Math.random()*3}s;`;
      bg.appendChild(flake);
    }
  }
}

function showLoading() {
  document.getElementById('temp').textContent = '--';
  document.getElementById('cityName').textContent = 'Loading...';
  document.getElementById('condition').textContent = '--';
  document.getElementById('weatherIcon').textContent = '🌐';
  document.getElementById('forecast').innerHTML = '';
}

document.getElementById('searchBtn').addEventListener('click', () => {
  const city = document.getElementById('cityInput').value.trim();
  if (city) searchCity(city);
});

document.getElementById('cityInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') { const city = e.target.value.trim(); if (city) searchCity(city); }
});

document.getElementById('toggleUnit').addEventListener('click', () => {
  isCelsius = !isCelsius;
  document.getElementById('toggleUnit').textContent = isCelsius ? '°F' : '°C';
  updateUI();
});

// Auto-load
searchCity('London');