const path = require('path');

module.exports = ({ config }) => {
	config.module.rules.push({
		test: /\.(ts|tsx)$/,
		use: [
			{
				loader: require.resolve('awesome-typescript-loader'),
			},
			{
				loader: require.resolve('react-docgen-typescript-loader'),
			},
		],
	});

	/* config.module.rules.push({
		test: /\.md$/,
		use: [
			{
				loader: "html-loader"
			},
			{
				loader: "markdown-loader",
			}
		]
	}); */

	config.module.rules.push({
		test: /\.stories\.tsx?$/,
		loaders: [
			{
				loader: require.resolve('@storybook/source-loader'),
				options: {
					parser: 'typescript',
					prettierConfig: {
						printWidth: 100,
						singleQuote: false,
						tabWidth: 4,
					},
				},
			},
		],
		enforce: 'pre',
	});

	config.resolve.extensions.push('.ts', '.tsx');

	return config;
};
