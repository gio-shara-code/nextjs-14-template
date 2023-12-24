import React from 'react'

export default function TypographyPage() {
    return (
        <main
            className={
                'w-full h-screen flex flex-col items-center justify-center'
            }
        >
            <div className={'space-y-5'}>
                <h1>Header 1</h1>
                <h2>Header 2</h2>
                <h3>Header 3</h3>
                <h4>Header 4</h4>
                <p>This is a paragraph</p>
            </div>
        </main>
    )
}
