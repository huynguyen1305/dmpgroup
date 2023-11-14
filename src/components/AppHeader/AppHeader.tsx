import { NavLink } from 'react-router-dom';
import { useStyles } from './styles';
import logo from '@/assets/images/logo-dmp.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const navBars = [
  {
    name: 'trang chủ',
    href: '/#welcome-section',
  },
  {
    name: 'Về Chúng Tôi',
    href: '/gioi-thieu',
  },
  {
    name: 'Lĩnh vực hoạt động',
    href: '/linh-vuc-hoat-dong',
  },
  {
    name: 'Các Dự Án',
    href: '/du-an',
  },
];
const AppHeader = () => {
  const [isShowNav, setIsShowNav] = useState(false);
  const { classes } = useStyles(isShowNav);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const hash = location.hash;
    if (location.pathname === '/') {
      if (
        hash === '#news' ||
        hash === '#about-us' ||
        hash === '#contruct' ||
        hash === '#footer-section'
      ) {
        setIsShowNav(true);
      } else {
        setIsShowNav(false);
      }
    } else {
      setIsShowNav(true);
    }
  }, [location]);

  return (
    <header className={classes.wrapper}>
      <div style={{ visibility: 'hidden' }}>
        {navBars.map((navbar) => (
          <NavLink
            key={navbar.name}
            to={navbar.href}
            className={classes.navItem}
          >
            {navbar.name}
          </NavLink>
        ))}
      </div>
      <a href="/#welcome-section" className="flex-1">
        <div
          className={`${classes.logo}`}
          onClick={() => {
            navigate('/#welcome-section');
          }}
        >
          <img
            src={logo}
            alt="logo"
            style={{
              height: '100%',
              padding: '8px 0',
              margin: '0 auto',
            }}
          />
        </div>
      </a>

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
    </header>
  );
};

export default AppHeader;
