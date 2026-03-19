import { memo } from "react"

// memo: contenido estático, sin props — nunca necesita re-render externo
const VRMeeting = memo(function VRMeeting() {
  return (
    <div className="px-6 md:px-70 mt-50">
      <h1 className="text-4xl font-bold text-center text-white mb-12">
        Reuniones y Colaboración en Espacios Virtuales
      </h1>

      <div className="flex flex-col md:flex-row items-center md:space-x-12 space-y-10 md:space-y-0">
        {/* Imagen de referencia — lazy loading: está below the fold */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://raw.githubusercontent.com/ArcovXr/ArcovXr/refs/heads/main/src/assets/RCEV.jpg"
            className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
            alt="Espacio de reuniones virtuales en VR"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Texto descriptivo */}
        <div className="w-full md:w-1/2 text-white text-center md:text-left">
          <p className="text-md font-light leading-relaxed mb-4">
            La tecnología actual ha superado las barreras de la distancia: hoy podemos conectarnos
            con personas al otro lado del mundo en segundos.
            Sin embargo, en <span className="font-semibold">ArcovXr</span> vamos un paso más allá,
            ofreciendo la posibilidad de reunirse y colaborar en espacios completamente virtuales.
            <br /><br />
            Creamos entornos inmersivos donde los equipos pueden interactuar como si estuvieran en
            el mismo lugar: realizar presentaciones, exposiciones, talleres o incluso recorridos
            complejos, fomentando el trabajo en conjunto sin importar la ubicación física de los
            participantes.
          </p>
        </div>
      </div>
    </div>
  )
})

export default VRMeeting
