import { useEffect, useRef, useState } from "react"

export function Philosophy() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="games" className="py-20 px-6 lg:px-12 bg-gradient-to-b from-yellow-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`relative aspect-square bg-gradient-to-br from-purple-200 to-pink-200 rounded-3xl overflow-hidden shadow-2xl transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-9xl animate-bounce">🎮</div>
            </div>
            <div className="absolute top-4 right-4 text-6xl">🌟</div>
            <div className="absolute bottom-4 left-4 text-6xl">🎨</div>
          </div>

          <div className="lg:pl-8">
            <p
              className={`text-2xl font-display font-bold text-orange-500 mb-4 transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              🎯 Весёлые игры
            </p>

            <h2
              className={`font-display text-5xl md:text-6xl font-bold leading-tight text-purple-700 mb-8 transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Играй и учись вместе с нами!
            </h2>

            <div
              className={`space-y-6 text-xl text-gray-700 leading-relaxed transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="font-semibold">
                Здесь ты найдёшь <span className="text-pink-600">загадки про животных</span>, 
                <span className="text-green-600"> раскраски</span> и 
                <span className="text-blue-600"> викторины</span>!
              </p>
              <p>
                Собирай звёздочки ⭐, проходи уровни и становись настоящим знатоком природы!
              </p>
            </div>

            <div
              className={`grid grid-cols-3 gap-6 mt-12 transition-all duration-1000 delay-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="text-center p-4 bg-yellow-100 rounded-2xl">
                <p className="font-display text-4xl font-bold text-yellow-600">50+</p>
                <p className="text-sm font-semibold text-gray-600 mt-2">Игр</p>
              </div>
              <div className="text-center p-4 bg-green-100 rounded-2xl">
                <p className="font-display text-4xl font-bold text-green-600">100+</p>
                <p className="text-sm font-semibold text-gray-600 mt-2">Загадок</p>
              </div>
              <div className="text-center p-4 bg-pink-100 rounded-2xl">
                <p className="font-display text-4xl font-bold text-pink-600">200+</p>
                <p className="text-sm font-semibold text-gray-600 mt-2">Картинок</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
