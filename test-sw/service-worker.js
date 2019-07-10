importScripts("precache-manifest.0990bef306deff65018d6b2c6d6b24de.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

// 首先引入workbox框架
workbox.routing.registerRoute(
	/\.(?:png|gif|jpg|jpeg|webp|svg)$/,
	new workbox.strategies.CacheFirst({
		cacheName: 'images',
		plugins: [
			new workbox.expiration.Plugin({
				maxEntries: 60,
				maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
			})
		]
	})
)
workbox.routing.registerRoute(
	/\.(?:js|css)$/,
	new workbox.strategies.StaleWhileRevalidate({
		cacheName: 'static-resources'
	})
)

