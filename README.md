# Priyansh Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features a contact form integrated with EmailJS for seamless communication.

## Features

- 🎨 Modern and responsive design
- 📧 Contact form with EmailJS integration
- ⚡ Fast performance with Vite
- 🎯 SEO-friendly structure
- 📱 Mobile-first responsive design

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/PriyanshLathigara/priyansh-portfolio.git
cd priyansh-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Fill in your EmailJS credentials:
     ```
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     ```

### EmailJS Setup

1. Sign up for a free account at [EmailJS](https://www.emailjs.com/)
2. Create an Email Service (Gmail, Outlook, etc.)
3. Create an Email Template with these variables:
   - `{{email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Message content
4. Get your Public Key from Account > API Keys
5. Add the credentials to your `.env` file

### Development

Run the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Production Build

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

The optimized files will be in the `dist` directory, ready for deployment.

### Deployment

The `dist` folder contains the production-ready files. You can deploy to:

- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

**Important:** Make sure to set your environment variables in your hosting platform's environment variable settings.

## Project Structure

```
priyansh-portfolio/
├── public/          # Static assets
├── src/
│   ├── components/  # React components
│   ├── assets/      # Images and other assets
│   └── main.jsx     # Entry point
├── .env             # Environment variables (not committed)
├── .env.example     # Environment variables template
└── vite.config.js   # Vite configuration
```

## Technologies Used

- React 19
- Vite
- Tailwind CSS
- EmailJS
- React Icons

## License

MIT License - see [LICENSE](LICENSE) file for details.
