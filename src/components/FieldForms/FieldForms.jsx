export default ({typeDesign, parentForm, labelField, inputType}) => {
    if(typeDesign === 'login')
        return (
        <div className='field'>
            <label className='label' htmlFor={parentForm}><sup>*</sup>{labelField}</label>
            <input className='input' id={parentForm} type={inputType} autoComplete='off' placeholder=' '></input>
        </div>
    )

    if(typeDesign === 'recovery')
        return (
        <div className='field'>
            <label className='label' htmlFor={parentForm}>{labelField}</label>
            <input className='input' id={parentForm} type={inputType} autoComplete='off' placeholder=' '></input>

            <div className='form-panel'>
                <button className='panel-button button--primary' type="button" data-js-button='choice-method'>Назад</button>
                <button className='panel-button button--primary' type="submit" data-js-button='submit'>Отправить</button>
            </div>
        </div>
    )

    if(typeDesign === 'recoveryCustom')
        return (
        <div className='code-field'>
            <label className='label' htmlFor={parentForm}>{labelField}</label>
            <input className='input' id={parentForm} type='number' autoComplete='off' maxLength='6' autoFocus></input>

            <div className='cells-wrapper' aria-label='Поле для ввода кода' data-js-field>
                <div aria-label="1-ая ячейка для цифры кода"></div>
                <div aria-label="2-ая ячейка для цифры кода"></div>
                <div aria-label="3-ая ячейка для цифры кода"></div>
                <div aria-label="4-ая ячейка для цифры кода"></div>
                <div aria-label="5-ая ячейка для цифры кода"></div>
                <div aria-label="6-ая ячейка для цифры кода"></div>
            </div>
        </div>
    )
}