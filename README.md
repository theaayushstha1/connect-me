# Connect LinkedIn

A Claude Code skill that automates daily LinkedIn networking by sending 8-10 targeted connection requests using Playwright MCP browser automation.

## What It Does

This skill automates your daily LinkedIn outreach by sending connection requests to:

- **3 Recruiters** - AI/ML focused tech recruiters
- **2 Students** - CS students at peer institutions
- **3-5 Job Posters** - Hiring managers and founders posting about AI roles

All connections are filtered to 2nd degree for higher acceptance rates.

## Installation

### Prerequisites

1. [Claude Code](https://claude.com/claude-code) installed
2. Playwright MCP server:
   ```bash
   claude mcp add playwright npx @playwright/mcp@latest
   ```

### Install the Skill

Download `connect-linkedin.skill` and install:
```bash
claude skill install connect-linkedin.skill
```

Or copy the `SKILL.md` file to your Claude Code skills directory.

## Usage

Simply ask Claude:
- "Connect on LinkedIn"
- "Send LinkedIn connections"
- "Daily LinkedIn outreach"
- "Network on LinkedIn"

Claude will:
1. Open LinkedIn in a browser
2. Wait for you to log in (if needed)
3. Search for and send connections to each target category
4. Report a summary of connections sent

## Safety Limits

The skill respects LinkedIn's rate limits:
- Maximum 10 connections per run
- Uses "Send without a note" to preserve invitation quota
- Stops immediately if any rate limit warnings appear

## How It Works

Uses Playwright MCP to:
1. Navigate to LinkedIn search with 2nd degree filter
2. Take page snapshots to find Connect buttons
3. Click Connect and handle the modal
4. Track and report progress

## License

MIT
