
import './App.css'
import Question from './home/Question'
import QuizSummary from './home/QuizSummary'
import { useAppSelector } from './redux/hook'

function App() {
  const { quizComplete } = useAppSelector((state) => state.questions)

  return (
    <div>
      <h1>
        <h1 className='text-center text-4xl my-12'>Quiz App</h1>
        {!quizComplete ? <Question></Question> : <QuizSummary></QuizSummary>}
      </h1>
    </div>
  )
}

export default App
