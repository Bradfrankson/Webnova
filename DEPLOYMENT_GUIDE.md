# Deployment Guide for Webnova

## 🚨 ISSUE FIXED: 404 Errors on Privacy Policy & Terms of Service

### Problem
When deploying to production (Vercel, Netlify, etc.), the routes `/privacy-policy` and `/terms-of-service` were showing 404 errors because:

1. **Client-Side Routing**: React Router handles routing on the client-side
2. **Server Doesn't Know Routes**: Production servers don't know about these routes
3. **Direct URL Access**: When users visit URLs directly, the server looks for actual files

### Solution
Added configuration files to handle Single Page Application (SPA) routing:

## 📁 Configuration Files Added

### 1. `vercel.json` (For Vercel Deployment)
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```
**Purpose**: Tells Vercel to serve `index.html` for all routes, letting React Router handle routing.

### 2. `public/_redirects` (For Netlify Deployment)
```
/*    /index.html   200
```
**Purpose**: Netlify configuration to redirect all routes to `index.html` with 200 status.

### 3. `public/.htaccess` (For Apache Servers)
```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```
**Purpose**: Apache server configuration for SPA routing.

## 🚀 Deployment Instructions

### For Vercel (Current Setup)
1. **Automatic**: The `vercel.json` file will automatically be detected
2. **Deploy**: Push to GitHub and Vercel will redeploy
3. **Test**: Visit `https://web-nova.vercel.app/privacy-policy` and `https://web-nova.vercel.app/terms-of-service`

### For Netlify
1. **Drag & Drop**: Build locally with `npm run build` and drag `dist` folder to Netlify
2. **Git Integration**: Connect GitHub repo to Netlify
3. **Configuration**: The `_redirects` file will be automatically used

### For Other Hosting Providers
1. **Build**: Run `npm run build`
2. **Upload**: Upload the `dist` folder contents
3. **Configure**: Use appropriate configuration file for your server type

## ✅ What This Fixes

### Before Fix
- ❌ `https://web-nova.vercel.app/privacy-policy` → 404 Error
- ❌ `https://web-nova.vercel.app/terms-of-service` → 404 Error
- ✅ `https://web-nova.vercel.app/` → Works (home page)

### After Fix
- ✅ `https://web-nova.vercel.app/privacy-policy` → Privacy Policy Page
- ✅ `https://web-nova.vercel.app/terms-of-service` → Terms of Service Page
- ✅ `https://web-nova.vercel.app/` → Home Page
- ✅ Footer links work correctly
- ✅ Direct URL access works
- ✅ Browser back/forward buttons work

## 🔧 How It Works

1. **User visits** `/privacy-policy`
2. **Server receives** request for `/privacy-policy`
3. **Configuration redirects** to `/index.html`
4. **React app loads** and React Router sees `/privacy-policy`
5. **React Router renders** the Privacy Policy component

## 📋 Testing Checklist

After deployment, test these URLs:
- [ ] `https://web-nova.vercel.app/`
- [ ] `https://web-nova.vercel.app/privacy-policy`
- [ ] `https://web-nova.vercel.app/terms-of-service`
- [ ] Footer links to Privacy Policy and Terms of Service
- [ ] "Back to Home" buttons on legal pages
- [ ] Browser refresh on legal pages (should not 404)

## 🚨 Important Notes

1. **Automatic Deployment**: Changes are automatically deployed when you push to GitHub
2. **Cache**: It may take a few minutes for changes to propagate
3. **Testing**: Always test in incognito/private browsing to avoid cache issues
4. **Mobile**: Test on mobile devices as well

## 📞 Support

If you still see 404 errors after deployment:
1. Wait 5-10 minutes for cache to clear
2. Try incognito/private browsing
3. Check Vercel deployment logs
4. Contact support if issues persist

**Contact**: info.webbnova.org | (470) 525-5650
