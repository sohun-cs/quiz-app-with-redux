import { Button } from "@/components/ui/button";
import { nextQuestion, prevQuestion } from "@/redux/features/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

export default function QuizControls() {

    const { questions, currentQuestionIndex, userAnswer } = useAppSelector((state) => state.questions);


    const dispatch = useAppDispatch();
    const isAnswerSelected = userAnswer[currentQuestionIndex] !== null;

    const handleNext = () => {
        if (isAnswerSelected) {
            dispatch(nextQuestion());
        }

    };

    const handlePrev = () => {
        if (isAnswerSelected) {
            dispatch(prevQuestion());
        }

    }

    return (
        <div className="flex justify-between mt-4 space-x-3">
            <Button onClick={handlePrev}>Prev</Button>
            <Button onClick={handleNext}>Next</Button>
        </div>
    )
}
