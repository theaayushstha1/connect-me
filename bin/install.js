#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

const SKILL_NAME = 'connect-me';

// Determine the Claude skills directory
const homeDir = os.homedir();
const skillsDir = path.join(homeDir, '.claude', 'skills', SKILL_NAME);

// Source SKILL.md path (in the npm package)
const sourcePath = path.join(__dirname, '..', 'SKILL.md');

// Create the skills directory if it doesn't exist
if (!fs.existsSync(skillsDir)) {
  fs.mkdirSync(skillsDir, { recursive: true });
}

// Copy SKILL.md to the skills directory
const destPath = path.join(skillsDir, 'SKILL.md');

try {
  fs.copyFileSync(sourcePath, destPath);
  console.log('\n✅ connect-me skill installed successfully!\n');
  console.log('📍 Installed to:', skillsDir);
  console.log('\n📋 Prerequisites:');
  console.log('   Run: claude mcp add playwright npx @playwright/mcp@latest\n');
  console.log('🚀 Usage:');
  console.log('   Just tell Claude: "connect me" or "/connect-me"\n');
} catch (err) {
  console.error('❌ Failed to install skill:', err.message);
  process.exit(1);
}
