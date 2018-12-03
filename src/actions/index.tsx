import * as constants from '../constants';

export interface AuthenticateLogin {
    type: constants.AUTHENTICATE_LOGIN;
}

export interface Authenticating {
    type: constants.AUTHENTICATING;
}

export type AuthenticationAction = AuthenticateLogin | Authenticating;

export function authenticateLogin(): AuthenticateLogin {
    return {
        type: constants.AUTHENTICATE_LOGIN
    };
}

export function authenticating(): Authenticating {
    return {
        type: constants.AUTHENTICATING
    };
}