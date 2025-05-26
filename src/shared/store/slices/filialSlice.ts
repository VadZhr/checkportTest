import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/app/store/store";

interface IInitialState {
    currentFilialId: string;
};

const initialState: IInitialState = {
    currentFilialId: ''
};

const filialSlice = createSlice({
    name: 'filial',
    initialState,
    reducers: {
        updateCurrentFilialId: (state, action:PayloadAction<{ newFilialId: string }>): void => {
            const { newFilialId } = action.payload;

            state.currentFilialId = newFilialId;
        }
    }
});

export const filialSelector = (state: RootState): IInitialState => state.filial;

export const { updateCurrentFilialId } = filialSlice.actions;

export default filialSlice.reducer;