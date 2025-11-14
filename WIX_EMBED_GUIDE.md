# Wix Embedding Guide for Launch Era Quiz + Lead Capture

## 🚀 Quick Start

You now have TWO pages to embed:
1. **Quiz Page** - The main quiz (`/`)
2. **Lead Capture Form** - Email collection page (`/get-kit`)

### Step 1: Deploy Your Quiz

Choose one of these methods:

#### Option A: Lovable (Recommended - Already Set Up)
1. Visit your Lovable project: https://lovable.dev/projects/c2d279fb-67cc-4794-9f2d-5bc55df11a8b
2. Click **"Share"** → **"Publish"**
3. Copy the provided URL (e.g., `https://launch-era-quiz.lovable.app`)

#### Option B: Vercel (Free, Fast)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel --prod`
3. Follow prompts, copy the production URL

#### Option C: Netlify (Free, Drag & Drop)
1. Go to https://app.netlify.com/drop
2. Drag your `dist` folder (after running `npm run build`)
3. Get your live URL

---

## 📱 Embed in Wix

### QUIZ PAGE - Embed the Main Quiz

#### Method 1: HTML iframe (Recommended)

1. **Open Wix Editor**
2. Click **"+"** (Add Elements)
3. Select **"Embed"** → **"HTML iframe"**
4. Paste this code:

```html
<iframe
  src="YOUR_DEPLOYED_URL_HERE"
  width="100%"
  height="900"
  frameborder="0"
  scrolling="auto"
  style="border:none; max-width:100%; display:block;"
  allow="accelerometer; clipboard-write"
  title="What's Your Launch Era Quiz"
  loading="lazy"
></iframe>
```

5. **Replace** `YOUR_DEPLOYED_URL_HERE` with your actual URL
6. **Adjust height** (try 850-1000px depending on your page layout)
7. **Set responsive**: Click the element → "Stretch" → "Fit to Screen Width"

---

### LEAD CAPTURE FORM - Embed on Thank You/Confirmation Page

Use this on your Wix confirmation/thank you page after the quiz:

**iframe code:**

```html
<iframe
  src="YOUR_DEPLOYED_URL_HERE/get-kit"
  width="100%"
  height="700"
  frameborder="0"
  scrolling="auto"
  style="border:none; max-width:100%; display:block;"
  allow="clipboard-write"
  title="Get Your Launch Era Kit"
  loading="lazy"
></iframe>
```

**Settings for this form:**
- **Width**: Fit to Screen Width (responsive)
- **Height**: 700px (smaller than quiz, form is more compact)
- **Page**: Place on a separate Wix page (like "Get Your Kit" or "Thank You")

---

### Alternative: Link Instead of Embed

Instead of embedding the form, you can just link to it:

1. **In your quiz results**, add a button/link
2. **Link to**: `https://your-netlify-url.netlify.app/get-kit`
3. **Opens in**: New tab or same page

This is simpler and avoids nested iframes!

---

### Method 2: Custom Element (Alternative)

1. **Add Custom Element**
2. Select **"HTML"** or **"Embed a Widget"**
3. Use the same iframe code from above
4. Configure settings:
   - Enable HTTPS
   - Set proper dimensions
   - Allow user interaction

---

## ✅ Recommended Settings

### iframe Configuration
```html
<!-- Full featured iframe -->
<iframe
  src="https://your-quiz-url.com"
  width="100%"
  height="900"
  frameborder="0"
  scrolling="auto"
  style="
    border: none;
    max-width: 100%;
    display: block;
    margin: 0 auto;
    border-radius: 8px;
  "
  allow="accelerometer; clipboard-write; encrypted-media"
  title="What's Your Launch Era Quiz"
  loading="lazy"
></iframe>
```

### Wix Element Settings
- **Width**: Fit to Screen Width (responsive)
- **Height**: 900px (adjust as needed)
- **Margins**: 20px top/bottom for breathing room
- **Background**: Match your Wix page background
- **Mobile**: Ensure "Show on Mobile" is checked

---

## 🧪 Testing Checklist

Before publishing:

- [ ] Quiz loads correctly in iframe
- [ ] All buttons are clickable
- [ ] Quiz progresses through questions
- [ ] Results page displays properly
- [ ] Looks good on mobile preview
- [ ] Looks good on tablet preview
- [ ] Looks good on desktop
- [ ] No horizontal scrolling
- [ ] No weird spacing issues

---

## 🔧 Troubleshooting

### Issue: Quiz is cut off
**Solution**: Increase iframe height to 950-1100px

### Issue: Horizontal scrolling appears
**Solution**: Ensure iframe width is set to "100%" not a fixed pixel value

### Issue: Quiz doesn't respond to clicks
**Solution**: Check that your quiz URL is HTTPS and Wix security settings allow iframes

### Issue: Font looks different
**Solution**: This is normal - fonts are loaded from Google Fonts and should work fine

### Issue: Slow loading
**Solution**: Add `loading="lazy"` to iframe if not already present

---

## 🎨 Styling Tips for Wix

1. **Add a Section**: Place the iframe in a dedicated section with padding
2. **Background**: Use a complementary background color
3. **Title**: Add a text element above: "Discover Your Launch Era"
4. **CTA**: Add a button or text below to encourage sharing

Example Wix Layout:
```
┌─────────────────────────────┐
│  [Heading: Take the Quiz]  │
├─────────────────────────────┤
│                             │
│     [QUIZ IFRAME HERE]      │
│                             │
├─────────────────────────────┤
│  [Share your results!]      │
└─────────────────────────────┘
```

---

## 📊 Tracking (Optional)

To track quiz completions in Wix:
1. Use Wix Analytics Events
2. Listen for postMessage from iframe (advanced)
3. Or use your quiz's own analytics

---

## 🆘 Need Help?

- Test locally first: Open `iframe-test.html` in browser
- Check browser console for errors (F12)
- Ensure quiz URL is accessible and HTTPS
- Verify Wix allows iframe embedding for your plan

---

**Built with ❤️ for Commit Me Co × Riot Girl Design**
