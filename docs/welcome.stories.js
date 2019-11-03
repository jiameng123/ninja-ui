import React from 'react';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
import { doc } from "storybook-readme";
import Readme from "./README.md";


storiesOf('Welcome', module)
    .addParameters({
        readme: {
            codeTheme: 'duotone-sea',
            content: Readme,
            codeTheme: 'far',
        },
    })
    .add('to Ninja UI', () => <div></div>);
