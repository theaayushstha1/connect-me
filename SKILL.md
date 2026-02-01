---
name: connect-linkedin
description: Automate daily LinkedIn networking by sending 8-10 targeted connection requests. Use when the user asks to "connect on LinkedIn", "send LinkedIn connections", "network on LinkedIn", "grow LinkedIn network", "daily LinkedIn outreach", "LinkedIn networking", "send connection requests", or wants to automate LinkedIn outreach to recruiters, students, or hiring managers.
---

# Connect LinkedIn

Automate daily LinkedIn networking by sending ~8-10 targeted connection requests using Playwright MCP browser automation.

## Prerequisites

Before execution:
1. Playwright MCP must be installed: `claude mcp add playwright npx @playwright/mcp@latest`
2. User logs into LinkedIn manually when browser opens
3. Run during business hours for higher acceptance rates

## Connection Targets

Send connections in this order:

| Category | Count | Search Query | Priority |
|----------|-------|--------------|----------|
| Recruiters | 3 | `AI ML engineer recruiter` | Tech recruiters at hiring companies |
| Students | 2 | `AI engineer intern` | CS students at peer institutions |
| Job Posters | 3-5 | `hiring AI engineer` | Hiring managers, founders |

Filter all searches by **2nd degree connections** for higher acceptance rates.

## Execution Workflow

### Step 1: Open LinkedIn
```
browser_navigate to https://www.linkedin.com
```
Take snapshot to verify login (look for profile icon). Wait for manual login if needed.

### Step 2: Recruiter Connections (3)
```
Navigate to: https://www.linkedin.com/search/results/people/?keywords=AI%20ML%20engineer%20recruiter&network=%5B%22S%22%5D
```
1. Take snapshot, find "Connect" buttons
2. Click Connect on 3 recruiters
3. Click "Send without a note" on modal

### Step 3: Student Connections (2)
```
Navigate to: https://www.linkedin.com/search/results/people/?keywords=AI%20engineer%20intern&network=%5B%22S%22%5D
```
1. Take snapshot, find "Connect" buttons
2. Click Connect on 2 students
3. Click "Send without a note"

### Step 4: Job Poster Connections (3-5)
```
Navigate to: https://www.linkedin.com/search/results/people/?keywords=hiring%20AI%20engineer&network=%5B%22S%22%5D
```
1. Take snapshot, find "Connect" buttons
2. Click Connect on 3-5 job posters
3. Click "Send without a note"

### Step 5: Report Summary
Report to user:
- Total connections sent
- Breakdown by category
- Any skipped profiles

## Safety Limits

**Critical limits to follow:**
- Maximum 10 connections per execution
- Never exceed 25/day total
- Always use "Send without a note" (preserves invitation quota)
- Skip if LinkedIn shows any rate limit warning
- Stop immediately on any error

## Playwright MCP Tools

| Action | Tool | Usage |
|--------|------|-------|
| Navigate | `browser_navigate` | Go to URLs |
| View page | `browser_snapshot` | See elements and find buttons |
| Click | `browser_click` | Click Connect buttons and modals |

## Handling Connection Modal

When Connect is clicked, modal appears with options:
- **"Send without a note"** - Click this (default)
- **"Add a note"** - Only for high-value recruiters
- **"Send"** - Click after selecting option

## Troubleshooting

| Issue | Solution |
|-------|----------|
| No Connect button | Already connected or Follow-only profile, skip |
| Modal not appearing | Take fresh snapshot, retry click |
| Rate limit warning | Stop immediately, wait 24 hours |
