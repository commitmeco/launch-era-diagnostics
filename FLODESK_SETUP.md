# Flodesk Integration Setup

Your lead capture form sends new subscribers directly to **Flodesk**!

---

## 🔑 Step 1: Get Your Flodesk API Key

1. **Log in to Flodesk**: https://app.flodesk.com/
2. **Go to Settings** → **Integrations** → **API**
3. **Copy your API Key**

---

## 🔧 Step 2: Create Your Segment in Flodesk

1. **Go to**: https://app.flodesk.com/subscribers
2. **Click "Segments"** → **"Create Segment"**
3. **Name it**: "Launch Era Quiz"
4. **Set the filter**: All subscribers (or create a custom filter if you want)
5. **Save the segment**
6. **Copy the Segment ID** from the URL bar:
   - The URL will look like: `https://app.flodesk.com/subscribers?segment=abc123def456`
   - Copy the ID after `segment=` (e.g., `abc123def456`)

---

## 🔧 Step 3: Add API Key & Segment ID Locally (For Testing)

1. **Create a `.env` file** in your project root (if it doesn't exist)
2. **Paste your Flodesk API key and Segment ID**:
   ```
   VITE_FLODESK_API_KEY=your_flodesk_api_key_here
   VITE_FLODESK_SEGMENT_ID=your_segment_id_here
   ```
3. **Save the file**

---

## 📧 Step 4: Set Up Automated Emails in Flodesk

This is where the magic happens! You'll configure Flodesk to automatically send an email when someone is added to your "Launch Era Quiz" segment.

### Create Your Workflow (Automation)

1. **Go to**: https://app.flodesk.com/workflows
2. **Click "Create Workflow"**
3. **Choose a trigger**:
   - Select **"Subscriber added to segment"**
   - Choose the **"Launch Era Quiz"** segment you created in Step 2
4. **Add an action**:
   - Click the **"+"** button
   - Select **"Send Email"**
5. **Design your email**:
   - Use Flodesk's email builder to create your Launch Era Kit email
   - Include download links, resources, or whatever content you promised
   - Make it beautiful! Flodesk's templates are gorgeous
6. **Set timing**:
   - Choose "Immediately" to send right away, or
   - Add a delay if you want (e.g., "5 minutes after signup")
7. **Turn on the workflow**: Toggle the switch to "Active"

### Pro Tips for Your Email

- **Subject line**: Make it personal! "Here's your Launch Era Kit, [First Name]!"
- **Preview text**: Let them know what's inside
- **Content ideas**:
  - Welcome message
  - Download links to resources
  - Quick tips to get started
  - What to expect from your emails
  - Social media links

---

## 🧪 Step 5: Test Locally

```bash
# Restart dev server
npm run dev
```

1. Visit: `http://localhost:8080/get-kit`
2. Fill out the form with YOUR email address
3. Submit
4. **Check your inbox!** You should receive the automated email from Flodesk

**Also check:**
- Flodesk dashboard: https://app.flodesk.com/subscribers
- You should see yourself added to the segment
- Workflow should show it was triggered

---

## 🚀 Step 6: Add API Key & Segment ID to Production (Netlify)

1. **Go to Netlify Dashboard**: https://app.netlify.com
2. **Click on your site**
3. **Go to**: Site settings → Environment variables
4. **Click "Add a variable"**
5. **Add both variables**:
   - Key: `VITE_FLODESK_API_KEY`
   - Value: Your Flodesk API key
   - Click "Add a variable" again
   - Key: `VITE_FLODESK_SEGMENT_ID`
   - Value: Your Flodesk segment ID (from Step 2)
6. **Save**
7. **Trigger a redeploy**: Deploys → Trigger deploy → Clear cache and deploy site

---

## ✅ How It Works

When someone submits the form:

1. ✅ **Form is submitted** with name and email
2. ✅ **Subscriber is added to Flodesk** via API
3. ✅ **Subscriber is automatically added to the "Launch Era Quiz" segment**
4. ✅ **Flodesk workflow triggers** automatically when subscriber joins the segment
5. ✅ **Email is sent** with your Launch Era Kit content

**Benefits:**
- Fully automated - no manual work needed!
- Beautiful emails with Flodesk's templates
- Track email opens, clicks, and engagement
- Easy to update email content anytime in Flodesk dashboard

---

## 📊 Data Sent to Flodesk

The form currently sends:
- **Email**: User's email address
- **First Name**: User's name
- **Segment ID**: Automatically adds subscriber to "Launch Era Quiz" segment

You can add more custom data by editing `src/pages/LeadCapture.tsx` around line 59:

```typescript
body: JSON.stringify({
  email: formData.email,
  first_name: formData.name,
  ...(segmentId && { segment_ids: [segmentId] }),
  // Add custom fields here if needed
  custom_fields: {
    quiz_result: 'Headliner Era', // Example
    source: 'Launch Era Quiz',
    signup_date: new Date().toISOString(),
  },
}),
```

---

## 🐛 Troubleshooting

### Flodesk not receiving subscribers
**Check:**
- API key is correct in `.env` or Netlify environment variables
- Segment ID is correct in `.env` or Netlify environment variables
- Browser console shows "Flodesk Response: 200" or "201" (success)
- Flodesk account is active and in good standing
- Check if subscriber appears in Flodesk dashboard (even if not in the segment)

### Email not being sent automatically
**Check:**
- Workflow is turned **ON** (toggle should be green)
- Workflow trigger is set to the correct segment
- Subscriber was actually added to that segment
- Check workflow activity log in Flodesk dashboard

### "CORS Error" or API errors
**Solutions:**
- Make sure you're using the correct API endpoint: `https://api.flodesk.com/v1/subscribers`
- Verify your API key is correct (no extra spaces or characters)
- Check browser console for detailed error messages

### Subscriber added but no email received
**Check:**
- Spam/junk folder
- Workflow is active and published (not in draft mode)
- Email address is valid and not blocked
- Workflow activity log in Flodesk to see if email was sent

---

## 🔐 Security Note

The Flodesk API key is stored in environment variables and is safe for browser use. It can only add subscribers, not access or delete existing data.

---

## 🎨 Next Steps

1. **Design a stunning email** in Flodesk for your Launch Era Kit
2. **Test the full flow** with your own email
3. **Monitor your workflow** in the Flodesk dashboard
4. **Iterate and improve** your email content based on engagement

**You're all set!** Every form submission now automatically triggers your beautiful Flodesk email! 🎉
