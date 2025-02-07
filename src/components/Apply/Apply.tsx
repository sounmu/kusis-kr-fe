import './Apply.css';

function Apply() {
    const targetUrl = "https://forms.gle/szSzGBXej8efDBeh6"; // pre-configured link
    const handleApplyClick = () => {
        window.open(targetUrl, '_blank');
    };

    return (
      <header className="apply">
          <p className="apply-info">2025 새내기 새로배움터 1차 신청기간<br /><span className="apply-date">2월 9일 23:59까지</span></p>
          <button className="apply-button" onClick={handleApplyClick}>
              신청하기
          </button>
      </header>
    );
};

export default Apply;