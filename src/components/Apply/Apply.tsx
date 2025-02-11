import './Apply.css';

function Apply() {
    const targetUrl = "https://forms.gle/szSzGBXej8efDBeh6"; // pre-configured link
    const handleApplyClick = () => {
        window.open(targetUrl, '_blank');
    };

    return (
        <header className="flex flex-col justify-center items-center h-[30vh] bg-[#f5f5f7]">
            <p className="text-xl font-medium tracking-wider text-[#333333] mb-6 px-5 text-center max-w-[600px] leading-relaxed opacity-90">
                2025 새내기 새로배움터 1차 신청기간<br />
                <span className="text-red-600 font-bold">2월 9일 23:59까지</span>
            </p>
            <button 
                onClick={handleApplyClick}
                className="font-semibold text-[#0071e3] bg-transparent border-2 border-[#0071e3] rounded-lg px-6 py-3 cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#0071e3] hover:text-white"
            >
                신청하기
            </button>
        </header>
    );
};

export default Apply;