import Link from 'next/link'
import { ArrowRight, BarChart3, BadgeCheck, CheckCircle2, Megaphone, Newspaper, RadioTower, Search, Send, ShieldCheck, Sparkles, Target, UsersRound } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'
import { getEditableCategory, getEditableExcerpt, getEditablePostImage, postHref } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

const stats = [
  ['42K+', 'publisher and journalist reach'],
  ['118', 'industry categories supported'],
  ['24h', 'typical campaign launch window'],
  ['9.6M', 'monthly audience opportunities'],
] as const

const industries = ['Technology', 'Finance', 'Healthcare', 'Real Estate', 'Consumer Brands', 'SaaS', 'Education', 'Energy']

const workflow = [
  { icon: Send, title: 'Submit release', body: 'Add campaign copy, brand context, visuals, source links, and targeting notes.' },
  { icon: ShieldCheck, title: 'Package for trust', body: 'Present the announcement with a clean newsroom layout and campaign proof points.' },
  { icon: RadioTower, title: 'Distribute wider', body: 'Route the release toward publishers, journalists, syndication channels, and discovery pages.' },
  { icon: BarChart3, title: 'Track visibility', body: 'Surface reach signals, engagement cues, campaign status, and related media assets.' },
] as const

const faqs = [
  ['Who uses this platform?', 'PR agencies, founders, publishers, marketing teams, and brands preparing announcements for wider media visibility.'],
  ['What can I publish?', 'Press releases, campaign briefs, media updates, brand announcements, publisher resources, and distribution-ready content.'],
  ['Does it support discovery after launch?', 'Yes. Campaigns remain browsable through archive, search, related campaigns, categories, and detail pages.'],
] as const

function campaignMetric(seed: number) {
  return {
    reach: `${(seed + 2) * 18}K`,
    engagement: `${(seed + 4) * 7}%`,
    status: seed % 2 === 0 ? 'Live' : 'Ready',
  }
}

function CampaignCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  const metric = campaignMetric(index)
  return (
    <Link href={href} className="editable-hover-lift editable-image-zoom group block min-w-0 overflow-hidden border border-black/10 bg-white shadow-sm">
      <div className="relative aspect-[16/10] overflow-hidden bg-[var(--slot4-media-bg)]">
        <img src={getEditablePostImage(post)} alt={post.title} className="h-full w-full object-cover" />
        <span className="absolute left-4 top-4 bg-[var(--slot4-accent)] px-3 py-2 text-[10px] font-black uppercase tracking-[.18em] text-white">{getEditableCategory(post)}</span>
      </div>
      <div className="p-5">
        <div className="flex flex-wrap gap-2 text-[10px] font-black uppercase tracking-[.14em]">
          <span className="bg-[var(--slot4-accent-soft)] px-3 py-1 text-[var(--slot4-accent)]">{metric.status}</span>
          <span className="bg-[#fff4d8] px-3 py-1 text-[#8a5a00]">{metric.reach} reach</span>
        </div>
        <h3 className="mt-4 line-clamp-2 text-2xl font-black leading-tight tracking-[-.04em] group-hover:text-[var(--slot4-accent)]">{post.title}</h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-[var(--slot4-muted-text)]">{getEditableExcerpt(post, 145)}</p>
        <div className="mt-5 grid grid-cols-2 gap-2 border-t border-black/10 pt-4 text-xs font-bold text-[var(--slot4-muted-text)]">
          <span>Publisher: {SITE_CONFIG.name}</span>
          <span>Engagement: {metric.engagement}</span>
        </div>
      </div>
    </Link>
  )
}

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const lead = posts[0]
  const heroTitle = pagesContent.home.hero.title.join(' ')

  return (
    <section className="overflow-hidden bg-[var(--slot4-dark-bg)] text-white">
      <div className={`${dc.shell.section} grid min-h-[720px] gap-10 py-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,.95fr)] lg:items-center lg:py-16`}>
        <div className="editable-reveal">
          <p className="inline-flex items-center gap-2 border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[.22em] text-[#f4b63d]"><Megaphone className="h-4 w-4" /> {pagesContent.home.hero.badge}</p>
          <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[.95] tracking-[-.055em] sm:text-7xl lg:text-[5.6rem]">{heroTitle}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">{pagesContent.home.hero.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={pagesContent.home.hero.primaryCta.href} className={dc.button.accent}>{pagesContent.home.hero.primaryCta.label}<ArrowRight className="h-4 w-4" /></Link>
            <Link href={pagesContent.home.hero.secondaryCta.href} className="inline-flex items-center justify-center gap-2 border border-white/25 px-7 py-3.5 text-xs font-black uppercase tracking-[.12em] text-white transition hover:bg-white hover:text-[var(--slot4-dark-bg)]">{pagesContent.home.hero.secondaryCta.label}</Link>
          </div>
          <div className="mt-10 grid max-w-3xl grid-cols-2 gap-px bg-white/15 sm:grid-cols-4">
            {stats.map(([value, label]) => (
              <div key={label} className="bg-white/7 p-4">
                <p className="text-3xl font-black text-[#f4b63d]">{value}</p>
                <p className="mt-2 text-xs font-bold uppercase leading-5 tracking-[.1em] text-white/60">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="editable-reveal editable-reveal-delay-1">
          <div className="grid gap-4">
            {lead ? (
              <Link href={postHref(primaryTask, lead, primaryRoute)} className="editable-image-zoom group overflow-hidden border border-white/15 bg-white text-[var(--slot4-page-text)] shadow-2xl">
                <div className="relative aspect-[16/10] overflow-hidden bg-[var(--slot4-media-bg)]">
                  <img src={getEditablePostImage(lead)} alt={lead.title} className="h-full w-full object-cover" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 text-white">
                    <p className="text-[10px] font-black uppercase tracking-[.2em] text-[#f4b63d]">Featured press release</p>
                    <h2 className="mt-2 line-clamp-2 text-3xl font-black leading-tight">{lead.title}</h2>
                  </div>
                </div>
                <div className="grid gap-px bg-black/10 sm:grid-cols-3">
                  {['Newswire ready', 'Publisher profile', 'Reach metrics'].map((item) => <span key={item} className="bg-white p-4 text-xs font-black uppercase tracking-[.12em]">{item}</span>)}
                </div>
              </Link>
            ) : null}
            <form action="/search" className="grid border border-white/15 bg-white p-3 sm:grid-cols-[1fr_auto]">
              <label className="flex min-w-0 items-center gap-3 px-2 text-[var(--slot4-page-text)]">
                <Search className="h-5 w-5 text-[var(--slot4-accent)]" />
                <input name="q" placeholder={pagesContent.home.hero.searchPlaceholder} className="min-w-0 flex-1 bg-transparent py-3 text-sm font-bold outline-none placeholder:text-black/35" />
              </label>
              <button className="bg-[var(--slot4-dark-bg)] px-6 py-3 text-xs font-black uppercase tracking-[.14em] text-white">Search</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const releases = posts.slice(0, 6)
  return (
    <section className="bg-[var(--slot4-page-bg)]">
      <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        <div className="editable-reveal flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className={dc.type.eyebrow}>Featured press releases</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-black leading-none tracking-[-.045em] sm:text-5xl">Campaigns packaged for visibility, authority, and action.</h2>
          </div>
          <Link href={primaryRoute} className={dc.button.secondary}>View archive<ArrowRight className="h-4 w-4" /></Link>
        </div>
        {releases.length ? (
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {releases.map((post, index) => <CampaignCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
          </div>
        ) : (
          <div className="mt-8 border border-dashed border-black/20 bg-white p-10 text-center">
            <Newspaper className="mx-auto h-9 w-9 text-[var(--slot4-accent)]" />
            <h3 className="mt-4 text-2xl font-black">No campaigns are published yet.</h3>
            <p className="mt-2 text-sm text-[var(--slot4-muted-text)]">Create the first media distribution campaign to populate this section.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ posts, primaryTask, primaryRoute }: HomeSectionProps) {
  const recent = posts.slice(6, 10).length ? posts.slice(6, 10) : posts.slice(0, 4)
  return (
    <section className="bg-white">
      <div className={`${dc.shell.section} grid gap-10 py-14 lg:grid-cols-[.85fr_1.15fr] lg:py-20`}>
        <div className="editable-reveal">
          <p className={dc.type.eyebrow}>Distribution network overview</p>
          <h2 className="mt-3 text-4xl font-black leading-none tracking-[-.045em] sm:text-5xl">Reach media channels with a release that looks ready for the desk.</h2>
          <p className="mt-5 text-base leading-8 text-[var(--slot4-muted-text)]">The homepage now mirrors the rhythm of a premium industry platform: confident hero, campaign proof, service cards, reach signals, recent work, and clear conversion paths.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {workflow.map(({ icon: Icon, title, body }) => (
              <div key={title} className="editable-hover-lift border border-black/10 bg-[var(--slot4-page-bg)] p-5">
                <Icon className="h-6 w-6 text-[var(--slot4-accent)]" />
                <h3 className="mt-4 text-xl font-black">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--slot4-muted-text)]">{body}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="editable-reveal editable-reveal-delay-1 grid gap-5 sm:grid-cols-2">
          {recent.map((post, index) => (
            <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} className="editable-hover-lift editable-image-zoom overflow-hidden border border-black/10 bg-white">
              <div className="aspect-[4/3] overflow-hidden bg-[var(--slot4-media-bg)]">
                <img src={getEditablePostImage(post)} alt={post.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <p className="text-[10px] font-black uppercase tracking-[.18em] text-[var(--slot4-accent)]">Recent campaign 0{index + 1}</p>
                <h3 className="mt-3 line-clamp-2 text-2xl font-black leading-tight">{post.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const stories = posts.slice(10, 13).length ? posts.slice(10, 13) : posts.slice(0, 3)
  return (
    <section className="bg-[var(--slot4-page-bg)]">
      <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        <div className="grid gap-5 lg:grid-cols-4">
          {industries.map((industry) => (
            <Link key={industry} href={`${primaryRoute}?category=${encodeURIComponent(industry.toLowerCase())}`} className="editable-hover-lift flex items-center justify-between border border-black/10 bg-white p-5">
              <span className="text-sm font-black uppercase tracking-[.12em]">{industry}</span>
              <Target className="h-5 w-5 text-[var(--slot4-accent)]" />
            </Link>
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[.75fr_1.25fr]">
          <div className="editable-reveal border border-black/10 bg-[var(--slot4-dark-bg)] p-7 text-white sm:p-9">
            <p className="text-xs font-black uppercase tracking-[.22em] text-[#f4b63d]">Why choose us</p>
            <h2 className="mt-4 text-4xl font-black leading-none tracking-[-.045em]">Professional distribution without a generic publishing feel.</h2>
            <div className="mt-7 grid gap-4">
              {['Balanced layouts that never stretch too wide.', 'Campaign cards with reach, status, category, and action cues.', 'Search and archive surfaces built for fast discovery.'].map((item) => (
                <p key={item} className="flex gap-3 text-sm font-bold leading-7 text-white/72"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#f4b63d]" />{item}</p>
              ))}
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {stories.map((post, index) => (
              <CampaignCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index + 6} />
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {faqs.map(([q, a]) => (
            <div key={q} className="border border-black/10 bg-white p-6">
              <BadgeCheck className="h-6 w-6 text-[var(--slot4-accent)]" />
              <h3 className="mt-4 text-xl font-black">{q}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--slot4-muted-text)]">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section className="bg-white">
      <div className={`${dc.shell.section} py-12`}>
        <div className="grid gap-8 bg-[var(--slot4-accent)] p-7 text-white sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[.22em] text-white/70">Ready for media reach</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-black leading-none tracking-[-.045em] sm:text-5xl">Launch a press release campaign that feels credible from the first click.</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/create" className="inline-flex items-center justify-center gap-2 bg-white px-7 py-3.5 text-xs font-black uppercase tracking-[.12em] text-[var(--slot4-accent)] transition hover:bg-[var(--slot4-dark-bg)] hover:text-white">Create campaign<Sparkles className="h-4 w-4" /></Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-white/40 px-7 py-3.5 text-xs font-black uppercase tracking-[.12em] text-white transition hover:bg-white hover:text-[var(--slot4-accent)]">Talk to us<UsersRound className="h-4 w-4" /></Link>
          </div>
        </div>
      </div>
    </section>
  )
}
