import React from 'react'
import dynamic from 'next/dynamic'
import { ThemeButtonLoader } from '~/app/_/ThemeButton'
import Link from 'next/link'

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
    return (
        <nav className={'container flex justify-between py-4'}>
            {/*Iterate through a links array and display them dinaymically*/}
            <div className={'flex items-center gap-x-3'}>
                {data.map((link) => (
                    <Link href={link.href} key={link.id}>
                        {link.name}
                    </Link>
                ))}
            </div>

            <HydratedButton />
        </nav>
    )
}
