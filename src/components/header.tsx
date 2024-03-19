import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const';
import { useAppSelector } from '../hooks';
import { store } from '../store';
import { logoutAction } from '../store/api-actions';

type THeaderProps = {
  classMain?: string;
}

export default function Header({ classMain }: THeaderProps) {
  const isAuthorized = useAppSelector((state) =>state.authorizationStatus === AuthorizationStatus.Auth);
  const favoritesCount = useAppSelector((state) => state.favoritesCount);

  const handleSignOutClick = () => {
    store.dispatch(logoutAction());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={AppRoute.Root}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          {classMain !== 'page__main--login' &&
          <nav className="header__nav">
            <ul className="header__nav-list">
              {isAuthorized ?
                <>
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                      <span className="header__favorite-count">{favoritesCount}</span>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <Link className="header__nav-link" to="#" onClick={handleSignOutClick}>
                      <span className="header__signout">Sign out</span>
                    </Link>
                  </li>
                </> :
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>}
            </ul>
          </nav>}
        </div>
      </div>
    </header>
  );
}
