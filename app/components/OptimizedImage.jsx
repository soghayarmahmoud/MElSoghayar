'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

const OptimizedImage = ({ 
  src, 
  alt = 'Image', 
  width, 
  height, 
  className = '', 
  priority = false,
  fill = false,
  sizes,
  placeholder = 'blur',
  blurDataURL,
  objectFit = 'cover',
  quality = 75,
  loading = 'lazy',
  onLoad,
  ...props 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // simple blur fallback
  const defaultBlurDataURL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==';

  const handleLoad = () => {
    setIsLoading(false);
    if (onLoad) onLoad();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  // ✅ check for invalid or missing src
  const isInvalidSrc =
    !src ||
    typeof src !== 'string' ||
    src.trim() === '' ||
    (typeof window !== 'undefined' && !isValidUrl(src));

  function isValidUrl(url) {
    try {
      // Allow both absolute (https://) and relative (/images/...)
      if (url.startsWith('/')) return true;
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  if (isInvalidSrc || hasError) {
    return (
      <div
        className={`bg-slate-200 dark:bg-slate-700 flex items-center justify-center ${className}`}
        style={{
          width: width || '100%',
          height: height || 'auto',
        }}
      >
        <span className="text-slate-500 text-sm">
          {hasError ? 'Failed to load image' : 'Invalid image source'}
        </span>
      </div>
    );
  }

  const imageProps = {
    src,
    alt,
    quality,
    onLoad: handleLoad,
    onError: handleError,
    className: `transition-opacity duration-300 ${
      isLoading ? 'opacity-0' : 'opacity-100'
    } ${className}`,
    style: { objectFit },
    ...props,
  };

  if (fill) {
    imageProps.fill = true;
    if (sizes) imageProps.sizes = sizes;
  } else {
    if (width) imageProps.width = width;
    if (height) imageProps.height = height;
  }

  if (priority) {
    imageProps.priority = true;
  } else {
    imageProps.loading = loading;
  }

  if (placeholder === 'blur' && !fill) {
    imageProps.placeholder = 'blur';
    imageProps.blurDataURL = blurDataURL || defaultBlurDataURL;
  }

  return (
    <div className={`relative ${fill ? 'w-full h-full' : ''}`}>
      <Image {...imageProps} />
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-slate-200 dark:bg-slate-700 animate-pulse"
        />
      )}
    </div>
  );
};

export default OptimizedImage;
