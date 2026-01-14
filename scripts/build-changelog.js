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
      --text: #1a1a1a;
      --secondary-text: #666666;
      --border: #e5e7eb;
      --accent: #2563eb;
      --code-bg: #f3f4f6;
      --card-bg: #ffffff;
      --shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    }

    @media (prefers-color-scheme: dark) {
      :root {
        --bg: #0f172a;
        --text: #f8fafc;
        --secondary-text: #94a3b8;
        --border: #1e293b;
        --accent: #38bdf8;
        --code-bg: #1e293b;
        --card-bg: #1e293b;
        --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
      }
    }

    body {
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      background-color: var(--bg);
      color: var(--text);
      line-height: 1.6;
      margin: 0;
      padding: 2rem 1rem;
    }

    .container {
      max-width: 800px;
      margin: 0 auto;
    }

    h1 {
      font-size: 2.5rem;
      font-weight: 800;
      letter-spacing: -0.025em;
      margin-bottom: 2.5rem;
      border-bottom: 1px solid var(--border);
      padding-bottom: 1rem;
    }

    h2 {
      font-size: 1.5rem;
      font-weight: 700;
      margin-top: 3rem;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid var(--border);
      position: sticky;
      top: 0;
      background: var(--bg);
      z-index: 10;
    }

    h3 {
      font-size: 1.1rem;
      font-weight: 600;
      color: var(--secondary-text);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-top: 2rem;
    }

    ul {
      list-style: none;
      padding: 0;
    }

    li {
      padding: 0.5rem 0;
      border-bottom: 1px solid var(--border);
      display: flex;
      align-items: flex-start;
    }

    li:last-child {
      border-bottom: none;
    }

    li::before {
      content: "•";
      color: var(--accent);
      font-weight: bold;
      margin-right: 0.75rem;
    }

    a {
      color: var(--accent);
      text-decoration: none;
      transition: opacity 0.2s;
    }

    a:hover {
      opacity: 0.8;
      text-decoration: underline;
    }

    code {
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      font-size: 0.9em;
      background-color: var(--code-bg);
      padding: 0.2rem 0.4rem;
      border-radius: 0.25rem;
    }

    pre {
      background-color: var(--code-bg);
      padding: 1.25rem;
      border-radius: 0.5rem;
      overflow-x: auto;
      border: 1px solid var(--border);
    }

    .footer {
      margin-top: 5rem;
      padding-top: 2rem;
      border-top: 1px solid var(--border);
      font-size: 0.875rem;
      color: var(--secondary-text);
      text-align: center;
    }

    /* GitHub link/commit styles */
    .commit-link {
      font-family: monospace;
      font-size: 0.85em;
      opacity: 0.7;
      margin-left: 0.5rem;
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
