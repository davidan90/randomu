// This file is storyshots config
import initStoryshots, { Stories2SnapsConverter, multiSnapshotWithOptions } from '@storybook/addon-storyshots';

// This line because react is globally in webpack
window.React = require('react');

initStoryshots({
  configPath: './config/storybook/snapshots',
  test: multiSnapshotWithOptions({}),
  stories2snapsConverter: new Stories2SnapsConverter({
    snapshotExtension: '.snap',
    storiesExtensions: ['.js', '.jsx', '.ts', '.tsx'],
  }),
});
