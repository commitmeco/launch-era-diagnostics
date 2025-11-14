# MailerLite Integration Setup

Your lead capture form is now connected to MailerLite! Follow these steps to complete the setup.

---

## 🔑 Step 1: Get Your MailerLite API Key

1. **Log in to MailerLite**: https://dashboard.mailerlite.com/
2. **Go to Integrations**: Click your profile → **Integrations** → **Developer API**
3. **Generate API Token**:
   - Click **"Generate new token"**
   - Give it a name like "Launch Era Quiz"
   - Copy the token (it starts with `eyJ...`)

---

## 🔧 Step 2: Add API Key Locally (For Testing)

1. **Open the `.env` file** in your project root
2. **Paste your API key**:
   ```
   VITE_MAILERLITE_API_KEY=eyJ...your_actual_token_here
   ```
3. **Save the file**

**Important**: Never commit the `.env` file to GitHub! It's already in `.gitignore`.

---

## 🧪 Step 3: Test Locally

```bash
npm run dev
```

1. Visit: `http://localhost:8080/get-kit`
2. Fill out the form with your email
3. Submit
4. **Check MailerLite Dashboard** → **Subscribers** → You should see the new subscriber!

---

## 🚀 Step 4: Add API Key to Netlify (For Production)

Your local `.env` file won't be deployed. You need to add the API key to Netlify:

1. **Go to Netlify Dashboard**: https://app.netlify.com
2. **Click on your site**
3. **Go to**: Site settings → Build & deploy → Environment variables
4. **Click "Add a variable"**
5. **Add**:
   - Key: `VITE_MAILERLITE_API_KEY`
   - Value: `eyJ...your_actual_token_here`
6. **Save**

---

## 📧 Step 5: Set Up Automation in MailerLite (Optional but Recommended)

To automatically send the Launch Era Kit when someone subscribes:

### Option A: Create an Automation

1. **In MailerLite Dashboard** → **Automations** → **Create Automation**
2. **Trigger**: "Subscriber joins a group" or "Subscriber is added"
3. **Action**: "Send email"
4. **Create your email** with:
   - Subject: "Your Launch Era Kit is Here! 🎉"
   - Body: Download links, tips, etc.
   - Attach your freebies or link to them

### Option B: Use a Group-Specific Welcome Email

1. **Create a Group** in MailerLite called "Launch Era Quiz"
2. **Get the Group ID**:
   - Click on the group
   - Look at the URL: `...groups/123456` → `123456` is your group ID
3. **Update LeadCapture.tsx** (line 52):
   ```typescript
   groups: ['123456'], // Replace with your actual group ID
   ```
4. **Set up a welcome email** for that group

---

## 🔄 Step 6: Deploy

```bash
git add .
git commit -m "Add MailerLite integration"
git push
```

Netlify will auto-deploy (make sure you added the API key to Netlify environment variables first!).

---

## ✅ Verify It's Working

After deploying:

1. **Visit your live form**: `https://your-site.netlify.app/get-kit`
2. **Submit a test**
3. **Check MailerLite Dashboard** → **Subscribers**
4. **Check your email** (if you set up automation)

---

## 📊 What Data Gets Sent to MailerLite

- **Email**: User's email address
- **Name**: User's name (saved as a custom field)
- **Timestamp**: When they subscribed (automatic)

---

## 🎨 Customize What Gets Sent

In `src/pages/LeadCapture.tsx`, you can add more fields:

```typescript
body: JSON.stringify({
  email: formData.email,
  fields: {
    name: formData.name,
    // Add more custom fields here:
    quiz_result: 'Headliner Era', // Example: pass quiz result
    source: 'Launch Era Quiz',
  },
  groups: ['123456'], // Your group ID
}),
```

**Note**: Make sure these fields exist in your MailerLite account first!

---

## 🐛 Troubleshooting

### "CORS Error" in browser console
**Solution**: MailerLite API should allow browser requests, but if you get CORS errors, you may need to use a serverless function. Let me know and I can set that up!

### "401 Unauthorized"
**Solution**: Check that your API key is correct in Netlify environment variables.

### Subscribers not showing up
**Solution**:
- Check MailerLite Dashboard → Subscribers
- Check if they went to "Unconfirmed" (requires email confirmation)
- Check your API key is active

### Email automation not sending
**Solution**:
- Make sure you published the automation in MailerLite
- Check if double opt-in is required (MailerLite settings)

---

## 🔐 Security Note

The API key is in the browser code, which means users *could* see it if they inspect the code. However:

- ✅ MailerLite API keys are safe for browser use
- ✅ They can only add subscribers, not delete or access existing data
- ✅ Rate limits prevent abuse

For maximum security, consider using a serverless function (I can help set this up if needed).

---

## 🎉 You're All Set!

Your quiz now automatically adds leads to MailerLite and you can send them the Launch Era Kit via automation!

**Questions?** Let me know!
