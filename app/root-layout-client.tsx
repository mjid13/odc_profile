"use client"

import { useLanguage } from '@/contexts/language-context'
import { useEffect } from 'react'

interface RootLayoutClientProps {
  children: React.ReactNode
}

export function RootLayoutClient({ children }: RootLayoutClientProps) {
  const { language } = useLanguage()
  
  useEffect(() => {
    // Update document attributes when language changes
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
  }, [language])
  
  return <>{children}</>
}