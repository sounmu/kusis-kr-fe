interface OptimizedImage {  
  src: string;
  width: number;
  height: number;
}

export async function optimizeImage(
  originalSrc: string,
  targetWidth: number = 800,
  targetHeight: number = 450,
  format: 'image/webp' | 'image/jpeg' = 'image/webp',
  quality: number = 0.85
): Promise<OptimizedImage> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous'; // CORS 이슈 방지

        img.onload = () => {
            // 원본 이미지의 비율
            const originalAspectRatio = img.width / img.height;
            const targetAspectRatio = targetWidth / targetHeight;

            let drawWidth: number, drawHeight: number, offsetX: number, offsetY: number;

            if (originalAspectRatio > targetAspectRatio) {
                // 원본 이미지가 더 넓을 때: 높이를 기준으로 크롭
                drawHeight = targetHeight;
                drawWidth = drawHeight * originalAspectRatio;
                offsetX = (drawWidth - targetWidth) / 2;
                offsetY = 0;
            } else {
                // 원본 이미지가 더 높을 때: 너비를 기준으로 크롭
                drawWidth = targetWidth;
                drawHeight = drawWidth / originalAspectRatio;
                offsetX = 0;
                offsetY = (drawHeight - targetHeight) / 2;
            }

            // Canvas 생성 및 설정
            const canvas = document.createElement('canvas');
            canvas.width = targetWidth;
            canvas.height = targetHeight;

            const ctx = canvas.getContext('2d');
            if (!ctx) {
                reject(new Error('Canvas context not available'));
                return;
            }

            // 배경을 흰색으로 설정 (투명도를 피하기 위함)
            ctx.fillStyle = '#FFFFFF';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // 이미지 그리기
            ctx.drawImage(img, -offsetX, -offsetY, drawWidth, drawHeight);

            // 지원 포맷에 따른 변환
            canvas.toBlob(
                (blob) => {
                    if (!blob) {
                        reject(new Error('Blob creation failed'));
                        return;
                    }

                    const optimizedSrc = URL.createObjectURL(blob);
                    resolve({
                        src: optimizedSrc,
                        width: targetWidth,
                        height: targetHeight
                    });
                },
                format,
                quality
            );
        };

        img.onerror = () => reject(new Error('Image loading failed'));
        img.src = originalSrc;

        // CORS 이슈를 위해 src를 설정하기 전에 crossOrigin을 설정
        if (originalSrc.startsWith('data:')) {
            // Data URL의 경우 CORS 설정 불필요
            img.src = originalSrc;
        } else {
            img.src = originalSrc;
        }
  });
} 