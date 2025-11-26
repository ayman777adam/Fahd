// sw.js — Stable Update Mode

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', () => {
  clients.claim();
});

// طريقة Network First مع fallback بسيط
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        return response;
      })
      .catch(() => {
        return caches.match(event.request);
      })
  );
});
