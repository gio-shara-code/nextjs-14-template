'use client'
import React, { useEffect } from 'react'
import { env } from '~/env'

export default function Home() {
    const [greeting, setGreeting] = React.useState('')
    useEffect(() => {
        fetch('/api/hello')
            .then((res) => res.json())
            .then((data) => setGreeting(data.greeting))
    }, [])
    return (
        <main
            className={
                'container h-screen flex flex-col items-center justify-center'
            }
        >
            <h1>{greeting}</h1>
            <h4>
                By the way, this is a client-side env:{' '}
                {env.NEXT_PUBLIC_CLIENTVAR}
            </h4>
        </main>
    )
}
