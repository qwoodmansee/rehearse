import Routes from '@navigation/src/components/routes';

describe('Routes', () => {
  it('should return an object of routes mapped to something which can be rendered', () => {
    Object.keys(Routes).forEach((routeName) => {
      const route = Routes[routeName];
      expect(Object.keys(route)).toContain('screen');
      expect(Routes[routeName]['screen']).toBeInstanceOf(Function);
    });
  });
});
