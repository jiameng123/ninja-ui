import * as  React from 'react';
import { storiesOf } from '@storybook/react';
import ButtonReadme from "./README.md";
import ButtonUsage from "./USAGE.md";
import { withReadme, withDocs } from 'storybook-readme';

import "../../src/button/ninja-button";


storiesOf('Button', module)
  .addParameters({
    readme: {
      codeTheme: 'duotone-sea',
      content: ButtonReadme,
      sidebar: ButtonUsage,
    },
  })
  .add('with text', () => <ninja-button ></ninja-button>)
  ;
