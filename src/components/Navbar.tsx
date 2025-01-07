import { useRef, useState } from "react";
import "./Navbar.css";
import DropdownBackDrop from "./DropdownBackdrop";


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
        setActiveMenu(menuName);
        
        // 같은 메뉴를 다시 클릭했을 때만 닫기
        if (activeMenu === menuName) {
            setActiveMenu(null);
        }
    };

    return (
        <>
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
                            <li className="menu-item"
                                style={{ gridColumn: '2' }}
                                onMouseEnter={() => handleMenuEnter("학생회")}
                                onMouseLeave={() => handleMenuLeave()}
                                onClick={() => toggleDropdown("학생회")}
                            >
                                학생회
                            </li>
                            <li className="menu-item"
                                style={{ gridColumn: '3' }}
                                onMouseEnter={() => handleMenuEnter("새내기배움터")}
                                onMouseLeave={() => handleMenuLeave()}
                                onClick={() => toggleDropdown("새내기배움터")}
                            >
                                {'새내기\n배움터'}
                            </li>
                            <li className="menu-item"
                                style={{ gridColumn: '4' }}
                                onMouseEnter={() => handleMenuEnter("가이드")}
                                onMouseLeave={() => handleMenuLeave()}
                                onClick={() => toggleDropdown("가이드")}
                            >
                                가이드
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            {/* 드랍다운 배경을 navbar-wrapper 외부에 렌더링 */}
            <DropdownBackDrop
                activeMenu={activeMenu}
                handleMenuEnter={handleMenuEnter}
                handleMenuLeave={handleMenuLeave}
            />
        </>
    );
}

export default Navbar;