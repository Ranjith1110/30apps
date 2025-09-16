import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-[#0f0f0f] text-white flex flex-col justify-center items-center px-4">
        <motion.h1 className="text-5xl md:text-7xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}>
          Build Your CRUD Magic✨
        </motion.h1>
        <motion.p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .5, duration: .8 }}>
          Learn CRUD operations step-by-step with a beautiful UI
        </motion.p>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: .95 }}
          transition={{ duration: .3 }}>
          <Link to="/app" className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 text-lg rounded-xl font-semibold hover:shadow-xl">
            Start Learning Now
          </Link>
        </motion.div>
      </div>
    </>
  )
}

export default Home