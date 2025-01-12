import "./Main.css";
import Banner from "./Banner";
import Calendar from "./Calendar";
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
            link: 'https://example.com/event1'
        },
        {
            id: '2',
            startDate: new Date(2025, 0, 17),
            endDate: new Date(2025, 0, 17),
            title: '겨울계절수업 종강'
        }
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