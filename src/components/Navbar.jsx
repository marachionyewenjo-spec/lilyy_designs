import { useState } from "react"
import { NavLink } from "react-router-dom"

const navLinkClass = ({ isActive }) =>
  `rounded-full px-4 py-2 text-sm font-medium transition duration-200 ${
    isActive
      ? "bg-amber-600 text-white shadow-lg shadow-rose-500/30"
      : "text-white hover:bg-white hover:text-amber-400"
  }`

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-700/70 bg-amber-400 px-4 py-4 shadow-sm shadow-slate-950/40 backdrop-blur-md sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
        <NavLink to="/" className="text-lg font-semibold uppercase tracking-[0.24em] text-white font-serif">
          LILYY_DESIGNS
        </NavLink>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-200 transition hover:border-rose-500 hover:text-rose-200 sm:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Toggle navigation</span>
          {menuOpen ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>

        <ul
          className={`flex flex-wrap items-center justify-end gap-2 sm:gap-3 ${
            menuOpen ? "block w-full" : "hidden w-full"
          } sm:flex sm:w-auto`}
        >
          <li>
            <NavLink to="/" className={navLinkClass} onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={navLinkClass} onClick={() => setMenuOpen(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={navLinkClass} onClick={() => setMenuOpen(false)}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery" className={navLinkClass} onClick={() => setMenuOpen(false)}>
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={navLinkClass} onClick={() => setMenuOpen(false)}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}