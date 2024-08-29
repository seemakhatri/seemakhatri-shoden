import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LeadState {
    activeStep: number;
    leads: any[];
}

const initialState: LeadState = {
    activeStep: 1,
    leads: [],
};

const leadSlice = createSlice({
    name: 'leads',
    initialState,
    reducers: {
        setStep: (state, action: PayloadAction<number>) => {
            state.activeStep = action.payload;
        },
        addLeads: (state, action: PayloadAction<any[]>) => {
            state.leads = action.payload;
        },
    },
});

export const { setStep, addLeads } = leadSlice.actions;
export default leadSlice.reducer;
