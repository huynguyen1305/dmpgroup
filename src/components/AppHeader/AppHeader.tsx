import { Link, NavLink } from 'react-router-dom';
import { useStyles } from './styles';
import logo from '@/assets/images/logo-dmp.png';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const navBars = [
  {
    name: 'trang chủ',
    href: '/',
  },
  {
    name: 'Giới thiệu',
    href: '/gioi-thieu',
  },
  {
    name: 'Lĩnh vực hoạt động',
    href: '/linh-vuc-hoat-dong',
  },
];
const AppHeader = () => {
  const [isShowNav, setIsShowNav] = useState(false);
  const { classes } = useStyles(isShowNav);
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash === '#about-us') {
      setIsShowNav(true);
    } else {
      setIsShowNav(false);
    }
  }, [location]);

  return (
    <header className={classes.wrapper}>
      <Link to="/">
        <div className={classes.logo}>
          <img
            src={logo}
            alt="logo"
            style={{
              height: '100%',
              padding: '8px 0',
            }}
          />
        </div>
      </Link>

      <nav>
        {navBars.map((navbar) => (
          <NavLink
            key={navbar.name}
            to={navbar.href}
            className={classes.navItem}
          >
            {navbar.name}
          </NavLink>
        ))}
      </nav>

      <div></div>
    </header>
  );
};

export default AppHeader;
