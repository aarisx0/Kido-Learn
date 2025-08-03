'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a0abd289557908fdc0ca7e204c37ca5e",
"assets/AssetManifest.bin.json": "94a214f33b042bc80f65bfeef503273b",
"assets/AssetManifest.json": "1380b02fd86c9e87ba633bb4f1aa1564",
"assets/assets/sounds/bad_touch.mp3": "d481d868fd40e717110b274c96ac2120",
"assets/assets/sounds/bad_touch_tamil.mp3": "33f3b3eae9311cd7d6b436f328a60059",
"assets/assets/sounds/cat.mp3": "88ba5f9faf2305bc6a3f30eadb1d6985",
"assets/assets/sounds/dog.mp3": "18545cc1f5d989c7c9106522e6e7ccfa",
"assets/assets/sounds/elephant.mp3": "d8c248a5e48e0244f6207a19e82cd5d6",
"assets/assets/sounds/giraffe.mp3": "5c58732e2cfa7dbe39a3414effaf4803",
"assets/assets/sounds/good_touch.mp3": "1ad50a4a0ec6e94089e3e1933dcad0d1",
"assets/assets/sounds/good_touch_tamil.mp3": "7da5c95f262791b2627e7666e98b2ef7",
"assets/assets/sounds/kangaroo.mp3": "03071aaf1afa59b2a6a49a4404ee018c",
"assets/assets/sounds/lion.mp3": "26c84a9892993cee246083d8688ab51a",
"assets/assets/sounds/monkey.mp3": "0c626823c1235ec05b97e73a79d9b601",
"assets/assets/sounds/panda.mp3": "08f65bd8a373fe472d71d144e96398fa",
"assets/assets/sounds/therapy.mp3": "421401ffa3bbbd3f4eb308d2ba37b097",
"assets/assets/sounds/tiger.mp3": "638fef6cfa43442d80e113bff9c27b27",
"assets/assets/sounds/zebra.mp3": "52c847b1668b65d26b73c8986223068c",
"assets/assets/train4.mp4": "739ff91bbc5ea642166c32a2bd447d95",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "d2fd85dd8f7c269baa3830ce6196435a",
"assets/images/1106.2986v2.pdf": "cf426667bae93a15db9e9867269bbd66",
"assets/images/Alphabets_BG.jpeg": "e5322578b94451fcbfafb37358d57dc4",
"assets/images/Alphabets_Icon.jpeg": "78bc485cb4dfe6f60d789ca3cc92166c",
"assets/images/Animals_BG.jpeg": "c61c70ed3410714ebcda5bb84f0f9e3c",
"assets/images/Animals_Icon.jpeg": "f4fbce8aedb168440ba8680ed60c7561",
"assets/images/apple.jpeg": "7788af4884ccbd606738b00f0bb1bf43",
"assets/images/Apple2.jpeg": "0338fe72462bcc7018f5071c1cb99558",
"assets/images/AskThings_BG.jpeg": "022c9437f9b48893d5f6967e673631a4",
"assets/images/Ask_Icon.png": "8a35d6ffc3f6c74dfc0ca16d95f8d00b",
"assets/images/bad_touch.jpeg": "9ef4ee7a5971f22020d7c8ae0fc1b8cf",
"assets/images/banana.jpeg": "6b4aae73058d472aee1f030d2942f5c7",
"assets/images/cat.jpeg": "dc6c4a426abdd6c5096ac354aa89ab79",
"assets/images/cherry.jpeg": "a18e6f66324ad6f2cbc208eb1bac92ea",
"assets/images/dog.jpeg": "1c53bb1d8268baad2b6c9c12741c6678",
"assets/images/elephant.jpeg": "598d5762c99aa8da166849651d6fd6c4",
"assets/images/fever.jpeg": "cfef6efd5e3e0f8b7911de487fb1b198",
"assets/images/Feveract.jpeg": "909e0c29b9f49fb8097aff550b30da19",
"assets/images/Food.jpeg": "9e014288f56654afe6345ce85b0a8eb9",
"assets/images/Foodact.jpeg": "56ac5c3955e8ecf210e134eb2ed4a2af",
"assets/images/Fruits_BG.jpeg": "e71423120f13f539cd258f6354edaeb7",
"assets/images/Fruits_Icon.jpeg": "f6b1b2896d820d349126d9ecbb325c4c",
"assets/images/Game_Icon.jpeg": "05237729d9b6d91704132e0adc7cadb9",
"assets/images/GB_Icon.jpeg": "7e4819c2b649fdce247d80648a77a38a",
"assets/images/giraffe.jpeg": "407135bd5c78ca136d977cf68b3300ea",
"assets/images/good_touch.jpeg": "2985d4b9dc1fb35e1c73000979d87023",
"assets/images/grapes.jpeg": "313bd6c6bb5753118794bf6a41ec0952",
"assets/images/kangaroo.jpeg": "53d39db7e686821e4e0bc487b03ae8e1",
"assets/images/Learning_Icon.jpeg": "e29f9841ad5a684b18bf4fa73f958a10",
"assets/images/lion.jpeg": "8d5070ce8812e4c27b079e0308249bc4",
"assets/images/mango.jpeg": "de7898b904e0c595fb56c9b736e89210",
"assets/images/Mango2.jpeg": "bff685683f132780d10e445900b9f4e0",
"assets/images/Math_Icon.jpeg": "7a17ceb4cd70b1025383d424508ebca8",
"assets/images/monkey.jpeg": "f3af4bab21b580010a75d5fa1fb0ff44",
"assets/images/Music_Therapy.jpeg": "731bc1211bf7a2e59d7f895562ce6569",
"assets/images/Numbers_BG.jpeg": "1a5c85fdc1219eb98a8427abfacb7d00",
"assets/images/Numbers_Icon.jpeg": "4fc8d78444b95720bdce5ad5cdc76fe6",
"assets/images/orange.jpeg": "14fb2a294bb279be04898709ec750b01",
"assets/images/Paint.jpeg": "63a91302d2f38984775362577b192365",
"assets/images/Paint_Icon.jpeg": "d5f89f41f45f044a86b115cba8d1b2c6",
"assets/images/panda.jpeg": "762aa3e0c7e4d8883f089836e25663c5",
"assets/images/pear.jpeg": "ec9943618f9213ad3361890b6766eaeb",
"assets/images/pineapple.jpeg": "178a98f531ab16a2139672af3ce4e6ad",
"assets/images/Rain_Background.jpeg": "2400067cdebaaa0c97bfb955ab2e4c01",
"assets/images/Shape_Matching.jpeg": "2fbef7453d2a809bab7b0bc9c8a55eb0",
"assets/images/Speech_Therapy.jpeg": "48e45f14b2ef67b89a42f4dfaf983ebe",
"assets/images/Story_Icon.png": "7fab859c59ab000552c6539512afb8ba",
"assets/images/strawberry.jpeg": "4a9114ca7a9b7e437706ae0ab3d2c1b6",
"assets/images/Tangerine.jpeg": "1907827d9c845f09bfc54d4b3b0370a2",
"assets/images/Therapy_Icon.jpeg": "56c1ac6138314b5c4bcfef3b4a61a8b5",
"assets/images/tiger.jpeg": "f4f0b36d57a702f2a2e6d19e23a42f25",
"assets/images/video.mp4": "ee4bb358b40f11aaa2667d452c74d0ec",
"assets/images/Wateract.jpeg": "7bf24340067dfc9bd888aae033728f19",
"assets/images/Waterbottle.jpeg": "a11adca4ef59a86c5ca1dde8e2e7a641",
"assets/images/watermelon.jpeg": "a708443ba7fcdbb79114d8a1d79871c6",
"assets/images/Watermelon2.jpeg": "89b3f460bfa5bff8f981b154a0b586cc",
"assets/images/zebra.jpeg": "41552e29f263bcee1e339956ce576c2c",
"assets/NOTICES": "394a1ed957b63b7883ca4619e579c02b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
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
"flutter_bootstrap.js": "e20bc87cfedf3ea884cf51995e7bb30b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "85bd050453a110b1975f2975e5d9ecd5",
"/": "85bd050453a110b1975f2975e5d9ecd5",
"main.dart.js": "8f59cb12898c1592893d9861de7169a9",
"manifest.json": "700726ff7321171705076c51d4be2ecd",
"version.json": "e93fa927e8508cc7319989c83e7ac407"};
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
