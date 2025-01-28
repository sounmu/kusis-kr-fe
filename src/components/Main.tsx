import "./Main.css";
import Banner from "./Banner/Banner.tsx";
import Calendar from "./Calendar/Calendar.tsx";
import banner1 from "/src/assets/images/image.webp";

const Main = () => {
    const bannerImages = [
        banner1,
    ];

    const events = [
        {
            id: '1',
            startDate: new Date(2025, 0, 2),
            endDate: new Date(2025, 0, 31),
            title: '정의장학금 1차 신청',
            link: 'https://example.com/event1',
            colorIndex: 0
        },
        {
            id: '2',
            startDate: new Date(2025, 0, 17),
            endDate: new Date(2025, 0, 17),
            title: '겨울계절수업 종강',
            colorIndex: 1
        },
        {
            id: '3',
            startDate: new Date(2025, 1, 24),
            endDate: new Date(2025, 1, 24),
            title: '강문수 군대 입대',
            colorIndex: 2
        },
        {
            id: '4',
            startDate: new Date(2026, 7, 23),
            endDate: new Date(2026, 7, 23),
            title: '강문수 군대 전역',
            colorIndex: 3
        },
        {
            id: '5',
            startDate: new Date(2025, 0, 14),
            endDate: new Date(2025, 0, 20),
            title: '메토링 지원 기간',
            colorIndex: 4
        },
        {
            id: '6',
            startDate: new Date(2025, 0, 21),
            endDate: new Date(2025, 0, 21),
            title: '아 맞다 군휴학 신청하기',
            colorIndex: 5
        },
    ];

    return (
        <div className="content-background">
            <div className="main-content">
                <Banner images={bannerImages} />
                <Calendar events={events} />
            </div>
        </div>
    );
};

export default Main;