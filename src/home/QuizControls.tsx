import { Button } from "@/components/ui/button";
import { completeQuiz, nextQuestion, prevQuestion } from "@/redux/features/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

export default function QuizControls() {

    const { questions, currentQuestionIndex, userAnswer, quizComplete } = useAppSelector((state) => state.questions);


    const dispatch = useAppDispatch();
    const isAnswerSelected = userAnswer[currentQuestionIndex] !== null;

    const handleNext = () => {
        if (isAnswerSelected) {
            dispatch(nextQuestion());
        }
    };

    const handlePrev = () => {
        dispatch(prevQuestion());
    }

    // Handle the "Complete Quiz" button click
    const handleCompleteQuiz = () => {
        dispatch(completeQuiz())
    }

    const isCompleteEnabled = isAnswerSelected || currentQuestionIndex !== questions.length - 1;

    return (
        <div className="flex justify-between mt-4 space-x-3">

            {/* Previous Button */}
            <Button
                onClick={handlePrev}
                disabled={currentQuestionIndex === 0}>Prev
            </Button>

            {/* Next Button */}
            {currentQuestionIndex < questions.length - 1 && !quizComplete && (

                <Button
                    onClick={handleNext}
                    disabled={!isAnswerSelected}>Next
                </Button>

            )}

            {/* Complete Quiz Button */}
            {currentQuestionIndex === questions.length - 1 && !quizComplete && (
                <Button
                    onClick={handleCompleteQuiz}
                    disabled={!isCompleteEnabled}>
                    Complete Quiz
                </Button>
            )}
        </div>
    )
}
