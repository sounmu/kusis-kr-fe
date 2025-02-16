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
                        <div className="overlay-link">학과</div>
                        <ul className="submenu">
                            <li className="submenu-item">
                                <a href="https://sis.korea.ac.kr/sis/index.do" target="_blank" rel="noopener noreferrer" className="submenu-link">
                                    {'자전 학부\n홈페이지'}
                                </a>
                            </li>
                            <li className="submenu-item">
                                <a href="https://portal.korea.ac.kr/" target="_blank" rel="noopener noreferrer" className="submenu-link">
                                    {'KUPID'}
                                </a>
                            </li>
                            <li className="submenu-item">
                                <a href="https://canvas.korea.ac.kr/" target="_blank" rel="noopener noreferrer" className="submenu-link">
                                    {'LMS'}
                                </a>
                            </li>
                            <li className="submenu-item">
                                <a href="https://sugang.korea.ac.kr/" target="_blank" rel="noopener noreferrer" className="submenu-link">
                                    {'수강신청\n시스템'}
                                </a>
                            </li>
                            <li className="submenu-item">
                                <a href="https://www.instagram.com/koreauniversity.sis/" target="_blank" rel="noopener noreferrer" className="submenu-link">
                                    {'자전 행정실'}
                                    <div className="icon-wrapper">
                                        <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                        </svg>
                                        {'인스타'}
                                    </div>
                                </a>
                            </li>
                            <li className="submenu-item">
                                <a href="https://kuchive.korea.ac.kr/" target="_blank" rel="noopener noreferrer" className="submenu-link">
                                    {'KUchive'}
                                </a>
                            </li>
                            <li className="submenu-item">
                                <a href="https://record.korea.ac.kr" target="_blank" rel="noopener noreferrer" className="submenu-link">
                                    {'성적조회\n시스템'}
                                </a>
                            </li>
                            <li className="submenu-item">
                                <a href="https://klue.kr/" target="_blank" rel="noopener noreferrer" className="submenu-link">
                                    {'KLUE'}
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="overlay-item">
                        <div className="overlay-link">학생회</div>
                        <ul className="submenu">
                            <li className="submenu-item">
                                <a href="https://cafe.naver.com/kusis" target="_blank" rel="noopener noreferrer" className="submenu-link">
                                    {'자전 학생회\n카페'}
                                </a>
                            </li>
                            <li className="submenu-item">
                                <a href="https://www.instagram.com/kusis_2009/" target="_blank" rel="noopener noreferrer" className="submenu-link">
                                    {'자전 학생회'}
                                    <div className="icon-wrapper">
                                        <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                        </svg>
                                        {'인스타'}
                                    </div>
                                </a>
                            </li>
                            <li className="submenu-item">
                                <a href="https://cafe.naver.com/kusis" target="_blank" rel="noopener noreferrer" className="submenu-link">
                                    {'자치단체'}
                                </a>
                            </li>
                            <li className="submenu-item">
                                <a href="https://cafe.naver.com/kusis" target="_blank" rel="noopener noreferrer" className="submenu-link">
                                    {'특별기구'}
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="overlay-item">
                        <div className="overlay-link">새내기배움터</div>
                        <ul className="submenu">
                            <li className="submenu-item">
                                <a href="https://www.instagram.com/kusis_freshman/" target="_blank" rel="noopener noreferrer" className="submenu-link">
                                    {'새터'}
                                    <div className="icon-wrapper">
                                        <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                        </svg>
                                        {'인스타'}
                                    </div>
                                </a>
                            </li>
                            <li className="submenu-item">
                                <Link to="/2025ot" onClick={onClose} className="submenu-link">
                                    {'새터 안내\n바로가기'}
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="overlay-item">
                        <div className="overlay-link">가이드</div>
                        <ul className="submenu">
                            <li className="submenu-item">
                                <a className="submenu-link">
                                    {'미완성\n입니다ㅠ'}
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MobileOverlayMenu; 