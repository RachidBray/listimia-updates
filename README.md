# Listimia Updates

This repository handles the update metadata and automated changelog generation for the Listimia project.

## Features

- **Automated Changelog**: Generates a premium, minimalist `changelog.html` from `CHANGELOG.md`.
- **GitHub Actions**: Automatically builds and commits the updated HTML whenever `CHANGELOG.md` is modified.
- **Clean Design**: A responsive, white-background HTML template inspired by the Twenty Twenty-Five theme.
- **Developer-Friendly**: Automatically strips technical details like GitHub commit hashes and version comparison links for a cleaner end-user presentation.

## Usage

### Local Development

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Generate Changelog**:
   ```bash
   npm run build:changelog
   ```

### Update Metadata

The `update.json` file contains the version information used by the WordPress update mechanism.

```json
{
    "version": "2.x.x",
    "details_url": "https://rachidbray.github.io/listimia-updates/changelog.html",
    "download_url": "..."
}
```

## Repository Structure

- `CHANGELOG.md`: The source of truth for all changes.
- `changelog.html`: The auto-generated, user-facing changelog.
- `scripts/build-changelog.js`: The script responsible for the HTML generation.
- `.github/workflows/changelog.yml`: The automation workflow.