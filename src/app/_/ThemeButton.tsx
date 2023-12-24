import React from 'react'
import { Loader, MoonIcon, SunIcon } from 'lucide-react'
import { Button } from '~/components/ui/Button'
import { useTheme } from 'next-themes'

const getIcon = (theme: string) => {
    switch (theme) {
        case 'dark':
            return <MoonIcon />
        case 'light':
            return <SunIcon />
        default:
            return <MoonIcon />
    }
}

export function ThemeButtonLoader() {
    return (
        <Button>
            <MoonIcon />
        </Button>
    )
}

export default function ThemeButton() {
    const { resolvedTheme, setTheme } = useTheme()
    return (
        <Button
            onClick={() =>
                resolvedTheme == 'dark' ? setTheme('light') : setTheme('dark')
            }
        >
            {resolvedTheme == 'dark' ? <MoonIcon /> : <SunIcon />}
        </Button>
    )
}
