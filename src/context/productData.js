import { createContext, useReducer, useContext } from "react";
import { dataReducer } from "../reducer/reducer";

const initialState = {
  vegetables: true,
  fruits: false,
};

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  return (
    <div>
      <DataContext.Provider
        value={{
          vegetables: state.vegetables,
          fruits: state.fruits,
          dispatch,
        }}
      >
        {children}
      </DataContext.Provider>
    </div>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
export default DataProvider;
