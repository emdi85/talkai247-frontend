import { configureStore } from '@reduxjs/toolkit';
import assistantReducer from '../features/assistant/assistantSlice';
import counterReducer from '../features/counter/counterSlice';
import phoneReducer from '../features/phone/phoneSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    assistant: assistantReducer,
    phone: phoneReducer,
  },
});
