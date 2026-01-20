import { useState } from "react"
import Icon from "@/components/ui/icon"

interface ColoringImage {
  name: string
  emoji: string
  paths: string[]
}

const coloringImages: ColoringImage[] = [
  {
    name: "Бабочка",
    emoji: "🦋",
    paths: [
      "M50 30 Q40 20 30 30 Q20 40 30 50 Q40 60 50 50",
      "M50 30 Q60 20 70 30 Q80 40 70 50 Q60 60 50 50",
      "M50 50 L50 80",
      "M45 25 Q45 20 48 18 Q50 15 52 18 Q55 20 55 25"
    ]
  },
  {
    name: "Рыбка",
    emoji: "🐠",
    paths: [
      "M30 50 Q50 30 70 50 Q50 70 30 50",
      "M70 50 L85 45 L85 55 Z",
      "M40 45 L35 35 L45 40",
      "M55 45 A3 3 0 1 1 55 45.1"
    ]
  },
  {
    name: "Солнышко",
    emoji: "☀️",
    paths: [
      "M50 50 m-15 0 a15 15 0 1 0 30 0 a15 15 0 1 0 -30 0",
      "M50 20 L50 30",
      "M50 70 L50 80",
      "M20 50 L30 50",
      "M70 50 L80 50",
      "M30 30 L35 35",
      "M70 70 L65 65",
      "M30 70 L35 65",
      "M70 30 L65 35"
    ]
  },
  {
    name: "Цветочек",
    emoji: "🌸",
    paths: [
      "M50 40 Q45 35 50 30 Q55 35 50 40",
      "M50 40 Q55 35 60 40 Q55 45 50 40",
      "M50 40 Q55 45 50 50 Q45 45 50 40",
      "M50 40 Q45 45 40 40 Q45 35 50 40",
      "M48 42 A3 3 0 1 1 52 42 A3 3 0 1 1 48 42",
      "M50 50 L50 75",
      "M50 60 Q40 55 35 60"
    ]
  }
]

const colors = [
  { name: "Красный", value: "#FF6B6B", emoji: "🔴" },
  { name: "Синий", value: "#4ECDC4", emoji: "🔵" },
  { name: "Жёлтый", value: "#FFE66D", emoji: "🟡" },
  { name: "Зелёный", value: "#95E1D3", emoji: "🟢" },
  { name: "Розовый", value: "#FF8FB1", emoji: "🩷" },
  { name: "Оранжевый", value: "#FFA07A", emoji: "🟠" },
  { name: "Фиолетовый", value: "#C5A3FF", emoji: "🟣" },
  { name: "Коричневый", value: "#D4A574", emoji: "🟤" }
]

export function Coloring() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(colors[0].value)
  const [pathColors, setPathColors] = useState<{ [key: string]: string }>({})

  const handlePathClick = (imageIndex: number, pathIndex: number) => {
    const key = `${imageIndex}-${pathIndex}`
    setPathColors({ ...pathColors, [key]: selectedColor })
  }

  const clearDrawing = () => {
    setPathColors({})
  }

  const currentImage = coloringImages[selectedImage]

  return (
    <section className="py-20 px-6 lg:px-12 bg-gradient-to-b from-pink-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-pink-600 mb-4">
            🎨 Раскраска 🎨
          </h2>
          <p className="text-2xl text-purple-700 font-semibold">
            Выбери цвет и нажимай на картинку!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-3xl p-6 shadow-lg">
              <h3 className="font-display text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Icon name="ImageIcon" size={28} />
                Выбери картинку:
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {coloringImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedImage(index)
                      clearDrawing()
                    }}
                    className={`p-4 rounded-2xl text-center transition-all duration-300 hover:scale-105 ${
                      selectedImage === index
                        ? "bg-purple-200 ring-4 ring-purple-400"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    <div className="text-5xl mb-2">{img.emoji}</div>
                    <p className="font-bold text-gray-700 text-sm">{img.name}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-lg">
              <h3 className="font-display text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Icon name="Palette" size={28} />
                Выбери цвет:
              </h3>
              <div className="grid grid-cols-4 gap-3">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(color.value)}
                    className={`aspect-square rounded-xl transition-all duration-300 hover:scale-110 flex items-center justify-center text-3xl ${
                      selectedColor === color.value ? "ring-4 ring-gray-800 scale-110" : ""
                    }`}
                    style={{ backgroundColor: color.value }}
                  >
                    {selectedColor === color.value && "✓"}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={clearDrawing}
              className="w-full px-6 py-4 bg-red-400 text-white text-xl font-display font-bold rounded-2xl hover:bg-red-500 hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
            >
              <Icon name="RotateCcw" size={24} />
              Очистить
            </button>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display text-3xl font-bold text-gray-800">
                  {currentImage.name} {currentImage.emoji}
                </h3>
                <div className="bg-purple-100 px-4 py-2 rounded-full">
                  <p className="font-bold text-purple-700">Нажимай на части!</p>
                </div>
              </div>
              
              <svg
                viewBox="0 0 100 100"
                className="w-full h-auto bg-gradient-to-br from-blue-50 to-pink-50 rounded-2xl border-4 border-purple-200"
                style={{ minHeight: "400px" }}
              >
                {currentImage.paths.map((path, pathIndex) => {
                  const key = `${selectedImage}-${pathIndex}`
                  const fillColor = pathColors[key] || "#FFFFFF"
                  
                  return (
                    <path
                      key={pathIndex}
                      d={path}
                      fill={fillColor}
                      stroke="#333"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => handlePathClick(selectedImage, pathIndex)}
                    />
                  )
                })}
              </svg>

              <div className="mt-6 text-center">
                <p className="text-lg text-gray-600 font-semibold">
                  💡 Совет: нажимай на белые части картинки, чтобы раскрасить их!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
