import { useState } from 'react';
import { Link, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './OT.css';
import PostDetail from './PostDetail';
import image_1 from "/src/assets/images/image_1.png";
import image_2 from "/src/assets/images/image_2.png";

interface Post {
    id: number;
    category: string;
    title: string;
    content: string;
    images?: string[];
}
const images = [image_1, image_2];

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
    const navigate = useNavigate();
    const location = useLocation();
    const isDetailPage = location.pathname.split('/').length > 2;

    // 임시 데이터
    const categories = ['전체', '신청하기', '공지사항', '카드뉴스'];
    const posts: Post[] = [
        {
            id: 1,
            category: '공지사항',
            title: '2025 신입생 카카오톡 안내',
            content: `🐯고려대학교 자유전공학부에서 25학번 아기호랑이를 찾습니다🐯\n민족고대❗️선도자전 🔥🏛\n안녕하세요 고려대학교 자유전공학부 새내기새로배움터 준비위원회입니다.\n길었던 수험 생활 끝에 마침내 고려대학교 자유전공학부에 당도하신 것을 진심으로 환영합니다! 고려대학교 자유전공학부 학생회에서는 카카오톡 단체 채팅방을 통하여 학내 여러 행사와 소식들을 전하고 있습니다. 하단의 카카오톡 오픈채팅방 링크로 들어오셔서, 다음의 내용을 전송해 주시면 자유전공학부 카카오톡 단체 채팅방 초대를 도와드리도록 하겠습니다!💌 📌오픈채팅방 링크📌 | https://open.kakao.com/o/sYce076g | 참여코드: sis2025`,
            images: images
        },
        { 
            id: 2,
            category: '카드뉴스',
            title: '2025 신입생',
            content: '2024년 간부 수련회가 진행됩니다...',
            images: ['ot1.jpg', 'ot2.jpg']
        },
        // 더미 데이터 추가 가능
    ];

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
        navigate('/2025ot'); // 카테고리 클릭시 메인 목록으로 이동
    };

    const filteredPosts = selectedCategory === '전체' 
        ? posts 
        : posts.filter(post => post.category === selectedCategory);

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
                                    {filteredPosts.map(post => (
                                        <Link 
                                            key={post.id} 
                                            to={`/2025ot/${post.id}`}
                                            className="post-card"
                                        >
                                            {post.images?.[0] && (
                                                <img src={post.images[0]} alt={post.title} />
                                            )}
                                            <h3>{post.title}</h3>
                                        </Link>
                                    ))}
                                </div>
                            } />
                            <Route path="/:id" element={
                                <PostDetail 
                                    posts={posts}
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