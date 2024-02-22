import { ReactNode } from 'react';

type TFavoritesLocationProps = {
  children: ReactNode;
}

export default function FavoritesLocation({ children }: TFavoritesLocationProps) {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>Amsterdam</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {children}
      </div>
    </li>
  );
}
