const rootElement = document.querySelector('[data-js-container]');
const buttonsElements = Array.from(rootElement.querySelectorAll('[data-js-button]'));

const INITIAL_STATE = { section: 'login', currentForm: 'auth', switch: 'auth' };
let activeState = {}

function updateUI(elements, attrName, targetValue, requiredForm = null, isButton = false) {
    elements.forEach(element => {
        const currentValue = element.getAttribute(attrName);
        let isActive = (currentValue === targetValue);

        if (isActive && requiredForm) {
            const parentForm = element.closest('[data-js-window]');
            const elementFormName = parentForm ? parentForm.getAttribute('data-js-window') : null;
            isActive = (elementFormName === requiredForm);
        }

        element.classList.toggle('is-active', isActive);
        if (isButton) {
            element.disabled = isActive;
        }
    });
}

// V -View
function handleClick(isAction) {
    rootElement.addEventListener('click', (e) => {
        let triggerButton = e.target.closest('[data-js-button]');
        if (!triggerButton) return;

        let sectionElement = triggerButton.closest('[data-js-collection]');
        let sectionName = sectionElement ? sectionElement.getAttribute('data-js-collection') : null;
        let windowElement = triggerButton.closest('[data-js-window]');
        let currentForm = windowElement ? windowElement.getAttribute('data-js-window') : null;
        let buttonValue = triggerButton.getAttribute('data-js-button');

        let eventState = {
            section: sectionName,     
            currentForm: currentForm, 
            switch: buttonValue       
        };

        isAction(eventState);
    })
};

// VM - ViewModel
function modelController(data, updated) {
    let pageConfig = {
        login: {
            reg: {
                reg: { section: 'login', form: 'reg', switch: 'reg' },
                auth: { section: 'login', form: 'auth', switch: 'auth' }
            },

            auth: {
                reg: { section: 'login', form: 'reg', switch: 'reg' },
                auth: { section: 'login', form: 'auth', switch: 'auth' },
                recovery: { section: 'recovery', form: 'choice-method', switch: 'recovery' }
            },

            recovery: { section: 'recovery', form: 'choice-method', switch: 'recovery' }
        },

        recovery: {
            'choice-method': {
                auth: { section: 'login', form: 'auth', switch: 'auth' },
                'recovery-email': { section: 'recovery', form: 'recovery-email', switch: 'recovery-email', step: 'input-data' },
                'recovery-num': { section: 'recovery', form: 'recovery-num', switch: 'recovery-num', step: 'input-data' }
            },

            'recovery-email': {
                'choice-method': { section: 'recovery', form: 'choice-method', switch: 'choice-method' },
                'submit': { section: 'recovery', form: 'recovery-email', switch: 'step-2', step: 'input-code' },
            },

            'recovery-num': {
                'choice-method': { section: 'recovery', form: 'choice-method', switch: 'choice-method' },
                'submit': { section: 'recovery', form: 'recovery-num', switch: 'step-2', step: 'input-code' },
            }
        }
    };

    if (!data) {
        activeState = pageConfig[INITIAL_STATE.section][INITIAL_STATE.currentForm][INITIAL_STATE.switch];
        return activeState;
    }

    let section = pageConfig[data.section];

    if (!section) return null;
    activeState = (section[data.currentForm] && section[data.currentForm][data.switch])
        ? section[data.currentForm][data.switch]
        : section[data.switch];

    
    if (!activeState) {
        console.error("Конфиг не найден для:", data);
        return null;
    }

    return activeState;
}

const renderUI = (uiElements) => (inputData) => {
    updateUI(uiElements.sections, 'data-js-collection', inputData.section);
    updateUI(uiElements.forms, 'data-js-window', inputData.form);
    updateUI(uiElements.buttons, 'data-js-button', inputData.switch);
    updateUI(uiElements.recoverySteps, 'data-js-step', inputData.step, inputData.form);

    uiElements.helpButton.classList.toggle('is-active', inputData.form === 'auth');
};

const initApp = () => {
    const uiElements = {
        sections: Array.from(rootElement.querySelectorAll('[data-js-collection]')),
        forms: Array.from(rootElement.querySelectorAll('[data-js-window]')),
        buttons: buttonsElements,
        helpButton: buttonsElements[6],
        recoverySteps: Array.from(rootElement.querySelectorAll('[data-js-step]')),
    };

    const render = renderUI(uiElements);
    render(modelController());

    handleClick((data) => {
        render(modelController(data));
    });
};

initApp();