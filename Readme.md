# Portfolio 
## New Portfolio Design and Total Overhauling

I decided to create this new portfolio for two reasons
1. The old one looks TERRIBLE
2. The old one had no cool animations and I so much want to include that in my portfolio
3. The old one was literally a copy paste design from a friends who's portfolio was 10x better than that.
4. I got a portfolio review on Twitter that pointed out a whole lot to change on the previous portfolio.

So with the fact that I'm just learning JavaScript and getting into the whole thing, I decided to re-build my entire portfolio.

## RECENT CHANGES MADE
So I decided to switch from CSS to SCSS while working on this project, previously I used CSS, it was okay, not like anything was wrong with it.
I switched to SCSS because, I don't know, it's my project and I can do whatever the fuck I want 😌.

Besides switching to SCSS, I also eliminated all the code in my main.js file so I can recreate it. I removed all the animations I put in this website because they would be a big problem when I have to handle the responsiveness of the site.
I equally made the `Read more` button functional by adding a simple JavaScript function to it.

```javascript
const moveScreen = () => {
  document.getElementById('about').scrollIntoView({
    behavior: 'smooth'
  });
}
```
