import { createSelector } from '@reduxjs/toolkit';
import { type RootState } from '../../store';

const selector = (state: RootState) => state.ui;

export const isMenuOpen = createSelector([selector], (state) => state.isMenuOpen);

export const activeDialog = createSelector([selector], (state) => state.activeDialog);

export const getToast = createSelector([selector], (state) => state.toast);

export const getUI = createSelector([selector], (state) => state);

export default { isMenuOpen, activeDialog, getToast, getUI };
