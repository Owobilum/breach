# Breach Onboarding Flow

- Implements the user onboarding flow for the Breach content platform

## How to run locally?

- git clone this repository
- cd into `breach` directory
- create a `.env` file at the project root and add the environment variables as specified in .env.example which is in the root directory
- run `yarn`
- run `yarn dev`

## Notes

- A good place to start when studying the codebase is the pages folder `src/pages`. Most pages are made up of sections, which are grouped according to the page they belong to, and can be found within `src/components/sections`. The sections are then made up of components within the `src/components`.

- To ensure that the performance of the application does not degrade over time, I have implemented a caching mechanism and used appropriate data structures and algorithms where necessary. Requests are cached for periods based on their likelihood to change. For instance, the result of a request to fetch blog-post categories is cached and considered valid for longer because that data is unlikely to change frequently, hence we can conserve network resources.

- User tokens are persisted in localStorage because they are valid for 1 day . This eliminates the need for a user to login when they return to the website and have a valid token. Storing tokens in localStorage is not the best practice for security, but since there is no refresh token mechanism, and the token validity period is so long, it makes sense especially as the website doesn't handle things like financial transactions.

- Assets are optimized in the case where they are too large. I try to strike a balance between image quality and performance impact on the website.
