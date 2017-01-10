import createReducer from './createReducer';
import {
  DISCORD_REQUEST_INVITE,
  DISCORD_CAPTCHA_COMPLETE,
} from '../actions/types';

const reducer = createReducer({}, {
  [DISCORD_REQUEST_INVITE](discord) {
    return {
      ...discord,
      isCaptcha: true,
      isInvite: false,
    };
  },
  [DISCORD_CAPTCHA_COMPLETE](discord) {
    return {
      ...discord,
      isCaptcha: false,
      isInvite: true,
    };
  },
});

export default reducer;
