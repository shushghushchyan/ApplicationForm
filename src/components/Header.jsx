import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header({ setStatedisplay }) {
  const littlearay = ["Home", "Contact", "About"];
  const [modalBurger, setModalBurger] = useState(false);
  const [selectedPage, setSelectedPage] = useState('');

  const navigate = useNavigate();

  const handleNavigate = (page) => {
    setSelectedPage(page);
    navigate(`/${page.toLowerCase()}`);
    setModalBurger(prev => !prev);
  };

  const modaWindows = () => {
    setStatedisplay("block");
    setSelectedPage("Home");
    navigate("/home");
  };

  const handleBurger = () => {
    setModalBurger(prev => !prev);
  };

  return (
    <header>
      <div className='personAndbutton'>
        <AccountCircleIcon sx={{ color: "#54716B", fontSize: 60 }} onClick={modaWindows}/>
        <nav>
          <div className="burgermenu" onClick={handleBurger}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <ul className={modalBurger ? 'show' : ''}>
            {littlearay.map((el, index) => (
              <li 
                key={index} 
                onClick={() => handleNavigate(el)}
                className={selectedPage === el ? 'selected' : ''}
              >
                {el}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className='login'>
        <button className='loginButton' onClick={modaWindows}>Login</button>
      </div>
    </header>
  );
}
