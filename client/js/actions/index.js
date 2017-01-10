import {
  DISCORD_REQUEST_INVITE,
  DISCORD_CAPTCHA_COMPLETE,
} from './types';


export function requestInvite() {
  return {
    type: DISCORD_REQUEST_INVITE,
  };
}

export function captchaComplete() {
  return {
    type: DISCORD_CAPTCHA_COMPLETE,
  };
}
