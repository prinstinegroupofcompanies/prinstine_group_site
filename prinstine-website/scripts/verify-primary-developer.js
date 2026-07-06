import { execSync } from 'node:child_process';
import { PRIMARY_DEVELOPER, DEVELOPER_CONTACT_MESSAGE } from './primary-developer.js';

function getGitConfig(key) {
  try {
    return execSync(`git config ${key}`, { encoding: 'utf8' }).trim();
  } catch {
    return '';
  }
}

function isCiOrVercelBuild() {
  return (
    process.env.VERCEL === '1' ||
    process.env.CI === 'true' ||
    process.env.CI === '1'
  );
}

function isPrimaryDeveloper() {
  const name = getGitConfig('user.name');
  const email = getGitConfig('user.email');
  return (
    email.toLowerCase() === PRIMARY_DEVELOPER.email.toLowerCase() &&
    name.toLowerCase() === PRIMARY_DEVELOPER.name.toLowerCase()
  );
}

const npmLifecycle = process.env.npm_lifecycle_event || '';
const isInstall = npmLifecycle === 'install' || npmLifecycle === 'preinstall';
const isBuild = npmLifecycle === 'build' || npmLifecycle === 'prebuild';

// Allow Vercel/CI installs and production builds (deploys maintenance site)
if (isCiOrVercelBuild() && (isInstall || isBuild)) {
  process.exit(0);
}

if (!isPrimaryDeveloper()) {
  console.error(DEVELOPER_CONTACT_MESSAGE);
  process.exit(1);
}

process.exit(0);
