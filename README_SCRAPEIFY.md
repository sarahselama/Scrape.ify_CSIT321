# Scrape.IFY No Code Web Scraping 
Scrape.IFY is a Flask-based web app that lets anyone (no coding needed) scrape product data from leading beauty retailers and download the results as an Excel file. It also includes an AI‑assisted chatbot to guide users, plus a workflow to generate *custom* scraper scripts from simple inputs.

> Target users: beauty founders, dropshippers, price/competitor analysts, and enthusiasts who want fast product comparisons without writing code.

---

## Key Features

- **One‑click product scraping** across multiple sites (e.g., Faces, Sephora, Beauty Bay) with Excel export (`.xlsx`).
- **AI Chatbot** to onboard users, answer questions, and guide scraping/customization.
- **Custom scraper generator** — create a Python scraper script from form/chat inputs.
- **No sign‑up / no login** — frictionless access.
- **Responsive UI** built with HTML/CSS/Bootstrap + JS.
- **Modular Flask backend** for routes, scraping, and chatbot intents.

> Data fields typically include: product name, price, rating, number of reviews, image URL, product URL, and source site.


## Architecture (High Level)

- **Frontend**: HTML5, CSS3 (Bootstrap), JavaScript (with AJAX).
- **Backend**: Python **Flask** app exposing routes for pages, scraping, chatbot, and custom‑scrape generation.
- **Scraping**: `requests` + `BeautifulSoup4` for DOM parsing.
- **Data**: `pandas` for tabular handling; `openpyxl` for Excel formatting.
- **Chatbot**: rule/intent based (e.g., `intents.json`), optionally using simple NLP helpers (e.g., `nltk`).

```
/ (Aggregated Search)  -> scrape multiple sources by product name, return Excel
/home                   -> landing page
/chatbot                -> chatbot UI
/services               -> plans/pricing info
/basic, /pro            -> service pages
/custom-scrape          -> form for building a custom scraper
/generate-scrape        -> generates & returns a Python script for custom scraping
/send-message           -> chatbot message handler (AJAX)
```

---

## Quick Start
### Prerequisites
- Python 3.9+
- pip
- (Optional) **OpenAI API key** if you wire an LLM behind the chatbot: set environment var `OPENAI_API_KEY`

### Setup
```bash
# 1) Create and activate a virtual environment
python -m venv venv
# Windows
venv\Scripts\activate
# macOS/Linux
# source venv/bin/activate

# 2) Install dependencies
pip install -r requirements.txt

# 3) Run the app
python app.py
# App will start (by default) at http://127.0.0.1:5000/home
```

### Usage
- **Scrape products**: on the Home/Aggregated Search page, enter a product/brand → click **Download** to get an `.xlsx` with merged results.
- **Chatbot help**: open the **Chatbot** page → ask “How do I scrape?” or “Create a custom scraper” and follow prompts.
- **Custom scraper**: go to **Custom Scrape** → provide URLs and fields → submit → a ready‑to‑edit Python script (`custom_scrape.py`) is generated for you.

---

## Suggested Project Structure

```
scrapeify/
├─ app.py
├─ requirements.txt
├─ intents.json                 # chatbot patterns/responses (if used)
├─ scrape/
│  ├─ faces.py                  # site-specific scraping helpers
│  ├─ sephora.py
│  ├─ beautybay.py
│  └─ utils.py
├─ templates/                   # Jinja2 HTML templates
│  ├─ home.html
│  ├─ chatbot.html
│  ├─ services.html
│  ├─ basic.html
│  ├─ pro.html
│  └─ custom_scrape.html
├─ static/                      # CSS/JS/assets
└─ README.md
```

---

## Configuration

Environment variables (optional):
- `OPENAI_API_KEY` — only if you integrate an LLM for chatbot answers beyond rules/intents.
- `FLASK_ENV=development` — enables debug mode during development.

Excel output:
- Uses **pandas** to assemble rows and **openpyxl** to auto-fit columns for readability.

---

## Requirements

Create a `requirements.txt` like:

```
Flask
requests
beautifulsoup4
pandas
openpyxl
nltk
```

(You can pin exact versions later.)

---

## Testing (what to verify)

- **UI** renders on Chrome/Firefox/Edge/Safari at multiple screen sizes.
- **Chatbot** responds to common flows (navigation, “how to scrape”, “create custom scraper”, escalate to human support).
- **Scraper** returns consistent columns even when some fields are missing on a site.
- **Excel export** downloads and opens cleanly (no corrupt file warnings).
- **Error handling** shows friendly messages on network/selector failures.

---

## Legal & Ethics

Only scrape publicly available product data. Respect each site’s robots.txt, terms of service, and rate limits. Do **not** collect personal data. This project is for educational and competitive‑intelligence use within applicable laws.

## Team
- **Habiba Abdel Aziz**
- **Sarah Amina Selama** 
- **Aref Farghadani** 
- **Khasim Akram Syed** 
- **Shaurya Singh** 

> This repository is a public copy for portfolio visibility. 
