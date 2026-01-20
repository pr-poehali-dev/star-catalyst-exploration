import { useEffect, useRef, useState } from "react"
import Icon from "@/components/ui/icon"

const topics = [
  {
    title: "Животные леса",
    description: "Познакомься с белочками, зайчиками, лисичками и медведями! Узнай, где они живут и что едят.",
    icon: "Squirrel",
    emoji: "🐿️",
    color: "bg-orange-100 hover:bg-orange-200",
  },
  {
    title: "Птицы",
    description: "Научись узнавать птичек по голосам! Воробьи, синички, совы и попугайчики ждут тебя.",
    icon: "Bird",
    emoji: "🐦",
    color: "bg-blue-100 hover:bg-blue-200",
  },
  {
    title: "Растения и цветы",
    description: "Открой для себя волшебный мир растений! Деревья, цветочки и грибочки — всё такое интересное!",
    icon: "TreePine",
    emoji: "🌳",
    color: "bg-green-100 hover:bg-green-200",
  },
  {
    title: "Времена года",
    description: "Узнай, как природа меняется! Весна, лето, осень и зима — у каждого свои секреты.",
    icon: "Sun",
    emoji: "🌈",
    color: "bg-yellow-100 hover:bg-yellow-200",
  },
]

export function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="learn" className="py-20 px-6 lg:px-12 bg-gradient-to-b from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p
            className={`text-2xl font-display font-bold text-green-600 mb-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            🌟 Темы для изучения 🌟
          </p>
          <h2
            className={`font-display text-4xl md:text-6xl font-bold text-blue-700 text-balance transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Что мы будем изучать?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {topics.map((topic, index) => (
            <div
              key={topic.title}
              className={`group ${topic.color} p-8 rounded-3xl transition-all duration-1000 hover:scale-105 cursor-pointer shadow-lg ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">{topic.emoji}</div>
                <Icon name={topic.icon} size={40} className="text-gray-700" />
              </div>
              <h3 className="font-display text-3xl font-bold text-gray-800 mb-3">{topic.title}</h3>
              <p className="text-lg text-gray-700 leading-relaxed">{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
