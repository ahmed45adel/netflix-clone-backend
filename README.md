# Netflix Clone Backend

A backend service for a Netflix-style streaming platform, providing movie/TV show metadata and user authentication.

## Features
- **User Authentication**: JWT-based registration/login with protected routes
- **Content Browsing**: 
  - Movie and TV show details from TMDB API
  - Search functionality across titles
  - Multiple user avatar options
- **API Integration**: Real-time synchronization with The Movie Database (TMDB)
- **Scalable Architecture**: MVC pattern with separated routes, controllers, and services

## Tech Stack
**Backend**
- Node.js & Express.js
- MongoDB (with Mongoose ODM)
- JSON Web Tokens (JWT) for authentication
- Axios for TMDB API integration
- Cookie-parser
- Dotenv 
- Bcryptjs

## Configuration

Create `.env` file with your API credentials
```env
   MONGODB_URI
   JWT_SECRET
   TMDB_API_KEY
   CLIENT_URL
   PORT
```

## Acknowledgements
- TMDB API for media data [Docs](https://developer.themoviedb.org/reference/intro/getting-started)
- Vercel for deployment hosting
- [Frontend code](https://github.com/ahmed45adel/netflix-clone-frontend)


## Deployment
- [Vercel](https://netflix-clone-backend-ten.vercel.app)
