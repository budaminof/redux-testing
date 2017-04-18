import { SAVE_COMMNET } from './types';

export function saveCommnet(comment) {
  return {
    type: SAVE_COMMNET,
    payload: comment
  }
}
