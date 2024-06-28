import { useEffect, useRef } from "react";
import romai_lakopark_heviz from "../assets/romai_lakopark_heviz.png";
import szkd_vendeghaz from "../assets/szkd_vendeghaz.png";
import { motion } from "framer-motion";
import Heading from "./Heading";

function Experiences() {
  return (
    <motion.section
      id="experiences"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.9 }}
      className="bg-slate-900 rounded shadow backdrop-blur-lg p-5 text-white border-2 border-slate-800"
    >
      <Heading>Tapasztalatok</Heading>
      <h2 className="text-white text-center text-xl font-semibold my-2 font-serif">
        Versenyeredmények
      </h2>
      <p>
        Nemes Tihamér Nemzetközi Programozási Verseny 2022 döntő:{" "}
        <b>42. hely</b>
      </p>
      <p>
        Országos Grafikus Programozási Verseny 2022 döntő: <b>21. hely</b>
      </p>
      <h2 className="text-white text-center text-xl font-semibold my-2 font-serif">
        Referenciamunkák
      </h2>
      <div className="grid gap-10 my-10">
        <div
          className="tooltip bg-slate-800 w-3/4 mx-auto"
          data-tip="Megnyitáshoz kattints rá!"
        >
          <a href="https://romaipark-heviz.hu/">
            <img
              className="hover:scale-95 transition-all duration-100"
              src={romai_lakopark_heviz}
            />
          </a>
        </div>
        <div className="w-5/6 h-1 bg-slate-800 mx-auto" />
        <div
          className="tooltip bg-slate-800 w-3/4 mx-auto"
          data-tip="Megnyitáshoz kattints rá!"
        >
          <a href="https://szkdvendeghaz.hu/">
            <img
              className="hover:scale-95 transition-all duration-100"
              src={szkd_vendeghaz}
            />
          </a>
        </div>
      </div>
    </motion.section>
  );
}

export default Experiences;
