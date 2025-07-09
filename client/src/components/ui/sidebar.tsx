// sidebar.tsx
import React, { useState } from "react"
import { Home, User, Settings, LogOut, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Sidebar */}
      <div
        className={cn(
          "bg-gray-900 text-white transition-all duration-300 ease-in-out z-50",
          isOpen ? "w-64" : "w-16",
          "fixed md:static inset-y-0 left-0"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          {isOpen && <span className="text-lg font-bold">My Sidebar</span>}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Menu */}
        <nav className="flex flex-col mt-4 space-y-1">
          <SidebarItem icon={<Home size={18} />} label="Dashboard" isOpen={isOpen} />
          <SidebarItem icon={<User size={18} />} label="Profile" isOpen={isOpen} />
          <SidebarItem icon={<Settings size={18} />} label="Settings" isOpen={isOpen} />
          <SidebarItem icon={<LogOut size={18} />} label="Logout" isOpen={isOpen} />
        </nav>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 md:ml-64 ml-16 transition-all">
        <h1 className="text-2xl font-semibold">Welcome to your app!</h1>
        <p className="text-muted-foreground mt-2">Simple & clean sidebar with dark theme ✨</p>
      </div>
    </div>
  )
}

function SidebarItem({
  icon,
  label,
  isOpen,
}: {
  icon: React.ReactNode
  label: string
  isOpen: boolean
}) {
  return (
    <button
      className={cn(
        "flex items-center px-4 py-2 w-full hover:bg-gray-800 transition-all duration-200",
        !isOpen && "justify-center"
      )}
    >
      <span className="mr-3">{icon}</span>
      {isOpen && <span className="truncate">{label}</span>}
    </button>
  )
}
