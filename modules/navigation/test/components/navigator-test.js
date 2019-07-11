import React from 'react';
import Navigator from '@navigation/src/components/navigator';
import Routes from '@navigation/src/components/routes';
import renderer from 'react-test-renderer';

describe('navigator', () => {
  it('creates an app container with a navigator', () => {
    const tree = renderer.create(<Navigator />).toTree();
    expect(tree.type.router).not.toBeNull();
  });

  it('contains a route for every route defined in routes.js', () => {
    const tree = renderer.create(<Navigator />).toTree();
    const routerRouteNames = Object.keys(tree.type.router.childRouters);
    const definedRouteNames = Object.keys(Routes);
    expect(routerRouteNames).toEqual(definedRouteNames);
  });
});