import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCreateAssistant, fetchGetAssistant } from "./assistantAPI";

const initialState = {
    assistants: [],
    newAssistant: {}, 
    status: 'idle',
}

export const loadAssistants = createAsyncThunk(
  'assistant/fetchGetAssistant',
  async () => {
    const response = await fetchGetAssistant();
    console.log(response);
    return response;
  }
)

export const handleCreateAssistant = createAsyncThunk(
    'assistant/fetchCreateAssistant',
    async (payload) => {
      const response = await fetchCreateAssistant(payload);
      console.log(response);
      return response;
    }
  );

export const assistantSlice = createSlice({
    name: 'assistant',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(handleCreateAssistant.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(handleCreateAssistant.fulfilled, (state, action) => {
          state.status = 'idle';
          state.newAssistant = action.payload;
        })
        .addCase(loadAssistants.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(loadAssistants.fulfilled, (state, action) => {
          state.status = 'idle';
          state.assistants = action.payload;
        })
    },
  });

export const { } = assistantSlice.actions;


export default assistantSlice.reducer;