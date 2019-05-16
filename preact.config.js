const { resolve } = require('path');
module.exports = {
	/**
	 * plugins
	 * 
	 * preact-cli plugins
	 */
	plugins: [

	],

	/**
	 * Function that mutates the original webpack config.
	 * Supports asynchronous changes when a promise is returned (or it's an async function).
	 *
	 * @param {object} config - original webpack config.
	 * @param {object} env - options passed to the CLI.
	 * @param {WebpackConfigHelpers} helpers - object with useful helpers for working with the webpack config.
	 * @param {object} options - this is mainly relevant for plugins (will always be empty in the config), default to an empty object
	 **/
	webpack(config, env, helpers, options){
		/**
		 * Adding ts-loader webpack configuration
		 * in preact webpack module rules
		 * to transpile typescript jsx (.tsx)
		 */
		config.module.rules.push({
			enforce: "pre",
			test: /\.tsx?$/,
			loader: "ts-loader"
		});

		/**
		 * adding alias for preact-cli-entrypoint
		 * by default preact-cli throws an error
		 * if there is not src folder with index.tsx file into it
		 */
		config.resolve.alias["preact-cli-entrypoint"] = resolve(__dirname, "src/front", "index.tsx");
	}
}