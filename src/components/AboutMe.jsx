import { motion } from "framer-motion";
import Heading from "./Heading";

function AboutMe() {
  const date = new Date();
  const age = date.getFullYear() - 2003;

  return (
    <motion.section
      id="aboutMe"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
      className="bg-slate-900 rounded shadow backdrop-blur-lg p-5 mb-14 text-white border-2 border-slate-800"
    >
      <Heading>Rólam</Heading>
      <p>Szia!</p>
      <br />
      <p>
        Gönye Mihály vagyok, {age} éves vagyok, az ELTE Informatika Kar
        hallgatója!
      </p>
    </motion.section>
  );
}

export default AboutMe;
