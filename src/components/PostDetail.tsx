import { useParams, useNavigate } from 'react-router-dom';
import { Post } from '../types';

interface PostDetailProps {
    posts: Post[];
    categories: string[];
    onCategoryClick: (category: string) => void;
}

function PostDetail({ posts, categories, onCategoryClick }: PostDetailProps) {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const post = posts.find(p => p.id === Number(id));

    if (!post) {
        return <div>게시물을 찾을 수 없습니다.</div>;
    }

    return (
        <div className="post-detail">
            <button onClick={() => navigate('/2025ot')} className="back-button">
                뒤로 가기
            </button>
            <h2>{post.title}</h2>
            <div className="post-content">
                {post.images?.map((image, index) => (
                    <img key={index} src={image} alt={`post-image-${index}`} />
                ))}
                <p dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }} />
            </div>
        </div>
    );
}

export default PostDetail; 