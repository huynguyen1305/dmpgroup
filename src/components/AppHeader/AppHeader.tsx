import { NavLink } from 'react-router-dom';
import { useStyles } from './styles';
import logo from '@/assets/images/logo-dmp.png';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Burger } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useScrollLock } from '@mantine/hooks';

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
  {
    name: 'Liên Hệ',
    href: '/lien-he',
  },
];
const AppHeader = () => {
  // const [isShowNav, setIsShowNav] = useState(true);
  const [opened, { toggle, close }] = useDisclosure();
  const [scrollLocked, setScrollLocked] = useScrollLock();
  const { classes } = useStyles(true);
  // const location = useLocation();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const hash = location.hash;
  //   if (location.pathname === '/') {
  //     if (
  //       hash === '#news' ||
  //       hash === '#about-us' ||
  //       hash === '#contruct' ||
  //       hash === '#footer-section'
  //     ) {
  //       setIsShowNav(true);
  //     } else {
  //       setIsShowNav(false);
  //     }
  //   } else {
  //     setIsShowNav(true);
  //   }
  // }, [location]);

  return (
    <header className={classes.wrapper}>
      <Burger
        opened={opened}
        onClick={() => {
          toggle();
          setScrollLocked(!scrollLocked);
        }}
        size="lg"
        aria-label="Toggle navigation"
      />
      <a href="/#welcome-section">
        <div
          className={`${classes.logo}`}
          // onClick={() => {
          //   navigate('/#welcome-section');
          // }}
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
      <IconSearch />
      <div
        className="absolute left-0 top-[80px] w-full flex"
        style={{
          height: 'calc(100vh - 80px)',
          transform: opened ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.3s ease',
        }}
      >
        <div
          className="w-1/3 flex flex-col justify-between bg-white h-full p-8 shadow-[4px_0px_0px_0px_#00000024]"
          // style={{
          //   transform: opened ? 'translateX(0)' : 'translateX(-100%)',
          //   transition: 'transform 0.5s ease-in-out',
          // }}
        >
          <nav className="w-full flex flex-col flex-1 justify-center">
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
          <div className="w-full">
            <img
              src={logo}
              alt="logo"
              style={{
                height: '100%',
                width: '100%',
              }}
            />
          </div>
        </div>
        <div
          className="w-2/3"
          style={{
            width: '100%',
            height: 'calc(100vh - 80px)',
            background: 'transparent',
          }}
          onClick={close}
        />
      </div>
    </header>
  );
};

export default AppHeader;
