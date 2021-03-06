import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link, NavLink } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchInput from '../../inputs/SearchInput';
import Button from '@material-ui/core/Button';
import TitleLine from '../../stylised title/TitleLine';
import PersistentDrawer from '../PersistentDrawer';
import WithLink from '../../hoc/WithLink';
import { ReactComponent as SvgFacebook } from '../../../../ressources/img/icone/facebookBlack.svg';
import { ReactComponent as SvgLinkedin } from '../../../../ressources/img/icone/linkedin.svg';
import FineSep from '../../separators/FineSep';
import MiniPresentation from '../MiniPresentation';
import Me from '../../../../ressources/img/me.jpeg';
import "./Nav.scss";


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
                <TitleLine size="medium"> ???????? ??????????</TitleLine>
                <div className="social-icones">
                  {socialListIcone}
                </div>
              </div>
              <ul style={{ textAlign: "center" }}>
                <FineSep />
                <li onClick={handlerDrawerState}><Link to="/blog">????????</Link></li>
                <FineSep />
                <li onClick={handlerDrawerState}><Link to="/about">??????????</Link></li>
                <FineSep />
              </ul>
              <MiniPresentation
                name="???????? ??????????"
                titleDesc="FullStack developer"
                image={Me}
                desc="???????????? ?????????????? ?????????? ???????????? ????????????,???????? ?????? ???? ?????????? ???????????????? ?????? ???????? ???????? ?????????? ???????? ?????????? ???????????? ?????????? ???????????? ????????????" />
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





