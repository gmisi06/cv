import profileImage from "../assets/IMG_1335.jpg";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

function Profile() {
  const date = new Date();
  console.log(date.getFullYear() - 2003);

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="bg-slate-900 mx-auto w-96 rounded shadow backdrop-blur-lg grid justify-center p-5 border-2 border-slate-800"
    >
      <div>
        <img
          src={profileImage}
          className="object-cover w-full aspect-square rounded-full border-2 border-slate-600"
        />
        <h1 className="text-white font-bold text-center mt-2">Gönye Mihály</h1>
        <div className="flex justify-center items-center space-x-2 mt-2">
          <div
            className="tooltip tooltip-bottom rounded-full"
            data-tip="GitHub"
          >
            <a href="https://github.com/gmisi06/">
              <FontAwesomeIcon
                icon={faCode}
                className="text-white hover:text-slate-950 hover:bg-white bg-slate-950 rounded-full h-5 w-5 p-1 duration-100 cursor-pointer border-2 border-slate-600"
              />
            </a>
          </div>
        </div>
      </div>

      <ul className="text-white mt-4 text-center">
        <li>
          <a href="#aboutMe" className="hover:font-semibold">
            Rólam
          </a>
        </li>
        <li>
          <a href="#education" className="hover:font-semibold">
            Tanulmányok
          </a>
        </li>
        <li>
          <a href="#experiences" className="hover:font-semibold">
            Tapasztalatok
          </a>
        </li>
      </ul>
    </motion.div>
  );
}

export default Profile;
