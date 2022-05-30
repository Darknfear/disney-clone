import { Nav, Logo, NavMenu, UserImg } from './styles';
const NavbarCustom: React.FC = () => {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a href="/">
          <img src="/images/home-icon.svg" alt="home" />
          <span>HOME</span>
        </a>
        <a href="/">
          <img src="/images/search-icon.svg" alt="home" />
          <span>SEARCH</span>
        </a>
        <a href="/">
          <img src="/images/watchlist-icon.svg" alt="home" />
          <span>WATCHLIST</span>
        </a>
        <a href="/">
          <img src="/images/original-icon.svg" alt="home" />
          <span>ORIGINALS</span>
        </a>
        <a href="/">
          <img src="/images/movie-icon.svg" alt="home" />
          <span>MOVIES</span>
        </a>
        <a href="/">
          <img src="/images/series-icon.svg" alt="home" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src="https://lh3.googleusercontent.com/a-/AOh14GhPEWpoUbB_IZyXZnBokOFaXzn0RKzgXo7jfxx8GQ=s96-c" />
    </Nav>
  );
};

export default NavbarCustom;
