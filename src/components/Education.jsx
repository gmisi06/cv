import { motion } from "framer-motion";
import Heading from "./Heading";

function Education() {
  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.6 }}
      className="bg-slate-900 rounded shadow backdrop-blur-lg p-5 mb-14 border-2 border-slate-800 "
    >
      <Heading>Tanulmányok</Heading>
      <table className="text-white">
        <tbody>
          <tr className="align-top border-b border-b-slate-600">
            <td className="pr-10">
              <b>2018 - 2022</b>
            </td>
            <td className="pb-2">
              <span className="text-lg font-semibold">
                Keszthelyi Vajda János Gimnázium
              </span>
              <br />
              matematika/informatika tagozat
            </td>
          </tr>
          <tr className="align-top">
            <td className="pt-2">
              <b>2022 -</b>
            </td>
            <td className="pt-2">
              <span className="text-lg font-semibold">
                ELTE Informatikai Kar
              </span>
              <br />
              programtervező informatikus képzés BSc
            </td>
          </tr>
        </tbody>
      </table>
    </motion.section>
  );
}

export default Education;
