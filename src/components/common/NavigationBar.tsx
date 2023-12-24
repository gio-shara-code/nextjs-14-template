import React, { useCallback, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { ThemeButtonLoader } from '~/app/_/ThemeButton'
import Link from 'next/link'
import { LucideImage } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { cn } from '~/lib/utils'
import { useWindowScroll } from '@uidotdev/usehooks'
import { animated, easings, useSpring } from '@react-spring/web'

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
    const [showNav, setShowNav] = useState(true)
    const [prevScrollPos, setPrevScrollPos] = useState(0)
    const [{ y }] = useWindowScroll()

    const glassEffect = (y || 0) > 50

    const {} = useSpring({})
    console.log('y', y)
    const { ...styles } = useSpring({
        from: {
            transform: 'translateY(-100%)',
            backdropFilter: 'blur(0)',
            WebkitBackdropFilter: 'blur(0)',
            borderBottom: '0px solid rgb(40, 40, 59)',
            background: 'transparent',
        },
        to: {
            transform: showNav ? 'translateY(0)' : 'translateY(-100%)',
            backdropFilter: glassEffect ? 'blur(8px)' : 'blur(0)',
            WebkitBackdropFilter: glassEffect ? 'blur(8px)' : 'blur(0)',
            borderBottom: glassEffect
                ? '1px solid rgb(40, 40, 59)'
                : '0px solid rgb(40, 40, 59)',
            background: glassEffect ? 'rgba(18, 18, 29, 0.3)' : 'transparent',
        },
        config: {
            duration: 50,
            // mass: 3,
            // easing: (t) => easings.linear(t),
        },
    })

    useEffect(() => {
        // NOTE this is a option two behaviour
        // if (y! && y > 50) {
        //     setShowNav(false)
        // } else {
        //     setShowNav(true)
        // }
        const currentScrollPos = y || 0
        const visible =
            (prevScrollPos > currentScrollPos && currentScrollPos > 150) ||
            currentScrollPos <= 100

        setShowNav(visible)
        setPrevScrollPos(currentScrollPos)
    }, [y])

    return (
        <animated.nav
            style={{
                ...styles,
                transition: 'transform 250ms',
                willChange: 'all',
            }}
            className={cn('fixed top-0 right-0 left-0 z-50')}
        >
            <div
                className={'container flex items-center justify-between  py-4'}
            >
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
            </div>
        </animated.nav>
    )
}
