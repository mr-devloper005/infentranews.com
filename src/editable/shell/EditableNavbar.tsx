'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, LogOut, Menu, Newspaper, Search, Send, UserRound, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'
import { slot4BrandConfig } from '../theme/brand.config'
const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Campaigns', href: '/media-distribution' },
  { label: 'About', href: '/about' },
  { label: 'Archive', href: '/search' },
  { label: 'Contact', href: '/contact' },
]

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <header className="sticky top-0 z-50 bg-[var(--slot4-dark-bg)] text-white shadow-[0_8px_30px_rgba(16,25,40,.18)]">
      <div className="mx-auto flex min-h-[80px] max-w-[var(--editable-wide-container)] items-center gap-5 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-white text-[var(--slot4-dark-bg)]">
            <img
                  src="/favicon.png?v=20260413"
                  alt={slot4BrandConfig.siteName}
                  className="h-9 w-9 object-contain"
                />
          </span>
          <span className="max-w-[190px] truncate text-xl font-black uppercase tracking-[.04em] sm:max-w-[240px]">{SITE_CONFIG.name}</span>
        </Link>

        <nav className="ml-auto hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-[.12em] text-white/92 transition hover:text-[#f4b63d]">
              {item.label}
              {item.label === 'Pages' || item.label === 'Archive' ? <ChevronDown className="h-3 w-3 text-white/45" /> : null}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center justify-end gap-3 lg:ml-4">
          <form action="/search" className="hidden h-10 items-center border border-white/15 bg-white/8 xl:flex">
            <Search className="ml-3 h-4 w-4 text-white/55" />
            <input name="q" type="search" placeholder="Search campaigns" className="w-44 bg-transparent px-3 text-xs font-bold outline-none placeholder:text-white/45" />
          </form>

          {session ? (
            <div className="hidden items-center gap-2 border border-white/15 bg-white/8 px-3 py-2 sm:flex">
              <UserRound className="h-4 w-4 text-[#f4b63d]" />
              <span className="max-w-[120px] truncate text-xs font-black">{session.name}</span>
              <button type="button" onClick={logout} className="inline-flex h-7 w-7 items-center justify-center bg-white/10 text-white/70 transition hover:bg-white hover:text-[var(--slot4-dark-bg)]" aria-label="Logout">
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <Link href="/login" className="hidden text-xs font-black uppercase tracking-[.12em] text-white/85 hover:text-[#f4b63d] sm:block">Login</Link>
          )}

          <Link href={session ? '/create' : '/signup'} className="hidden items-center gap-2 bg-[var(--slot4-accent)] px-4 py-3 text-[10px] font-black uppercase tracking-[.14em] text-white transition hover:bg-[#f4b63d] hover:text-[var(--slot4-dark-bg)] sm:inline-flex">
            {session ? 'Launch' : 'Sign up'}
            <Send className="h-3.5 w-3.5" />
          </Link>

          <button type="button" onClick={() => setOpen((value) => !value)} className="inline-flex h-10 w-10 items-center justify-center border border-white/20 lg:hidden" aria-label="Toggle navigation">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/15 bg-[var(--slot4-dark-bg)] px-4 py-4 lg:hidden">
          <div className="mx-auto grid max-w-[var(--editable-wide-container)] gap-px bg-white/12">
            {[...navItems, ...(session ? [{ label: `Profile: ${session.name}`, href: '/create' }, { label: 'Create campaign', href: '/create' }] : [{ label: 'Login', href: '/login' }, { label: 'Sign up', href: '/signup' }])].map((item) => (
              <Link key={`${item.label}-${item.href}`} href={item.href} onClick={() => setOpen(false)} className="bg-[var(--slot4-dark-bg)] px-4 py-3 text-sm font-black uppercase tracking-[.1em] text-white">
                {item.label}
              </Link>
            ))}
            {session ? (
              <button type="button" onClick={() => { logout(); setOpen(false) }} className="bg-[var(--slot4-dark-bg)] px-4 py-3 text-left text-sm font-black uppercase tracking-[.1em] text-white">
                Logout
              </button>
            ) : null}
          </div>
        </div>
      ) : null}
    </header>
  )
}
