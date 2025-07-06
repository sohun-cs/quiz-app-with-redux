import {
    Card, CardContent, CardHeader, CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"


export default function QuizSummary() {

    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Quiz Summary</CardTitle>
                </CardHeader>
                <CardContent>
                    <h3>You got 4 out of 10</h3>

                    {/* Progress Bar */}
                    <Progress value={33} />

                    <div>
                        <span>40%</span>
                        <span>Performance: Good</span>
                    </div>

                    <div>
                        <p><strong>Incorrect Answer: </strong></p>
                    </div>

                    <div>
                        <p>Great Job! Keep practicing</p>
                    </div>

                </CardContent>
            </Card>
        </div>
    )
}
