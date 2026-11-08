import { useEffect, useRef, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps { isOpen: boolean; onClose: () => void; title?: string; children: ReactNode }
export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (!isOpen) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const dialog = dialogRef.current;
    dialog?.showModal();
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [isOpen]);
  if (!isOpen) return null;
  return createPortal(<dialog ref={dialogRef} className="modal-overlay" aria-labelledby="project-dialog-title" onCancel={event => { event.preventDefault(); onClose(); }} onClick={event => { if (event.target === event.currentTarget) onClose(); }}><div className="modal-content"><div className="modal-header"><h2 id="project-dialog-title" className="modal-title">{title}</h2><button autoFocus className="modal-close-btn" onClick={onClose} aria-label="닫기">✕</button></div><div className="modal-body">{children}</div></div></dialog>, document.body);
}
