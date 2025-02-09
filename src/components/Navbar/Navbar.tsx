import { useRef, useState } from "react";
import "./Navbar.css";
import DropdownBackDrop from "./DropdownBackdrop.tsx";


function Navbar() {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openTimer = useRef<NodeJS.Timeout | null>(null);
    const closeTimer = useRef<NodeJS.Timeout | null>(null);

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
        setActiveMenu(menuName);
        
        // 같은 메뉴를 다시 클릭했을 때만 닫기
        if (activeMenu === menuName) {
            setActiveMenu(null);
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className="navbar-container">
                <div className="desktop-menu">
                    <ul className="menu">
                        <li className={`menu-item ${activeMenu === "학과" ? "active" : ""}`}
                            style={{ gridColumn: '5' }}
                            onMouseEnter={() => handleMenuEnter("학과")}
                            onMouseLeave={() => handleMenuLeave()}
                            onClick={() => toggleDropdown("학과")}
                        >
                            학과
                        </li>
                        <li className={`menu-item ${activeMenu === "학생회" ? "active" : ""}`}
                            style={{ gridColumn: '6' }}
                            onMouseEnter={() => handleMenuEnter("학생회")}
                            onMouseLeave={() => handleMenuLeave()}
                            onClick={() => toggleDropdown("학생회")}
                        >
                            학생회
                        </li>
                        <li className={`menu-item ${activeMenu === "새내기배움터" ? "active" : ""}`}
                            style={{ gridColumn: '7' }}
                            onMouseEnter={() => handleMenuEnter("새내기배움터")}
                            onMouseLeave={() => handleMenuLeave()}
                            onClick={() => toggleDropdown("새내기배움터")}
                        >
                            {'새내기\n배움터'}
                        </li>
                        <li className={`menu-item ${activeMenu === "가이드" ? "active" : ""}`}
                            style={{ gridColumn: '8' }}
                            onMouseEnter={() => handleMenuEnter("가이드")}
                            onMouseLeave={() => handleMenuLeave()}
                            onClick={() => toggleDropdown("가이드")}
                        >
                            가이드
                        </li>
                    </ul>
                </div>
                {/* 드랍다운 배경을 navbar-wrapper 외부에 렌더링 */}
                <DropdownBackDrop
                    activeMenu={activeMenu}
                    handleMenuEnter={handleMenuEnter}
                    handleMenuLeave={handleMenuLeave}
                    setActiveMenu={setActiveMenu}
                />
                <div className="mobile-menu">
                    <div className="mobile-menu-content">
                        <div className="mobile-menu-item" onClick={toggleMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="mobile-dropdown">
                        <ul className="mobile-dropdown-menu">
                            <li className={`mobile-dropdown-item ${activeMenu === "학과" ? "active" : ""}`}
                                onClick={() => { toggleDropdown("학과"); toggleMenu(); }}>
                                학과
                            </li>
                            <li className={`mobile-dropdown-item ${activeMenu === "학생회" ? "active" : ""}`}
                                onClick={() => { toggleDropdown("학생회"); toggleMenu(); }}>
                                학생회
                            </li>
                            <li className={`mobile-dropdown-item ${activeMenu === "새내기배움터" ? "active" : ""}`}
                                onClick={() => { toggleDropdown("새내기배움터"); toggleMenu(); }}>
                                새내기배움터
                            </li>
                            <li className={`mobile-dropdown-item ${activeMenu === "가이드" ? "active" : ""}`}
                                onClick={() => { toggleDropdown("가이드"); toggleMenu(); }}>
                                가이드
                            </li>
                        </ul>
                    </div>
                )}
            </div>

        </>
    );
}

export default Navbar;