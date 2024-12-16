import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter } from 'lucide-react'
import BatchData from './components/BatchData'

export default function App() {
  const [selectedBatch, setSelectedBatch] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950 to-gray-950 text-white flex flex-col">
      <header className="p-4 flex justify-center items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer bg-white bg-opacity-10 text-white px-4 py-2 rounded-full flex items-center space-x-2 border border-white border-opacity-20"
        >
          <span className="text-sm">Made by: @aryancodes_tech</span>
          <img src="/aryanDP.jpg" className="w-6 h-6 bg-gray-300 rounded-full"/>
        </motion.div>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold mb-4 text-blue-200"
        >
          Placement Buddy
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl mb-2 text-blue-100"
        >
          JIIT's Placement Tracker for 2024, 2025 Batch
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg text-gray-300"
        >
          Jaypee Institute of Information Technology, Noida
        </motion.p>
        <div className="mt-12 space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedBatch('2024')}
            className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-full font-semibold transition-colors"
          >
            2024 Batch
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedBatch('2025')}
            className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-full font-semibold transition-colors"
          >
            2025 Batch
          </motion.button>
        </div>
        {selectedBatch && <BatchData batch={selectedBatch} />}
      </main>
      <footer className="p-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <motion.a
            href="https://github.com/aryanploxxx"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-blue-200 hover:text-blue-100"
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/aryanploxxx"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-blue-200 hover:text-blue-100"
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a
            href="https://twitter.com/aryancodes_tech"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-blue-200 hover:text-blue-100"
          >
            <Twitter size={24} />
          </motion.a>
        </div>
        <p className="text-sm text-blue-200">© 2024 Placement Buddy. All rights reserved.</p>
      </footer>
    </div>
  )
}

