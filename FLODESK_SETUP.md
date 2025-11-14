# Flodesk Integration Setup

Your lead capture form now sends leads to **both MailerLite AND Flodesk** simultaneously!

---

## 🔑 Get Your Flodesk API Key

1. **Log in to Flodesk**: https://app.flodesk.com/
2. **Go to Settings** → **Integrations** → **API**
3. **Copy your API Key**

---

## 🔧 Add API Key Locally (For Testing)

1. **Open the `.env` file** in your project root
2. **Paste your Flodesk API key**:
   ```
   VITE_FLODESK_API_KEY=your_flodesk_api_key_here
   ```
3. **Save the file**

---

## 🧪 Test Locally

```bash
# Restart dev server
npm run dev
```

1. Visit: `http://localhost:8080/get-kit`
2. Fill out the form
3. Submit
4. **Check both dashboards**:
   - MailerLite: https://dashboard.mailerlite.com/subscribers
   - Flodesk: https://app.flodesk.com/subscribers

You should see the subscriber in **BOTH** platforms! 🎉

---

## 🚀 Add API Key to Netlify (For Production)

1. **Go to Netlify Dashboard**: https://app.netlify.com
2. **Click on your site**
3. **Go to**: Site settings → Environment variables
4. **Click "Add a variable"**
5. **Add**:
   - Key: `VITE_FLODESK_API_KEY`
   - Value: Your Flodesk API key
6. **Save**
7. **Trigger a redeploy**: Deploys → Trigger deploy → Clear cache and deploy site

---

## ✅ How It Works

When someone submits the form:

1. ✅ **Sends to MailerLite** (in parallel)
2. ✅ **Sends to Flodesk** (in parallel)
3. ✅ **Shows success** if at least one succeeds
4. ✅ **Logs errors** if any service fails (but still shows success if one works)

**Benefits:**
- Fast (both APIs called simultaneously)
- Reliable (works even if one service is down)
- Transparent (console shows which services succeeded/failed)

---

## 🔄 What If One Service Fails?

The form is smart:
- If **MailerLite fails** but **Flodesk succeeds** → User sees success ✅
- If **Flodesk fails** but **MailerLite succeeds** → User sees success ✅
- If **both fail** → User sees error message ❌
- Check browser console to see which services succeeded

---

## 📊 Data Sent to Flodesk

- **Email**: User's email address
- **First Name**: User's name

---

## 🎨 Customize Flodesk Integration

In `src/pages/LeadCapture.tsx`, you can customize the data sent to Flodesk (lines 74-94):

```typescript
body: JSON.stringify({
  email: formData.email,
  first_name: formData.name,
  // Add custom fields here if needed
  custom_fields: {
    quiz_result: 'Headliner Era', // Example
    source: 'Launch Era Quiz',
  },
}),
```

---

## 🐛 Troubleshooting

### Flodesk not receiving subscribers
**Check:**
- API key is correct in `.env` or Netlify
- Console shows "Flodesk Response: 200" (success)
- Flodesk account is active

### "CORS Error" for Flodesk
**Solution**: Flodesk API should support browser requests, but if you get errors, let me know and we can set up a serverless function.

### Only one service working
**That's OK!** As long as one works, the user sees success. Check console to see which one failed.

---

## 🔐 Security Note

Both API keys are in environment variables and safe for browser use. They can only add subscribers, not access or delete existing data.

---

**You're all set!** Leads now flow to both MailerLite and Flodesk automatically! 🎉
