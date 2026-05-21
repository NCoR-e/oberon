import { Head } from 'minista'
import HeaderForms from '@/components/HeaderForms/HeaderForms'
import LayoutForms from '@/components/LayoutForms/LayoutForms'

export const metadata = {
    title: 'Добро пожаловать',
}

export default () => {
    return (
        <>  <Head></Head>
            <body>
                <main className='login-page' data-js-container>
                    <section className='login-section' aria-label='Вход и Регистрация' data-js-collection='login'>
                        <div className='reg-win' aria-label='Окно регистрации' data-js-window='reg'>
                            <HeaderForms type='login'></HeaderForms>
                            <LayoutForms typeConfiguration='reg'></LayoutForms>
                        </div>

                        <div className='auth-win' aria-label='Окно авторизации' data-js-window='auth'>
                            <HeaderForms type='login'></HeaderForms>
                            <LayoutForms typeConfiguration='auth'></LayoutForms>
                        </div>

                        <div className='support-button'data-js-button='recovery'>
                            <button className='support-button button--action' aria-label='Восстановить аккаунт'>Восстановить доступ</button>
                        </div>
                    </section>

                    <section className='recovery-section' aria-label='Восстановление аккаунта' data-js-collection='recovery'>
                        <div className='choice-win' data-js-window='choice-method'><HeaderForms type='choice'></HeaderForms></div>

                        <div className='recovery-email' data-js-window='recovery-email'>
                            <div class="step-1" data-js-step="input-data">
                                <HeaderForms type='FirstRecoveryStep' labelMethodRecovery='e-mail'></HeaderForms>
                                <LayoutForms typeConfiguration='FirstRecoveryStep' parentForm='recovery-email' inputType={'email'} labelField={'Ваш e-mail от аккаунта'}></LayoutForms>
                            </div>

                            <div class="step-2" data-js-step="input-code">
                                <HeaderForms type='SecondRecoveryStep' labelMethodRecovery='e-mail'></HeaderForms>
                                <LayoutForms typeConfiguration='SecondRecoveryStep' parentForm='recovery-email' inputType={'email'} labelField={'Введите код'} labelMethodRecovery='e-mail'></LayoutForms>
                            </div>
                        </div>

                        <div className='recovery-num' data-js-window='recovery-num'>
                            <div class="step-1" data-js-step="input-data">
                                <HeaderForms type='FirstRecoveryStep' labelMethodRecovery='номер телефона'></HeaderForms>
                                <LayoutForms typeConfiguration='FirstRecoveryStep' parentForm='recovery-num' labelField={'Ваш номер телефона от аккаунта'} inputType={'number'}></LayoutForms>
                            </div>

                            <div class="step-2" data-js-step="input-code">
                                <HeaderForms type='SecondRecoveryStep' labelMethodRecovery='номер телефона'></HeaderForms>
                                <LayoutForms typeConfiguration='SecondRecoveryStep' parentForm='recovery-num' inputType={'number'} labelField={'Введите код'} labelMethodRecovery='e-mail'></LayoutForms>
                            </div>
                        </div>
                    </section>
                </main>
            </body>
        </>
    )
}