import imageLinkSlice from "./imageLinkSlice";
import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
  reducer: {
    imageLink: imageLinkSlice
  },
});
