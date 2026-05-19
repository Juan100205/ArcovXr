import { useState, useEffect } from 'react';
import Nav from "../Home/Nav.tsx";
import Logo_GitHub_nav from '../Icons/Logo_GitHub copy.tsx';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20); // Puedes ajustar el valor
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <header
      className={`sticky z-50 flex items-center justify-between flex-wrap transition-all duration-300 text-black fill-black
        ${scrolled
          ? 'top-0 w-full bg-white shadow-sm px-8 lg:px-20 py-3 rounded-none'
          : 'top-6 w-3/4 mx-auto bg-white px-6 lg:px-10 py-2 rounded-4xl shadow-lg'
        }`}
    >
      <Logo_GitHub_nav />
      <Nav />
    </header>
  );
};

export default Header;
