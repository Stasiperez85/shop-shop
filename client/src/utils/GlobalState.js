import React, { createContext } from "react";
import { useProductReducer } from "./reducers";

const StoreContext = createContext();
const { Provider } = StoreContext;
