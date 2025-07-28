# Atomic Design Migration Guide

## 🚨 Rollback Strategy

### Quick Rollback Commands

If anything breaks during migration:

```bash
# Option 1: Quick rollback script
./scripts/rollback.sh

# Option 2: Manual rollback
git checkout backup-before-atomic-migration -- src/
rm -rf src/atoms/ src/molecules/ src/organisms/ src/templates/ src/pages/

# Option 3: Complete reset
git reset --hard HEAD
git clean -fd
```

### Safety Checks

Before each migration step:

```bash
# Check migration safety
node scripts/migration-safety.js

# Test the app
npm start
```

## 📋 Migration Steps

### Phase 1: Create Shared Atoms ✅
- [x] Create base atoms (MenuItem, MenuButton, MenuText, MenuIcon)
- [x] Test atoms work independently
- [x] Keep existing components unchanged

### Phase 2: Create Shared Molecules ⏳
- [ ] Create MenuList, MenuHeader, MenuNavigation
- [ ] Test molecules work independently
- [ ] Keep existing components unchanged

### Phase 3: Create Menu Organisms ⏳
- [ ] Create CircularMenu (Wheel)
- [ ] Create GridMenu (NamesOfAllah)
- [ ] Create VerticalMenu (Settings, Onboarding)
- [ ] Create HorizontalMenu (Navigation)
- [ ] Test each organism works

### Phase 4: Create Templates ⏳
- [ ] Create MenuTemplate (base layout)
- [ ] Create specific templates for each component
- [ ] Test templates work

### Phase 5: Create Pages ⏳
- [ ] Create final pages using templates and organisms
- [ ] Test everything works identically
- [ ] Replace original components

## 🔧 Testing Strategy

### Before Each Step:
1. Take snapshot of current functionality
2. Create new atomic component
3. Test new component works
4. Compare with original
5. Only proceed if identical

### Wheel-Specific Testing:
- [ ] Exact same visual appearance
- [ ] Exact same interactions
- [ ] Exact same animations
- [ ] Exact same state management
- [ ] Exact same navigation behavior

## 🚨 Emergency Procedures

### If App Won't Start:
```bash
# Quick fix
./scripts/rollback.sh

# Verify it works
npm start
```

### If Components Missing:
```bash
# Restore from backup
git checkout backup-before-atomic-migration -- src/components/

# Verify components restored
ls src/components/
```

### If Atomic Components Broken:
```bash
# Remove atomic components
rm -rf src/atoms/ src/molecules/ src/organisms/ src/templates/ src/pages/

# Restore App.js
git checkout HEAD -- src/App.js
```

## 📁 File Structure

### Current (Working):
```
src/
├── components/
│   ├── WheelOfIslam.js
│   ├── NamesOfAllah.js
│   ├── NameDetail.js
│   ├── TazkiyyahLanding.js
│   ├── OneTrueGodIntro.js
│   ├── OnboardingModal.js
│   ├── Settings.js
│   └── ProgressBar.js
└── App.js
```

### Target (Atomic Design):
```
src/
├── atoms/
│   ├── MenuItem.js
│   ├── MenuButton.js
│   ├── MenuText.js
│   └── MenuIcon.js
├── molecules/
│   ├── MenuList.js
│   ├── MenuHeader.js
│   └── MenuNavigation.js
├── organisms/
│   ├── CircularMenu.js
│   ├── GridMenu.js
│   ├── VerticalMenu.js
│   └── HorizontalMenu.js
├── templates/
│   ├── MenuTemplate.js
│   └── WheelTemplate.js
├── pages/
│   ├── WheelPage.js
│   └── NamesPage.js
└── App.js
```

## 🎯 Success Criteria

### Wheel Must Preserve:
- [ ] All SVG calculations and positioning
- [ ] All hover effects and animations
- [ ] All click interactions
- [ ] All theme switching
- [ ] All language switching
- [ ] All goal-based topic switching
- [ ] All state management
- [ ] All navigation behavior

### All Components Must Preserve:
- [ ] Exact same functionality
- [ ] Exact same appearance
- [ ] Exact same interactions
- [ ] Exact same state management
- [ ] Exact same navigation behavior

## 📞 Support

If you encounter issues:

1. **First:** Run `./scripts/rollback.sh`
2. **Second:** Check `MIGRATION_GUIDE.md`
3. **Third:** Run `node scripts/migration-safety.js`
4. **Fourth:** Check git status and restore if needed

## 🔄 Rollback Commands Reference

```bash
# Quick rollback
./scripts/rollback.sh

# Manual rollback
git checkout backup-before-atomic-migration -- src/

# Complete reset
git reset --hard HEAD
git clean -fd

# Safety check
node scripts/migration-safety.js
``` 