import { Link } from 'react-router-dom';

// TypeScript 호환을 위해 props 타입 지정
interface HeaderProps {
  isFixed?: boolean;
}

const Header = ({ isFixed }: HeaderProps) => {

  return (
    <header id="header" className={isFixed ? 'on' : ''}>
      <div className="header-wrap header-inner">
        <div className="nav">
          <h1 className="header-logo">Hajin's Portfolio</h1>
          <ul className="nav-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About ME</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#project">Project</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>    
    </header>
  );
};

export default Header;