# Acceptance Environment

## Overview
This is a separate environment for testing major structural changes to the atomic design architecture.

## Structure
- **Port:** 5000 (separate from production on 3000)
- **Source:** `src-acceptance/` (copy of current `src/`)
- **Package:** `package-acceptance.json`

## Usage

### Start Acceptance Environment
```bash
./start-acceptance.sh
```

### Manual Start
```bash
# Copy acceptance source
rm -rf src
cp -r src-acceptance src

# Start on port 5000
PORT=5000 npm start
```

## Planned Changes

### Current Structure (Brad Frost's)
```
src/
├── atoms/          # Basic elements
├── molecules/      # Simple combinations
├── organisms/      # Complex systems
├── templates/      # Page layouts
├── pages/          # Complete screens
└── components/     # Legacy components
```

### Target Structure (Your Philosophy)
```
src/
├── atoms/          # Basic elements (MenuButton, MenuText)
├── molecules/      # Simple combinations (MenuHeader, ProgressBar)
├── organs/         # Complex systems (CircularMenu, GridMenu, Settings)
├── organisms/      # Complete pages (WheelPage, NamesPage)
└── templates/      # App structure (how organisms interact)
```

## Migration Steps
1. Rename `organisms/` → `organs/` (complex systems)
2. Rename `pages/` → `organisms/` (complete pages)
3. Move components to appropriate atomic design levels
4. Update all import paths
5. Test thoroughly on port 5000
6. Deploy to production when ready

## Benefits
- **Safe Testing:** Major changes tested separately
- **No Production Risk:** Original app continues on port 3000
- **Easy Rollback:** Can revert to original structure anytime
- **Parallel Development:** Can work on both environments simultaneously 