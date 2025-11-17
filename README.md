# Farcaster Quote Generator Mini App

A Farcaster mini app built with React and Vite that helps users discover and share inspiring quotes.

## Features

- Generates random quotes from various categories (motivation, wisdom, inspiration, humor, philosophy)
- Allows users to select different quote categories
- Share quotes directly to Farcaster with one click
- Responsive design with Lexend font
- Works both in Farcaster mini app environment and standalone

## Requirements

- Node.js 16+
- npm or yarn

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Deployment

1. Build the app:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your hosting provider

3. Update the manifest file at `/.well-known/farcaster.json` with your domain information

4. Generate account association credentials using Base Build tools

## Mini App Specifications

This mini app follows the Farcaster and Base mini app specifications:

- Uses the Farcaster Mini App SDK
- Includes proper embed metadata in index.html
- Has a manifest file at /.well-known/farcaster.json
- Uses the Lexend font throughout
- Responsive design that works on mobile (424x695px) and web
- Includes all required metadata for discovery and sharing

## Customization

To customize this mini app for your needs:

1. Update the manifest information in `public/.well-known/farcaster.json`
2. Modify the app name and description
3. Replace placeholder images with your own
4. Update the color scheme in `src/App.css`
5. Add more quote categories and quotes in `src/App.jsx`
6. Add additional functionality using the Farcaster Mini App SDK

## SDK Features Used

- `sdk.isInMiniApp()` - Check if running in mini app environment
- `sdk.actions.ready()` - Hide splash screen
- `sdk.actions.composeCast()` - Create a new cast with the selected quote

## License

MIT