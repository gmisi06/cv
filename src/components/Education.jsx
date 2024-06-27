import { motion } from "framer-motion"

function Education() {

    return (
      <motion.section
      initial={{ opacity: 0, x: -500 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.75 }} 
      className="bg-white bg-opacity-30 rounded shadow backdrop-blur-lg p-5 mb-14">
        <h1 className="text-white text-2xl font-bold">Tanulmányok</h1>
        <table className="text-white">
            <tbody> 
                <tr className="align-top">
                    <td>2018 - 2022</td>
                    <td>Keszthelyi Vajda János gimnázium<br/>matematika/informatika tagozat</td>
                </tr>
                <tr className="align-top">
                    <td>2022 -</td>
                    <td>ELTE Informatikai Kar<br/>programtervező informatikus képzés BSc</td>
                </tr>
            </tbody>
        </table>
      </motion.section>
    )
  }
  
  export default Education
  