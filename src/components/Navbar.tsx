import { useState } from "react";
import "./Navbar.css";

function Navbar() {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    const toggleDropdown = (menuName: string) => {
        setActiveMenu((prev) => (prev === menuName ? null : menuName));
    };

    return (
        <div className="navbar-container">
            <nav className="navbar">
                <ul className="menu">
                    <li className="menu-item"
                        onMouseEnter={() => setActiveMenu("행정실")}
                        onMouseLeave={() => setActiveMenu(null)}
                        onClick={() => toggleDropdown("행정실")}                    
                    >
                        행정실
                    </li>
                    <li className="menu-item"
                        onMouseEnter={() => setActiveMenu("학생회")}
                        onMouseLeave={() => setActiveMenu(null)}
                        onClick={() => toggleDropdown("학생회")}
                    >
                        학생회
                    </li>
                    <li className="menu-item"
                        onMouseEnter={() => setActiveMenu("새내기배움터")}
                        onMouseLeave={() => setActiveMenu(null)}
                        onClick={() => toggleDropdown("새내기배움터")}
                    >
                        새내기배움터
                    </li>
                    <li className="menu-item"
                        onMouseEnter={() => setActiveMenu("가이드")}
                        onMouseLeave={() => setActiveMenu(null)}
                        onClick={() => toggleDropdown("가이드")}
                    >
                        가이드
                    </li>
                </ul>
            </nav>
            <div 
                className={`dropdown-backdrop ${activeMenu ? 'show' : ''}`}
                onMouseEnter={() => activeMenu && setActiveMenu(activeMenu)}
                onMouseLeave={() => setActiveMenu(null)}
            >
                <div className="dropdown-content">
                    {activeMenu === "행정실" && (
                        <div className="dropdown-inner">
                            <a href="https://sis.korea.ac.kr/sis/index.do" target="_blank" rel="noopener noreferrer">
                                행정실 홈페이지
                            </a>
                        </div>
                    )}
                    {activeMenu === "학생회" && (
                        <div className="dropdown-inner">
                            <a href="https://cafe.naver.com/kusis" target="_blank" rel="noopener noreferrer">
                                학생회 카페
                            </a>
                        </div>
                    )}
                    {activeMenu === "새내기배움터" && (
                        <div className="dropdown-inner">
                            <a href="https://kusis.kr/2025ot" target="_blank" rel="noopener noreferrer">
                                새내기배움터 페이지
                            </a>
                        </div>
                    )}
                    {activeMenu === "가이드" && (
                        <div className="dropdown-inner">
                            <a href="" target="_blank" rel="noopener noreferrer">
                                가이드 페이지
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Navbar;