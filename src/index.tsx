import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-pages'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

app.get('/', (c) => {
  return c.render(
    <div class="container">
      <h1 id="greeting">Welcome to My Website!</h1>
      <button id="colorButton">Change Background Color</button>
    <img src="/static/guy.jpg" alt="A guy" style="max-width: 100%; height: auto;" />
    <script src="/static/client.js"></script> 
    </div>
  )
})

app.get('/about', (c) => {
  return c.render(
    <div class="container">
      <h1>About Me</h1>
      <p>This is my first website using Hono and JSX!</p>
    </div>
  )
})

app.get('/point-and-laugh', (c) => {
  return c.render(
    <>
      <h1>Point and Laugh</h1>
      <p>😂 Here's where you can point and laugh at my coding mistakes. But remember, everyone starts somewhere!</p>
    </>
  )
})

app.get('/static/*', serveStatic())

export default app
