import React from 'react'
import SocialLogin from 'react-social-login';


function SocialLoginButton(props: any) {
    const { children, triggerLogin, ...otherProps } = props;

    return (
        <button onClick={triggerLogin} {...otherProps}>
            {children}
        </button>
    );

}
export default SocialLogin(SocialLoginButton);