import './MobileOverlayMenu.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

interface MobileOverlayMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

function MobileOverlayMenu({ isOpen, onClose }: MobileOverlayMenuProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overlay-open');
            document.body.style.overflow = 'hidden';
        } else {
            document.body.classList.remove('overlay-open');
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.classList.remove('overlay-open');
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            onClose();
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
        }
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    return (
        <div className={`overlay-container ${isOpen ? 'open' : ''}`}>
            <div className="overlay-backdrop" onClick={onClose} />
            <button className="close-button" onClick={onClose} aria-label="메뉴 닫기">
            </button>
            <div className="overlay-content">
                <ul className="overlay-menu">
                    <li className="overlay-item">
                        <Link 
                            to="/department" 
                            onClick={onClose}
                            className="overlay-link"
                        >
                            학과
                        </Link>
                    </li>
                    <li className="overlay-item">
                        <Link 
                            to="/student-council" 
                            onClick={onClose}
                            className="overlay-link"
                        >
                            학생회
                        </Link>
                    </li>
                    <li className="overlay-item">
                        <Link 
                            to="/freshman" 
                            onClick={onClose}
                            className="overlay-link"
                        >
                            새내기배움터
                        </Link>
                    </li>
                    <li className="overlay-item">
                        <Link 
                            to="/guide" 
                            onClick={onClose}
                            className="overlay-link"
                        >
                            가이드
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MobileOverlayMenu; 