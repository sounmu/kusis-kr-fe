import { useState, useEffect } from 'react';
import { Link, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './OT.css';
import ContentDetail from './ContentDetail.tsx';

interface PostSummary { // 게시글 요약 정보 타입 정의
    post_number: number;
    title: string;
    first_image: string | null; // 이미지가 없을 경우 null 또는 undefined가 반환될 수 있으므로 nullable type으로 설정
    category: string;
}


function CategoryNav({ categories, onCategoryClick, selectedCategory, isDetailPage }: {
    categories: string[];
    onCategoryClick: (category: string) => void;
    selectedCategory: string;
    isDetailPage: boolean;
}) {
    return (
        <div className="category-nav">
            {categories.map(category => (
                <button
                    key={category}
                    className={`category-btn ${!isDetailPage && selectedCategory === category ? 'active' : ''}`}
                    onClick={() => onCategoryClick(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}

function OT() {
    const [selectedCategory, setSelectedCategory] = useState('전체');
    const [posts, setPosts] = useState<PostSummary[]>([]); // 게시글 목록 상태 추가 및 타입 정의
    const navigate = useNavigate();
    const location = useLocation();
    const isDetailPage = location.pathname.split('/').length > 2;

    // 임시 데이터 -> API에서 카테고리 목록을 받아오거나, 상수로 정의할 수 있습니다.
    const categories = ['전체', '신청하기', '공지사항', '카드뉴스'];

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                let categoryParam = '';
                if (selectedCategory === '전체') {
                    categoryParam = ''; // "전체" 선택 시 category 파라미터 없이 요청
                } else if (selectedCategory === '신청하기') {
                    categoryParam = 'apply';
                } else if (selectedCategory === '공지사항') {
                    categoryParam = 'notice';
                } else if (selectedCategory === '카드뉴스') {
                    categoryParam = 'cardnews';
                }

                let apiUrl = import.meta.env.VITE_API_URL + '/content'; // 기본 API URL

                if (categoryParam) {
                    apiUrl += `?category=${categoryParam}`; // 카테고리 파라미터 추가 (있는 경우에만)
                }

                const response = await fetch(apiUrl); // FastAPI 엔드포인트 주소, category query parameter 추가
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log("API Response Data:", data);
                setPosts(data.data);
            } catch (error) {
                console.error("Failed to fetch posts:", error);
                // 에러 처리 (예: 사용자에게 메시지 표시)
            }
        };

        fetchPosts();
    }, [selectedCategory]); // selectedCategory가 변경될 때마다 API 호출

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
        navigate('/2025ot'); // 카테고리 클릭시 메인 목록으로 이동,  navigate는 필요에 따라 제거하거나 수정
    };

    return (
        <div className="content-background">
            <div className="main-content">
                <CategoryNav
                    categories={categories}
                    onCategoryClick={handleCategoryClick}
                    selectedCategory={selectedCategory}
                    isDetailPage={isDetailPage}
                />

                <div className="content-wrapper">
                    <div className="posts-content">
                        <Routes>
                            <Route path="/" element={
                                <div className="posts-grid">
                                    {posts.map(post => ( // posts 상태를 사용하여 게시글 목록 렌더링
                                        <Link
                                            key={post.post_number} // post_number를 key로 사용
                                            to={`/2025ot/${post.post_number}`} // post_number를 URL 파라미터로 사용
                                            className="post-card"
                                        >
                                            {post.first_image && ( // first_image가 있을 경우에만 이미지 표시
                                                <img src={post.first_image} alt={post.title} />
                                            )}
                                            <h3>{post.title}</h3>
                                        </Link>
                                    ))}
                                </div>
                            } />
                            <Route path="/:id" element={
                                <ContentDetail
                                />
                            } />
                        </Routes>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default OT;