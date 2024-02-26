import { createSlice} from "@reduxjs/toolkit";

interface SearchState {
  search: string | null;
}

const initialState: SearchState = {
  search: null,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action) => {
       console.log(action.payload)
      state.search =action.payload;
    },
  },
});

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;

