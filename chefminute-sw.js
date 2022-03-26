var cacheName = "chefminute-v1.0";

self.addEventListener("install", function (event) {
    caches.open(cacheName).then((cache) => {
        cache.addAll([
            "/",
            "/index.html",
            "/manifest.webmanifest",
            "/global.css",
            "/material-icons.css",
            "/chefminute.js",
            "/assets/logo-circle.png",
            "/assets/logo-splash.png",
            "/assets/search-icon.png",
            "/assets/icons/favicon.ico",
            "/assets/icons/android-icon-48x48.png",
            "/assets/icons/android-icon-72x72.png",
            "/assets/icons/android-icon-96x96.png",
            "/assets/icons/android-icon-144x144.png",
            "/assets/icons/android-icon-192x192.png",
            "/assets/icons/apple-icon-57x57.png",
            "/assets/icons/apple-icon-72x72.png",
            "/assets/icons/apple-icon-114x114.png",
            "/assets/icons/apple-icon-120x120.png",
            "/assets/icons/apple-icon-144x144.png",
            "/assets/icons/apple-icon-180x180.png"
        ]);
    });
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(
                keyList.map((key) => {
                    if (key !== cacheName) {
                        return caches.delete(key);
                    }
                })
            );
        })
    );
});

self.addEventListener("fetch", function (event) {
    let response = caches.open(cacheName).then((cache) => {
        return cache.match(event.request).then((resource) => {
            if (resource) return resource;

            return fetch(event.request).then((resource) => {
                cache.put(event.request, resource.clone());
                return resource;
            });
        });
    });

    event.respondWith(response);
});
