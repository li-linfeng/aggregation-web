'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_79.part.js": "bfc20c77d1e382002f55e5d405d90280",
"main.dart.js_69.part.js": "c1498615e1f5252798c5dbdf2666b1a4",
"main.dart.js_24.part.js": "8840c767e9264becb2d9412a7a11084d",
"main.dart.js_34.part.js": "addc8aa9d67be081976be756ef592f33",
"main.dart.js_46.part.js": "bea085e217ec339c5b320fbf93909c62",
"main.dart.js_56.part.js": "7b64d81e2ac513ebd5e0dc0d78cca661",
"version.json": "139c3af41a39fe5396ce26bd09f398b4",
"main.dart.js_7.part.js": "3547b990da921ed1198aa088074bf91e",
"main.dart.js_60.part.js": "71ba912019aee1dcd127c534ba12df4b",
"main.dart.js_70.part.js": "0221e2ad1d1757d7a31bb9853ea5d775",
"main.dart.js_12.part.js": "bc37fadffb757aaf5da32d1855959d71",
"main.dart.js_84.part.js": "efe37b73ed6714acb02c87da3190bcc3",
"main.dart.js_61.part.js": "152e72af3da734afaa07b9b94efc7e57",
"main.dart.js_6.part.js": "806641b311b77880d8a495ca9f1c4e16",
"index.html": "3a29e5f211113490098113637fcbc2df",
"/": "3a29e5f211113490098113637fcbc2df",
"main.dart.js_13.part.js": "8bf06987dc9bcabb6fe9a4d31ccd28a6",
"main.dart.js_85.part.js": "c70a72076c66439b6f4007f63180a5c3",
"main.dart.js_68.part.js": "1c6de5e5d9131a533e6e8f6ed4075d2c",
"main.dart.js_78.part.js": "f7dffac20c05ca4dd4502e3c31465e15",
"main.dart.js_35.part.js": "3bd39952d20278fb15286afa6d6fd55f",
"main.dart.js_25.part.js": "9b12052a2408a6049e34e95585d7b146",
"main.dart.js_57.part.js": "4640c9309b1f46bf05369ac826f9891a",
"main.dart.js_47.part.js": "7026e12d3ce0ed57fe36d2bf72823c6f",
"main.dart.js_11.part.js": "e67368cd984564c98b82a371943565e7",
"main.dart.js_73.part.js": "27c88368c0b826471200c0c785569e3d",
"main.dart.js": "beab1922a4f9e1e9f2a7def576408c2b",
"main.dart.js_18.part.js": "788631272cd11119955de2aa46a27fe7",
"main.dart.js_45.part.js": "7f57910dbbe5b741007cce3966de3609",
"main.dart.js_27.part.js": "cf555f3b80a85cdfb85b20587a3a608c",
"main.dart.js_19.part.js": "586bf7530626cf7b02b9346c0b142628",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"main.dart.js_44.part.js": "e2ab4a73c3756d3e864b8306ce447d72",
"main.dart.js_36.part.js": "9ba84408df7649dbe6692543c96ca0d3",
"main.dart.js_26.part.js": "4bfbdb10d14e1ed7200bc1004061240c",
"main.dart.js_10.part.js": "96c0361c384f62004dab84383b70b881",
"main.dart.js_72.part.js": "c25c1735c8960b521061d196eabd2426",
"main.dart.js_5.part.js": "147dc9547cb7a05c3cfff4301ead4b9d",
"main.dart.js_62.part.js": "9253bc440a321fd86302b1b074973976",
"main.dart.js_83.part.js": "1a65a5ce64a9e9e86ed642c3e1185d3c",
"main.dart.js_58.part.js": "5d9ec9dd5ae68ebdaf352bb1579444c0",
"main.dart.js_48.part.js": "5f847281fd2c2b672c258a6e41714268",
"main.dart.js_15.part.js": "fc6c4533629a0687b3870d242c53258e",
"main.dart.js_67.part.js": "8cf0c2d96f2088bfabcb5ba4c262dbe8",
"main.dart.js_77.part.js": "67b5df285edca66257761ef663e8780e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_41.part.js": "b7790341559db1c92a38d0fd77728a70",
"main.dart.js_23.part.js": "db6c33531a038bb4f020a741673a8252",
"main.dart.js_33.part.js": "8d113297bb871f5ae80ff2bc14af5918",
"main.dart.js_9.part.js": "0132619c420839d8e1ec4310bad76f02",
"main.dart.js_50.part.js": "59d03a0ad8efdf756a497e486faf438c",
"main.dart.js_40.part.js": "1fff8427d48abac5ea02dea085432b8b",
"main.dart.js_32.part.js": "dc336c3f9d6add5d0601edcf273d7dfe",
"main.dart.js_22.part.js": "25b41261abd5a9df6aa07ef6b7edeeef",
"main.dart.js_8.part.js": "fbe9463a4fbf8ab89faaf94ad9939481",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3dfb44fb387b64d714fabfc9c594ed46",
"main.dart.js_82.part.js": "725dd569a04a05de8a8f6bd5942c6cb1",
"main.dart.js_49.part.js": "1e129278b843520c8047a5a9f82fd134",
"main.dart.js_59.part.js": "31d00bd6318302f543729dae91defd6c",
"main.dart.js_14.part.js": "00a78aa4dd3c42a48c9b9ca728eab87d",
"main.dart.js_66.part.js": "1c61a54fc9e32ce187a33f850f41cd22",
"main.dart.js_1.part.js": "587874eb556e6f98807a2c584cf44c04",
"main.dart.js_30.part.js": "5908cb35f968dc25b75f773ec149c30c",
"main.dart.js_42.part.js": "2ecf538bdcda161496cae8054af671a6",
"main.dart.js_39.part.js": "9853e1e3b45e387575380751cadc028a",
"main.dart.js_29.part.js": "d593779d9626190d5b978daaf34540d0",
"main.dart.js_3.part.js": "ab449864c9101c10759a604529f3ac1e",
"main.dart.js_74.part.js": "1bb0942ce4dad392cf6308cc824d11df",
"main.dart.js_16.part.js": "9ca11c6e92dd2dbe8188de9e43bc6b57",
"assets/AssetManifest.json": "415ca02bb0e528db2dad9b5b97ad44eb",
"assets/NOTICES": "60d3b5ab4211db100c5c032eec6f94ec",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/shaders/ink_sparkle.frag": "ad72a5bfe22db6abb9b76c36b2753968",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
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
"main.dart.js_81.part.js": "73145ce33e3b06a6f492bd88719d77bc",
"main.dart.js_28.part.js": "329efc997effa9572d65b3c21ba49922",
"main.dart.js_75.part.js": "5bb2f573d5e6231ec82f55d15853b575",
"main.dart.js_2.part.js": "aec1d980bb927c12ed65b1fb9cbec72a",
"main.dart.js_17.part.js": "7a5a3d56871116253700ab1f3a1f7475",
"main.dart.js_31.part.js": "55b7be8e07bc3584a095d718cba98534",
"main.dart.js_21.part.js": "ffa0e2e118bfd9f58de3c7ba98ae7bdf",
"main.dart.js_43.part.js": "c4d5cf1c024c9da24c0f5180625bf644",
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
