# Quick Setup Guide

## Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

## Installation Steps

1. **Navigate to project directory:**
   ```bash
   cd maharat-proposal
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Place logo files in public folder:**
   - Ensure `MAharat logo.png` is in `/public/`
   - Ensure `ADGM Academy.png` is in `/public/`

4. **Start development server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**
   - Visit `http://localhost:3000`
   - Use arrow keys to navigate slides

## Common Tasks

### Update Content
Edit `src/data/slideContent.js` - all content is here!

### Change Colors
Edit `src/styles/colors.js` - update brand colors

### Export to PDF
Press `P` key or use browser print (Ctrl/Cmd + P)

### Build for Production
```bash
npm run build
```

Output will be in `dist/` folder.

## Troubleshooting

**Issue: Logos not showing**
- Check logo files are in `/public/` folder
- Check filenames match exactly (case-sensitive)

**Issue: Styles not loading**
- Clear browser cache
- Restart dev server

**Issue: Build errors**
- Delete `node_modules/` and `package-lock.json`
- Run `npm install` again

## Next Steps

1. Review slides and update content in `slideContent.js`
2. Replace logos with final versions
3. Adjust colors if needed in `colors.js`
4. Test presentation flow
5. Export to PDF for distribution

Need help? See `README.md` for full documentation.
