'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "0529a902acdd6e006271f047b0940e14",
"assets/assets/icons/blaze.png": "2fc08db02418198d6a8d607f122352b6",
"assets/assets/icons/bread.png": "274b9fa47195e1248fdd3005097f8fd8",
"assets/assets/icons/coffee.png": "c897c3297b4f3bfcd500f7b7a851d366",
"assets/assets/icons/courier.png": "a144a943b8ec3b990ea8be8e632a8ea6",
"assets/assets/icons/delivery.png": "eab9664174a4726e86aa4fa10f1836e2",
"assets/assets/icons/documents.png": "c9154fa6c7d4ba455c93dc933f8dbd83",
"assets/assets/icons/food.png": "5ffbb55c83e1257db82d81be09c561e9",
"assets/assets/icons/home.png": "4d3362bb502f9922155acefe46d41cd2",
"assets/assets/icons/kawaii-sushi.png": "953a4ed9f2a18f783ee3dc9ba4a5028a",
"assets/assets/icons/milkshake.png": "a2c9ed8b41252ddd9b934d6819e35eb0",
"assets/assets/icons/more.png": "15b908e47ebcc3d1a28fa06af4cd0fed",
"assets/assets/icons/natural-food.png": "edef9bd496a272bd4d7635a158b44cd5",
"assets/assets/icons/offer.png": "c78c87f3e35836d949c6fd734e40eb36",
"assets/assets/icons/only-on-swiggy.png": "0b876719b67fdf86634feb1e56575dd2",
"assets/assets/icons/pocket.png": "e78374fb994ca5b320f2fece1f7c8d28",
"assets/assets/icons/spark.png": "06fd460784d3c7b34da7f1cd82b98ae2",
"assets/assets/icons/thunder.png": "4c6484ef4af885074c38fbb72e96167d",
"assets/assets/icons/world-cup.png": "24dcc7e6048a749de77030ab237afa36",
"assets/assets/images/banner1.jpg": "3a69267d246e5be1570f87e9bdfae24d",
"assets/assets/images/banner2.jpg": "fa0ed0111e583a31b810bf544473b06b",
"assets/assets/images/banner3.jpg": "ecc155d461c1c0d267fc23ebc62e104f",
"assets/assets/images/banner4.jpg": "9328097acc1ada80c6860231667a2a13",
"assets/assets/images/burger.png": "be65e0be1f37cc64a4a632b56bca2604",
"assets/assets/images/delivery-boy.png": "c2020f5d9d50eba0048b8795e9f1fa33",
"assets/assets/images/delivery-man.png": "2dea4535feb4e7ac240da7ea9ddfc3bf",
"assets/assets/images/food1.jpg": "8dfdb3cb48fd27d7475fe48665267506",
"assets/assets/images/food10.jpg": "8946ea81fa3df52df9147ef4b1cd394d",
"assets/assets/images/food2.jpg": "6a5f64deb7e33d5e0b8b0a8609b06a86",
"assets/assets/images/food3.jpg": "ea859f29345e0c3a6e9931be0cd35e9f",
"assets/assets/images/food4.jpg": "d6261a4b395347eb3f12100ee3265fec",
"assets/assets/images/food5.jpg": "3dc6933ad2e8f2e280826585c00c16c1",
"assets/assets/images/food6.jpg": "c442f26a31167bdd6ed7653ba080a132",
"assets/assets/images/food7.jpg": "97c679e359072dfb83a06992bef8251f",
"assets/assets/images/food8.jpg": "9fd454076efde8b0acc4ffb49a8f647d",
"assets/assets/images/food9.jpg": "24081d37a7efd2633865d32cb8e1aecb",
"assets/assets/images/grocery.png": "e6270d891f9a1a7a808025e75554365f",
"assets/assets/images/meat.png": "a4a97e6ed8079ea1cfb3fb46d6ddffaf",
"assets/assets/images/pizza-delivery-boy.png": "ba9419b13552bf7abc0aa8de6cec308d",
"assets/assets/images/plate-food.jpg": "9e396139c2a14b5a180db813975fc0af",
"assets/assets/images/plate-food1.jpg": "4d048f723382705a0814361081d96649",
"assets/assets/images/user.jpg": "cfc7a816ae47c56facf455491b35fc30",
"assets/assets/images/zodiacs/icon0.png": "7fcb54ba0f32f6e2992171220aba0494",
"assets/assets/images/zodiacs/icon1.png": "c4343f3e309b1151fa8e9a2d97a93233",
"assets/assets/images/zodiacs/icon10.png": "27bf53dc25c67d8afc8e9469c991ac5b",
"assets/assets/images/zodiacs/icon11.png": "dd6c18c0a9ae57696f61fb5db864a52a",
"assets/assets/images/zodiacs/icon12.png": "828c040f289ca7e71506f9a0d79c298c",
"assets/assets/images/zodiacs/icon2.png": "8e825631a132b78efdcd32cece651cf5",
"assets/assets/images/zodiacs/icon3.png": "4e0446e148ede9aecc1feacff9fb7c45",
"assets/assets/images/zodiacs/icon5.png": "b0d6151d5b8eb24e15b1643e5ea3274b",
"assets/assets/images/zodiacs/icon6.png": "bb322d463b53a8996bfadfcd64edba12",
"assets/assets/images/zodiacs/icon7.png": "003c33b4e1e7211845263d42705b3827",
"assets/assets/images/zodiacs/icon8.png": "20b1f858116698dad7e2bc9e9b17668e",
"assets/assets/images/zodiacs/icon9.png": "36ca119fc248c40f611c41b28e977300",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "b8c6d31f2fc347621bd40aa9bd8c9777",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "228de710e1c1f9bab50c6708bf1e6239",
"/": "228de710e1c1f9bab50c6708bf1e6239",
"main.dart.js": "f5e1bd198923d41e26c8d93daecba283",
"manifest.json": "337fbd5671357c8c166d74e98a8397da",
"version.json": "1546ee7c07e76845bf8c0e72caa027a8"
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
