import { useState } from "react"
import Icon from "@/components/ui/icon"

interface Question {
  question: string
  emoji: string
  options: string[]
  correct: number
  fact: string
}

const questions: Question[] = [
  {
    question: "Что любит кушать белочка?",
    emoji: "🐿️",
    options: ["Орешки и грибочки", "Конфеты", "Пиццу", "Мороженое"],
    correct: 0,
    fact: "Белочки запасают орешки на зиму в дупле дерева!"
  },
  {
    question: "Где живёт медведь зимой?",
    emoji: "🐻",
    options: ["В доме", "В берлоге", "В гнезде", "В норке"],
    correct: 1,
    fact: "Медведи спят всю зиму в берлоге и видят сладкие сны!"
  },
  {
    question: "Какого цвета листья осенью?",
    emoji: "🍂",
    options: ["Синие", "Зелёные", "Жёлтые и красные", "Фиолетовые"],
    correct: 2,
    fact: "Осенью листья становятся жёлтыми, красными и оранжевыми!"
  },
  {
    question: "Кто говорит 'ку-ку'?",
    emoji: "🐦",
    options: ["Воробей", "Кукушка", "Сова", "Попугай"],
    correct: 1,
    fact: "Кукушка кукует в лесу, и её голос слышно далеко-далеко!"
  },
  {
    question: "Что появляется после дождика?",
    emoji: "🌈",
    options: ["Снег", "Радуга", "Звёзды", "Молния"],
    correct: 1,
    fact: "Радуга - это волшебный мостик из семи цветов!"
  }
]

export function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showFact, setShowFact] = useState(false)
  const [quizComplete, setQuizComplete] = useState(false)

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return

    setSelectedAnswer(index)
    setShowFact(true)

    if (index === questions[currentQuestion].correct) {
      setScore(score + 1)
    }
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowFact(false)
    } else {
      setQuizComplete(true)
    }
  }

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setSelectedAnswer(null)
    setShowFact(false)
    setQuizComplete(false)
  }

  if (quizComplete) {
    const isGreatScore = score >= 4
    const isGoodScore = score >= 3

    return (
      <section className="py-20 px-6 lg:px-12 bg-gradient-to-b from-purple-100 to-blue-100">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-9xl mb-8 animate-bounce">
            {isGreatScore ? "🏆" : isGoodScore ? "⭐" : "🎈"}
          </div>
          
          <h2 className="font-display text-5xl md:text-7xl font-bold text-purple-700 mb-6">
            {isGreatScore ? "Ура! Ты молодец!" : isGoodScore ? "Отлично!" : "Хорошая попытка!"}
          </h2>
          
          <p className="text-3xl font-bold text-blue-600 mb-8">
            Твой результат: {score} из {questions.length} {score === 5 ? "🌟🌟🌟" : score >= 3 ? "⭐⭐" : "⭐"}
          </p>
          
          <button
            onClick={restartQuiz}
            className="px-12 py-6 bg-green-500 text-white text-2xl font-display font-bold rounded-full hover:bg-green-600 hover:scale-110 transition-all duration-300 shadow-lg"
          >
            Играть снова! 🎮
          </button>
        </div>
      </section>
    )
  }

  const question = questions[currentQuestion]

  return (
    <section className="py-20 px-6 lg:px-12 bg-gradient-to-b from-purple-100 to-blue-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-between items-center mb-6">
            <div className="bg-yellow-300 px-6 py-3 rounded-full">
              <p className="font-display text-xl font-bold text-gray-800">
                Вопрос {currentQuestion + 1} из {questions.length}
              </p>
            </div>
            <div className="bg-green-300 px-6 py-3 rounded-full flex items-center gap-2">
              <Icon name="Star" size={24} className="text-yellow-600" />
              <p className="font-display text-xl font-bold text-gray-800">{score}</p>
            </div>
          </div>

          <div className="text-8xl mb-8 animate-pulse">{question.emoji}</div>
          
          <h3 className="font-display text-4xl md:text-5xl font-bold text-purple-700 mb-12">
            {question.question}
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index
            const isCorrect = index === question.correct
            const showResult = selectedAnswer !== null

            let bgColor = "bg-white hover:bg-blue-100"
            if (showResult) {
              if (isCorrect) bgColor = "bg-green-300"
              else if (isSelected) bgColor = "bg-red-300"
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={selectedAnswer !== null}
                className={`${bgColor} p-6 rounded-2xl text-left text-xl font-bold text-gray-800 transition-all duration-300 hover:scale-105 shadow-lg disabled:cursor-not-allowed`}
              >
                <div className="flex items-center gap-4">
                  <div className="text-4xl">
                    {showResult && isCorrect && "✅"}
                    {showResult && isSelected && !isCorrect && "❌"}
                    {!showResult && ["🅰️", "🅱️", "©️", "🅿️"][index]}
                  </div>
                  <span>{option}</span>
                </div>
              </button>
            )
          })}
        </div>

        {showFact && (
          <div className="bg-yellow-100 border-4 border-yellow-400 rounded-3xl p-8 mb-8 animate-pulse">
            <p className="text-2xl font-bold text-center text-gray-800 mb-4">
              {selectedAnswer === question.correct ? "🎉 Правильно!" : "💡 Интересный факт:"}
            </p>
            <p className="text-xl text-center text-gray-700">{question.fact}</p>
          </div>
        )}

        {showFact && (
          <div className="text-center">
            <button
              onClick={nextQuestion}
              className="px-12 py-6 bg-blue-500 text-white text-2xl font-display font-bold rounded-full hover:bg-blue-600 hover:scale-110 transition-all duration-300 shadow-lg"
            >
              {currentQuestion < questions.length - 1 ? "Следующий вопрос ➡️" : "Посмотреть результат 🏆"}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
