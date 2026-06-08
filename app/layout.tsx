import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Laid Me Off | Practical Guidance & Coaching for Professionals',
  description:
    'Practical, psychology-backed guidance for professionals 40–65 navigating AI-driven job loss. Dr. Brett A. Blair, PhD — psychologist, PCC executive coach, and author — provides a research-grounded map from displacement to reinvention.',
  keywords: [
    'AI job loss',
    'laid off by AI',
    'AI displacement',
    'career transition coaching',
    'executive coach',
    'mid-career pivot',
    'Brett Blair',
    'psychologist coach',
    'job loss support',
    'AI career advice',
  ],
  authors: [{ name: 'Dr. Brett A. Blair, PhD' }],
  creator: 'Dr. Brett A. Blair, PhD',
  metadataBase: new URL('https://ailaidmeoff.com'),
  alternates: {
    canonical: 'https://ailaidmeoff.com',
  },
  openGraph: {
    title: 'AI Laid Me Off | Practical Guidance & Coaching for Professionals',
    description:
      'Practical, psychology-backed guidance for professionals 40–65 navigating AI-driven job loss. From Dr. Brett A. Blair, PhD — psychologist, PCC coach, and researcher who has been there.',
    url: 'https://ailaidmeoff.com',
    siteName: 'AIlaidmeoff.com',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Laid Me Off | Practical Guidance & Coaching for Professionals',
    description:
      'Psychology-backed guidance for professionals navigating AI-driven job loss. Dr. Brett A. Blair, PhD — coach, researcher, and someone who has been there.',
    creator: '@brettblairphd',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://ailaidmeoff.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  )
}
