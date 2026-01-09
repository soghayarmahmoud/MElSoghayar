# Google AdSense Integration Guide

## Overview
Your portfolio now has full Google AdSense support integrated seamlessly with modern design!

## Setup Status ✅

### 1. Script Configuration
The Google AdSense script is automatically loaded in your layout:
```javascript
// In app/layout.js
<Script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3053984425671049"
  crossOrigin="anonymous"
  strategy="afterInteractive"
/>
```

Your Publisher ID: `ca-pub-3053984425671049`

### 2. Ad Component Created
A reusable AdSense component is ready to use:
```javascript
// File: app/components/AdsenseAd.jsx
<AdsenseAd adSlot="1234567890" />
```

## Current Ad Placements

### Projects Section
```javascript
// Before project grid
<AdsenseAd adSlot="1234567890" />

// After project grid
<AdsenseAd adSlot="9876543210" />
```

These ad slots are currently configured. Update them with your actual AdSense ad unit IDs!

## How to Add More Ads

### Step 1: Get Ad Unit IDs
1. Log in to your Google AdSense account
2. Go to "Ads" → "Ad units"
3. Create new ad units and copy the ad slot IDs

### Step 2: Add Ad Component
```javascript
import AdsenseAd from './AdsenseAd';

// In your component
<AdsenseAd adSlot="YOUR_AD_SLOT_ID" />
```

### Step 3: Customize Ad Options (Optional)
```javascript
<AdsenseAd 
  adSlot="YOUR_AD_SLOT_ID"
  adFormat="auto"
  fullWidth={true}
/>
```

## Component Props

```typescript
interface AdsenseAdProps {
  adSlot: string;        // Your AdSense ad slot ID (required)
  adFormat?: string;     // Default: "auto" (responsive)
  fullWidth?: boolean;   // Default: true
}
```

## Recommended Ad Placements

### High-Traffic Areas ⭐
1. **Above the fold** (Hero section)
2. **Between sections** (Great for Projects section)
3. **Sidebar** (If you add one)
4. **Below articles** (If you have a blog)

### Already Implemented
✅ Projects section (before)
✅ Projects section (after)

### Suggested Placements
- [ ] About section
- [ ] Services section
- [ ] Contact section footer
- [ ] Header area (if space allows)

## Important Notes

### Ad Unit IDs
⚠️ **IMPORTANT**: The current ad slot IDs (`1234567890` and `9876543210`) are PLACEHOLDERS!

You MUST replace them with your actual AdSense ad unit IDs:

```javascript
// WRONG - This is a placeholder
<AdsenseAd adSlot="1234567890" />

// CORRECT - Use your real ad unit ID
<AdsenseAd adSlot="ca-pub-3053984425671049/1234567890" />
```

### Setup Checklist
- [ ] Google AdSense account created
- [ ] Website approved by AdSense
- [ ] Ad units created in AdSense dashboard
- [ ] Ad slot IDs noted
- [ ] Update placeholder IDs with real IDs
- [ ] Test ads on localhost
- [ ] Deploy to production

## Testing Ads

### Development Testing
```javascript
// Use test ad unit ID for safe testing
<AdsenseAd adSlot="ca-pub-3053984425671049/3625369892" />
```

### Live Testing
1. Deploy your site
2. Wait 24-48 hours for AdSense approval
3. Ads will start appearing automatically

## Monetization Best Practices

### 1. Strategic Placement
- Place ads where users naturally pause
- Don't cover important content
- Use the current placements as a guide

### 2. Ad Format
The current setup uses responsive ads (auto format):
```javascript
data-ad-layout="in-article"
data-ad-format="auto"
```

### 3. User Experience
- Ads blend naturally with your design
- Non-intrusive styling
- Doesn't affect scrolling or performance

### 4. Content Quality
- High-quality, original content
- Regular updates
- Fast loading times
- Mobile-friendly design ✅

## Performance Impact

The AdSense integration is optimized:
- ✅ Async script loading (doesn't block page load)
- ✅ Minimal JavaScript execution
- ✅ Responsive design (no layout shift)
- ✅ Fast ad serving

## Compliance

### AdSense Policies
Make sure your site complies with AdSense policies:
- ✅ Original content
- ✅ No prohibited content
- ✅ Clear navigation
- ✅ Privacy policy (if needed)
- ✅ Contact information

### Ad Display
- Don't click your own ads (obviously!)
- Don't encourage clicks artificially
- Let visitors interact naturally
- Follow all AdSense guidelines

## Troubleshooting

### Ads Not Showing?
1. Check that account is approved
2. Verify ad slot IDs are correct
3. Wait 24-48 hours after approval
4. Check browser console for errors
5. Disable ad blockers for testing

### Custom Styling
To customize ad appearance:

```javascript
// In your component
<div className="my-custom-wrapper">
  <AdsenseAd adSlot="YOUR_ID" />
</div>

// With CSS
.my-custom-wrapper {
  margin: 2rem 0;
  border-radius: 8px;
  overflow: hidden;
}
```

## Support Resources

- [Google AdSense Help](https://support.google.com/adsense)
- [AdSense Policies](https://support.google.com/adsense/answer/48182)
- [Next.js Script Component](https://nextjs.org/docs/api-reference/next/script)

## Summary

Your portfolio is now ready to:
- 💰 Earn revenue from ads
- 🎨 Maintain beautiful design
- ⚡ Load quickly
- 📱 Work on all devices
- ✨ Display relevant ads

Just update those placeholder ad slot IDs and you're good to go! 🚀

