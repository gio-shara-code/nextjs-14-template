'use client'
import React, { useEffect } from 'react'
import { env } from '~/env'
import { cn } from '~/lib/utils'

export default function Home() {
    const [greeting, setGreeting] = React.useState('')
    useEffect(() => {
        fetch('/api/hello')
            .then((res) => res.json())
            .then((data) => setGreeting(data.greeting))
    }, [])
    return (
        <main className={'page-base col-center'}>
            <h1>{greeting}</h1>
            <h4>
                By the way, this is a client-side env:{' '}
                {env.NEXT_PUBLIC_CLIENTVAR}
            </h4>
        </main>
    )
}
