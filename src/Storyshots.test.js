import initStoryshots, { Stories2SnapsConverter, multiSnapshotWithOptions } from '@storybook/addon-storyshots';

initStoryshots({
  configPath: './config/storybook/snapshots',
  test: multiSnapshotWithOptions({}),
  stories2snapsConverter: new Stories2SnapsConverter({
    snapshotExtension: '.snap',
    storiesExtensions: ['.js', '.jsx', '.ts', '.tsx'],
  }),
});
