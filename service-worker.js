const CACHE_NAME = "significo2-cache-v1";
const FILES_TO_CACHE = [
  "/significo2/",
  "/significo2/index.html",
  "/significo2/styles.css",
  "/significo2/script.js",
  "/significo2/team1.png",
  "/significo2/team2.png",
  "/significo2/team3.png",
  "/significo2/1ENIoa5sjq.mp4",
];

// Install Service Worker and Cache Files
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("Caching files...");
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

// Activate Service Worker and Remove Old Caches
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log("Deleting old cache:", cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch Cached Content for Offline Support
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
