'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "139c3af41a39fe5396ce26bd09f398b4",
"main.dart.js_6.part.js": "9abc97a02b55ccd58cb6d799cf8c8d03",
"index.html": "5ab1d1323d25ecc93932ae97e8f2520d",
"/": "5ab1d1323d25ecc93932ae97e8f2520d",
"main.dart.js_4.part.js": "c10a646b372d16dced1a44753055f4c0",
"main.dart.js": "d09891cd5cb64e2f552ea182d1213654",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"main.dart.js_5.part.js": "fda7325c09e79605e4dc4ffaa397fbef",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3dfb44fb387b64d714fabfc9c594ed46",
"main.dart.js_1.part.js": "84d965ca53e9b22f364a79c92793e26b",
"main.dart.js_3.part.js": "d1c5a579ce521fa99275532c2e194ddf",
"assets/AssetManifest.json": "2457ea030e843b71b56fc4f0dba2f04a",
"assets/NOTICES": "60d3b5ab4211db100c5c032eec6f94ec",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/shaders/ink_sparkle.frag": "ad72a5bfe22db6abb9b76c36b2753968",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/icon/search.svg": "f81b5c7ecd884d4d9b4790e796a7f882",
"assets/assets/icon/earth.svg": "659cb9dfed26e3bf7b4154ed64b5129b",
"assets/assets/icon/translate.svg": "46a2d833b34b7ba0ac3fcd110828defc",
"assets/assets/icon/arrow_left_filling.svg": "fc462bbf4c78c14a522c3a0c650dba4f",
"assets/assets/icon/arrow_right_filling.svg": "2302e182a423f7d7f958fabca7b00e10",
"assets/assets/icon/tips_warn.svg": "114f28d0d607f1a2bd3702ee98d703dd",
"assets/assets/icon/icon_eye_close.png": "4c9935b9da4572a2e8e3ad3583b7a62a",
"assets/assets/icon/add.svg": "30ea5504a9b9997c66af305cf5b2c18e",
"assets/assets/icon/add_round_fill_bold.svg": "4ebf55cef44d6e8ee74d4fc0cf1b3759",
"assets/assets/icon/back.svg": "9d7fd37981b9099d00d69665a4064a38",
"assets/assets/icon/arrow_up_filling.svg": "f897fdf9bac66ebc6f3dbe9d3db5d2f4",
"assets/assets/icon/tips_correct.svg": "86c346a5b0622ccd5d82a4bc5afcf7eb",
"assets/assets/icon/star.svg": "c5638af69c1ccc4e1a425b8132e381c6",
"assets/assets/icon/tips_error.svg": "62a462dbe6165856133234bca5f78f8f",
"assets/assets/icon/folder_close.svg": "5ebe8f968d6f937c80ea55f7b4c8710d",
"assets/assets/icon/folder_open.svg": "28bc2bec64df41002093308b20e1bf4d",
"assets/assets/icon/comment.svg": "ff15be9276e02db350474e04c7790b5f",
"assets/assets/icon/icon_eye_open.png": "87f7e00af531ce4a87caf8926e6fb261",
"assets/assets/icon/add_radius.svg": "dc81c643977d8d2ffa08b73d9766a56c",
"assets/assets/icon/arrow_down_filling.svg": "273e5b16b1624623a065e5d926cab121",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
