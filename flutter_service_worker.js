'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets/AssetManifest.json": "f2d5c816f4529ed326e38fe146348833",
"/assets/assets/fonts/Ubuntu-R.ttf": "1c5965c2b1dcdea439b54c3ac60cee38",
"/assets/FontManifest.json": "952a74212000e8812883df6545d18262",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/LICENSE": "b9f995f93c92658de514e6a918aee6e0",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "f1fb80a01fb4f7cd59ab90bc719b84ae",
"/main.dart.js": "4c23e344c39f1405052a63e412f25005",
"/manifest.json": "2b1a618739149bcc929542a7d25f40b7"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
