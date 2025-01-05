import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Banner.css';

interface BannerProps {
    images: string[];  // 배너 이미지 URL 배열
    autoPlayInterval?: number;  // 자동 재생 간격 (밀리초)
}

const Banner: React.FC<BannerProps> = ({ images, autoPlayInterval = 5000 }) => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);

    // 자동 재생 기능
    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, autoPlayInterval);

        return () => clearInterval(timer);
    }, [currentIndex]);

    // 이전 이미지로 이동
    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    // 다음 이미지로 이동
    const handleNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    // 특정 이미지로 직접 이동
    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };

    const handleBannerClick = (e: React.MouseEvent<HTMLDivElement>) => {
        // 클릭된 요소가 버튼이나 도트가 아닌 경우에만 이동
        const target = e.target as HTMLElement;
        if (!target.closest('.banner-arrow') && !target.closest('.banner-dots')) {
            navigate('/2025ot');
        }
    };

    return (
        <div className="banner-container" onClick={handleBannerClick}>
            <div 
                className="banner-wrapper"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Banner ${index + 1}`}
                        className="banner"
                        loading="lazy"
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/path/to/fallback-image.jpg';
                        }}
                    />
                ))}
            </div>

            {/* 이전/다음 버튼 */}
            <button className="banner-arrow left" onClick={handlePrev}>
                &#10094;
            </button>
            <button className="banner-arrow right" onClick={handleNext}>
                &#10095;
            </button>

            {/* 하단 도트 네비게이션 */}
            <div className="banner-dots">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`banner-dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Banner;
