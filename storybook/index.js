import { AppRegistry } from 'react-native';
import { configure, getStorybookUI } from '@storybook/react-native';
import { loadStories } from '@root/storybook/generated-stories';
import '@root/storybook/rn-addons';

configure(() => {
  loadStories();
}, module);

const StorybookUIRoot = getStorybookUI({});

AppRegistry.registerComponent('main', () => StorybookUIRoot);

export default StorybookUIRoot;
