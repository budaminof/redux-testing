import { SAVE_COMMNET } from '../actions/types';

export default function(state = [], action) {
  switch(action.type) {
    case SAVE_COMMNET:
      return [ ...state, action.payload ];
  }
  return state;
}

// { ...state, action.payload } === state.contact([action.payload]);
