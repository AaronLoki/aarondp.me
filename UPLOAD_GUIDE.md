---
layout: default
title: File Upload Guide
---

# File Upload Guide for IB Grade Study Website

This guide explains how to add content (notes, past papers, PDFs, etc.) to the IB Grade Study website.

## Overview

This website is built with Jekyll and hosted on GitHub Pages. All files are stored in the GitHub repository and served statically. There are two main types of content you can upload:

1. **Markdown files (.md)** - For text content, pages, and notes
2. **Document files (PDF, DOC, etc.)** - For past papers, study guides, and downloadable resources

## Method 1: Using GitHub Web Interface (Easiest)

### Adding Files Through GitHub.com

1. **Navigate to the repository**: Go to https://github.com/AaronLoki/aarondp.me

2. **Navigate to the correct folder**:
   - For subject-specific content: `subjects/groupX/subject-name/hl/` or `subjects/groupX/subject-name/sl/`
   - For PDFs and documents: `assets/files/` (you may need to create this folder)
   - For images: `assets/images/`

3. **Upload files**:
   - Click the "Add file" dropdown button
   - Select "Upload files"
   - Drag and drop your files or click "choose your files"
   - Add a commit message describing what you're uploading
   - Click "Commit changes"

### Creating/Editing Markdown Files

1. Navigate to the folder where you want to add content
2. Click "Add file" → "Create new file"
3. Name your file (e.g., `topic1-notes.md`)
4. Add your content in markdown format
5. Commit the file

## Method 2: Using Git (Command Line)

### Prerequisites

```bash
# Clone the repository (first time only)
git clone https://github.com/AaronLoki/aarondp.me.git
cd aarondp.me
```

### Adding Files

```bash
# 1. Create necessary directories if they don't exist
mkdir -p assets/files/physics
mkdir -p assets/files/chemistry

# 2. Copy your files to the repository
# For PDFs:
cp ~/Downloads/physics-paper1-2023.pdf assets/files/physics/

# For markdown content:
cp ~/Downloads/my-notes.md subjects/group4/physics/hl/

# 3. Add files to git
git add .

# 4. Commit your changes
git commit -m "Add Physics HL past paper 2023 and notes"

# 5. Push to GitHub
git push origin main
```

## File Organization

### Directory Structure

```
aarondp.me/
├── assets/
│   ├── files/           # PDFs and documents
│   │   ├── physics/
│   │   ├── chemistry/
│   │   └── ...
│   ├── images/          # Images and diagrams
│   └── css/             # Stylesheets
├── subjects/
│   ├── group1/
│   ├── group2/
│   ├── group3/
│   ├── group4/
│   │   ├── physics/
│   │   │   └── hl/
│   │   │       ├── index.md
│   │   │       ├── notes.md
│   │   │       ├── past-papers.md
│   │   │       └── questions.md
│   │   └── chemistry/
│   └── group5/
└── _config.yml
```

### Naming Conventions

- Use lowercase for file names
- Use hyphens (-) instead of spaces
- Be descriptive but concise

**Examples:**
- ✅ `physics-mechanics-notes.md`
- ✅ `paper1-may-2023.pdf`
- ✅ `chemistry-organic-questions.pdf`
- ❌ `My Notes.pdf` (spaces and capitalization)
- ❌ `file1.pdf` (not descriptive)

## Linking to Files

### Linking PDFs in Markdown

Once you've uploaded a PDF, you can link to it from any markdown page:

```markdown
## Past Papers

- [Physics Paper 1 - May 2023](/assets/files/physics/paper1-may-2023.pdf)
- [Physics Paper 2 - May 2023](/assets/files/physics/paper2-may-2023.pdf)
```

### Embedding Images

```markdown
![Circuit Diagram](/assets/images/physics/circuit-diagram.png)
```

### Creating Download Buttons

```markdown
[Download PDF](/assets/files/physics/notes.pdf){: .btn .btn-primary}
```

## Adding Content to Existing Pages

### Example: Adding Past Papers to Physics HL

1. Upload your PDF files to `assets/files/physics/`
2. Edit the file `subjects/group4/physics/hl/past-papers.md`
3. Add links to your files:

```markdown
---
layout: default
title: Physics HL - Past Papers
---

# Physics HL - Past Papers

Past examination papers for Physics HL.

## Available Papers

### 2023 Papers
- [Paper 1 - May 2023](/assets/files/physics/paper1-may-2023.pdf)
- [Paper 2 - May 2023](/assets/files/physics/paper2-may-2023.pdf)
- [Paper 3 - May 2023](/assets/files/physics/paper3-may-2023.pdf)

### 2022 Papers
- [Paper 1 - May 2022](/assets/files/physics/paper1-may-2022.pdf)
- [Paper 2 - May 2022](/assets/files/physics/paper2-may-2022.pdf)

### Exam Strategy

- Practice under timed conditions
- Review examiner reports
- Understand mark schemes
- Focus on command terms
```

## Adding New Subject Pages

To add content for a new subject or level:

1. Create the directory structure:
```bash
mkdir -p subjects/group4/biology/sl
```

2. Create the necessary markdown files:
```bash
cd subjects/group4/biology/sl
touch index.md notes.md past-papers.md questions.md ia.md syllabus.md
```

3. Add front matter to each file:
```markdown
---
layout: default
title: Biology SL - Notes
---

# Biology SL - Notes

Content goes here...
```

4. Link to the new subject from the home page (`index.md`)

## File Size Considerations

- **GitHub has a 100MB file size limit** for individual files
- Keep PDFs under 25MB when possible for faster loading
- For very large files, consider using external hosting (Google Drive, Dropbox) and link to them
- Compress PDFs before uploading if they're too large

## Best Practices

1. **Copyright Compliance**: Only upload content you have the right to share
2. **File Names**: Use clear, descriptive names
3. **Organization**: Keep files organized in appropriate folders
4. **Testing**: After uploading, check that links work correctly
5. **Commit Messages**: Write clear commit messages explaining what you're adding
6. **Regular Updates**: Keep content up to date and remove outdated materials

## Verifying Your Changes

After uploading files:

1. Wait 1-2 minutes for GitHub Pages to rebuild (check the Actions tab)
2. Visit your website at https://aarondp.me
3. Navigate to the page where you added links
4. Click the links to ensure files are accessible

## Troubleshooting

### Files Not Showing Up

- **Wait a few minutes**: GitHub Pages takes time to rebuild
- **Check file paths**: Ensure paths start with `/` (e.g., `/assets/files/...`)
- **Check file names**: No spaces, special characters, or uppercase in URLs
- **Clear browser cache**: Try Ctrl+F5 or Cmd+Shift+R

### Links Not Working

- **Case sensitivity**: URLs are case-sensitive on Linux servers
- **File extensions**: Include the full extension (.pdf, .md, etc.)
- **Absolute vs relative paths**: Use `/assets/...` not `assets/...`

### File Too Large

- Compress the PDF using online tools
- Split into multiple files
- Host externally and link to it

## Quick Reference

### Common Commands

```bash
# Clone repository
git clone https://github.com/AaronLoki/aarondp.me.git

# Check status
git status

# Add all new files
git add .

# Commit changes
git commit -m "Your message here"

# Push to GitHub
git push origin main

# Pull latest changes
git pull origin main
```

### Common File Paths

- PDFs: `/assets/files/[subject]/[filename].pdf`
- Images: `/assets/images/[subject]/[filename].png`
- Subject pages: `/subjects/group[X]/[subject]/[hl|sl]/[page].md`

## Need Help?

If you encounter issues:

1. Check the [Jekyll documentation](https://jekyllrb.com/docs/)
2. Review [GitHub Pages documentation](https://docs.github.com/en/pages)
3. Check the repository's Issues page
4. Test locally by running Jekyll (see Jekyll docs)

---

*Last updated: January 2026*
