import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppDispatch, useAppSelector } from "../redux/hook"
import { Button } from "@/components/ui/button";
import QuizControls from "./QuizControls";
import { setAnswer } from "@/redux/features/quizSlice";


export default function Question() {

    const dispatch = useAppDispatch();

    const { questions, currentQuestionIndex, userAnswer } = useAppSelector((state) => state.questions);

    const currentQuestion = questions[currentQuestionIndex];
    const currenAnswer = userAnswer[currentQuestionIndex];

    const handleAnswerChange = (ans: string) => {
        dispatch(setAnswer({
            questionIndex: currentQuestionIndex,
            answer: ans
        }));
        console.log(ans);
    }


    console.log(questions);

    return (
        <div className="flex justify-center">
            <Card className="w-[450px]">
                <CardHeader>
                    <CardTitle>{currentQuestion.question}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div>
                        {currentQuestion.options.map((option, id) =>
                            <Button
                                variant={option === currenAnswer ? "default" : "outline"}
                                onClick={() => handleAnswerChange(option)}
                                className="w-full mt-3" size={"lg"} key={id}>
                                {option}
                            </Button>)}
                    </div>
                    <QuizControls></QuizControls>
                </CardContent>
            </Card>
        </div>
    )
}
