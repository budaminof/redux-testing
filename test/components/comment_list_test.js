import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {
  let component;
  beforeEach(() => {
    const props = {
      comments: ['new comment', 'another new comment', 'completly new comment']
    };
    component = renderComponent(CommentList, null, props);
  })

  it('shows an li for each comment', () => {
    expect(component.find('li').length).to.equal(3);
  });

  it('shows each comment that is provided', () => {
    expect(component).to.contain('new comment');
    expect(component).to.contain('another new comment');
    expect(component).to.contain('completly new comment');
    // there are other options like value or text or what ever I can find
  });

});
