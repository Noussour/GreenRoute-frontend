# 🌍 GreenRoute - Eco-Friendly Route Planner

## Overview

GreenRoute is an AI-powered, eco-conscious route planner designed to help users choose the most sustainable transportation options. By analyzing multiple factors such as traffic congestion, elevation changes, and weather conditions, it suggests the best routes for minimal carbon emissions.

---

## 📁 **Folder Structure Overview**

```
.
├── cypress/          # End-to-end tests
├── docker-compose.yml
├── Dockerfile
├── public/           # Static assets
├── src/              # Main source code
│   ├── app/          # Pages, routes, layouts
│   ├── components/   # UI components
│   ├── features/     # Feature-specific logic
│   ├── hooks/        # Custom React hooks
│   ├── lib/          # Utilities and helpers
│   ├── providers/    # Context and providers
│   ├── stores/       # State management
│   └── types/        # TypeScript types
└── tailwind.config.ts
```

This structure is designed for flexibility and clarity. Add pages under `app/`, place reusable components in `components/`, implement business logic in `features/`, and manage state in `stores/`.

---

## Features

### Multi-Transport Route Suggestions

- Get multiple route options using different modes of transport (car, bus, bike, walking, metro, etc.).
- View all possible alternatives for a single trip to compare eco-friendly choices.

### Eco-Friendly Route Optimization

- AI-driven route calculation based on real-time traffic, elevation, and weather conditions.
- Prioritizes paths that reduce fuel/battery consumption and carbon emissions.

### Personalized Travel Recommendations

- Suggests the most efficient and sustainable transport options tailored to the user’s preferences.
- Provides estimated time and environmental impact for each suggested route.

### Earn & Redeem Green Points

- Users collect Green Points by choosing eco-friendly routes.
- Points can be redeemed for discounts, gift cards, or perks from partnered businesses.

### Business & Brand Collaboration

- Local businesses and global brands can promote sustainability by offering rewards.
- Businesses gain visibility through in-app advertisements and promotional campaigns.

### Interactive Map Integration

- Seamlessly integrates with OpenStreetMap for a dynamic and detailed route display.
- Users can explore their journey visually and make informed decisions.

### Modern & Responsive UI

- Built with Next.js and Tailwind CSS for a fast, intuitive, and accessible user experience.
- Mobile-friendly design for easy on-the-go navigation.

---

## 🛠️ Configuration

### Environment Variables

1. Copy the `.env.example` file to `.env.local` in the root of your project:

   ```bash
   cp .env.example .env.local
   ```

2. Update the content of `.env.local` with your related environment variables:

   ```plaintext
    # URL for the public API endpoint
    NEXT_PUBLIC_API_URL=http://localhost:8080

    # API key for OpenRoute service
    NEXT_PUBLIC_OPENROUTE_API_KEY=your_openroute_api_key

    # Local development URL
    LOCAL_URL=http://localhost:8080

    # Host URL for the application
    HOST_URL=http://localhost:8080
   ```

### Tailwind CSS

Tailwind CSS is pre-configured in this template. You can customize it by editing the `tailwind.config.js` file.

---

## Running the Project Locally

### Run the development server:

```bash
yarn dev
# or
npm run dev
```

The app will be available at `http://localhost:3000`.

---

## 🐳 **Docker Usage**

### Build and Start:

```bash
docker-compose up --build
```

### Stop:

```bash
docker-compose down
```

---

## 🧪 **Testing with Cypress**

### Run Tests:

```bash
npm run cypress:open
```

---

## 📞 **Contact**

- **GitHub**: [Adel2411](https://github.com/Adel2411)
- **Email**: [hadjarabadel.2411@gmail.com](mailto:hadjarabadel.2411@gmail.com)
