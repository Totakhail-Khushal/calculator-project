// These are the key that are accepted by the app
const ALLOWED_KEYS = [
    's','i','n','(',')','0', '1','2','3','4','5','6','7','8','9','.','+','-','*','/',"Enter", "Backspace", "Delete"
];
const CURSOR = '_' // defines the appearance of the cursor
const CURSOR_INTERVAL = 200; // interval for cursor blinking
let isCursor = true; // if true then cursor is shown; is changing depending on CURSOR_INTERVAL
let expression = ''; // initial expression that is shown if page is shown
let historyText = ''; // initial history content
const expressionElement = document.getElementById('expression'); // references HTML element for expression
const historyElement = document.getElementById('history'); // references HTML element for history

document.addEventListener('DOMContentLoaded', () => init());    // call init() when page is loaded

function init() {
    expressionElement.focus();  // set focus to expression HTML element

    // start timer for cursor blinking
    setInterval(() => {
        if (document.activeElement === expressionElement) { // blinking only if expression element has focus
            isCursor = !isCursor;   // switch state (false to true or true to false)
        }
        // add cursor character if isCursor === true
        expressionElement.textContent = `${expression}${(isCursor ? CURSOR : '')}`;
    }, CURSOR_INTERVAL);
}
// add keyboard event handler to HTML element for expression
expressionElement.onkeydown = keyboardEvent => {
    keyboardEvent.preventDefault();
    const currentKey = keyboardEvent.key;      // extract pressed key string/character from keyboard event
    if (ALLOWED_KEYS.find(key => key === currentKey)) { // if pressed key is in our allowed list
        apply(currentKey);  // call apply()-function to react
    }
};

// apply function contains core functionality (what happens if user presses key or clicks a button)
function apply(key) {
    switch (key) {
        case 'Enter': // evaluate on 'Enter'-Key or if user presses '='-Button
            try {
                // evaluate only if expression is not empty
                if (expression !== '') {
                    // evaluate expression and add result to history
                    historyText += `${expression}=${math.evaluate(expression)}` + '\r\n';
                    historyElement.value = historyText;  // update history HTML element
                    expressionElement.style.color = "chartreuse"; // set color to green if evaluation succeeded
                }
            } catch (error) {
                expressionElement.style.color = "red"; // set color to red if evaluation failed
            }
            break;
        case 'Backspace':
            console.log('Backspace');
            expression = expression.slice(0, -1);   // remove last character
            break;
        case 'Delete':
            expression = '';    // clear complete expression (AC-Button, "All clear")
            break;
        default:
            expression += key;  // If no function key was pressed or clicked then add last character to expression
            break;
    }
}