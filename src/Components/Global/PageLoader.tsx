import { motion } from "framer-motion"
import ArcovXrIcon from "../Icons/ArcovXrIcon"

/**
 * PageLoader — pantalla de carga branded para ArcovXr.
 * Diseñada para usarse como fallback de Suspense en AppRouter.
 * Sin props: componente de uso único como overlay de carga.
 */
export default function PageLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Logo con fade-in + scale desde 0.8 a 1.0 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1], // ease out expo — suave y con carácter
        }}
        style={{ width: 300 }}
      >
        <ArcovXrIcon width="100%" height="auto" />
      </motion.div>

      {/* Contenedor de la barra de progreso */}
      <div
        className="relative mt-8 overflow-hidden rounded-full"
        style={{ width: 300, height: 2, backgroundColor: "rgba(16,224,254,0.15)" }}
      >
        {/*
         * Barra animada en loop: se desplaza de izquierda (-100%) a derecha (100%)
         * con un easing suave que simula progreso continuo.
         */}
        <motion.div
          className="absolute top-0 left-0 h-full rounded-full"
          style={{
            width: "45%",
            backgroundColor: "#10e0fe",
            boxShadow: "0 0 8px #10e0fe, 0 0 16px rgba(16,224,254,0.4)",
          }}
          animate={{ x: ["-100%", "322%"] }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      </div>
    </motion.div>
  )
}
