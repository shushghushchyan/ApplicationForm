import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const dataNavigation = [
   {
      title: 'Home',
      path: '/',
   },
   {
      title: 'Contact',
      path: '/contact',
   },
   {
      title: 'About',
      path: '/about',
   },
];

export default function Header({ setStatedisplay }) {
   const [modalBurger, setModalBurger] = useState(false);
   const [selectedPage, setSelectedPage] = useState('/');

   const navigate = useNavigate();

   const handleNavigate = (page) => {
      setSelectedPage(page);
      setModalBurger((prev) => !prev);
   };

   const modaWindows = () => {
      setStatedisplay('block');
      setSelectedPage('Home');
      navigate('/');
   };

   const handleBurger = () => {
      setModalBurger((prev) => !prev);
   };

   return (
      <header>
         <div className="personAndbutton">
            <AccountCircleIcon sx={{ color: '#54716B', fontSize: 60 }} onClick={modaWindows} />
            <nav>
               <div className="burgermenu" onClick={handleBurger}>
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
               </div>
               <ul className={modalBurger ? 'show' : ''}>
                  {dataNavigation.map(({ title, path }) => (
                     <li
                        key={path}
                        onClick={() => handleNavigate(path)}
                        className={selectedPage === path ? 'selected' : ''}>
                        <Link to={path}>{title}</Link>
                     </li>
                  ))}
               </ul>
            </nav>
         </div>
         <div className="login">
            <button className="loginButton" onClick={modaWindows}>
               Login
            </button>
         </div>
      </header>
   );
}
