import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

const FRAME_COUNT = 300;

export function HeroSequence() {
  const canvasRef = useRef(null);
  const { scrollY } = useScroll();
  const [images, setImages] = useState([]);
  const [loadedImages, setLoadedImages] = useState(0);

  // Map scroll position to frame index
  // You can tweak the max scroll value (e.g., 1000) to control the speed of the animation
  const frameIndex = useTransform(scrollY, [0, 1500], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    // Preload images
    const loaded = [];
    let count = 0;
    
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      // Format number to 3 digits (001, 002, etc.)
      const paddedIndex = String(i).padStart(3, '0');
      img.src = `/images/hero-sequence/ezgif-frame-${paddedIndex}.jpg`;
      
      img.onload = () => {
        count++;
        setLoadedImages(count);
        // Initial render of first frame once it's loaded
        if (i === 1 && canvasRef.current) {
          renderFrame(img);
        }
      };
      loaded.push(img);
    }
    setImages(loaded);
  }, []);

  const renderFrame = (img) => {
    const canvas = canvasRef.current;
    if (!canvas || !img) return;

    const ctx = canvas.getContext('2d');
    
    // Set canvas internal resolution to match the image
    if (canvas.width !== img.width || canvas.height !== img.height) {
      canvas.width = img.width;
      canvas.height = img.height;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  };

  useMotionValueEvent(frameIndex, "change", (latest) => {
    const index = Math.min(FRAME_COUNT - 1, Math.max(0, Math.floor(latest)));
    if (images[index]) {
      // Use requestAnimationFrame for smoother rendering
      requestAnimationFrame(() => renderFrame(images[index]));
    }
  });

  return (
    <div className="absolute inset-0 z-0 w-full h-full pointer-events-none overflow-hidden bg-earth-900">
      {loadedImages < FRAME_COUNT * 0.1 && (
        <div className="absolute inset-0 flex items-center justify-center bg-beige-100 z-10">
          <div className="w-8 h-8 border-4 border-terracotta-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover opacity-60"
      />
      {/* Overlay gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-beige-100/70 via-transparent to-beige-100 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-beige-100/30"></div>
    </div>
  );
}
