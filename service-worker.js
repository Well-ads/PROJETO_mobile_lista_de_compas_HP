var cacheName = 'pwaTeste+-v1.0';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',

        './assets/css/bootstrap.min.css',

        './assets/js/bootstrap.min.js',

        './assets/js/jquery.min.js',

        './assets/js/popper.min.js',

        './assets/img/background.png',
        './assets/img/favicon.png',
        './assets/img/logo.png',
        './assets/img/icon_128.png',
        './assets/img/icon_144.png',
        './assets/img/icon_152.png',
        './assets/img/icon_167.png',
        './assets/img/icon_180.png',
        './assets/img/icon_192.png',
        './assets/img/icon_256.png',
        './assets/img/icon_512.png',
        './assets/img/formulas.JPG',

        './assets/img/batman.jpeg',
        './assets/img/chefao.jpeg',
        './assets/img/leao.jpeg',
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
    try {
      return await fetch(event.request);
    } catch (err) {
      return caches.match(event.request);
    }
  }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});