import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setFilter, clearFilters } from '../redux/filterSlice'
import data2024 from '../data/2024.json'
import data2025 from '../data/2025.json'

export default function BatchPage() {
  const { batch } = useParams()
  const dispatch = useDispatch()
  const filters = useSelector((state) => state.filter.filters)
  const data = batch === '2024' ? data2024 : data2025

  const handleFilterChange = (field, value) => {
    dispatch(setFilter({ field, value }))
  }

  const filteredData = data.filter(row => {
    return Object.entries(filters).every(([field, value]) => {
      if (!value) return true
      
      const rowValue = String(row[field] || '').toLowerCase()
      return rowValue.includes(value.toLowerCase())
    })
  })

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

      <main className="flex-grow p-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8 text-center text-blue-200"
        >
          Placement Data - {batch} Batch
        </motion.h1>

        <div className="mb-6 flex justify-end">
          <button
            onClick={() => dispatch(clearFilters())}
            className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Clear Filters
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white bg-opacity-10 rounded-lg overflow-hidden">
            <thead className="bg-blue-900 bg-opacity-50">
              <tr>
                {Object.keys(data[0]).map((header) => (
                  <th key={header} className="px-6 py-3 text-left text-xs font-medium text-blue-100 uppercase tracking-wider">
                    <div className="flex flex-col space-y-2">
                      <span>{header}</span>
                      <input
                        type="text"
                        placeholder={`Filter ${header}`}
                        value={filters[header] || ''}
                        onChange={(e) => handleFilterChange(header, e.target.value)}
                        className="bg-blue-800 bg-opacity-50 text-white px-2 py-1 rounded text-xs placeholder-blue-300"
                      />
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-blue-900 divide-opacity-25">
              {filteredData.map((row, idx) => (
                <tr key={idx} className="hover:bg-blue-900 hover:bg-opacity-20 transition-colors">
                  {Object.values(row).map((value, cellIdx) => (
                    <td key={cellIdx} className="px-6 py-4 whitespace-nowrap text-sm">
                      {value?.toString() || '-'}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
        <p className="text-sm text-blue-200">© 2023 Placement X. All rights reserved.</p>
      </footer>
    </div>
  )
} 