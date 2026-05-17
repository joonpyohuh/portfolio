/**
 * Clears .next cache and frees ports 3000–3002 (stale Next.js dev servers).
 * Run via: npm run dev:clean
 */
const { execSync } = require("child_process");
const { rmSync, existsSync } = require("fs");
const { join } = require("path");

const PORTS = [3000, 3001, 3002];
const root = join(__dirname, "..");

function killPort(port) {
  if (process.platform !== "win32") {
    try {
      execSync(`lsof -ti:${port} | xargs kill -9 2>/dev/null`, { stdio: "ignore" });
    } catch {
      /* port free */
    }
    return;
  }

  try {
    const out = execSync(`netstat -ano | findstr :${port}`, {
      encoding: "utf8",
      stdio: ["pipe", "pipe", "ignore"],
    });
    const pids = new Set();
    for (const line of out.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed.includes("LISTENING")) continue;
      const parts = trimmed.split(/\s+/);
      const pid = parts[parts.length - 1];
      if (pid && /^\d+$/.test(pid) && pid !== "0") pids.add(pid);
    }
    for (const pid of pids) {
      try {
        execSync(`taskkill /F /PID ${pid}`, { stdio: "ignore" });
        console.log(`  Freed port ${port} (PID ${pid})`);
      } catch {
        /* already gone */
      }
    }
  } catch {
    /* port free */
  }
}

console.log("Preparing dev environment…");
PORTS.forEach(killPort);

const nextDir = join(root, ".next");
if (existsSync(nextDir)) {
  rmSync(nextDir, { recursive: true, force: true });
  console.log("  Removed .next cache");
}

console.log("Ready. Starting Next.js on http://localhost:3000\n");
