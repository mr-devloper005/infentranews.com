'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <footer className="border-t-8 border-[var(--slot4-accent)] bg-[var(--slot4-dark-bg)] text-white">
      <div className="mx-auto max-w-[var(--editable-wide-container)] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_.7fr_.7fr]">
          <div>
            <Link href="/" className="text-4xl font-black tracking-[-.05em] text-[#f4b63d] sm:text-5xl">{SITE_CONFIG.name}</Link>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/62">{globalContent.footer?.description || 'Professional press release publishing, campaign discovery, media outreach, and digital visibility tools for growing brands.'}</p>
            <form action="/signup" className="mt-8 flex max-w-xl border border-white/35">
              <input name="email" type="email" placeholder="Email for campaign updates" className="min-w-0 flex-1 bg-transparent px-4 py-4 text-sm outline-none placeholder:text-white/40" />
              <button className="bg-[var(--slot4-accent)] px-5 text-xs font-black uppercase tracking-[.14em]">Join</button>
            </form>
          </div>
          <div>
            <h3 className="border-b border-white/25 pb-3 text-[10px] font-black uppercase tracking-[.22em] text-white/55">Explore</h3>
            <div className="mt-4 grid gap-3">
              <Link href="/media-distribution" className="group inline-flex items-center justify-between text-sm font-black uppercase tracking-[.08em] hover:text-[#f4b63d]">Campaigns<ArrowRight className="h-4 w-4" /></Link>
              <Link href="/search" className="group inline-flex items-center justify-between text-sm font-black uppercase tracking-[.08em] hover:text-[#f4b63d]">Search<ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
          <div>
            <h3 className="border-b border-white/25 pb-3 text-[10px] font-black uppercase tracking-[.22em] text-white/55">Platform</h3>
            <div className="mt-4 grid gap-3">
              <Link href="/about" className="text-sm font-black uppercase tracking-[.08em] hover:text-[#f4b63d]">About</Link>
              <Link href="/contact" className="text-sm font-black uppercase tracking-[.08em] hover:text-[#f4b63d]">Contact</Link>
              {session ? (
                <>
                  <Link href="/create" className="text-sm font-black uppercase tracking-[.08em] hover:text-[#f4b63d]">Launch campaign</Link>
                  <button onClick={logout} className="text-left text-sm font-black uppercase tracking-[.08em] hover:text-[#f4b63d]">Logout</button>
                </>
              ) : (
                <>
                  <Link href="/login" className="text-sm font-black uppercase tracking-[.08em] hover:text-[#f4b63d]">Log in</Link>
                  <Link href="/signup" className="text-sm font-black uppercase tracking-[.08em] hover:text-[#f4b63d]">Sign up</Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 px-4 py-5 text-center text-[10px] font-black uppercase tracking-[.18em] text-white/45">&copy; {year} {SITE_CONFIG.name}. Media distribution and press release visibility.</div>
    </footer>
  )
}
