# Email Setup for Contact Form

The contact form sends emails to `hello@aipossible.org` using SMTP. To enable this functionality, you need to configure environment variables.

## Environment Variables

Create a `.env.local` file in the root of the project with the following variables:

```env
# SMTP Server Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password

# Or use these alternative variable names:
EMAIL_FROM=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
```

## Email Provider Examples

### Gmail
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
```
**Note:** For Gmail, you need to generate an "App Password" in your Google Account settings (Security → 2-Step Verification → App passwords).

### Outlook/Office 365
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASSWORD=your-password
```

### SendGrid
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASSWORD=your-sendgrid-api-key
```

### Mailgun
```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=your-mailgun-username
SMTP_PASSWORD=your-mailgun-password
```

## Production Deployment

When deploying to production (Vercel, Netlify, etc.), add these environment variables in your hosting platform's dashboard:

1. Go to your project settings
2. Navigate to Environment Variables
3. Add the SMTP configuration variables
4. Redeploy your application

## Testing

After setting up the environment variables, test the contact form by submitting a message. The email will be sent to `hello@aipossible.org` with the form details.

## Troubleshooting

- **Email not sending:** Check that all environment variables are set correctly
- **Authentication errors:** Verify your SMTP credentials are correct
- **Port issues:** Some providers use port 465 for SSL. Change `SMTP_PORT` and set `secure: true` in the API route if needed

