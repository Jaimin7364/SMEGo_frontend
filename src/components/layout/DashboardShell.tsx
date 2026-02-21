'use client'

import Sidebar from './Sidebar'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface DashboardShellProps {
  children: React.ReactNode
}

const DashboardShell: React.FC<DashboardShellProps> = ({ children }) => {
  const [initials, setInitials] = useState('')

  useEffect(() => {
    try {
      const saved = localStorage.getItem('user')
      if (saved) {
        const u = JSON.parse(saved)
        const name: string = u.fullName || u.name || ''
        const init = name
          .split(' ')
          .filter(Boolean)
          .slice(0, 2)
          .map((s: string) => s[0]?.toUpperCase())
          .join('')
        setInitials(init || 'U')
      }
    } catch {}
  }, [])
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Dashboard</h1>
            <div className="flex items-center space-x-4">
              {/* <button className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Notifications</span>
                🔔
              </button> */}
              <Link href="/dashboard/profile" className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium">
                {initials || 'U'}
              </Link>
            </div>
          </div>
        </header>
        
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  )
}

export default DashboardShell
