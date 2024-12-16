import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setFilter, clearFilters, setSort } from '../redux/filterSlice'
import { ChevronUp, ChevronDown } from 'lucide-react'
import data2024 from '../data/2024.json'
import data2025 from '../data/2025.json'
import Header from './Header'
import Modal from './Modal'
import { useState } from 'react'
import Footer from './Footer'

export default function BatchPage() {
  const { batch } = useParams()
  const dispatch = useDispatch()
  const filters = useSelector((state) => state.filter.filters)
  const sort = useSelector((state) => state.filter.sort)
  const data = batch === '2024' ? data2024 : data2025

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCompany, setSelectedCompany] = useState(null)

  const handleFilterChange = (field, value) => {
    dispatch(setFilter({ field, value }))
  }

  const handleSort = (field) => {
    dispatch(setSort({ field }))
  }

  const handleCompanyClick = (companyDetails) => {
    setSelectedCompany(companyDetails)
    setIsModalOpen(true)
  }

  // Helper function to compare values for sorting
  const compareValues = (a, b, field) => {
    let valueA = a[field]
    let valueB = b[field]

    // Convert to numbers if possible
    if (!isNaN(valueA) && !isNaN(valueB)) {
      valueA = Number(valueA)
      valueB = Number(valueB)
    } else {
      // Handle date strings
      if (field === 'Date') {
        valueA = new Date(valueA)
        valueB = new Date(valueB)
      } else {
        // Convert to lowercase strings for string comparison
        valueA = String(valueA || '').toLowerCase()
        valueB = String(valueB || '').toLowerCase()
      }
    }

    if (valueA < valueB) return -1
    if (valueA > valueB) return 1
    return 0
  }

  // Filter and sort data
  const processedData = [...data]
    .filter(row => {
      return Object.entries(filters).every(([field, value]) => {
        if (!value) return true
        const rowValue = String(row[field] || '').toLowerCase()
        return rowValue.includes(value.toLowerCase())
      })
    })
    .sort((a, b) => {
      if (!sort.field) return 0
      const comparison = compareValues(a, b, sort.field)
      return sort.direction === 'asc' ? comparison : -comparison
    })

  // Sortable columns configuration
  const sortableColumns = [
    'S.No.', 'Date', 'Company', 'CGPA', 'CTC (in LPA)', 'Base (in LPA)',
    'Duration of Internship', 'Compensation in Internship', 'Total Applied',
    'Resume Shortlist', 'Round 1', 'Round 2', 'Round 3', 'Total Offers'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950 to-gray-950 text-white flex flex-col">
      <Header />

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
                      <div className="flex items-center space-x-2">
                        <span>{header}</span>
                        {sortableColumns.includes(header) && (
                          <button
                            onClick={() => handleSort(header)}
                            className="hover:text-blue-300"
                          >
                            {sort.field === header ? (
                              sort.direction === 'asc' ? (
                                <ChevronUp size={16} />
                              ) : (
                                <ChevronDown size={16} />
                              )
                            ) : (
                              <div className="flex flex-col">
                                <ChevronUp size={12} />
                                <ChevronDown size={12} />
                              </div>
                            )}
                          </button>
                        )}
                      </div>
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
              {processedData.map((row, idx) => (
                <tr 
                  key={idx} 
                  className="hover:bg-blue-900 hover:bg-opacity-20 transition-colors cursor-pointer" 
                  onClick={() => handleCompanyClick(row)}
                >
                  {Object.values(row).map((value, cellIdx) => (
                    <td key={cellIdx} className="px-6 py-4 whitespace-nowrap text-sm text-white">
                      {value?.toString() || '-'}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} companyDetails={selectedCompany || {}} />

      <Footer />
    </div>
  )
} 