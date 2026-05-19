import { motion } from "framer-motion"
import Logo_ig from "../Icons/Logo_instagram";
import Logo_mail from "../Icons/Logo_instagram copy";
import Logo_LinkedIn from "../Icons/Logo_LinkedIn";
import Logo_wha from "../Icons/Logo_whatsapp";

const iconVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
}

const SOCIAL = [
  { Icon: Logo_LinkedIn, key: "linkedin" },
  { Icon: Logo_mail,     key: "mail" },
  { Icon: Logo_wha,      key: "whatsapp" },
  { Icon: Logo_ig,       key: "instagram" },
]

function Footer() {
  return (
    <div className="mt-20 bg-gradient-to-b from-black to-[#050514] py-12">

      <motion.div
        className="text-4xl font-black text-center text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        ¿Interesado?
      </motion.div>

      <motion.div
        onClick={() => window.open("https://wa.me/qr/5E4COJEFQ47SE1", "_blank")}
        className="text-xl font-bold text-center text-white rounded-full px-6 py-3 mt-10 w-50 cursor-pointer mx-auto
          bg-black border border-[#10e0fe] hover:scale-110 hover:shadow-[0_0_24px_rgba(16,224,254,0.45)]
          transition-all duration-300"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Contáctanos
      </motion.div>

      <motion.div
        className="flex justify-center gap-4 mt-10 pb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {SOCIAL.map(({ Icon, key }, i) => (
          <motion.div
            key={key}
            custom={i}
            variants={iconVariant}
            className="hover:scale-110 transition-all cursor-pointer w-12 bg-black rounded-full p-2"
          >
            <Icon />
          </motion.div>
        ))}
      </motion.div>

      <div className="w-full flex justify-between px-15 md:text-sm text-xs font-light text-gray-500 pb-2">
        <span className="w-50 md:flex hidden">Isaías 43:19</span>
        <span>© 2025 Juan Jose Riaño. All rights reserved.</span>
        <span>Hecho con React & Three.js</span>
      </div>

    </div>
  );
}

export default Footer;
