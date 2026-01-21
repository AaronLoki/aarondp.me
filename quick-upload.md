---
layout: default
title: Quick Upload Reference
---

# Quick Upload Reference

## 🚀 Fast Track: Upload Files in 3 Steps

### Using GitHub Web Interface (No Technical Skills Required)

1. **Go to** [github.com/AaronLoki/aarondp.me](https://github.com/AaronLoki/aarondp.me)
2. **Navigate to the folder** where you want to add files
3. **Click "Add file" → "Upload files"** and drag your files

### Using Git Command Line

```bash
# 1. Copy your file to the right location
cp myfile.pdf /path/to/aarondp.me/assets/files/physics/

# 2. Commit and push
git add .
git commit -m "Add physics hl past paper"
git push origin main
```

## 📁 Common File Locations

| Content Type | Location | Example |
|-------------|----------|---------|
| Past Papers (PDF) | `/assets/files/[subject]/` | `/assets/files/physics/paper1-2023.pdf` |
| Notes (PDF) | `/assets/files/[subject]/` | `/assets/files/chemistry/organic-notes.pdf` |
| Images | `/assets/images/[subject]/` | `/assets/images/physics/diagram.png` |
| Page Content (Markdown) | `/subjects/group[X]/[subject]/[level]/` | `/subjects/group4/physics/hl/notes.md` |

## 🔗 Link to Files

After uploading a PDF to `/assets/files/physics/paper1-2023.pdf`, add this to your markdown page:

```markdown
[Paper 1 - May 2023](/assets/files/physics/paper1-2023.pdf)
```

## ✅ File Naming Rules

- ✅ Use lowercase: `paper1-may-2023.pdf`
- ✅ Use hyphens: `my-notes.pdf`
- ❌ No spaces: ~~`my notes.pdf`~~
- ❌ No capitals: ~~`Paper1.pdf`~~

## 📖 Full Documentation

For complete instructions, see [UPLOAD_GUIDE.md](/UPLOAD_GUIDE.html)

## 🆘 Common Issues

**Files not showing up?**
- Wait 1-2 minutes for GitHub Pages to rebuild
- Check file path starts with `/` (e.g., `/assets/files/...`)

**Link not working?**
- Check spelling and file extension
- URLs are case-sensitive
- Use absolute paths: `/assets/...` not `assets/...`

---

*Need help? Check the [full upload guide](/UPLOAD_GUIDE.html)*
