'use client'

import React from 'react'
import { Button } from '~/components/ui/Button'
import { Input } from '~/components/ui/Input'
import { useToast } from '~/components/ui/use-toast'

export default function UIPage() {
    const { toast } = useToast()
    return (
        <main className={'container space-y-10'}>
            <h1>UI Components</h1>
            <div className={'space-y-5'}>
                <h1>Buttons</h1>
                <div className={'flex flex-col gap-y-2'}>
                    <Button size={'sm'}>Button Small</Button>
                    <Button>Button Default</Button>
                    <Button size={'lg'}>Button Small</Button>
                    <Button loading>Loading</Button>
                    <Button disabled>Button</Button>
                    <Button variant={'ghost'}>Ghost</Button>
                    <Button variant={'link'}>Link</Button>
                    <Button variant={'outline'}>Outline</Button>
                    <Button variant={'secondary'}>Secondary</Button>
                    <Button variant={'destructive'}> Descructive</Button>
                </div>
            </div>
            <div className={'space-y-5'}>
                <h1>Input</h1>
                <div className={'flex flex-col'}>
                    <Input placeholder={'Type...'} />
                </div>
            </div>
            <div className={'space-y-5'}>
                <h1>Toast</h1>
                <div className={'flex items-center gap-x-2'}>
                    <Button
                        onClick={() => {
                            toast({
                                title: 'Scheduled: Catch up',
                                description:
                                    'Friday, February 10, 2023 at 5:57 PM',
                            })
                        }}
                    >
                        Show Default Toast
                    </Button>
                    <Button
                        variant={'destructive'}
                        onClick={() => {
                            toast({
                                variant: 'destructive',
                                title: 'Scheduled: Catch up',
                                description:
                                    'Friday, February 10, 2023 at 5:57 PM',
                            })
                        }}
                    >
                        Show Destructive Toast
                    </Button>
                </div>
            </div>
        </main>
    )
}
