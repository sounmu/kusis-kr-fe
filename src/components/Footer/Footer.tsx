import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="text-sm text-gray-500 text-center mb-1">
                    © 2025 kusis.kr • All Rights Reserved
                </p>
                <p className="text-sm text-gray-500 text-center">
                    <span className="text-gray-500">이 웹사이트는 비공식 프로젝트입니다 • This website is an unofficial project</span>
                </p>
                <p className="text-sm text-gray-500 text-center">
                    <span className="text-gray-500">Contact</span>
                    <span className="mx-2">:</span>
                    <span className="text-gray-500">sukkang_@korea.ac.kr</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;