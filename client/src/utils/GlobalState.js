import React, { createContext, useContext } from "react";
import { useBikeReducer } from "./reducers";

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useBikeReducer({
        bikes: [],
    });
    console.log(state);
    return <Provider value={[state, dispatch]} {...props} />;
    
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
