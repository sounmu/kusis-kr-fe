import { useState } from 'react';
import './OT.css';

interface Post {
    id: number;
    category: string;
    title: string;
    content: string;
    images?: string[];
}

function OT() {
    const [selectedCategory, setSelectedCategory] = useState('전체');
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);

    // 임시 데이터
    const categories = ['전체', '신입생 OT', '간부 수련회', '동아리 박람회'];
    const posts: Post[] = [
        {
            id: 1,
            category: '신입생 OT',
            title: '2024 신입생 OT 안내',
            content: '2024년 신입생 OT가 진행됩니다...',
            images: ['ot1.jpg', 'ot2.jpg']
        },
        { 
            id: 2,
            category: '간부 수련회',
            title: '2024 간부 수련회 안내',
            content: '2024년 간부 수련회가 진행됩니다...',
            images: ['ot1.jpg', 'ot2.jpg']
        },
        // 더미 데이터 추가 가능
    ];

    const filteredPosts = selectedCategory === '전체' 
        ? posts 
        : posts.filter(post => post.category === selectedCategory);

    return (
        <div className="content-background">
            <div className="main-content">
                <div className="category-nav">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                
                <div className="content-wrapper">
                    <div className="posts-content">
                        {selectedPost ? (
                            <div className="post-detail">
                                <h2>{selectedPost.title}</h2>
                                <div className="post-content">
                                    {selectedPost.images?.map((image, index) => (
                                        <img key={index} src={image} alt={`post-image-${index}`} />
                                    ))}
                                    <p>{selectedPost.content}</p>
                                </div>
                            </div>
                        ) : (
                            <div className="posts-grid">
                                {/* 선택된 카테고리의 게시물들을 그리드로 표시 */}
                                {filteredPosts.map(post => (
                                    <div 
                                        key={post.id} 
                                        className="post-card"
                                        onClick={() => setSelectedPost(post)}
                                    >
                                        {post.images?.[0] && (
                                            <img src={post.images[0]} alt={post.title} />
                                        )}
                                        <h3>{post.title}</h3>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    
                    <div className="sidebar">
                        <h3>목차</h3>
                        <ul>
                            {posts.map(post => (
                                <li 
                                    key={post.id}
                                    className={`sidebar-item ${selectedPost?.id === post.id ? 'active' : ''}`}
                                    onClick={() => setSelectedPost(post)}
                                >
                                    {post.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OT;