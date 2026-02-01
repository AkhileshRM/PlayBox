import { configureStore } from "@reduxjs/toolkit";
import sideBarSlice from "./sidebarSlice";
import searchSlice from "./searchSlice";
import  chatSlice  from "./chatSlice";

const sidebarStore = configureStore({
  reducer: {
    sidebar: sideBarSlice,
    search: searchSlice,
    chat: chatSlice
  },
});

export default sidebarStore;
