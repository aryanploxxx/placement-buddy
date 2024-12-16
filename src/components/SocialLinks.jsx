import { Github, Globe, Linkedin, Twitter } from 'lucide-react'
import { motion } from 'framer-motion'

const SocialLinks = () => {
  return (
    <>
        <motion.a
            href="https://aryancodes.tech"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-white hover:text-blue-100"
          >
            <Globe size={24} />
        </motion.a>
        <motion.a
            href="https://github.com/aryanploxxx"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-white hover:text-blue-100"
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/aryanploxxx"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-white hover:text-blue-100"
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a
            href="https://twitter.com/aryancodes_tech"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-white hover:text-blue-100"
          >
            <Twitter size={24} />
          </motion.a>
    </>
  )
}

export default SocialLinks