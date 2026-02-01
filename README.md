# Connect Me

A Claude Code skill that automates daily LinkedIn networking by sending 8-10 targeted connection requests using Playwright MCP browser automation.

## Installation

### Via skills.sh (Recommended)
```bash
npx skills add theaayushstha1/connect-me
```

### Prerequisites

After installing, add Playwright MCP:
```bash
claude mcp add playwright npx @playwright/mcp@latest
```

## Usage

Simply tell Claude:
- `/connect-me`
- "Connect me on LinkedIn"
- "Send LinkedIn connections"
- "Daily LinkedIn outreach"

## What It Does

This skill automates your daily LinkedIn outreach by sending connection requests to:

| Category | Count | Target |
|----------|-------|--------|
| Recruiters | 3 | AI/ML focused tech recruiters |
| Students | 2 | CS students at peer institutions |
| Job Posters | 3-5 | Hiring managers and founders |

All connections are filtered to 2nd degree for higher acceptance rates.

## How It Works

Claude will:
1. Open LinkedIn in a browser (via Playwright)
2. Wait for you to log in (if needed)
3. Search for and send connections to each target category
4. Report a summary of connections sent

## Safety Limits

The skill respects LinkedIn's rate limits:
- Maximum 10 connections per run
- Uses "Send without a note" to preserve invitation quota
- Stops immediately if any rate limit warnings appear

## Alternative Installation

### Download .skill file
```bash
curl -LO https://github.com/theaayushstha1/connect-me/releases/download/v1.0.0/connect-me.skill
claude skill install connect-me.skill
```

### Clone repo
```bash
git clone https://github.com/theaayushstha1/connect-me.git
cp connect-me/SKILL.md ~/.claude/skills/connect-me/SKILL.md
```

## License

MIT
