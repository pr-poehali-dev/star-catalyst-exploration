import { useState } from "react"
import Icon from "@/components/ui/icon"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-green-300 via-blue-300 to-purple-300 shadow-lg">
      <nav className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          <a href="/" className="font-display text-3xl font-bold text-white flex items-center gap-2 hover:scale-110 transition-transform">
            🌳 Мир Природы
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#games"
              className="text-lg font-display font-bold text-white hover:text-yellow-200 hover:scale-110 transition-all flex items-center gap-2"
            >
              <Icon name="Gamepad2" size={24} />
              Игры
            </a>
            <a
              href="#learn"
              className="text-lg font-display font-bold text-white hover:text-yellow-200 hover:scale-110 transition-all flex items-center gap-2"
            >
              <Icon name="BookOpen" size={24} />
              Учиться
            </a>
            <a
              href="#coloring"
              className="text-lg font-display font-bold text-white hover:text-yellow-200 hover:scale-110 transition-all flex items-center gap-2"
            >
              <Icon name="Palette" size={24} />
              Раскраски
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden bg-white rounded-full p-3 hover:scale-110 transition-transform"
            aria-label="Открыть меню"
          >
            {isMenuOpen ? (
              <Icon name="X" size={28} className="text-purple-600" />
            ) : (
              <Icon name="Menu" size={28} className="text-purple-600" />
            )}
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${isMenuOpen ? "max-h-96 pb-6" : "max-h-0"}`}
        >
          <div className="flex flex-col gap-4 pt-4 bg-white/90 rounded-2xl p-6 mt-2">
            <a
              href="#games"
              onClick={() => setIsMenuOpen(false)}
              className="text-xl font-display font-bold text-purple-600 hover:text-green-600 transition-colors flex items-center gap-3 p-3 hover:bg-yellow-100 rounded-xl"
            >
              <Icon name="Gamepad2" size={28} />
              🎮 Игры
            </a>
            <a
              href="#learn"
              onClick={() => setIsMenuOpen(false)}
              className="text-xl font-display font-bold text-purple-600 hover:text-green-600 transition-colors flex items-center gap-3 p-3 hover:bg-yellow-100 rounded-xl"
            >
              <Icon name="BookOpen" size={28} />
              📚 Учиться
            </a>
            <a
              href="#coloring"
              onClick={() => setIsMenuOpen(false)}
              className="text-xl font-display font-bold text-purple-600 hover:text-green-600 transition-colors flex items-center gap-3 p-3 hover:bg-yellow-100 rounded-xl"
            >
              <Icon name="Palette" size={28} />
              🎨 Раскраски
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
