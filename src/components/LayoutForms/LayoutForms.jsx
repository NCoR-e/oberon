import FieldForm from "../FieldForms/FieldForms"

export default ({ typeConfiguration, inputType, labelField, parentForm }) => {
    if (typeConfiguration === 'reg')
        return (
            <form className='form'>
                <FieldForm typeDesign='login' inputType='text' parentForm='reg-login' labelField='Login'></FieldForm>
                <FieldForm typeDesign='login' inputType='text' parentForm='reg-name' labelField='Name'></FieldForm>
                <FieldForm typeDesign='login' inputType='password' parentForm='reg-pass' labelField='Password'></FieldForm>
                <FieldForm typeDesign='login' inputType='number' parentForm='reg-num' labelField='Phone Number (only +7)'></FieldForm>
                <FieldForm typeDesign='login' inputType='email' parentForm='reg-email' labelField='E-Mail'></FieldForm>

                <div className='form-description'>
                    <p>* - эти поля являются обязательными для заполнения,
                        обратите внимание что поле с указанием номера телефона может в будущем вам помочь
                        восстановить доступ если вы забыли e-mail</p><br></br>
                </div>

                <button className='button-form button--primary' type='submit' data-js-button='submit'>Зарегистрироваться</button>
            </form>
        )

    if (typeConfiguration === 'auth')
        return (
            <form className='form'>
                <FieldForm typeDesign='login' inputType='text' parentForm='auth-login' labelField='Login'></FieldForm>
                <FieldForm typeDesign='login' inputType='password' parentForm='auth-pass' labelField='Password'></FieldForm>

                <button className='button-form button--primary' type='submit' data-js-button='submit'>Авторизоваться</button>
            </form>
        )

    if (typeConfiguration === 'FirstRecoveryStep')
        return (
            <form className='form'>
                <FieldForm typeDesign='recovery' parentForm={parentForm} inputType={inputType} labelField={labelField}></FieldForm>
            </form>
        )

    if (typeConfiguration === 'SecondRecoveryStep')
        return (
            <form className='form'>
                <FieldForm typeDesign='recoveryCustom' parentForm={parentForm} labelField={labelField}></FieldForm>
                <div className='form-panel'>
                    <button className='panel-button button--primary' type='submit' data-js-button='submit'>Отправить</button>
                </div>

                <div className='repeated-request'>
                    <span className='counter' aria-label='Ожидание перед повторным запросом кода'>10 сек...</span>
                    <button className="request-button button--primary" data-js-button="submit">Запросить повторно</button>
                </div>
            </form>
        )
}