import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link, NavLink } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchInput from '../vendorComponents/materialUi/input/SearchInput';
import Button from '@material-ui/core/Button';
import TitleLine from '../components/stylised title/TitleLine';
import PersistentDrawer from '../vendorComponents/PersistentDrawer';
import WithLink from '../components/hoc/WithLink';
import { ReactComponent as SvgFacebook } from '../../ressources/img/icone/facebookBlack.svg';
import { ReactComponent as SvgLinkedin } from '../../ressources/img/icone/linkedin.svg';
import FineSep from '../components/sep/FineSep';
import MiniPresentation from '../components/ect/MiniPresentation';
import Me from '../../ressources/img/me.jpeg';



export default function Nav(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  let dataIcone = [{ url: "https://www.facebook.com/ylan.sayada/", icone: <SvgFacebook fill="currentColor" /> },
  { url: "https://www.linkedin.com/in/ylan-sayada-1363311b8/", icone: <SvgLinkedin fill="currentColor" /> }
  ]
  let socialListIcone = dataIcone.map((data, index) =>
    <div key={"item" + index} className="social-drawer-icone">
      {WithLink(<Button className="socialIcone" size="small" style={{ backgroundColor: "black", color: "white" }}>{data.icone}</Button>, data.url)}
    </div>
  );
  const handlerDrawerState = () => {
    setOpen(!open);
    document.body.classList.toggle("no-scroll");
  }
  return (
    <React.Fragment >
      <AppBar position="sticky">
        <Toolbar className="navBar">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handlerDrawerState}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <PersistentDrawer
            anchor="left"
            handleClose={handlerDrawerState}
            open={open}
          >
            <div className="content-drawer">
              <div className="social-drawer">
                <TitleLine size="medium"> עקבו אחריי</TitleLine>
                <div className="socialIcones">
                  {socialListIcone}
                </div>
              </div>
              <ul style={{ textAlign: "center" }}>
                <FineSep />
                <li onClick={handlerDrawerState}><Link to="/blog">בלוג</Link></li>
                <FineSep />
                <li onClick={handlerDrawerState}><Link to="/about">הודות</Link></li>
                <FineSep />
              </ul>
              <MiniPresentation
                name="אילן סיאדה"
                titleDesc="FullStack developer"
                image={Me}
                desc="סטודנט להנדסאי תוכנה במכללת אשקלון,לאחר שנה של לימוד אינטסיבי אני רוצה לשתף אותכם במסע המפרך למציאת עבודה ראשונה בהייטק" />
            </div>
          </PersistentDrawer >

          <div className="only-desktop">
            <NavLink to="/blog">
              <span>blog</span>
            </NavLink>
            <NavLink to="/about">
              <span>about</span>
            </NavLink>
          </div>
          <div className="right-side">

            <IconButton
              color="inherit">
              <NavLink to="/">
                <HomeIcon />
              </NavLink>
            </IconButton>
            <SearchInput />

          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>


  );
}





