import "./Title.css";
import { Link } from "react-router-dom";

const Title = () => {
    return (
        <>
            <div className="title-section">
                <div className="title-wrapper">
                    <div className="title-container">
                        <div className="title-bar">
                            <ul className="title-grid">
                                <li className="school-title">
                                    <span className="school-title-kr">고려대학교 자유전공학부</span>
                                    <span className="school-title-en">Korea University</span>
                                    <span className="school-title-dept">School of Interdisciplinary Studies</span>
                                </li>
                                <li className="info-helper">
                                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        정보 도우미
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
            </div>
        </>
    );
};

export default Title; 