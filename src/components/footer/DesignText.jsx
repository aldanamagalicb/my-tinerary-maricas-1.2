import React from 'react'

export default function DesignText(props) {
    let { className, text1, text2, text3, href} = props;
    return (
        <div className={className}>
            <h4>{text1}</h4>
            <a href={href}>{text2}</a> 
            <a href={href}>{text3}</a> 
        </div>
    )
}
