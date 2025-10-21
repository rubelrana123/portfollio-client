"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, FileText, FolderKanban, Settings, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const navItems = [
  {
    title: "Analytics",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Projects",
    href: "/dashboard/projects",
    icon: FolderKanban,
  },
  {
    title: "Blogs",
    href: "/dashboard/blogs",
    icon: FileText,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
]

export function DashboardSidebar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <div className="fixed left-0 right-0 top-0 z-50 flex h-16 items-center justify-between border-b border-border bg-sidebar px-4 lg:hidden">
        <h1 className="font-sans text-xl font-semibold text-sidebar-foreground">Dashboard</h1>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-sidebar-foreground"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      <nav
        className={cn(
          "fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-border bg-sidebar transition-transform duration-300 lg:static lg:translate-x-0",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="hidden h-16 items-center border-b border-sidebar-border px-6 lg:flex">
          <h1 className="font-sans text-xl font-semibold text-sidebar-foreground">Dashboard</h1>
        </div>

        <div className="flex h-16 items-center justify-between border-b border-sidebar-border px-6 lg:hidden">
          <h1 className="font-sans text-xl font-semibold text-sidebar-foreground">Dashboard</h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-sidebar-foreground"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        <div className="flex-1 space-y-1 overflow-y-auto p-4">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground",
                )}
              >
                <Icon className="h-5 w-5" />
                {item.title}
              </Link>
            )
          })}
        </div>
        <div className="border-t border-sidebar-border p-4">
          <div className="flex items-center gap-3 rounded-lg px-3 py-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sidebar-primary text-sidebar-primary-foreground">
              <span className="text-sm font-medium">A</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-sidebar-foreground">Admin</p>
              <p className="text-xs text-sidebar-foreground/60">admin@portfolio.com</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
