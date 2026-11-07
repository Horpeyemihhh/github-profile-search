import { useEffect, useRef, useState } from "react";

function ErrorMessage({ message, duration = 4000, onClose }) {
  const [visible, setVisible] = useState(true);

  // keep the latest onClose without restarting the timer when it changes
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  });

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
      onCloseRef.current?.();
    }, duration);
    return () => clearTimeout(timer);
  }, [message, duration]);

  function dismiss() {
    setVisible(false);
    onCloseRef.current?.();
  }

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <div
        role="alert"
        className="pointer-events-auto flex animate-toast-in items-center gap-3 rounded-xl border border-red-500/40 bg-deep px-4 py-3 shadow-lg"
      >
        {/* icon, unchanged */}
        <p className="text-sm text-fg">{message}</p>
        <button
          onClick={dismiss}
          aria-label="Dismiss"
          className="ml-2 text-fg-muted hover:text-fg"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default ErrorMessage;