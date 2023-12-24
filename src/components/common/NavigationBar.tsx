import React from 'react'
import dynamic from 'next/dynamic'
import { ThemeButtonLoader } from '~/app/_/ThemeButton'
import Link from 'next/link'
import { LucideImage } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { cn } from '~/lib/utils'

const HydratedButton = dynamic(() => import('../../app/_/ThemeButton'), {
    ssr: false,
    loading: () => <ThemeButtonLoader />,
})

const data = [
    {
        id: 0,
        href: '/',
        name: 'Home',
    },
    {
        id: 1,
        href: '/typography',
        name: 'Typography',
    },
    {
        id: 2,
        href: '/ui',
        name: 'UI Page',
    },
]

export const NavigationBar = () => {
    const pathname = usePathname()
    return (
        <nav className={'container flex items-center justify-between py-4'}>
            <div className={'flex items-center gap-x-3'}>
                <LucideImage width={40} height={40} />
                <Link className={'hidden sm:block text-xl'} href={'/'}>
                    Logo
                </Link>
            </div>

            <div className={'flex items-center gap-x-5'}>
                {data.map((link) => (
                    <Link
                        className={cn(
                            'hover:text-black/20 dark:hover:text-white/20',
                            {
                                underline: pathname === link.href,
                            }
                        )}
                        href={link.href}
                        key={link.id}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            <HydratedButton />
        </nav>
    )
}
