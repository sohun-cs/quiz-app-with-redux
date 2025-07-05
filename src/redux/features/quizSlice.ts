import { quizData } from '@/home/quizData';
import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    questions: quizData,
    currentQuestionIndex: 4,
    userAnswer: Array(quizData.length).fill(null)
}


export const quizSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        setAnswer: (state, action) => {
            const { questionIndex, answer } = action.payload
            state.userAnswer[questionIndex] = answer
        },

        nextQuestion: (state) => {
            if (state.currentQuestionIndex < state.questions.length - 1) {
                state.currentQuestionIndex += 1;
            }

        },

        prevQuestion: (state) => {
            if (state.currentQuestionIndex >= 1) {
                state.currentQuestionIndex -= 1;
            }

        }
    }
});

export const { setAnswer, nextQuestion, prevQuestion } = quizSlice.actions;
export default quizSlice.reducer;