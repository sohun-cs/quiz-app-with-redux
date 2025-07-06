import {
    Card, CardContent, CardHeader, CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"


export default function QuizSummary() {

    // 

    return (
        <div>
            <Card className="max-w-lg mx-auto p-6 shadow-xl rounded-xl">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">Quiz Summary</CardTitle>
                </CardHeader>
                <CardContent>
                    <h3 className="text-xl font-medium mb-4">You got 4 out of 10</h3>

                    {/* Progress Bar */}
                    <Progress value={33} className="h-4 rounded-full" />

                    <div className="flex justify-between mt-2">
                        <span className="text-sm">40%</span>
                        <span className="text-sm">Performance: Good</span>
                    </div>

                    <div className="mb-4">
                        <p className="text-sm"><strong>Incorrect Answer: </strong> 6</p>
                    </div>

                    <div className="mt-4">
                        <p className="text-sm">Great Job! Keep practicing</p>
                    </div>

                </CardContent>
            </Card>
        </div>
    )
}
