# Facebook Pixel Verification Guide for effetpro.com

## Pixel ID
**640702059123669**

## How to Verify Facebook Pixel on Production

### 1. Using Facebook Pixel Helper (Chrome Extension)

1. Install [Facebook Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc)
2. Visit https://www.effetpro.com
3. Click on the Pixel Helper icon in Chrome toolbar
4. You should see:
   - ✅ Pixel ID: 640702059123669
   - ✅ PageView event
   - ✅ ViewContent event

### 2. Using Browser Console

1. Visit https://www.effetpro.com
2. Open Developer Console (F12)
3. Type: `window.fbq`
4. Should return a function (not undefined)
5. Type: `_fbq.loaded`
6. Should return `true`

### 3. Testing Events Flow

#### Landing Page (effetpro.com)
- ✅ **PageView** - Fires automatically on page load
- ✅ **ViewContent** - Fires after PageView

#### Click CTA Button
- ✅ **AddToCart** - Fires when user clicks any CTA
- ✅ **InitiateCheckout** - Fires 100ms after AddToCart

#### Thank You Page (effetpro.com/thank-you)
- ✅ **Purchase** - Fires on page load
  - Value: 27.00 USD
  - Content: Wedding LUTs Master Collection

### 4. Using Facebook Events Manager

1. Go to [Facebook Events Manager](https://business.facebook.com/events_manager2/list/pixel/640702059123669)
2. Select your Pixel (640702059123669)
3. Click "Test Events"
4. Visit your website
5. See real-time events

### 5. Production Optimizations

- ✅ Auto-configuration enabled
- ✅ Debug mode disabled in production
- ✅ Console logs disabled in production
- ✅ Proper error handling
- ✅ Vercel Edge optimization
- ✅ Next.js SSR compatible

### 6. Domain Configuration

Domain: **www.effetpro.com**
- Ensure domain is verified in Facebook Business Manager
- Add domain in Events Manager settings

### Expected Event Sequence

```
User visits effetpro.com
  └─> PageView (automatic)
  └─> ViewContent (landing page)

User clicks CTA
  └─> AddToCart
  └─> InitiateCheckout (100ms delay)

User completes purchase
  └─> Purchase (thank-you page)
```

### Troubleshooting

If pixel is not loading:
1. Check browser console for errors
2. Verify domain is whitelisted in Facebook Business Manager
3. Check if ad blockers are enabled
4. Verify Pixel ID is correct: 640702059123669
5. Clear browser cache and test in incognito mode

### Performance

- Script loads with `afterInteractive` strategy
- No blocking of page rendering
- Optimized for Vercel Edge Network
- Minimal impact on Core Web Vitals
