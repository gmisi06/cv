import profileImage from '../assets/IMG_1335.jpg'
import { motion } from "framer-motion"

function Profile() {
  const date = new Date();
  console.log(date.getFullYear() - 2003)

  return (
    <motion.div
    initial={{ opacity: 0, }}
      animate={{ opacity: 1, }}
      transition={{ duration: 2 }} 
       className="bg-white bg-opacity-30 w-64 rounded shadow backdrop-blur-lg grid justify-center p-5">
      <img src={profileImage} className='object-cover w-48 h-48 rounded-full'/>
      <h1 className='text-white font-bold'>Gönye Mihály</h1>
      <ul>
        <li>
          Rólam
        </li>
        <li>
          Tanulmányok
        </li>
        <li>
          Tapasztalatok
        </li>
      </ul>
      
    </motion.div>
  )
}

export default Profile
