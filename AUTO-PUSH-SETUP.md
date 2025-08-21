# Auto-Push Setup for Webnova

This project is configured for automatic Git pushes. Here are the available methods:

## 🚀 Quick Methods

### Method 1: Double-click the batch file
- Simply double-click `auto-push.bat` in the project folder
- This will automatically add, commit, and push all changes

### Method 2: Use npm scripts
```bash
# Quick push with auto-generated commit message
npm run quick-push

# Alternative push method
npm run push
```

### Method 3: PowerShell script directly
```powershell
# With auto-generated commit message
.\auto-push.ps1

# With custom commit message
.\auto-push.ps1 "Your custom commit message"
```

### Method 4: Manual Git commands
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

## 🔧 Automatic Push on Commit

A post-commit Git hook has been set up that automatically pushes to GitHub after every commit. This means:

- When you run `git commit`, it will automatically push to GitHub
- No need to remember to run `git push`

## 📝 Files Created

- `auto-push.ps1` - PowerShell script for automatic pushes
- `auto-push.bat` - Batch file for easy execution
- `.git/hooks/post-commit` - Git hook for automatic push after commit
- Updated `package.json` with push scripts

## 🎯 Recommended Workflow

1. Make your changes to the code
2. Double-click `auto-push.bat` OR run `npm run quick-push`
3. Your changes are automatically committed and pushed to GitHub!

## 🔒 Security Note

Make sure your Git credentials are properly configured for automatic authentication. You may need to set up:
- SSH keys, or
- Personal Access Token, or
- Git Credential Manager

This ensures pushes work without manual password entry.