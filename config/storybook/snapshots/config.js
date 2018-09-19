import { configure } from '@storybook/react';

import registerRequireContextHook from 'babel-plugin-require-context-hook/register';

registerRequireContextHook();

const req = require.context('../../../src', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
