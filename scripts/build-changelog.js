import fs from 'fs'
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
})

const input = fs.readFileSync('CHANGELOG.md', 'utf8')
const body = md.render(input)

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Listimia Changelog</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #ffffff;
      --text: #111827;
      --secondary-text: #6b7280;
      --border: #f3f4f6;
      --accent: #111827;
      --code-bg: #f9fafb;
      --card-bg: #ffffff;
      --shadow: none;
    }

    body {
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      background-color: var(--bg);
      color: var(--text);
      line-height: 1.7;
      margin: 0;
      padding: 4rem 2rem;
      -webkit-font-smoothing: antialiased;
    }

    .container {
      max-width: 720px;
      margin: 0 auto;
    }

    h1 {
      font-size: 3rem;
      font-weight: 700;
      letter-spacing: -0.04em;
      margin-bottom: 3rem;
      color: var(--text);
    }

    h2 {
      font-size: 1.25rem;
      font-weight: 600;
      margin-top: 4rem;
      padding-top: 2rem;
      border-top: 1px solid var(--border);
      color: var(--text);
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }

    h2 a {
      color: var(--text);
      text-decoration: none;
    }

    h2 a:hover {
      text-decoration: underline;
    }

    /* Date style next to version */
    h2::after {
      content: attr(data-date);
      font-size: 0.875rem;
      font-weight: 400;
      color: var(--secondary-text);
    }

    h3 {
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--secondary-text);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-top: 2rem;
      margin-bottom: 1rem;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    li {
      padding: 0.4rem 0;
      color: var(--text);
      font-size: 1rem;
    }

    /* GitHub link/commit style */
    li a {
      color: var(--secondary-text);
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      font-size: 0.8em;
      text-decoration: none;
      margin-left: 0.5rem;
      padding: 0.2rem 0.4rem;
      background: var(--code-bg);
      border-radius: 4px;
      border: 1px solid var(--border);
      transition: all 0.2s;
    }

    li a:hover {
      background: var(--border);
      color: var(--text);
    }

    code {
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      font-size: 0.9em;
      background-color: var(--code-bg);
      padding: 0.2rem 0.4rem;
      border-radius: 4px;
      color: var(--text);
    }

    pre {
      background-color: var(--code-bg);
      padding: 1.5rem;
      border-radius: 8px;
      overflow-x: auto;
      border: 1px solid var(--border);
      margin: 1.5rem 0;
    }

    .footer {
      margin-top: 6rem;
      padding-top: 2rem;
      border-top: 1px solid var(--border);
      font-size: 0.75rem;
      color: var(--secondary-text);
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }

    /* Refined blockquote/p spacing */
    p {
      margin: 1rem 0;
      color: var(--secondary-text);
    }

    /* Custom classes for version layout */
    .version-wrapper {
      margin-bottom: 4rem;
    }
  </style>
</head>
<body>
  <div class="container">
    ${body}
    <div class="footer">
      Generated automatically from CHANGELOG.md
    </div>
  </div>
</body>
</html>`

fs.writeFileSync('changelog.html', html)
console.log('✔ changelog.html generated successfully')
