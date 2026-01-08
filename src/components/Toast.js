import React, { useEffect } from 'react';
import './Toast.css';

const Toast = ({ toast, onClose }) => {
  useEffect(() => {
    if (toast.autoClose) {
      const timer = setTimeout(() => {
        onClose(toast.id);
      }, toast.duration || 4000);

      return () => clearTimeout(timer);
    }
  }, [toast, onClose]);

  const getToastIcon = (type) => {
    switch (type) {
      case 'success':
        return '✅';
      case 'error':
        return '❌';
      case 'warning':
        return '⚠️';
      case 'info':
        return 'ℹ️';
      default:
        return '📢';
    }
  };

  return (
    <div className={`toast toast-${toast.type} ${toast.show ? 'show' : ''}`}>
      <div className="toast-content">
        <span className="toast-icon">{getToastIcon(toast.type)}</span>
        <div className="toast-message">
          <div className="toast-title">{toast.title}</div>
          {toast.message && <div className="toast-description">{toast.message}</div>}
        </div>
        <button
          className="toast-close"
          onClick={() => onClose(toast.id)}
          aria-label="Close notification"
        >
          ×
        </button>
      </div>
      {toast.autoClose && (
        <div
          className="toast-progress"
          style={{ animationDuration: `${toast.duration || 4000}ms` }}
        />
      )}
    </div>
  );
};

export default Toast;