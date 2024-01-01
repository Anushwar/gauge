const config = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'bun tsc --noEmit',

  // Lint then format TypeScript and JavaScript files
  '**/*.(ts|tsx|js|cjs)': (/** @type {string[]} */ filenames) => [
    `bun eslint --fix --max-warnings=0 ${filenames.join(' ')}`,
    `bun prettier --write --ignore-unknown ${filenames.join(' ')}`,
  ],

  // Format MarkDown and JSON
  '**/*.(md|json)': (/** @type {string[]} */ filenames) => [
    `bunx prettier --write --ignore-unknown ${filenames.join(' ')}`,
  ],
};

export default config;
