import { AuthenticationAction } from '../actions';
import { AuthenticationState } from '../types/index';
import { 
  AUTHENTICATE_LOGIN, 
  AUTHENTICATING 
} from '../constants/index';

function initialState(): AuthenticationState {
  return {
    Authenticated: false,
    Authenticating: false
  };
}
export function Authentication(
    state: AuthenticationState = initialState(), 
    action: AuthenticationAction): AuthenticationState {
  switch (action.type) {
    case AUTHENTICATE_LOGIN:
      return { ...state, Authenticated: !state.Authenticated };
    case AUTHENTICATING:
      return { ...state, Authenticated: !state.Authenticating };
    default: return state;
  }
}