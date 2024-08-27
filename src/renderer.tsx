import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html>
      <head>
        <meta name="description" content="Welcome to my personal website built with Hono and JSX." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="/static/style.css" rel="stylesheet" />
      </head>
      <body>
        <nav>
          <ul>
            <li><a href="/" aria-label="Home Page">Home</a></li>
            <li><a href="/about" aria-label="About Me Page">About</a></li>
            <li><a href="/point-and-laugh" aria-label="Point and Laugh Page">Point And Laugh</a></li>
          </ul>
          <button id="themeToggle" aria-label="Toggle Dark/Light Mode" class="theme-toggle">
            <img id="sunIcon" src="/static/sun.png" alt="Sun Icon" class="theme-icon" />
            <img id="moonIcon" src="/static/moon.png" alt="Moon Icon" class="theme-icon"/>
          </button>
        </nav>
        <div class="hero">
          <h1>Welcome to My Personal Website!</h1>
          <p>Discover my projects, skills, and more.</p>
          <button id="exploreButton" aria-label="Explore My Work">Explore</button>
        </div>
        {children}
        <script src="/static/client.js"></script>
      </body>
    </html>
  )
})
