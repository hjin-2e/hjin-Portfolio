import { IMAGES } from '@/assets/img';
import React, { useEffect, ReactNode, MouseEvent } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  // ESC 키 제어 & 배경 스크롤 방지
  useEffect(() => {
    if (!isOpen) return;

    // 1. 모달이 열릴 때 배경 스크롤 잠금
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    // 2. 모달이 닫히거나 언마운트될 때 스크롤 복구 & 이벤트 해제
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]); 


  if (!isOpen) return null;

  // 배경 클릭 시 이벤트 버블링 방지
  const handleContentClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={handleContentClick}>
        {/* 헤더 영역 */}
        <div className="modal-header">
          {title && <h2 className="modal-title">{title}</h2>}
          <button className="modal-close-btn" onClick={onClose} aria-label="닫기">
            <img src={IMAGES.ICO_CLOSE} alt="닫기" />
          </button>
        </div>

        {/* 본문 영역 */}
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;