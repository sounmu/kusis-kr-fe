import "./Title.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar.tsx";

const Title = () => {
    return (
        <div className="title-section">
            <div className="title-content">
                <span className="school-title-kr">고려대학교 자유전공학부</span>
                <span className="info-helper">
                    <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                        정보 도우미
                    </Link>
                </span>
            </div>
            <div className="navbar-wrapper">
                <Navbar />
            </div>
            <div className="divider"></div>
        </div>
    );
};

export default Title; 