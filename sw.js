const CACHE_NAME = 'tpf-cd-cache-v1';

// Add ALL of your exact file names inside these brackets
const ASSETS = [
  'index.html',
  'manifest.json',
  'መግኣዚ ንድሕርት.html',
  'መግአዚ ንድሕሪት መእሰሪ.html',
  'መግኣዚ ንቕድሚት.html',
  'መግአዚ ንቕድሚት መእሰሪ.html'
  '/well9.png',
  '/wellwell.png'
];

// Install Service Worker
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Fetch Assets (This lets the app load instantly out of the phone's memory)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
