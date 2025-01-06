interface OptimizedImage {
  src: string;
  width: number;
  height: number;
}

export async function optimizeImage(originalSrc: string): Promise<OptimizedImage> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const targetHeight = 450;
      // 원본 이미지의 비율 유지
      const aspectRatio = img.width / img.height;
      const newWidth = Math.round(targetHeight * aspectRatio);

      // Canvas를 사용하여 이미지 리사이징
      const canvas = document.createElement('canvas');
      canvas.height = targetHeight;
      canvas.width = newWidth;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        reject(new Error('Canvas context not available'));
        return;
      }
      
      ctx.drawImage(img, 0, 0, newWidth, targetHeight);
      
      // 최적화된 이미지를 WebP 형식으로 변환 (더 나은 압축률)
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            reject(new Error('Blob creation failed'));
            return;
          }
          const optimizedSrc = URL.createObjectURL(blob);
          resolve({
            src: optimizedSrc,
            width: newWidth,
            height: targetHeight
          });
        },
        'image/webp',
        0.85  // 품질 설정 (0-1)
      );
    };
    
    img.onerror = () => reject(new Error('Image loading failed'));
    img.src = originalSrc;
  });
} 