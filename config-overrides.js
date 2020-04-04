const path = require('path')

module.exports = function override(config) {
	config.resolve = {
		alias: {
			'@components': path.resolve(__dirname, 'src/components'),
			'@containers': path.resolve(__dirname, 'src/containers'),
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@store': path.resolve(__dirname, 'src/store'),
			'@utils': path.resolve(__dirname, 'src/utils'),
		}
	}

	return config
}