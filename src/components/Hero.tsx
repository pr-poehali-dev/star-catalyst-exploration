import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-100 via-green-50 to-yellow-50" />
      <div className="absolute top-10 left-10 text-6xl animate-bounce">🌈</div>
      <div className="absolute top-20 right-20 text-5xl animate-pulse">☀️</div>
      <div className="absolute bottom-32 left-1/4 text-6xl">🌳</div>
      <div className="absolute bottom-20 right-1/3 text-5xl">🦋</div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Overline */}
        <p
          className={`text-lg font-display font-semibold text-green-600 mb-6 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          🌿 Привет, друзья! 🌿
        </p>

        {/* Main Headline */}
        <h1
          className={`font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] text-green-700 mb-8 text-balance transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Давайте узнаем
          <span className="block text-yellow-500">про природу! 🌻</span>
        </h1>

        {/* Subheadline */}
        <p
          className={`text-xl md:text-2xl font-semibold text-blue-600 max-w-3xl mx-auto leading-relaxed mb-12 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Здесь ты найдёшь весёлые игры, узнаешь про животных 🐿️, растения 🌸 и отправишься в приключения!
        </p>

        {/* CTA */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#games"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-green-500 text-white text-xl font-display font-bold rounded-full hover:bg-green-600 hover:scale-110 transition-all duration-300 shadow-lg"
          >
            Начать игру! 🎮
          </a>
          <a
            href="#learn"
            className="inline-flex items-center gap-2 px-10 py-5 bg-yellow-400 text-gray-800 text-xl font-display font-bold rounded-full hover:bg-yellow-500 hover:scale-110 transition-all duration-300 shadow-lg"
          >
            Узнать больше 📚
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-stone to-transparent animate-pulse" />
      </div>
    </section>
  )
}