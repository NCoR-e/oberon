const base = import.meta.env.BASE_URL;
export default ({type, labelMethodRecovery}) => {

    if (type === 'login')
        return (
            <header className='header'>
                <div className='wrapper'>
                    <img className="logo" src={`${base}images/logo/black-logo.png`} alt='чёрный логотип сайта' />
                    <h1 className='title'>OBERON</h1>
                </div>

                <nav className='panel' aria-label='Панель с кнопками переключения'>
                    <button className='nav-button button--switch' data-js-button='reg'>Регистрация</button>
                    <button className='nav-button button--switch' data-js-button='auth'>Авторизация</button>
                </nav>
            </header>
        )

    if (type === 'choice')
        return (
            <header className='header'>
                <div className='wrapper'>
                    <h2 className='title'>Восстановление аккаунта</h2>
                    <h3 className='description'>Выберите способ восстановления доступа</h3>
                </div>

                <nav className='panel' aria-label='Панель с кнопками переключения'>
                    <button className='nav-button button--primary' aria-label='Вернуться назад' data-js-button='auth'>
                        <svg className='back-in'>
                            <use xlinkHref={`${base}icons/sprite.svg#back-arrow_small-set`}></use>
                        </svg><span>Назад</span>
                    </button>
                    <button className='nav-button button--switch' data-js-button='recovery-email'>По e-mail</button>
                    <button className='nav-button button--switch' data-js-button='recovery-num'>По номеру телефона</button>
                </nav>
            </header>
        )

    if (type === 'FirstRecoveryStep')
        return (
            <header className='header'>
                    <h2 className='title'>Восстановление аккаунта</h2>
                    <h3 className='description'>Запрос кода на {labelMethodRecovery}</h3>
            </header>
        )

    if (type === 'SecondRecoveryStep')
        return (
            <header className='header'>
                    <h2 className='title'>Восстановление аккаунта</h2>
                    <h4 className='description'>Мы отправили код восстановления на указанный {labelMethodRecovery}</h4>
            </header>
        )
}