import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      textAlign: 'center',
      padding: '2.5rem',
      maxWidth: '450px',
      margin: '3rem auto',
      background: '#f8f9fa',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{
        color: '#2c3e50',
        
        marginBottom: '1.5rem',
        fontSize: '1.8rem',
        fontWeight: '600'
      }}>
        Counter App
      </h2>
      <p style={{
        color: '#7f8c8d',
        marginBottom: '2.5rem',
        fontSize: '1.1rem',
        lineHeight: '1.6'
      }}>
        A simple counter that increments or decrements a value based on user input.
      </p>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1.5rem',
        margin: '0 auto',
        maxWidth: '300px',
        padding: '1.5rem',
        background: 'white',
        borderRadius: '10px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
      }}>
        <button
          onClick={() => setCount(count - 1)}
          style={{
            padding: '0.6rem 1.2rem',
            fontSize: '1.4rem',
            border: 'none',
            background: '#e74c3c',
            color: 'white',
            borderRadius: '6px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 4px rgba(231, 76, 60, 0.3)'
          }}
          onMouseOver={(e) => e.target.style.background = '#c0392b'}
          onMouseOut={(e) => e.target.style.background = '#e74c3c'}
        >
          -
        </button>
        <span style={{
          fontSize: '2rem',
          minWidth: '60px',
          fontWeight: '700',
          color: '#2c3e50',
          background: '#f8f9fa',
          padding: '0.5rem 1rem',
          borderRadius: '6px',
          border: '1px solid #e0e0e0'
        }}>
          {count}
        </span>
        <button
          onClick={() => setCount(count + 1)}
          style={{
            padding: '0.6rem 1.2rem',
            fontSize: '1.4rem',
            border: 'none',
            background: '#2ecc71',
            color: 'white',
            borderRadius: '6px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 4px rgba(46, 204, 113, 0.3)'
          }}
          onMouseOver={(e) => e.target.style.background = '#27ae60'}
          onMouseOut={(e) => e.target.style.background = '#2ecc71'}
        >
          +
        </button>
      </div>
    </div>
  );
}
