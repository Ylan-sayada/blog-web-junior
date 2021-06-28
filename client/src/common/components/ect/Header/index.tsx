import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React from 'react';
import "./Header.scss";
function Header() {
    return (
        <div className="header">
            <div className="content-header">
                <h1>ברוכים הבאים לבלוג ג'וניור</h1>
                <p>מציאת עבודה ראשונה בהייטק היא מלאכה לא פשוטה.אני בעצמי במצב הזה.בנימה אופטימית אני מקים את הבלוג הזה בתקווה שאוליי הוא יכווין אנשים אחרים הנמצאים במסלול הזה. </p>
                <Link to="/blog"><Button className="header-button">העביר אותי לבלוג</Button></Link>
            </div>
        </div>
    )
}

export default Header;