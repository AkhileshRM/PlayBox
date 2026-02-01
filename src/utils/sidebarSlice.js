import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice = createSlice({
  name: "sidebar",
  initialState: {
    sidebarMenu: true,
  },
  reducers: {
    toggleSideBarMenu: (state) => {
      state.sidebarMenu = !state.sidebarMenu;
    },
    closeMenu: (state) => {
      state.sidebarMenu = false
    }
  },
});

export default sideBarSlice.reducer;
export const { toggleSideBarMenu, closeMenu } = sideBarSlice.actions;
