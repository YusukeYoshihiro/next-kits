import * as types from './actions/types';

interface actionProps {
  type: string,
  payload?: Function
}

interface State {
  count: number
}

export const initialState: State = {
  count: 0
}

export const reducer = (state: State, action: actionProps) => {
  switch (action.type) {
    case types.INCREMENT:
      return {count: state.count + 1};
    case types.DECREMENT:
      return {count: state.count - 1};
    case types.RESET:
      return initialState;
    default:
      throw new Error();
  }
}

export default { reducer, initialState };
