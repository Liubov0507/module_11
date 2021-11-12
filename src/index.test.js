import {getPercents} from './index.js';

describe(
  'test persent',
  () => {
    it('10 percent of 50', () => {
      expect(getPercents (10, 50)).toBe(5);
    });

    it('20 percent of 100', () => {
       expect(getPercents (20, 100)).toBe(20);
    });

    it('passes when value is NaN', () => {
      expect(NaN).toBeNaN();
      expect(1).not.toBeNaN();
    });

    it('there is a new persent', () => {
      expect(getPercents ()).toBeDefined();
   });
  });  