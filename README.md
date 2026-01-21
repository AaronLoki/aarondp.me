# IB Grade Study Website

Comprehensive IB resources for all subjects, organized by Higher Level (HL) and Standard Level (SL).

## Website

Visit the live site at: [https://aarondp.me](https://aarondp.me)

## About

This is a Jekyll-based static website hosted on GitHub Pages, providing study materials, notes, past papers, and resources for International Baccalaureate students.

## Adding Content to the Website

We welcome contributions! There are multiple ways to add content:

### Quick Start (3 Steps)

1. Go to [github.com/AaronLoki/aarondp.me](https://github.com/AaronLoki/aarondp.me)
2. Navigate to the appropriate folder
3. Click "Add file" → "Upload files"

### Documentation

- **[Quick Upload Reference](quick-upload.md)** - Fast 3-step guide for adding files
- **[Full Upload Guide](UPLOAD_GUIDE.md)** - Complete documentation with examples

## Repository Structure

```
aarondp.me/
├── _config.yml              # Jekyll configuration
├── index.md                 # Home page
├── contribute.md            # Contribution guidelines
├── UPLOAD_GUIDE.md          # File upload documentation
├── quick-upload.md          # Quick reference guide
├── assets/
│   ├── css/                 # Stylesheets
│   ├── files/               # PDFs and downloadable documents
│   │   ├── physics/
│   │   ├── chemistry/
│   │   ├── biology/
│   │   └── ...
│   └── images/              # Images and diagrams
└── subjects/                # Subject-specific content
    ├── group1/              # Language & Literature
    ├── group2/              # Language Acquisition
    ├── group3/              # Individuals & Societies
    ├── group4/              # Sciences
    └── group5/              # Mathematics
```

## Local Development

To run the site locally:

```bash
# Install dependencies
bundle install

# Run Jekyll server
bundle exec jekyll serve

# Visit http://localhost:4000
```

## File Organization

### For PDFs and Documents

Upload to: `assets/files/[subject]/`

Example: `assets/files/physics/paper1-may-2023.pdf`

### For Subject Pages

Edit or create: `subjects/group[X]/[subject]/[hl|sl]/[page].md`

Example: `subjects/group4/physics/hl/notes.md`

## Naming Conventions

- Use lowercase for all file names
- Use hyphens (-) instead of spaces
- Be descriptive but concise

**Good:** `physics-mechanics-notes.md`, `paper1-may-2023.pdf`

**Avoid:** `My Notes.pdf`, `file1.pdf`

## Contributing

See [contribute.md](contribute.md) for full contribution guidelines.

### Quick Contribution Checklist

- [ ] Content is original or properly attributed
- [ ] Follows IB academic honesty policies
- [ ] No current examination materials
- [ ] Files are properly named
- [ ] Content is organized in the correct directory

## Technology Stack

- **Jekyll** - Static site generator
- **GitHub Pages** - Hosting
- **Markdown** - Content format
- **Remote Theme** - documentation-theme-jekyll

## License

Please ensure all contributed content respects copyright and intellectual property rights.

## Contact

For questions or issues, please open an issue in this repository.

---

*Your contributions help thousands of IB students succeed!*
