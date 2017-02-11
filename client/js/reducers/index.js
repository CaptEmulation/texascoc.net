import { routerReducer } from 'react-router-redux';
import discord from './discord';

const initialState = {
  navItems: [{
    name: 'about',
    label: 'About',
  }, {
    name: 'discord',
    label: 'Discord',
  }],
  discord: {
    isInvite: false,
    isCaptcha: false,
    invites: [{
      name: 'Clash of Clans',
      code: '7Cu44CY',
    }, {
      name: 'Clash Royale',
      code: 'CR2GYP4',
    }],
  },
};

export default function (state = initialState, action) {
  return {
    navItems: state.navItems,
    discord: discord(state.discord, action),
    routing: routerReducer(state.routing, action),
  };
}
