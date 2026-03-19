import { memo } from "react";
import { motion, type Variants } from "framer-motion";
import Project_card from "./Project_card";
import { BrainIcon, CameraIcon, Code2 } from "lucide-react";
import { CpuChipIcon } from "@heroicons/react/16/solid";

// Variante de animación centralizada: evita recrear el objeto en cada render.
// La transición se define con tipo explícito para satisfacer Framer Motion v12.
const fadeInVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] as const },
  },
}

// Datos de proyectos extraídos del JSX para reducir la profundidad del árbol
// y facilitar futuros cambios sin tocar la lógica de render.
const PROJECTS = [
  {
    id: "vr",
    project: "Espacios en Realidad Virtual",
    description:
      "Creamos experiencias inmersivas en VR que van desde recorridos de alta resolución, donde es posible explorar espacios con gran realismo, hasta entornos completamente interactivos en los que el usuario se desenvuelve con objetos y situaciones del entorno. Todo acompañado por un agente de IA que actúa como guía y capacitador, complementando la experiencia con información relevante y contextual.",
    image: "https://raw.githubusercontent.com/ArcovXr/ArcovXr/refs/heads/main/src/assets/VR.jpg",
    icon: <BrainIcon className="w-full h-full p-10" />,
    link: "/HomeVr",
  },
  {
    id: "metaverse",
    project: "Metaversos",
    description:
      "Desarrollamos experiencias en metaversos que van desde espacios genéricos para la interacción social y la exploración colaborativa, hasta mundos completamente personalizados donde los usuarios pueden interactuar con el entorno y participar en simulaciones únicas. Todo esto acompañado por un asistente de IA que guía, capacita y enriquece la experiencia con información contextual y soporte en tiempo real.",
    image: "https://i.pinimg.com/736x/29/79/ad/2979ad7f0418cbe6f2afc2745f7bf598.jpg",
    icon: <BrainIcon className="w-full h-full p-10" />,
    link: "https://www.spatial.io/s/Center_Template-68be4ffb188d4c2faee39dd8?share=5704062548552014126",
  },
  {
    id: "ar",
    project: "Realidad Aumentada",
    description:
      "Integramos elementos digitales en el mundo físico para enriquecer la experiencia del usuario. Desde marketing interactivo hasta educación avanzada, llevamos la innovación al día a día.",
    image: "https://raw.githubusercontent.com/ArcovXr/ArcovXr/refs/heads/main/src/assets/AR.jpg",
    altImage: "https://i.pinimg.com/736x/f3/18/3a/f3183a7419d268638fd6f5185f95f11c.jpg",
    icon: <BrainIcon className="w-full h-full p-10" />,
  },
  {
    id: "ia-training",
    project: "Capacitación Inmersiva con IA",
    description:
      "Implementamos experiencias de capacitación en entornos VR y AR, ya sea en espacios digitales o mixtos, acompañadas por un asistente de IA especializado en un área específica. Estas experiencias permiten a los participantes formarse de manera inmersiva, interactiva y guiada, optimizando procesos de aprendizaje en sectores como la educación médica, la formación industrial o el entrenamiento corporativo.",
    image: "https://raw.githubusercontent.com/ArcovXr/ArcovXr/refs/heads/main/src/assets/CIA.jpg",
    icon: <CpuChipIcon className="w-full h-full p-10" />,
    link: "/HomeIA",
  },
  {
    id: "ia-assistants",
    project: "Asistentes Virtuales Inteligentes",
    description:
      "Creamos asistentes de IA diseñados para la atención de usuarios y la optimización de procesos internos en tu empresa. Estos asistentes se personalizan según tus necesidades específicas y se integran en interfaces visuales atractivas, potenciadas con elementos 3D para una experiencia más intuitiva, inmersiva y llamativa.",
    image: "https://i.pinimg.com/1200x/78/47/cf/7847cf026b1694faaa89512623d1672c.jpg",
    icon: <CpuChipIcon className="w-full h-full p-10" />,
    link: "/HomeChat",
  },
  {
    id: "web3d",
    project: "Webs con Vistas 3D Interactivas",
    description:
      "Creamos páginas web con integración 3D que permiten visualizar proyectos arquitectónicos, industriales y creativos de manera dinámica e inmersiva.",
    image: "https://i.pinimg.com/originals/4d/f0/40/4df040cccfbfcf936c985c763cbe30df.gif",
    icon: <Code2 className="w-full h-full p-10" />,
    link: "/Home3D",
  },
  {
    id: "digitalization",
    project: "Digitalización 3D de Arquitecturas",
    description:
      "Transformamos planos y diseños arquitectónicos en modelos tridimensionales interactivos. Una herramienta poderosa para visualización, presentación y planificación de proyectos.",
    image: "https://i.pinimg.com/736x/7f/65/2d/7f652d18589592134c8ca3010ecd443a.jpg",
    icon: <CameraIcon className="w-full h-full p-10" />,
    link: "/HomeSpace",
  },
] as const

// memo: evita re-renders si el componente padre re-renderiza sin cambiar props
const Projects = memo(function Projects() {
  return (
    // Se eliminó anim_block_projects del wrapper: conflictaba con whileInView de framer.
    // Framer maneja la animación de entrada; el CSS view-timeline es redundante aquí.
    <motion.div
      className="w-5/6 mx-auto"
      variants={fadeInVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="text-3xl font-semibold">Nuestros Proyectos</div>

      {PROJECTS.map((p) => (
        <motion.div
          key={p.id}
          className="mt-20"
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <Project_card
            project={p.project}
            description={p.description}
            image={p.image}
            technologies={p.icon}
            link={"link" in p ? p.link : undefined}
            altImage={"altImage" in p ? p.altImage : undefined}
          />
        </motion.div>
      ))}
    </motion.div>
  )
})

export default Projects
