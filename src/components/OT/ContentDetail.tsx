import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ContentDetail.css';

interface PostDetailProps {
    // 현재는 props가 필요없지만, 필요에 따라 추가할 수 있습니다.
}

interface PostDetailData {
    content_id: string;
    post_number: number;
    title: string;
    contents: string;
    images: string[]; // 이미지 URL 배열
    updated_at: string;
    category: string;
}


function PostDetail({}: PostDetailProps) {
    const { id } = useParams<{ id: string }>(); // URL 파라미터에서 id (post_number) 추출
    const [postDetail, setPostDetail] = useState<PostDetailData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPostDetail = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/content/${id}`);
                const data = await response.json();
                console.log('API 응답 데이터:', data); // 응답 구조 확인용
                setPostDetail(data.data || data); // 백엔드 응답 구조에 따라 수정
            } catch (e: any) {
                setError(e.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPostDetail();
    }, [id]); // id가 변경될 때마다 API 호출

    if (loading) {
        return <div>Loading post detail...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!postDetail) {
        return <div>Post not found.</div>;
    }

    return (
        <div className="post-detail-container">
            <h1>{postDetail.title}</h1>
            <p className="post-category">
                {{
                    'apply': '신청하기',
                    'notice': '공지사항',
                    'cardnews': '카드뉴스'
                }[postDetail.category]}
            </p>
            <p className="post-date">{new Date(postDetail.updated_at).toLocaleDateString()}</p>

            {postDetail.images && postDetail.images.map((imageUrl, index) => (
                <img key={index} src={imageUrl} alt={`Post image ${index + 1}`} className="post-image" />
            ))}

            <div className="post-content" dangerouslySetInnerHTML={{ __html: postDetail.contents }} />
        </div>
    );
}

export default PostDetail; 