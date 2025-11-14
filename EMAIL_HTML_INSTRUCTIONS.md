# How to Use HTML Email Template in MailerLite

## 🎨 What I Created

I've created `email-template.html` - a fully branded HTML email that matches your quiz aesthetic with:
- ✅ Your brand colors (punk coral, riot pink, lilac grit)
- ✅ Special Elite typewriter font for headings
- ✅ DM Sans for body text
- ✅ Gradient buttons and backgrounds
- ✅ Mobile responsive design
- ✅ Social share buttons
- ✅ Brand footer

---

## 📋 Step-by-Step: Add HTML to MailerLite

### Step 1: Copy the HTML

1. Open `email-template.html` in your code editor
2. **Select all** (Cmd+A / Ctrl+A)
3. **Copy** (Cmd+C / Ctrl+C)

---

### Step 2: Create Email in MailerLite

1. Go to your automation workflow (the one you created earlier)
2. Click on the **"Send email"** action
3. Instead of using the drag-and-drop editor, look for:
   - **"Custom HTML"** option
   - OR **"Rich text"** → Then switch to **"HTML"** view

**Alternative path:**
1. Go to **Campaigns** → **Email campaigns**
2. Click **"Create campaign"**
3. Choose **"Regular campaign"**
4. When designing the email, select **"Custom HTML"** template

---

### Step 3: Paste Your HTML

1. You should see an HTML editor (looks like code)
2. **Delete any existing code**
3. **Paste your copied HTML** from `email-template.html`
4. Click **"Save"** or **"Continue"**

---

### Step 4: Customize the Content

Before saving, you need to replace these placeholders:

#### Replace Download Link:
Find this line (around line 82):
```html
<a href="YOUR_DOWNLOAD_LINK_HERE"
```

Replace `YOUR_DOWNLOAD_LINK_HERE` with your actual freebie link:
- Google Drive link
- Dropbox link
- Your website download URL
- Notion page URL

**Example:**
```html
<a href="https://drive.google.com/file/d/YOUR_FILE_ID/view"
```

#### Replace Social Share URLs:
Find these lines (around line 177-189) and replace `YOUR_QUIZ_URL`:
```html
https://twitter.com/intent/tweet?text=...
https://www.facebook.com/sharer/sharer.php?u=YOUR_QUIZ_URL
https://www.linkedin.com/sharing/share-offsite/?url=YOUR_QUIZ_URL
```

Replace with your actual quiz URL:
```html
https://your-site.netlify.app
```

---

### Step 5: Test Variables

The template uses MailerLite variables:
- `{$name}` - Automatically replaced with subscriber's name
- `{$unsubscribe}` - Automatically replaced with unsubscribe link

These should work automatically in MailerLite!

---

### Step 6: Preview & Test

1. Click **"Preview"** to see how it looks
2. Click **"Send test email"**
3. Enter your email address
4. Check your inbox!

**Check on:**
- Desktop email client (Gmail, Outlook)
- Mobile phone (iPhone, Android)
- Dark mode (if applicable)

---

## 🎨 Customizing the Template

### Change Colors:

Find and replace these hex codes:

**Punk Coral** (`#f35336`):
- Main gradient buttons
- Accent text
- Brand elements

**Riot Pink** (`#fb4873`):
- Gradient endings
- Secondary accents

**Lilac Grit** (`#7855a4`):
- Icons
- Tertiary elements

**Backgrounds**:
- Light gradient: `#f5e6ef` to `#fae8e8`
- White: `#ffffff`

### Change Text:

Edit any text between `>` and `<` tags:

```html
<p>Your text here</p>
```

### Add More Sections:

Copy/paste the feature list structure (lines 120-175) to add more items.

---

## 🔧 Alternative: Simpler Approach

If HTML feels too complex, you can:

1. **Use the template as inspiration**
2. **Recreate in MailerLite's drag-and-drop editor**:
   - Add text blocks
   - Add button (use gradient: #f35336 to #fb4873)
   - Add images
   - Match colors and fonts

---

## 💡 Pro Tips

### Fonts in Email:
- Web fonts (Special Elite, DM Sans) work in most email clients
- If they don't load, it falls back to system fonts
- This is normal and expected!

### Testing:
- Always send test emails before activating
- Test on Gmail, Apple Mail, Outlook
- Check mobile rendering

### Images:
- If you want to add images, host them online first
- Use `<img src="https://your-image-url.com/image.jpg">`
- Keep file sizes small (<200KB)

---

## 🚀 Quick Start Checklist

- [ ] Copy HTML from `email-template.html`
- [ ] Create new email in MailerLite automation
- [ ] Select "Custom HTML" option
- [ ] Paste HTML code
- [ ] Replace `YOUR_DOWNLOAD_LINK_HERE` with your freebie link
- [ ] Replace `YOUR_QUIZ_URL` with your quiz URL
- [ ] Preview the email
- [ ] Send test to yourself
- [ ] Check on mobile and desktop
- [ ] Save and activate!

---

## ❓ Troubleshooting

### "I can't find the HTML option"
**Solution**:
1. Create a new campaign
2. Look for "Custom HTML" template
3. Or use "Blank template" and switch to HTML view

### "The fonts don't show up"
**Solution**: This is normal. Email clients have varying font support. The fallback fonts (system fonts) will still look good.

### "Colors look different"
**Solution**: Some email clients (especially Outlook) render colors slightly differently. This is expected.

### "How do I go back to editing?"
**Solution**:
1. Click on the email in your automation
2. Click "Edit email"
3. Switch back to HTML view

---

## 📝 Need Help?

If you get stuck, you can:
1. Use MailerLite's drag-and-drop editor instead
2. Hire a designer to customize the HTML
3. Ask me for specific changes!

---

**Your branded email is ready to go!** 🎉
