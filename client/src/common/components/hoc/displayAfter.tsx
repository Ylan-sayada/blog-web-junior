import React, { useState, useEffect } from 'react';

function DisplayAfter(props: { second: number, children: any }) {
    let [isAppear, setIsAppear] = useState(false);
    useEffect(
        () => {
            let timer = setTimeout(() => {
                setIsAppear(true);
            }, (props.second * 500));
            return () => clearTimeout(timer);
        });
    return (
        <React.Fragment>
            {isAppear && <div>
                {props.children}
            </div>
            }
        </React.Fragment>

    )
}

let hoc = (second: number, WrappedComponent: any) => {
    const displayAfter = ({ ...props }) => (<DisplayAfter second={second}><WrappedComponent {...props} /></DisplayAfter>);

    return displayAfter;
}
export default hoc;

