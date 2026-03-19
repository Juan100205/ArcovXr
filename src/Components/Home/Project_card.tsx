import { memo, useState, useCallback, type ReactNode } from "react"
import { useNavigate } from "react-router-dom"

interface Props {
  project: ReactNode
  description: ReactNode
  image: string
  technologies: ReactNode
  link?: string      // navegación interna o URL externa
  altImage?: string  // imagen alternativa al dar clic
}

// memo: el padre (Projecs.tsx) puede re-renderizar; las props de cada card
// son estables (string literals y JSX estático), así que el memo tiene efecto.
const Project_card = memo(function Project_card({
  project,
  description,
  image,
  technologies,
  link,
  altImage,
}: Props) {
  const navigate = useNavigate()
  const [currentImage, setCurrentImage] = useState(image)
  const [isAlt, setIsAlt] = useState(false)

  // useCallback: estabiliza la referencia del handler entre renders del padre
  const handleClick = useCallback(() => {
    if (altImage) {
      setCurrentImage((prev) => (prev === image ? altImage : image))
      setIsAlt((prev) => !prev)
    } else if (link?.startsWith("http")) {
      window.open(link, "_blank", "noopener,noreferrer")
    } else if (link) {
      navigate(link)
    }
  }, [altImage, image, link, navigate])

  return (
    <div className="group lg:flex w-full lg:w-15/16 lg:h-100 shadow-sm hover:shadow-lg transition-all shadow-gray-500 rounded-[35px] bg-gradient-to-b justify-between">
      {/* Panel imagen */}
      <div className="transition-all lg:w-2/5 lg:p-0 p-2 hover:cursor-pointer">
        <div
          className="bg-cover bg-center lg:rounded-none rounded-4xl lg:rounded-l-[35px] h-full w-full"
          style={{ backgroundImage: `url(${currentImage})` }}
        >
          <div className="transition-all lg:rounded-none rounded-4xl bg-black opacity-50 group-hover:opacity-0 h-full w-full lg:rounded-l-4xl">
            <div className="transition-all opacity-0 hover:opacity-0 w-full h-full flex p-10 gap-10">
              {technologies}
            </div>
          </div>
        </div>
      </div>

      {/* Panel texto */}
      <div className="lg:w-3/5 lg:p-10 p-5 flex flex-col justify-between h-full">
        <div>
          <div className="lg:text-2xl text-lg font-semibold text-white">{project}</div>
          <div className="font-light text-sm text-gray-200 lg:mt-10 mt-5 justify-center">
            {description}
          </div>
        </div>

        <div className="flex w-full md:justify-end gap-5 md:gap-10 mt-10 items-center justify-center">
          <button
            onClick={handleClick}
            className="rounded-2xl transition-all w-30 md:w-50 h-10 outline-1 outline-gray-500 bg-white text-black hover:cursor-pointer hover:scale-105 md:mt-0 mt-5 mb-2"
          >
            {isAlt ? "Ver Menos" : "Ver Más"}
          </button>
        </div>
      </div>
    </div>
  )
})

export default Project_card
