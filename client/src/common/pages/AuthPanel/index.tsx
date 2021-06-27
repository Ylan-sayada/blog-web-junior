import React from 'react';
import { Button } from "@material-ui/core";
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import SocialLoginButton from '../../components/buttons/SocialLoginBtn';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function AuthPanel() {
    let trysuccess = () => {

    };

    let catcherr = (err: any) => {
        console.log(err);
        console.log("error");
    };


    return (
        <div className="member-div">
            <button>התחברות</button><button>הרשמה</button>
            <form action="">
                <div className="userName">
                    <FormControl >
                        <InputLabel htmlFor="input-with-icon-adornment">שם משתמש</InputLabel>
                        <Input
                            id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="start">
                                    <PersonIcon />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </div>
                <div className="password">
                    <FormControl >
                        <InputLabel htmlFor="input-with-icon-adornment">סיסמא</InputLabel>
                        <Input
                            id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="start">
                                    <LockIcon />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </div>
                <span className="sub-desc"><Link to="/retrievePassword"> שכחתי סיסמא</Link></span>
                <Button
                    dir="ltr"
                    className="button-color"
                >
                    אני מתחבר
                </Button>
            </form>
            <h5>או התחבר דרך </h5>
            <div>
                <SocialLoginButton
                    provider='facebook'
                    appId='995837254560670'
                    onLoginSuccess={trysuccess}
                    onLoginFailure={catcherr}
                >
                    Facebook

                </SocialLoginButton>
                <button>
                    Linkedin
                </button>
                <SocialLoginButton
                    provider="google"
                    appId='773545842893-3kok7vvg64evbch0jqni8iamph6u084e.apps.googleusercontent.com'
                    onLoginSuccess={trysuccess}
                    onLoginFailure={catcherr}
                >
                    Gmail
                </SocialLoginButton>
            </div>


        </div>
    )
}
