import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const PsikologListSlice = createSlice({
  name: "psikolog",
  initialState: [],
  reducers: {
    set: (state, action) => {
      return {
        ...state,
        psikologList: action.payload,
      };
    },
    add: (state, action) => {
      return {
        ...state,
        psikologList: [...state.psikologList, action.payload],
      };
    },
    delete: (state, action) => {
      return {
        ...state,
        psikologList: action.payload,
      };
    },
  },
});

export const fetchPsikologs = () => {
    return (dispatch) => {
      axios
        .get("https://645993c88badff578e104e27.mockapi.io/Psikolog")
        .then((response) => {
          dispatch(psikologAction.set(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };
  

export const { actions: psikologAction, reducer: psikologReducer } = PsikologListSlice;
