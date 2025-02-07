import './Apply.css';

function Apply() {
    const targetUrl = "https://your-configured-link.com/apply"; // pre-configured link
    const handleApplyClick = () => {
        window.location.href = targetUrl;
    };

    return (
      <header className="apply">
          <button className="apply-button" onClick={handleApplyClick}>
              지원하기
          </button>
          <p className="apply-info">2025 새내기 새로배움터 1차 신청기간 2월 9일 23:59까지</p>
      </header>
    );
};

export default Apply;