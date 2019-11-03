import { configure, addDecorator } from '@storybook/html';
import { withOptions } from "@storybook/addon-options";
import { checkA11y } from "@storybook/addon-a11y";
import { addReadme, configureReadme } from 'storybook-readme';
import { themes } from '@storybook/theming';
import { addParameters } from '@storybook/react';
import { create } from '@storybook/theming/create';

function loadStories () {
	require('../docs/welcome.stories');
	const req = require.context('../docs', true, /\.stories\.js?$/);
	req.keys().forEach(filename => req(filename));

}


addParameters({
	options: {
		theme: create({ colorPrimary: 'hotpink', colorSecondary: 'orangered' }),

	},
	readme: {
		// You can set a code theme globally.
		codeTheme: 'github',

		//excludePropTables: [YourImportedReactComponent],
	},
});

addDecorator(
	addReadme,
	checkA11y,
	withOptions({
		name: 'Tellus Laboratory',
	}),
);

configure(loadStories, module);
