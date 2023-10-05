import { NavLink } from 'react-router-dom';
import { useStyles } from './styles';
import logo from '@/assets/images/logo-dmp.png';

const navBars = [
  {
    name: 'trang chủ',
    href: '/',
  },
  {
    name: 'Giới thiệu',
    href: '/gioi-thieu',
  },
];
const AppHeader = () => {
  const { classes } = useStyles();
  return (
    <header className={classes.wrapper}>
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
