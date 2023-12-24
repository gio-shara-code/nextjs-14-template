'use client'
import React from 'react'
import { ThemeProvider } from 'next-themes'
import { NavigationBar } from '~/components/common/NavigationBar'

export const App = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider attribute="class">
            <NavigationBar />
            {children}
        </ThemeProvider>
    )
}
