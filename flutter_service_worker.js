'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "139c3af41a39fe5396ce26bd09f398b4",
"main.dart.js_6.part.js": "31f45227c39f5c4bec3e7324a92a91e7",
"index.html": "7e0e64e3556a76a48629162877bfb981",
"/": "7e0e64e3556a76a48629162877bfb981",
"main.dart.js": "83a8cbfa98cbd41e8b765ea04806ca1f",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3dfb44fb387b64d714fabfc9c594ed46",
"main.dart.js_3.part.js": "61476c4c021b42edee7a6573d1bd7db9",
"assets/AssetManifest.json": "c00090144087b160b3bdbee53956249f",
"assets/NOTICES": "c8c175e34650a7e4c5cee108379a0dbb",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/shaders/ink_sparkle.frag": "83759f209872df6df33b7239e178e623",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/icons/earth.svg": "659cb9dfed26e3bf7b4154ed64b5129b",
"assets/assets/icons/subscribe_red_dark.svg": "3ff6199274f3faaaeb963dd7979edec4",
"assets/assets/icons/translate.svg": "0038644d7446a08c05aec6fab714003d",
"assets/assets/icons/arrow_left_filling.svg": "fc462bbf4c78c14a522c3a0c650dba4f",
"assets/assets/icons/arrow_right_filling.svg": "2302e182a423f7d7f958fabca7b00e10",
"assets/assets/icons/tips_warn.svg": "114f28d0d607f1a2bd3702ee98d703dd",
"assets/assets/icons/all_black.svg": "fb6d0530c82e16c3e95039a61e4425c8",
"assets/assets/icons/eye_close.svg": "ba5ca47ae425d709e5bfcbff236c9085",
"assets/assets/icons/red_point.svg": "a3276ab80ab37be902c4dcd8fbcd9788",
"assets/assets/icons/arrow_up_filling.svg": "f897fdf9bac66ebc6f3dbe9d3db5d2f4",
"assets/assets/icons/eye_open.svg": "0bb98e77b806ba579fa0e72d8bcc15d6",
"assets/assets/icons/more.svg": "aac72f20e73a5cac9205b8ce9ee0e9a0",
"assets/assets/icons/tips_correct.svg": "86c346a5b0622ccd5d82a4bc5afcf7eb",
"assets/assets/icons/tips_error.svg": "62a462dbe6165856133234bca5f78f8f",
"assets/assets/icons/add_round_black.svg": "aa0bc8ee9501c98caa01e41f8dd44168",
"assets/assets/icons/subscribe_red_light.svg": "576cc2e7ef297d41adf5a31e35ae9e4b",
"assets/assets/icons/add_round_grey.svg": "359fc367f32b431d5a4688531ce281b4",
"assets/assets/icons/folder_close.svg": "dd536852c5b76c19cd6747cca322bda8",
"assets/assets/icons/star_yellow.svg": "5cf8fd8c74d869641923217e7fd5f691",
"assets/assets/icons/all_grey.svg": "4c83a4ac2f128543088c34be14f5fe30",
"assets/assets/icons/folder_open.svg": "adc4cceffded74f5ce5e681fcb05e36b",
"assets/assets/icons/comment.svg": "2c750e38d0e52427409d295c92d0446c",
"assets/assets/icons/help.svg": "fabc9a897b563d5bc663b1a65e807cef",
"assets/assets/icons/star_grey.svg": "b51070f1c99a07d41c037380b8dd4dc4",
"assets/assets/icons/arrow_down_filling.svg": "273e5b16b1624623a065e5d926cab121",
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
"assets/assets/icon/arrow_right_round.svg": "dd333cd47112d8158e38337c192e0ae2",
"assets/assets/icon/comment.svg": "ff15be9276e02db350474e04c7790b5f",
"assets/assets/icon/arrow_left_round.svg": "c181ad383711f03e3603f27cc4a6aea3",
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
