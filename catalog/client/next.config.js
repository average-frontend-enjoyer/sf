const path = require( 'path' );

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	output: 'standalone',
	reactStrictMode: true,
	staticPageGenerationTimeout: 120,
	images: {
		domains: [
			'sweetiefox.com',
			'162.240.104.7'
		],
	},
	webpack( config ) {
		config.module.rules.forEach( rule => {
			if ( !rule.oneOf ) {
				return;
			}
			rule.oneOf.forEach( one => {
				if ( !`${one.issuer?.and}`.includes( '_app' ) ) {
					return;
				}
				one.issuer.and = [path.resolve( __dirname )];
			} );
		} );

		const rules = config.module.rules
			.find( rule => typeof rule.oneOf === 'object' )
			.oneOf.filter( rule => Array.isArray( rule.use ) );
		rules.forEach( rule => {
			rule.use.forEach( moduleLoader => {
				if (
					moduleLoader.loader !== undefined &&
					moduleLoader.loader.includes( 'css-loader' ) &&
					typeof moduleLoader.options.modules === 'object'
				) {
					moduleLoader.options = {
						...moduleLoader.options,
						esModule: true,
						modules: {
							...moduleLoader.options.modules,
							localIdentName: '[local]--[hash:base64:5]',
							exportLocalsConvention: 'dashes',
						},
					};
				}
			} );
		} );

		return config;
	}
};

module.exports = nextConfig;
