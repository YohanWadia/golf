'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2413773c8abb2e35b093e5594214dfb3",
"assets/AssetManifest.bin.json": "2aad9c6244f2c43e46ffb69332c8ef68",
"assets/AssetManifest.json": "3e9ab96c4d5da7a02ad5bbae2fec67de",
"assets/assets/audio/bluebounce.mp3": "c62b8802deee337f8168172b944aa7b1",
"assets/assets/audio/bump.mp3": "9cb10a07447d7c5bc6ef3cb7df1393e7",
"assets/assets/audio/explode.mp3": "096ff8f7c40fe75966a8c1a8987c765c",
"assets/assets/audio/fall_clap.mp3": "700234dcfd3cbe71c9fef62ce8038427",
"assets/assets/audio/rebound.mp3": "6cceb302c558baf7f94d662ab5c0e3a6",
"assets/assets/audio/stroke.mp3": "96113869dd13ea90a53249939f62206d",
"assets/assets/fonts/Mitr-Regular.ttf": "3a0a53c9bb100679336663c17f4b298c",
"assets/assets/images/arrow.png": "ce77181b62778ca4eacc52220f14f912",
"assets/assets/images/ball.png": "a3ae51f4a775980d39c1bbb18a775ef2",
"assets/assets/images/ball_nuke.png": "9140e2df2650e8d6a18da27814af810f",
"assets/assets/images/barPS.png": "c7e9caffd9be87f2bd3bc92acdd246b9",
"assets/assets/images/bk.jpg": "5e14ee7a5b4cbaeb4372726c14079049",
"assets/assets/images/block.png": "8bfed425ceea79886966a90388b5b2d9",
"assets/assets/images/blueblock.png": "03189b39db2cdeffb7beaea5428dc216",
"assets/assets/images/brick.png": "69f3eff2b8d60e14fc8da1562dd4ad7e",
"assets/assets/images/door.png": "beaa7821f617cda0121b14ad695874f9",
"assets/assets/images/explosion.png": "5fe98869ca49528d131e06367726ab1c",
"assets/assets/images/h8.png": "2be9d7989317ae649728c92f54391c38",
"assets/assets/images/hole.png": "9597870cff8a8df27fdbde4ccf976df9",
"assets/assets/images/lock.png": "da0c5af6583b659ac559a8768f07615c",
"assets/assets/images/logo%2520300.png": "03a1c15751a95653b91441bfa4d87c2a",
"assets/assets/images/nums.jpg": "7060ec1e98a61cb8662b600a2f9d39d1",
"assets/assets/images/v16.png": "c8bfa98e503aa3742b70128f37ff99a2",
"assets/assets/images/victory.png": "f66ee0834df33dc9cfffd72913315215",
"assets/FontManifest.json": "b2c3fafbe2176b04343200271f690ead",
"assets/fonts/MaterialIcons-Regular.otf": "cc875e06ebf1ad9da008c00028fcdfb6",
"assets/NOTICES": "c330472cc7410e5d5cf6d93d7bf27d69",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "de8ab028c11b057f95737ece215622b1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "409d865207ba970e0eda4db855d4b023",
"/": "409d865207ba970e0eda4db855d4b023",
"main.dart.js": "aa98decb8d4849d9c5573cb0711bb35c",
"manifest.json": "c16f0eae20d4b8c655d92b54dc12c3cf",
"version.json": "7909e3bf6fc52ca4ed0a1d641ff46902"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
