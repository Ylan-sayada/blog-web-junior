import React from 'react'
import { ReactComponent as SvgFacebook } from '../../ressources/img/icone/facebookBlack.svg';
import { ReactComponent as SvgLinkedin } from '../../ressources/img/icone/linkedin.svg';
import MailOutlineTwoToneIcon from '@material-ui/icons/MailOutlineTwoTone';
import { ReactComponent as SvgWave } from '../../ressources/img/wave.svg';
export default function Footer() {

    return (
        <div className="footer">
            <div className="footer-content">
                <SvgWave />
                <div className="socialIcones" >
                    <a className="facebook-icone" href="https://www.facebook.com/ylan.sayada/" target="_blank" rel="noreferrer">
                        <SvgFacebook fill="currentColor" />
                    </a>
                    <a className="linkedin-icone" href="https://www.linkedin.com/in/ylan-sayada-1363311b8/" target="_blank" rel="noreferrer">
                        <SvgLinkedin fill="currentColor" />
                    </a>
                    <a className="mail-icone" href="mailto:sayylan@gmail.com" target="_blank" rel="noreferrer">
                        <MailOutlineTwoToneIcon />
                    </a>
                </div>
            </div>

        </div>
    )
}
