import axios from "axios";
import { createContext, useEffect, useContext, useReducer } from "react";
import { reducer } from "../../Reducer/Reducer";

export const ContextGlobal = createContext();

const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];

// eslint-disable-next-line react-refresh/only-export-components
export const initialState = {
  dentists: [],
  favs: lsFavs,
  theme: "light",
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      dispatch({ type: "GET_DENTISTS", payload: res.data });
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  useEffect(() => {
    document.body.className = state.theme === "dark" ? "dark" : "";
  }, [state.theme]);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export const useDentistStates = () => useContext(ContextGlobal);