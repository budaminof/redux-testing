import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMNET } from '../../src/actions/types';

describe('Comment Reducer', () => {
  it('handle action with unknow type', () => {
    // eql (vs equal) is deep equal, it will check to see if it the absolute save object
    expect(commentReducer(undefined, {})).to.eql([]);
  });

  it('handle action of type SAVE_COMMENT', () => {
    const action = { type: SAVE_COMMNET, payload: 'new comment'}
    expect(commentReducer([] ,action)).to.eql(['new comment']);
  });

});
