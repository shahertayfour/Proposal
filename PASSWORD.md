# Password Protection

The ADGM presentation is password-protected to prevent unauthorized access.

## Default Password

```
Osama-6-10!
```

## Changing the Password

To change the password, edit the file:
```
src/components/PasswordProtection.jsx
```

Find the line:
```javascript
const CORRECT_PASSWORD = 'Osama-6-10!';
```

And replace `'Osama-6-10!'` with your desired password.

## Features

- Password-protected access to the entire presentation
- Show/hide password toggle
- Error handling for incorrect passwords
- Professional lock screen design matching the presentation theme
- Secure client-side authentication

## Security Note

This is a basic client-side password protection suitable for preventing casual access. For production environments with sensitive data, consider implementing proper server-side authentication.
