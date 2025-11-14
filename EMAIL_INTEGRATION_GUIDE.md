# Email Integration Guide for Lead Capture Form

Your lead capture form is ready! Now you need to connect it to an email service to collect leads and send the Launch Era Kit.

## 🎯 What You Have Now

- **Lead Capture Page**: `/get-kit` route
- **Form fields**: Name and Email
- **Mobile-optimized**: Works perfectly on all devices
- **Success state**: Shows confirmation after submission

---

## 📧 Email Service Options (Choose One)

### Option 1: EmailJS (Easiest - No Backend Needed)

**Best for**: Beginners, quick setup

**Steps:**

1. **Sign up at** https://www.emailjs.com/
2. **Create an email service** (Gmail, Outlook, etc.)
3. **Create an email template** with variables: `{{from_name}}`, `{{from_email}}`
4. **Install EmailJS**:
   ```bash
   npm install @emailjs/browser
   ```

5. **Update LeadCapture.tsx** - Replace the TODO section (line 36-42):

```typescript
import emailjs from '@emailjs/browser';

// Inside handleSubmit function, replace the TODO section:
try {
  await emailjs.send(
    'YOUR_SERVICE_ID',     // From EmailJS dashboard
    'YOUR_TEMPLATE_ID',    // From EmailJS dashboard
    {
      from_name: formData.name,
      from_email: formData.email,
      to_name: formData.name,
    },
    'YOUR_PUBLIC_KEY'      // From EmailJS dashboard
  );

  setIsSubmitted(true);
  // ... rest of the code
```

---

### Option 2: ConvertKit (Best for Email Marketing)

**Best for**: Building an email list, automation

**Steps:**

1. **Sign up at** https://convertkit.com/
2. **Create a Form** in ConvertKit
3. **Get your Form ID**
4. **Install Axios**:
   ```bash
   npm install axios
   ```

5. **Update LeadCapture.tsx**:

```typescript
import axios from 'axios';

// Inside handleSubmit function:
try {
  await axios.post(
    `https://api.convertkit.com/v3/forms/YOUR_FORM_ID/subscribe`,
    {
      api_key: 'YOUR_API_KEY',
      email: formData.email,
      first_name: formData.name,
    }
  );

  setIsSubmitted(true);
  // ... rest of the code
```

---

### Option 3: Mailchimp

**Best for**: Professional email marketing

**Steps:**

1. **Sign up at** https://mailchimp.com/
2. **Create an Audience**
3. **Get API key** and Audience ID
4. **Use Mailchimp API** (requires backend or use Netlify Functions)

---

### Option 4: Google Sheets (Simple Data Collection)

**Best for**: Just collecting leads, no automated emails

**Steps:**

1. **Use Google Sheets API** or a service like **SheetDB**
2. **Sign up at** https://sheetdb.io/
3. **Connect your Google Sheet**
4. **Get API URL**

```typescript
try {
  await fetch('https://sheetdb.io/api/v1/YOUR_SHEET_ID', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: {
        name: formData.name,
        email: formData.email,
        timestamp: new Date().toISOString(),
      },
    }),
  });

  setIsSubmitted(true);
  // ... rest of the code
```

---

## 🎨 Customizing the Success Message

In `src/pages/LeadCapture.tsx`, line 69-93, you can customize:

- Success message text
- Download link (if you host files)
- What's included in the kit

---

## 📁 Adding Download Links

If you want users to download files after signup:

```typescript
// In the success view, add download buttons:
<Button
  onClick={() => window.open('YOUR_FILE_URL', '_blank')}
  className="w-full mt-4"
>
  <Download className="mr-2" />
  Download Launch Strategy Template
</Button>
```

---

## 🔒 Privacy & GDPR

Add to your form:

```typescript
<div className="flex items-start gap-2 mt-4">
  <input type="checkbox" id="consent" required className="mt-1" />
  <label htmlFor="consent" className="text-xs text-muted-foreground">
    I agree to receive emails and understand I can unsubscribe anytime.
  </label>
</div>
```

---

## 🧪 Testing Your Integration

1. **Run locally**: `npm run dev`
2. **Visit**: `http://localhost:8080/get-kit`
3. **Submit test data**
4. **Check your email service dashboard**
5. **Verify emails are sent/collected**

---

## 🚀 After Setup

1. Build: `npm run build`
2. Commit and push:
   ```bash
   git add . && git commit -m "Add email integration to lead capture" && git push
   ```
3. Netlify will auto-deploy

---

## 📊 Tracking Conversions (Optional)

Add Google Analytics or tracking:

```typescript
// After successful submission:
if (window.gtag) {
  window.gtag('event', 'conversion', {
    'send_to': 'YOUR_CONVERSION_ID',
  });
}
```

---

**Need help?** Check the documentation for your chosen email service!
