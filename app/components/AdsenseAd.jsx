'use client';

import { useEffect } from 'react';

export default function AdsenseAd({ adSlot, adFormat = 'auto', fullWidth = true }) {
  useEffect(() => {
    // Push ad on component mount
    if (window.adsbygoogle) {
      try {
        window.adsbygoogle.push({});
      } catch (error) {
        console.log('Adsense error:', error);
      }
    }
  }, []);

  return (
    <div className={`my-8 ${fullWidth ? 'w-full' : ''}`}>
      <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          textAlign: 'center',
        }}
        data-ad-layout="in-article"
        data-ad-format={adFormat}
        data-ad-client="ca-pub-3053984425671049"
        data-ad-slot={adSlot}
      />
    </div>
  );
}
