import React from 'react'

export default function TitleBlog(props:{children:string}) {
    return (
        <span className="BlogTitle">{props.children}</span>
    )
}
