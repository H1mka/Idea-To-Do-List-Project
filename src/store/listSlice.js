import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    ideasList: [],
    completed: [],
    value: 0,
};

export const ideasSlice = createSlice({
    name: 'idea-list',
    initialState,
    reducers: {
        newIdea: (state, action) => {
            if (!state.ideasList.some((idea) => idea.key === action.payload.key))
                state.ideasList.push(action.payload);
        },
        setIdeas: (state, action) => {
            state.ideasList = action.payload;
        },
        completeIdea: (state, action) => {
            state.ideasList = state.ideasList.filter(
                (idea) => idea.key !== action.payload.key
            );
            state.completed.push(action.payload);
        },
    },
});

export const { newIdea, setIdeas, completeIdea } = ideasSlice.actions;

export const selectIdeas = (state) => state.list.ideasList;

export default ideasSlice.reducer;