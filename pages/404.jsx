import React from 'react'
import Link from 'next/link'


const NotFound = () => {
    return (
        <div className="not-found">
            <h2>404 | Opps Page Not found</h2>
            <Link href="/">
                <a>go back to homepage</a>
            </Link>
        </div>
    )
}

export default NotFound
