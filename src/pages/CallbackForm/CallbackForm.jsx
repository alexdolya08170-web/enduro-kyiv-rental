// CallbackForm.jsx
import { useForm } from 'react-hook-form';
import './CallbackForm.css';

const CallbackForm = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    reset 
  } = useForm({
    mode: 'onChange'
  });

  const onSubmit = async (data) => {
    // Имитация отправки данных
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form data:', data);
    alert('Дякуємо! Ми зателефонуємо вам найближчим часом.');
    reset();
  };

  return (
    <section id="callback" className="callback-form">
      <div className="callback-form__wrapper">
        <div className="callback-form__container">
          <form 
            className="callback-form__form" 
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div className="callback-form__header">
              <h2 className="callback-form__title">Замовте дзвінок</h2>
              <p className="callback-form__subtitle">
                Залиште свої контакти і ми зателефонуємо вам
              </p>
            </div>

            <div className="callback-form__field">
              <label 
                htmlFor="name" 
                className="callback-form__label callback-form__label--hidden"
              >
                Ім'я
              </label>
              <input
                id="name"
                type="text"
                placeholder="Ім'я"
                className={`callback-form__input ${errors.name ? 'callback-form__input--error' : ''}`}
                {...register('name', {
                  required: "Ім'я обов'язкове",
                  minLength: {
                    value: 2,
                    message: "Мінімум 2 символи"
                  },
                  pattern: {
                    value: /^[a-zA-Zа-яА-ЯіІїЇєЄ' -]+$/,
                    message: "Тільки літери"
                  }
                })}
                disabled={isSubmitting}
                autoComplete="name"
              />
              {errors.name && (
                <span className="callback-form__error" role="alert">
                  {errors.name.message}
                </span>
              )}
            </div>

            <div className="callback-form__field">
              <label 
                htmlFor="phone" 
                className="callback-form__label callback-form__label--hidden"
              >
                Телефон
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+38 098 222 22 22"
                className={`callback-form__input ${errors.phone ? 'callback-form__input--error' : ''}`}
                {...register('phone', {
                  required: "Телефон обов'язковий",
                  pattern: {
                    value: /^\+38\s?\(\d{3}\)\s?\d{3}-\d{2}-\d{2}$|^\+38\s?\d{3}\s?\d{3}\s?\d{2}\s?\d{2}$/,
                    message: "Невірний формат телефону"
                  }
                })}
                disabled={isSubmitting}
                autoComplete="tel"
              />
              {errors.phone && (
                <span className="callback-form__error" role="alert">
                  {errors.phone.message}
                </span>
              )}
            </div>

            <button 
              type="submit" 
              className="callback-form__submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Відправка...' : 'Зателефонувати мені'}
            </button>
          </form>

          <div className="callback-form__contacts">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="callback-form__contact-link"
              aria-label="Наш Instagram"
            >
              <svg className="callback-form__contact-icon callback-form__contact-icon--instagram" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                <path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              <span className="callback-form__contact-text">Instagram</span>
            </a>

            <a 
              href="https://t.me/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="callback-form__contact-link"
              aria-label="Наш Telegram"
            >
              <svg className="callback-form__contact-icon callback-form__contact-icon--telegram" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                <path fill="currentColor" d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              <span className="callback-form__contact-text">Telegram</span>
            </a>

            <a 
              href="tel:+380982222222"
              className="callback-form__contact-link"
              aria-label="Зателефонувати"
            >
              <svg className="callback-form__contact-icon callback-form__contact-icon--phone" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                <path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span className="callback-form__contact-text">Дзвінок</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallbackForm;