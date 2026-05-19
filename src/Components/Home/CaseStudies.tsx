import { memo, useState } from "react"
import { motion } from "framer-motion"

import owejaWorld from "../../assets/cases/oveja_world.jpg"
import owejaWorld2 from "../../assets/cases/oveja_world2.jpg"
import owejaClassroom from "../../assets/cases/oveja_classroom.jpg"
import owejaVideo from "../../assets/cases/oveja_video.jpg"
import owejaProgress from "../../assets/cases/oveja_progress.jpg"
import owejaGym from "../../assets/cases/oveja_gym.jpg"
import owejaAdmin from "../../assets/cases/oveja_admin.jpg"

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] as const },
  },
}

const CASES = [
  {
    id: "oveja",
    title: "Oveja Music World",
    subtitle: "Escuela Musical Interactiva en Metaverso Web",
    description:
      "Plataforma educativa inmersiva construida sobre un metaverso web 3D donde los estudiantes navegan entre aulas y zonas de práctica mediante escenas Spline interactivas. El sistema combina gamificación por niveles, reproducción de contenido video-educativo con tarjetas de interacción en tiempo real, y un panel de administración completo — todo accesible desde el navegador, sin instalar nada.",
    capabilities: [
      "Metaverso Web 3D",
      "Vistas 3D Interactivas",
      "Digitalización de Espacios",
      "Gamificación & Progreso",
    ],
    tech: ["Next.js 16", "React 19", "Spline 3D", "Supabase", "Tailwind CSS v4", "Framer Motion"],
    images: [
      { src: owejaWorld, label: "Mapa 3D del mundo" },
      { src: owejaWorld2, label: "Vista ampliada del mapa" },
      { src: owejaClassroom, label: "Aula interactiva 3D" },
      { src: owejaVideo, label: "Reproductor de clases" },
      { src: owejaProgress, label: "Panel de progreso" },
      { src: owejaGym, label: "Zona de práctica" },
      { src: owejaAdmin, label: "Panel de administración" },
    ],
    link: "https://ovejamusicworld.ovejamusic.com/login",
    linkLabel: "Ver Proyecto en Vivo",
    linkNote: "acceso demo disponible",
    isExternal: true,
  },
  {
    id: "museo",
    title: "Museo de Patologías VR",
    subtitle: "Experiencia Inmersiva en Realidad Virtual — Universidad de La Sabana",
    description:
      "Recorrido virtual inmersivo desarrollado para la enseñanza de anatomía y patologías médicas. Los estudiantes exploran espacios 3D de alta resolución, interactúan con modelos anatómicos y reciben orientación de un asistente de IA integrado al entorno. Elimina la dependencia de recursos físicos y permite repetir las prácticas sin restricciones.",
    capabilities: [
      "Realidad Virtual Inmersiva",
      "Digitalización de Arquitecturas",
      "Espacios 3D Interactivos",
      "Asistente IA integrado",
    ],
    tech: ["Unity", "C#", "Realidad Virtual", "Modelos 3D", "IA Conversacional"],
    images: [
      {
        src: "https://i.pinimg.com/736x/2d/73/ef/2d73efe9543017cf4ea6b1e42e690136.jpg",
        label: "Interacción con el espacio educativo",
      },
      {
        src: "https://i.pinimg.com/736x/00/09/2b/00092bc7efadab006c1adc34ec7576a7.jpg",
        label: "Onboarding en realidad virtual",
      },
      {
        src: "https://raw.githubusercontent.com/ArcovXr/ArcovXr/refs/heads/main/src/assets/RCEV.jpg",
        label: "Colaboración en espacios virtuales",
      },
    ],
    link: "/HomeVr",
    linkLabel: "Ver Más",
    linkNote: "sección Realidad Virtual",
    isExternal: false,
  },
]

const CaseCard = memo(function CaseCard({ c }: { c: (typeof CASES)[number] }) {
  const [activeImg, setActiveImg] = useState(0)

  return (
    <div className="rounded-[35px] bg-black border border-[#10e0fe]/10 overflow-hidden" style={{ boxShadow: "0 8px 40px 0 rgba(16,224,254,0.07)" }}>
      <div className="lg:flex">
        {/* Gallery */}
        <div className="lg:w-1/2 p-4 flex flex-col gap-3">
          <div className="rounded-2xl overflow-hidden w-full aspect-video bg-black">
            <motion.img
              key={activeImg}
              src={c.images[activeImg].src}
              alt={c.images[activeImg].label}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
            />
          </div>
          <div className="text-xs text-gray-500 text-center">{c.images[activeImg].label}</div>
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            {c.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-xl overflow-hidden border-2 transition-all hover:cursor-pointer ${
                  i === activeImg
                    ? "border-[#10e0fe] opacity-100"
                    : "border-white/10 opacity-40 hover:opacity-70"
                }`}
              >
                <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="lg:w-1/2 p-7 lg:p-10 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white">{c.title}</h3>
            <p className="text-[#10e0fe] text-sm font-medium mt-1">{c.subtitle}</p>
            <p className="text-gray-300 text-sm mt-5 leading-relaxed">{c.description}</p>

            <div className="mt-7">
              <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-3">
                Capacidades demostradas
              </div>
              <div className="flex flex-wrap gap-2">
                {c.capabilities.map((cap) => (
                  <span
                    key={cap}
                    className="text-xs px-3 py-1 rounded-full border font-medium"
                    style={{
                      borderColor: "#10e0fe50",
                      color: "#10e0fe",
                      background: "#10e0fe12",
                    }}
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-3">
                Stack tecnológico
              </div>
              <div className="flex flex-wrap gap-2">
                {c.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4">
            {c.isExternal ? (
              <a
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#10e0fe] text-black font-semibold text-sm hover:scale-105 transition-transform"
                style={{ boxShadow: "0 4px 20px 0 rgba(16,224,254,0.25)" }}
              >
                {c.linkLabel} <span aria-hidden>→</span>
              </a>
            ) : (
              <a
                href={`#${c.link}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#10e0fe] text-black font-semibold text-sm hover:scale-105 transition-transform"
                style={{ boxShadow: "0 4px 20px 0 rgba(16,224,254,0.25)" }}
              >
                {c.linkLabel} <span aria-hidden>→</span>
              </a>
            )}
            <span className="text-xs text-gray-600">{c.linkNote}</span>
          </div>
        </div>
      </div>
    </div>
  )
})

const CaseStudies = memo(function CaseStudies() {
  return (
    <motion.section
      className="w-5/6 mx-auto mt-32 md:mt-48"
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="mb-12">
        <div className="text-xs font-semibold tracking-[0.2em] text-[#10e0fe] uppercase mb-3">
          Proyectos Reales
        </div>
        <h2 className="text-3xl font-semibold text-white">Casos de Éxito</h2>
        <p className="text-gray-400 text-sm mt-3 max-w-xl">
          Aplicaciones reales que combinan metaversos, webs 3D interactivas y digitalización de espacios — entregadas a clientes.
        </p>
      </div>

      <div className="flex flex-col gap-12">
        {CASES.map((c) => (
          <motion.div
            key={c.id}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <CaseCard c={c} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
})

export default CaseStudies
