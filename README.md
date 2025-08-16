# Website

KOR HQ website built with Astro, KOR UI and Svelte.

## Style

App launcher styled home page with each item opening a sheet.

## Development

### Formatting

####

Use the Prettier plugin.

#### Zed

### Formatting

Using prettierd for fast formatting:

```bash
# Start daemon
pnpm prettierd start

# Stop daemon (when done)
pnpm prettierd stop
```

Configured in `.zed/settings.json` for format-on-save.

### Linting

ESLint configured for TypeScript, Astro, and Svelte:

```bash
# Check for issues
pnpm lint

# Fix auto-fixable issues
pnpm lint:fix
```
