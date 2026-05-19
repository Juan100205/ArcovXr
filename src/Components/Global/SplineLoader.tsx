import { motion, AnimatePresence } from "framer-motion"
import ArcovXrIcon from "../Icons/ArcovXrIcon"

interface SplineLoaderProps {
  loaded: boolean
}

export default function SplineLoader({ loaded }: SplineLoaderProps) {
  return (
    <AnimatePresence>
      {!loaded && (
        <motion.div
          key="spline-loader"
          className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black rounded-2xl overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* HUD corner brackets */}
          <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-[#10e0fe] opacity-40" />
          <div className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-[#10e0fe] opacity-40" />
          <div className="absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2 border-[#10e0fe] opacity-40" />
          <div className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-[#10e0fe] opacity-40" />

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ width: 160 }}
          >
            <ArcovXrIcon width="100%" height="auto" />
          </motion.div>

          {/* Barra de progreso animada */}
          <div
            className="relative mt-6 overflow-hidden rounded-full"
            style={{ width: 160, height: 2, backgroundColor: "rgba(16,224,254,0.15)" }}
          >
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

          {/* Label */}
          <motion.p
            className="mt-4 text-[10px] font-mono tracking-[0.25em] uppercase"
            style={{ color: "rgba(16,224,254,0.5)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            Cargando escena 3D
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
