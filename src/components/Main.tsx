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
            startDate: new Date(2025, 1, 1),
            endDate: new Date(2025, 1, 12),
            title: '행사 1',
            link: 'https://example.com/event1'
        },
        {
            id: '2',
            startDate: new Date(2024, 2, 5),
            endDate: new Date(2024, 2, 5),
            title: '행사 2'
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