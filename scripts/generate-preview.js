const fs = require('fs');
const path = require('path');

const MOCKUPS_DIR = 'mockups';
const OUTPUT_FILE = 'index.html';

function getHtmlFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            getHtmlFiles(filePath, fileList);
        } else if (file.endsWith('.html')) {
            fileList.push(filePath);
        }
    });
    return fileList;
}

const htmlFiles = getHtmlFiles(MOCKUPS_DIR);

const links = htmlFiles.map(file => {
    const fileName = path.basename(file);
    const relativePath = file.replace(/\\/g, '/');
    const parts = relativePath.split('/');
    const category = parts.length > 2 ? parts[parts.length - 2] : 'General';
    return {
        path: relativePath,
        name: fileName.replace('.html', '').replace(/-/g, ' '),
        category: category.replace(/-/g, ' ')
    };
});

// Group by category
const groups = links.reduce((acc, link) => {
    if (!acc[link.category]) acc[link.category] = [];
    acc[link.category].push(link);
    return acc;
}, {});

const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UX Mockups Preview | Hostopia</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary: #2563eb;
            --bg: #0f172a;
            --card-bg: #1e293b;
            --text: #f8fafc;
            --text-muted: #94a3b8;
            --accent: #38bdf8;
        }
        body {
            font-family: 'Outfit', sans-serif;
            background-color: var(--bg);
            color: var(--text);
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
        }
        header {
            width: 100%;
            padding: 4rem 2rem;
            text-align: center;
            background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
            border-bottom: 1px solid #334155;
            margin-bottom: 3rem;
        }
        h1 {
            margin: 0;
            font-size: 3rem;
            font-weight: 600;
            background: linear-gradient(to right, #38bdf8, #818cf8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        p.subtitle {
            color: var(--text-muted);
            margin-top: 1rem;
            font-size: 1.2rem;
        }
        main {
            width: 100%;
            max-width: 1000px;
            padding: 0 2rem 4rem 2rem;
        }
        .category-section {
            margin-bottom: 3rem;
        }
        .category-title {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 1.5rem;
            color: var(--accent);
            text-transform: capitalize;
            border-left: 4px solid var(--accent);
            padding-left: 1rem;
        }
        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1.5rem;
        }
        .card {
            background-color: var(--card-bg);
            border: 1px solid #334155;
            border-radius: 12px;
            padding: 1.5rem;
            transition: all 0.3s ease;
            text-decoration: none;
            color: inherit;
            display: flex;
            flex-direction: column;
            position: relative;
            overflow: hidden;
        }
        .card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: linear-gradient(to right, var(--primary), var(--accent));
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        .card:hover {
            transform: translateY(-5px);
            border-color: #475569;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
        }
        .card:hover::before {
            opacity: 1;
        }
        .card-name {
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
            text-transform: capitalize;
        }
        .card-path {
            font-size: 0.85rem;
            color: var(--text-muted);
            word-break: break-all;
        }
        .footer {
            margin-top: auto;
            padding: 2rem;
            color: var(--text-muted);
            font-size: 0.9rem;
            border-top: 1px solid #334155;
            width: 100%;
            text-align: center;
        }
    </style>
</head>
<body>
    <header>
        <h1>Hostopia UX Preview</h1>
        <p class="subtitle">Generated mockups and UI components for Webmail UX Tool</p>
    </header>
    <main>
        ${Object.keys(groups).map(category => `
            <section class="category-section">
                <div class="category-title">${category}</div>
                <div class="grid">
                    ${groups[category].map(link => `
                        <a href="${link.path}" class="card">
                            <div class="card-name">${link.name}</div>
                            <div class="card-path">${link.path}</div>
                        </a>
                    `).join('')}
                </div>
            </section>
        `).join('')}
    </main>
    <footer class="footer">
        &copy; ${new Date().getFullYear()} Hostopia UX Architect | GEM Emulation Environment
    </footer>
</body>
</html>
`;

fs.writeFileSync(OUTPUT_FILE, htmlContent);
console.log('Index generated successfully!');
