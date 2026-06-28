import fs from 'fs';
import path from 'path';

async function globalSetup(): Promise<void> {
  const authDir = path.resolve(__dirname, '../../.auth');
  if (!fs.existsSync(authDir)) {
    fs.mkdirSync(authDir, { recursive: true });
  }

  const env = process.env.ENV ?? 'qa';
  console.log(`[global-setup] Running tests against ENV=${env}, BASE_URL=${process.env.BASE_URL ?? '(default)'}`);
}

export default globalSetup;
