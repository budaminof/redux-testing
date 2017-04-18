import { expect } from '../test_helper';
import { SAVE_COMMNET } from '../../src/actions/types';
// because it is index.js we don't need to say excatly what file it is
import { saveCommnet } from '../../src/actions';

describe('actions', () => {

  describe('saveCommnet', () => {
    it('has the correct type', () => {
      const action = saveCommnet();
      expect(action.type).to.equal(SAVE_COMMNET);
    });

    it('has the correct payload', () => {
      const action = saveCommnet('new comment');
      expect(action.payload).to.equal('new comment');
    });

  });
});
