import React from 'react';
type SizeMode = 'very small' | 'small' | 'medium' | 'large' | 'extra large';
export default function GetTitle(props: { size: SizeMode, className: string, children: any }) {
    let { size, className, children } = props;
    let listOfTitle = {
        'very small': <h5 className={className}>{children}</h5>,
        'small': <h4 className={className}>{children}</h4>,
        'medium': <h3 className={className}>{children}</h3>,
        'large': <h2 className={className}>{children}</h2>,
        'extra large': <h1 className={className}>{children}</h1>
    }
    return (
        <React.Fragment>
            {listOfTitle[size]}
        </React.Fragment>
    )
}
