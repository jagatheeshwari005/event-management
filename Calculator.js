import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [operationDisplay, setOperationDisplay] = useState('');

  const inputNumber = (num) => {
    if (waitingForOperand) {
      setDisplay(String(num));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? String(num) : display + num);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  const clear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
    setOperationDisplay('');
  };

  const performOperation = (nextOperation) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
      setOperationDisplay(`${inputValue} ${getOperationSymbol(nextOperation)}`);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
      setOperationDisplay(`${newValue} ${getOperationSymbol(nextOperation)}`);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const getOperationSymbol = (op) => {
    switch (op) {
      case '+': return '+';
      case '-': return '−';
      case '*': return '×';
      case '/': return '÷';
      default: return op;
    }
  };

  const calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '*':
        return firstValue * secondValue;
      case '/':
        return secondValue !== 0 ? firstValue / secondValue : 0;
      case '=':
        return secondValue;
      default:
        return secondValue;
    }
  };

  const handleEquals = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation);
      setDisplay(String(newValue));
      setOperationDisplay(`${previousValue} ${getOperationSymbol(operation)} ${inputValue} = ${newValue}`);
      setPreviousValue(null);
      setOperation(null);
      setWaitingForOperand(true);
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="calculator-header">
          <h2>Calculator</h2>
          <p>Basic Arithmetic Operations</p>
        </div>
        
        <div className="calculator-display">
          <div className="operation-display">{operationDisplay}</div>
          <div className="display-value">{display}</div>
        </div>
        
        <div className="calculator-buttons">
          <button className="btn btn-function" onClick={clear}>
            C
          </button>
          <button className="btn btn-function" onClick={() => setDisplay(display.slice(0, -1) || '0')}>
            ⌫
          </button>
          <button className="btn btn-function" onClick={() => performOperation('/')}>
            ÷
          </button>
          <button className="btn btn-operation" onClick={() => performOperation('*')}>
            ×
          </button>
          
          <button className="btn btn-number" onClick={() => inputNumber(7)}>
            7
          </button>
          <button className="btn btn-number" onClick={() => inputNumber(8)}>
            8
          </button>
          <button className="btn btn-number" onClick={() => inputNumber(9)}>
            9
          </button>
          <button className="btn btn-operation" onClick={() => performOperation('-')}>
            −
          </button>
          
          <button className="btn btn-number" onClick={() => inputNumber(4)}>
            4
          </button>
          <button className="btn btn-number" onClick={() => inputNumber(5)}>
            5
          </button>
          <button className="btn btn-number" onClick={() => inputNumber(6)}>
            6
          </button>
          <button className="btn btn-operation" onClick={() => performOperation('+')}>
            +
          </button>
          
          <button className="btn btn-number" onClick={() => inputNumber(1)}>
            1
          </button>
          <button className="btn btn-number" onClick={() => inputNumber(2)}>
            2
          </button>
          <button className="btn btn-number" onClick={() => inputNumber(3)}>
            3
          </button>
          <button className="btn btn-equals" onClick={handleEquals} rowSpan="2">
            =
          </button>
          
          <button className="btn btn-number btn-zero" onClick={() => inputNumber(0)}>
            0
          </button>
          <button className="btn btn-number" onClick={inputDecimal}>
            .
          </button>
        </div>
        
        <div className="calculator-info">
          <p>✨ Features: Add, Subtract, Multiply, Divide</p>
          <p>🔧 Built with React State Management</p>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
