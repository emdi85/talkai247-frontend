import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchBuyPhone, fetchGetPhone, fetchSetAssistant, fetchhandleCallOutBound, fetchloadAssistantPhone } from "./phoneAPI";

const initialState = {
    getPhone: [], 
    assistants: [],
    selectedAssistant: '',
    assistantPhone: [],
    status: false,
    message: ''
}

export const handleCallOutBound = createAsyncThunk(
  'phone/fetchhandleCallOutBound',
  async (payload) => {
    const response = await fetchhandleCallOutBound(payload);
    return response;
  }
)

export const loadAssistantPhone = createAsyncThunk(
  'phone/fetchloadAssistantPhone',
  async () => {
    const response = await fetchloadAssistantPhone();
    console.log(response)
    return response;
  }
)

export const handleSetAssistant = createAsyncThunk(
  'phone/fetchSetAssistant',
  async (payload) => {
    const response = await fetchSetAssistant(payload);
    return response;
  }
)

export const handleSearchPhone = createAsyncThunk(
    'phone/fetchGetPhone',
    async (payload) => {
      const response = await fetchGetPhone(payload);
      return response;
    }
  );

export const handleBuyPhone = createAsyncThunk(
    'phone/fetchBuyPhone',
    async (payload) =>{
      const response = await fetchBuyPhone(payload.result.phoneNumber);
      return response;
    }
)

export const phoneSlice = createSlice({
    name: 'phone',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(handleSearchPhone.pending, (state) => {
          state.status = true;
        })
        .addCase(handleSearchPhone.fulfilled, (state, action) => {
          console.log(action.payload)
          state.status = false;
          state.getPhone = action.payload;
        })
        .addCase(handleSetAssistant.pending, (state) => {
          state.status = true;
        })
        .addCase(handleSetAssistant.fulfilled, (state, action) => {
          state.status = false;
        })
        .addCase(loadAssistantPhone.pending, (state)=>{
          state.status = true;
        })
        .addCase(loadAssistantPhone.fulfilled, (state, action) => {
          state.status = false;
          state.assistantPhone = action.payload;
        })
        .addCase(handleCallOutBound.pending, (state) =>{
          state.status = true;
        })
        .addCase(handleCallOutBound.fulfilled, (state, action) =>{
          state.status = false;
          console.log(action.payload.status)
          state.message = action.payload.status;
        })
    },
  });

// export const { } = phoneSlice.actions;
export const selectPhone = (state) => state.phone.getPhone;
export const status = (state) => state.phone.status;

export default phoneSlice.reducer;