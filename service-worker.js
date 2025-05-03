// Basic service worker - does nothing yet.
// For offline functionality, implement caching strategies here.

self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  // event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', (event) => {
  // console.log('Service Worker: Fetching');
  // event.respondWith(caches.match(event.request).then(response => response || fetch(event.request)));
}); 