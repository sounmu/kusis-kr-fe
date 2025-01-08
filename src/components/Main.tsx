import "./Main.css";
import Banner from "./Banner";
import banner1 from "/src/assets/images/image.webp";

const Main = () => {
    const bannerImages = [
        banner1,
    ];
    return (
        <div className="content-background">
            <div className="main-content">
                <Banner images={bannerImages} />
            </div>
        </div>
    );
};

export default Main;