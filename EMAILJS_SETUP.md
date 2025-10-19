# EmailJS Setup Guide

This guide will help you set up EmailJS for your contact form to receive emails securely.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
4. Follow the setup instructions for your chosen provider
5. Note down your **Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template content:

```
Subject: New Contact Form Submission from {{user_name}}

From: {{user_name}} <{{user_email}}>
Subject: {{user_subject}}

Message:
{{user_message}}

---
This message was sent from your portfolio contact form.
Reply directly to this email to respond to {{user_name}}.
```

4. Save the template and note down your **Template ID**

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** and copy it

## Step 5: Update Environment Variables

1. Open `.env.local` file in your project root
2. Replace the placeholder values with your actual EmailJS credentials:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_actual_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_actual_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## Step 6: Update Email Address

1. Open `app/page.tsx`
2. Find line 245: `to_email: 'abhishek@example.com'`
3. Replace with your actual email address

## Step 7: Test the Form

1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email for the message

## Security Features Implemented

✅ **Environment Variables**: Credentials stored securely  
✅ **Input Sanitization**: Prevents XSS attacks  
✅ **Rate Limiting**: Max 1 submission per 30 seconds  
✅ **Spam Detection**: Basic keyword filtering  
✅ **Input Validation**: Length and format checks  
✅ **Error Handling**: User-friendly error messages

## Troubleshooting

### Form not sending emails

- Check that all environment variables are set correctly
- Verify your EmailJS service is active
- Check browser console for error messages

### Emails going to spam

- Add your domain to EmailJS allowlist
- Configure SPF/DKIM records for your domain
- Use a professional email address

### Rate limiting issues

- The form allows 1 submission per 30 seconds
- This prevents spam and abuse
- Users will see a countdown message

## Production Deployment

When deploying to production:

1. Set environment variables in your hosting platform
2. For Vercel: Add variables in Project Settings → Environment Variables
3. For Netlify: Add variables in Site Settings → Environment Variables
4. Never commit `.env.local` to version control

## Support

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: [https://www.emailjs.com/support/](https://www.emailjs.com/support/)
