// src/pages/NotFound/NotFound.jsx
import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  return (
    <main className="not-found" aria-labelledby="not-found-title">
      <article className="not-found__card">
        <h1 id="not-found-title" className="not-found__title">Сайт не работает</h1>
        <Link to="/" className="not-found__btn" aria-label="Перейти на главную страницу">
          Вернуться на главную
        </Link>
      </article>
    </main>
  );
}
