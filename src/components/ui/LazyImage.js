import React, { useState } from 'react';

const LazyImage = ({
  src,
  alt,
  wrapperClassName = '',
  imgClassName = '',
  loading = 'lazy',
  draggable,
  wrapperStyle,
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`img-skeleton${loaded ? ' img-skeleton--loaded' : ''}${wrapperClassName ? ' ' + wrapperClassName : ''}`}
      style={wrapperStyle}
    >
      <img
        src={src}
        alt={alt}
        className={imgClassName}
        loading={loading}
        draggable={draggable}
        onLoad={() => setLoaded(true)}
        style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.35s ease' }}
      />
    </div>
  );
};

export default LazyImage;
