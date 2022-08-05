/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "express":
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "path":
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "./apps/front/project.json":
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"../../node_modules/nx/schemas/project-schema.json","sourceRoot":"apps/front/src","projectType":"application","targets":{"build":{"executor":"@nrwl/web:webpack","outputs":["{options.outputPath}"],"defaultConfiguration":"production","options":{"compiler":"babel","outputPath":"dist/apps/front","index":"apps/front/src/index.html","baseHref":"/","main":"apps/front/src/main.tsx","polyfills":"apps/front/src/polyfills.ts","tsConfig":"apps/front/tsconfig.app.json","assets":["apps/front/src/favicon.ico","apps/front/src/assets"],"styles":[],"scripts":[],"webpackConfig":"@nrwl/react/plugins/webpack"},"configurations":{"development":{"extractLicenses":false,"optimization":false,"sourceMap":true,"vendorChunk":true},"production":{"fileReplacements":[{"replace":"apps/front/src/environments/environment.ts","with":"apps/front/src/environments/environment.prod.ts"}],"optimization":true,"outputHashing":"all","sourceMap":false,"namedChunks":false,"extractLicenses":true,"vendorChunk":false}}},"serve":{"executor":"@nrwl/web:dev-server","defaultConfiguration":"development","options":{"buildTarget":"front:build","hmr":true},"configurations":{"development":{"buildTarget":"front:build:development"},"production":{"buildTarget":"front:build:production","hmr":false}}},"lint":{"executor":"@nrwl/linter:eslint","outputs":["{options.outputFile}"],"options":{"lintFilePatterns":["apps/front/**/*.{ts,tsx,js,jsx}"]}},"test":{"executor":"@nrwl/jest:jest","outputs":["coverage/apps/front"],"options":{"jestConfig":"apps/front/jest.config.ts","passWithNoTests":true}}},"tags":[]}');

/***/ }),

/***/ "./apps/front2/project.json":
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"../../node_modules/nx/schemas/project-schema.json","sourceRoot":"apps/front2/src","projectType":"application","targets":{"build":{"executor":"@nrwl/web:webpack","outputs":["{options.outputPath}"],"defaultConfiguration":"production","options":{"compiler":"babel","outputPath":"dist/apps/front2","index":"apps/front2/src/index.html","baseHref":"/","main":"apps/front2/src/main.tsx","polyfills":"apps/front2/src/polyfills.ts","tsConfig":"apps/front2/tsconfig.app.json","assets":["apps/front2/src/favicon.ico","apps/front2/src/assets"],"styles":[],"scripts":[],"webpackConfig":"@nrwl/react/plugins/webpack"},"configurations":{"development":{"extractLicenses":false,"optimization":false,"sourceMap":true,"vendorChunk":true},"production":{"fileReplacements":[{"replace":"apps/front2/src/environments/environment.ts","with":"apps/front2/src/environments/environment.prod.ts"}],"optimization":true,"outputHashing":"all","sourceMap":false,"namedChunks":false,"extractLicenses":true,"vendorChunk":false}}},"serve":{"executor":"@nrwl/web:dev-server","defaultConfiguration":"development","options":{"buildTarget":"front2:build","hmr":true},"configurations":{"development":{"buildTarget":"front2:build:development"},"production":{"buildTarget":"front2:build:production","hmr":false}}},"lint":{"executor":"@nrwl/linter:eslint","outputs":["{options.outputFile}"],"options":{"lintFilePatterns":["apps/front2/**/*.{ts,tsx,js,jsx}"]}},"test":{"executor":"@nrwl/jest:jest","outputs":["coverage/apps/front2"],"options":{"jestConfig":"apps/front2/jest.config.ts","passWithNoTests":true}}},"tags":[]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const express = __webpack_require__("express");
const path_1 = __webpack_require__("path");
const app = express();
app.get('/api', (req, res) => {
    res.send({ message: 'Welcome to server!' });
});
const frontPath = (0, path_1.dirname)(/*require.resolve*/("./apps/front/project.json"));
const front2Path = (0, path_1.dirname)(/*require.resolve*/("./apps/front2/project.json"));
const frontBuiltFilesPath = `${frontPath}/build`;
const front2BuiltFilesPath = `${front2Path}/build`;
const serveFront = (app) => {
    app.use('/', express.static(frontBuiltFilesPath));
    app.get('/*', function (req, res) {
        res.sendFile((0, path_1.join)(frontBuiltFilesPath, 'index.html'));
    });
};
const serveFront2 = (app) => {
    app.use('/front2', express.static(front2BuiltFilesPath));
    app.get('/front2*', function (req, res) {
        res.sendFile((0, path_1.join)(front2BuiltFilesPath, 'index.html'));
    });
};
serveFront(app);
serveFront2(app);
const port = process.env.port || 3333;
const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map