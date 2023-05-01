import { atom } from 'recoil';

export const openedFooterPolicyNumAtom = atom({
  key: 'openedFooterPolicyNum',
  default: -1
});

export const isSearchOpenAtom = atom({
  key: 'isSearchOpen',
  default: false
});

export const isOnContentAtom = atom({
  key: "isOnContent",
  default: false
});