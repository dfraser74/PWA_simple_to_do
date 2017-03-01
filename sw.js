self.importScripts('node_modules/sw-toolbox/sw-toolbox.js'); // Update path to match your own setup
self.toolbox.options.debug = true;

self.toolbox.precache(['/node_modules/', '/css/', '/js/', '/assets/']);

self.toolbox.router.get('/node_modules/(.*)', toolbox.cacheFirst);
self.toolbox.router.get('/css/(.*)', toolbox.cacheFirst);
self.toolbox.router.get('/js/(.*)', toolbox.cacheFirst);
self.toolbox.router.get('/assets/(.*)', toolbox.cacheFirst);
