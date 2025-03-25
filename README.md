# Louis Hitchcock Client Gallery

A secure, Firebase-powered client gallery system with individual pages, admin tools, and Google login authentication.

---

## 🚀 Features

- ✅ Password-protected client galleries (pretty URLs supported)
- ✅ Admin-only pages to add and view galleries
- ✅ Google Auth (with Firebase Custom Claims for admin roles)
- ✅ Firebase Firestore for client data storage
- ✅ Clean modular structure and shared styling via `style.css`

---

## 🛠 Project Structure

```
/
├── addClient.html          # Admin: Add new client
├── admin-gallery.html      # Admin: View all clients
├── index.html              # Landing page (optional)
├── clients/index.html      # Dynamic client page (slug via query param)
├── config/firebase-config.js # Firebase config (ignored)
├── style.css               # Shared styling
├── .gitignore              # Ensures sensitive files are ignored
├── admin-setup.js          # Script to assign admin custom claims
└── README.md               # This file!
```

---

## ✅ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
```

### 2. Setup Firebase

- Create a Firebase project
- Enable **Google Auth** in Authentication
- Create a Firestore database
- Add your Firebase config to `config/firebase-config.js`
- Mark `/config/` as ignored in `.gitignore`

### 3. Assign Yourself as Admin

Use the `admin-setup.js` file with a Firebase Admin SDK service account to give yourself `admin: true` claims.

---

## 🔐 Security

This project uses:

- Firebase Authentication (Google Sign-in)
- Firebase Custom Claims for admin access
- `.gitignore` to prevent committing sensitive config files

---

## 🧼 Formatting

This project uses [Prettier](https://prettier.io/) for consistent formatting.  
See `.prettierrc` for config.

---

## 🧪 Local Testing

You can run a local dev server with Python:

```bash
python3 -m http.server
```

Then open `http://localhost:8000/clients/index.html?slug=example-client`

---

## 📦 Deployment

This project works great on **GitHub Pages**, **Firebase Hosting**, or **Netlify**.

- GitHub Pages: Use query strings (`?slug=client-name`) due to no rewrites
- Netlify/Firebase Hosting: Add a `_redirects` or rewrite rule for clean URLs

---

## ✨ Credits

Built by [@louishitchPhotos](https://www.instagram.com/louishitchphotos)