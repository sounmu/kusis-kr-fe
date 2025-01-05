import { useRef, useState } from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    const openTimer = useRef<number | null>(null);
    const closeTimer = useRef<number | null>(null);

    const OPEN_DELAY = 150;
    const CLOSE_DELAY = 200;

    /**
     * 메뉴에 마우스가 올라갔을 때
     */
    const handleMenuEnter = (menuName: string) => {
        // 기존 닫힘 타이머가 있으면 취소
        if (closeTimer.current) {
            clearTimeout(closeTimer.current);
            closeTimer.current = null;
        }

        // 일정 시간 후에 실제로 메뉴를 연다
        openTimer.current = setTimeout(() => {
            setActiveMenu(menuName);
        }, OPEN_DELAY);
    };

    /**
     * 메뉴에 마우스가 떠났을 때
     */
    const handleMenuLeave = () => {
        // 기존 열림 타이머가 있으면 취소
        if (openTimer.current) {
            clearTimeout(openTimer.current);
            openTimer.current = null;
        }

        // 일정 시간 후에 실제로 메뉴를 닫는다
        closeTimer.current = setTimeout(() => {
            setActiveMenu(null);
        }, CLOSE_DELAY);
    };

    // (모바일 등의) 클릭 시 토글
    const toggleDropdown = (menuName: string) => {
        setActiveMenu((prev) => (prev === menuName ? null : menuName));
    };

    return (
        <div className="navbar-wrapper">
            <div className="navbar-container">
                <nav className="navbar">
                    <ul className="menu">
                        <li className="menu-item"
                            style={{ gridColumn: '1' }}
                            onMouseEnter={() => handleMenuEnter("학과")}
                            onMouseLeave={() => handleMenuLeave()}
                            onClick={() => toggleDropdown("학과")}                    
                        >
                            학과
                        </li>
                        <li className="menu-item col-1 col-md-3 col-sm-6"
                            style={{ gridColumn: '2' }}
                            onMouseEnter={() => handleMenuEnter("학생회")}
                            onMouseLeave={() => handleMenuLeave()}
                            onClick={() => toggleDropdown("학생회")}
                        >
                            학생회
                        </li>
                        <li className="menu-item col-1 col-md-3 col-sm-6"
                            style={{ gridColumn: '3' }}
                            onMouseEnter={() => handleMenuEnter("새내기배움터")}
                            onMouseLeave={() => handleMenuLeave()}
                            onClick={() => toggleDropdown("새내기배움터")}
                        >
                            {'새내기\n배움터'}
                        </li>
                        <li className="menu-item col-1 col-md-3 col-sm-6"
                            style={{ gridColumn: '4' }}
                            onMouseEnter={() => handleMenuEnter("가이드")}
                            onMouseLeave={() => handleMenuLeave()}
                            onClick={() => toggleDropdown("가이드")}
                        >
                            가이드
                        </li>
                    </ul>
                </nav>
                
                {/* 드롭다운 배경 */}
                <div 
                    className={`dropdown-backdrop ${activeMenu ? 'show' : ''}`}
                    onMouseEnter={() => {
                        if (activeMenu) {
                            handleMenuEnter(activeMenu);
                        }
                    }}
                    onMouseLeave={() => handleMenuLeave()}
                >
                    <div className="dropdown-content">
                        {activeMenu === "학과" && (
                            <div className="dropdown-inner" style={{ gridColumn: '1' }}>
                                <a href="https://sis.korea.ac.kr/sis/index.do" target="_blank" rel="noopener noreferrer">
                                    {'자전 학부\n홈페이지'}
                                </a>
                            </div>
                        )}
                        {activeMenu === "학과" && (
                            <div className="dropdown-inner" style={{ gridColumn: '2' }}>
                                <a href="https://portal.korea.ac.kr/" target="_blank" rel="noopener noreferrer">
                                    {'KUPID'}
                                </a>
                            </div>
                        )}
                        {activeMenu === "학과" && (
                            <div className="dropdown-inner" style={{ gridColumn: '3' }}>
                                <a href="https://portal.korea.ac.kr/" target="_blank" rel="noopener noreferrer">
                                    {'LMS\n(차후 수정)'}
                                </a>
                            </div>
                        )}
                        {activeMenu === "학과" && (
                            <div className="dropdown-inner" style={{ gridColumn: '4' }}>
                                <a href="https://sugang.korea.ac.kr/" target="_blank" rel="noopener noreferrer">
                                    {'수강신청\n시스템'}
                                </a>
                            </div>
                        )}
                        {activeMenu === "학과" && (
                            <div className="dropdown-inner" style={{ gridColumn: '1' }}>
                                <a href="https://www.instagram.com/koreauniversity.sis/" target="_blank" rel="noopener noreferrer">
                                    {'자전 행정실'}
                                    <div className="icon-wrapper">
                                        <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                        </svg>
                                        {'인스타'}
                                    </div>
                                </a>
                            </div>
                        )}
                        {activeMenu === "학과" && (
                            <div className="dropdown-inner" style={{ gridColumn: '2' }}>
                                <a href="https://record.korea.ac.kr" target="_blank" rel="noopener noreferrer">
                                    {'성적조회\n시스템'}
                                </a>
                            </div>
                        )}
                        {activeMenu === "학과" && (
                            <div className="dropdown-inner" style={{ gridColumn: '3' }}>
                                <a href="https://klue.kr/" target="_blank" rel="noopener noreferrer">
                                    {'KLUE'}
                                </a>
                            </div>
                        )}
                        {activeMenu === "학생회" && (
                            <div className="dropdown-inner" style={{ gridColumn: '2' }}>
                                <a href="https://cafe.naver.com/kusis" target="_blank" rel="noopener noreferrer">
                                    {'자전 학생회\n카페'}
                                </a>
                            </div>
                        )}
                        {activeMenu === "학생회" && (
                            <div className="dropdown-inner" style={{ gridColumn: '3' }}>
                                <a href="https://www.instagram.com/kusis_2009/" target="_blank" rel="noopener noreferrer">
                                    {'자전 학생회'}
                                    <div className="icon-wrapper">
                                        <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                        </svg>
                                        {'인스타'}
                                    </div>
                                </a>
                            </div>
                        )}
                        {activeMenu === "학생회" && (
                            <div className="dropdown-inner" style={{ gridColumn: '2' }}>
                                <a href="https://cafe.naver.com/kusis" target="_blank" rel="noopener noreferrer">
                                    {'자치단체'}
                                </a>
                            </div>
                        )}
                        {activeMenu === "학생회" && (
                            <div className="dropdown-inner" style={{ gridColumn: '3' }}>
                                <a href="https://cafe.naver.com/kusis" target="_blank" rel="noopener noreferrer">
                                    {'특별기구'}
                                </a>
                            </div>
                        )}
                        {activeMenu === "새내기배움터" && (
                            <div className="dropdown-inner" style={{ gridColumn: '3' }}>
                                <Link to="/2025ot"> 
                                    {'새터 안내\n바로가기'} 
                                </Link>
                            </div>
                        )}
                        {activeMenu === "가이드" && (
                            <div className="dropdown-inner" style={{ gridColumn: '4' }}>
                                <a href="" target="_blank" rel="noopener noreferrer">
                                    {'미완성\n입니다ㅠ'}
                                </a>
                            </div>
                        )}
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;