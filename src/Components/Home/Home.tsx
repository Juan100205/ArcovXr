// Home.tsx
import { motion } from "framer-motion";
import ArcovXrIcon from "../Icons/ArcovXrIcon";

const Home = () => {
  return (
    <motion.div
      className="m-auto w-2/3 text-left pt-30 outer_block md:mb-100 "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.div
        className="text-gray-500 text-xl md:text-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
       Bienvenidos a
      </motion.div>

      <motion.div
        className="relative mt-4 md:mt-8 w-2/3 md:w-1/2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div
          className="absolute -z-10 top-1/2 left-0 -translate-y-1/2 w-full h-10 blur-3xl rounded-full opacity-25"
          style={{ background: "#10e0fe" }}
        />
        <ArcovXrIcon width="100%" height="auto" />
      </motion.div>


      <motion.div
        className="text-white font-light text-2xl md:text-5xl mt-4 md:mt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        viewport={{ once: true }}
      >
        Consultora en Tecnologías Emergentes
      </motion.div>

      <motion.div
        className="text-gray-500 mt-4 text-lg md:text-3xl md:mt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
        viewport={{ once: true }}
      >
        Especialistas en la aplicación de las últimas tecnologías al servicio de las organizaciones.
      </motion.div>
    </motion.div>
  );
};

export default Home;
