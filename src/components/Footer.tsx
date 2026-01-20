import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer className="py-12 px-6 lg:px-12 bg-gradient-to-b from-green-100 to-blue-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <p className="font-display text-3xl font-bold text-green-700 mb-4 flex items-center justify-center md:justify-start gap-2">
              🌳 Мир Природы
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Узнавай, играй и открывай удивительный мир природы вместе с нами!
            </p>
          </div>

          <div className="text-center">
            <p className="font-display text-xl font-bold text-purple-700 mb-4">🎯 Разделы</p>
            <nav className="flex flex-col gap-3">
              <a href="#games" className="text-lg font-semibold text-blue-600 hover:text-green-600 hover:scale-110 transition-all inline-block">
                🎮 Игры
              </a>
              <a href="#learn" className="text-lg font-semibold text-blue-600 hover:text-green-600 hover:scale-110 transition-all inline-block">
                📚 Учиться
              </a>
              <a href="#coloring" className="text-lg font-semibold text-blue-600 hover:text-green-600 hover:scale-110 transition-all inline-block">
                🎨 Раскраски
              </a>
            </nav>
          </div>

          <div className="text-center md:text-right">
            <p className="font-display text-xl font-bold text-purple-700 mb-4">🌟 Мы в соцсетях</p>
            <div className="flex gap-4 justify-center md:justify-end">
              <a href="#" className="bg-pink-300 p-3 rounded-full hover:scale-110 transition-transform">
                <Icon name="Heart" size={24} className="text-pink-700" />
              </a>
              <a href="#" className="bg-blue-300 p-3 rounded-full hover:scale-110 transition-transform">
                <Icon name="Share2" size={24} className="text-blue-700" />
              </a>
              <a href="#" className="bg-yellow-300 p-3 rounded-full hover:scale-110 transition-transform">
                <Icon name="Star" size={24} className="text-yellow-700" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t-4 border-white/50 text-center">
          <div className="flex justify-center gap-4 mb-4 text-4xl">
            🦋🐿️🌸🐦🌈🦊🌻
          </div>
          <p className="text-lg font-bold text-gray-700">
            &copy; {new Date().getFullYear()} Мир Природы. Создано с любовью для детей! 💚
          </p>
        </div>
      </div>
    </footer>
  )
}
