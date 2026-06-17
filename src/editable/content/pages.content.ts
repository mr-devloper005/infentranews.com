import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Media distribution and press release publishing',
      description: 'Distribute press releases, reach journalists, syndicate news, and grow digital visibility through a professional media distribution platform.',
      openGraphTitle: 'Media distribution and press release publishing',
      openGraphDescription: 'Launch campaigns, publish releases, and expand brand visibility across media channels and journalist networks.',
      keywords: ['media distribution', 'press release publishing', 'news syndication', 'PR campaigns'],
    },
    hero: {
      badge: 'Global PR and media outreach',
      title: ['Distribute your story', 'to the publishers that matter.'],
      description: 'Plan, publish, and monitor press release campaigns built for journalists, publishers, agencies, startups, and brands that need credible visibility.',
      primaryCta: { label: 'Start a campaign', href: '/create' },
      secondaryCta: { label: 'Browse campaigns', href: '/media-distribution' },
      searchPlaceholder: 'Search campaigns, industries, publishers, and releases',
      focusLabel: 'Campaign focus',
      featureCardBadge: 'distribution network',
      featureCardTitle: 'Media reach, newsroom presentation, and campaign performance in one platform.',
      featureCardDescription: 'Every release is shaped for visibility across digital publications, journalist networks, and targeted industry audiences.',
    },
    intro: {
      badge: 'About the platform',
      title: 'Built for brands that need distribution, not just publication.',
      paragraphs: [
        'This platform connects press release publishing, campaign presentation, media outreach, and discovery into one consistent experience.',
        'Teams can present announcements with newsroom polish while visitors can explore campaigns by industry, brand, publisher, and distribution status.',
        'Every surface is designed to make digital visibility feel credible, measurable, and easy to act on.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Campaign-first homepage with strong press release and media reach cues.',
        'Connected archive, search, create, and detail pages for PR workflows.',
        'Balanced content widths for executive-grade readability.',
        'Performance-friendly interactions that make campaigns feel premium.',
      ],
      primaryLink: { label: 'Browse campaigns', href: '/media-distribution' },
      secondaryLink: { label: 'Submit release', href: '/create' },
    },
    cta: {
      badge: 'Launch visibility',
      title: 'Put your next announcement in front of the right media channels.',
      description: 'Create a campaign, package the release, and guide audiences toward the strongest story, proof points, and calls to action.',
      primaryCta: { label: 'Browse Campaigns', href: '/media-distribution' },
      secondaryCta: { label: 'Contact Sales', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'Media distribution platform',
    title: 'A clearer path from announcement to audience.',
    description: `${slot4BrandConfig.siteName} helps brands, agencies, publishers, and media teams package announcements for credible distribution and measurable visibility.`,
    paragraphs: [
      'The platform is designed around the real PR workflow: prepare the story, present it with authority, route it to the right audiences, and make the campaign easy to discover after launch.',
      'From startup announcements to agency-led visibility programs, every page is tuned for trust, clarity, and professional media outreach.',
    ],
    values: [
      {
        title: 'Campaign-ready presentation',
        description: 'Press releases, campaign cards, and detail pages are shaped to communicate relevance, proof, and reach at a glance.',
      },
      {
        title: 'Connected media discovery',
        description: 'Visitors can move from release archives to publisher details, related campaigns, and contact paths without losing context.',
      },
      {
        title: 'Trustworthy by design',
        description: 'Enterprise-grade spacing, contrast, and hierarchy make the platform feel credible for PR agencies and brand teams.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Talk to a media distribution specialist.',
    description: 'Tell us about the announcement, audience, industry, and timing. We will help route your campaign toward the right publishing and outreach workflow.',
    formTitle: 'Plan your campaign',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search posts, topics, categories, and content across the site.',
    },
    hero: {
      badge: 'Search the archive',
      title: 'Find campaigns, releases, publishers, and industries faster.',
      description: 'Search the distribution archive by keyword, category, content type, brand, campaign theme, or media focus.',
      placeholder: 'Search campaigns, industries, publishers, or releases',
    },
    resultsTitle: 'Latest distribution content',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create and submit new content for the site.',
    },
    locked: {
      badge: 'Creator access',
      title: 'Login to create a media campaign.',
      description: 'Use your account to open the campaign workspace, prepare releases, and manage distribution-ready submissions.',
    },
    hero: {
      badge: 'Publishing workspace',
      title: 'Prepare a campaign for publication and distribution.',
      description: 'Add campaign details, release copy, imagery, source links, industry context, and supporting notes for a polished media submission.',
    },
    formTitle: 'Campaign details',
    submitLabel: 'Submit campaign',
    successTitle: 'Campaign submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for this site.',
      badge: 'Member access',
      title: 'Welcome back to your media workspace.',
      description: 'Login to continue managing press releases, distribution drafts, and visibility campaigns from your account.',
      formTitle: 'Login',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Signup page for this site.',
      badge: 'Site access',
      title: 'Create your account and start distributing.',
      description: 'Create an account to access the campaign workspace, save release details, and submit media distribution content.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
