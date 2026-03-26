# Dynamic Promo Bar & Cart Simulation

A free shipping tracker that reacts in real-time when items are added to the cart. Built as a feature for a Shopify/WordPress storefront.

## Live Demo
[View Live →](https://dynamic-promo-bar-cart-simulation.netlify.app/)

## Features
- Sticky promo bar with dynamic messaging
- Real-time cart total tracking
- "Free Shipping" unlocks at $100
- Progress updates on every add to cart
- Clear cart resets everything
- Close button hides the promo bar
- localStorage persists closed state on refresh

## Tech Stack
HTML | CSS | Vanilla JavaScript

## Workflow
- Feature-branch development (4 issues → 4 branches → 4 PRs)
- Conventional commits (`feat:`, `chore:`, `fix:`)
- Deployed via Netlify (auto-deploy on main push)

## Project Structure
```
├── index.html   → Structure & layout
├── style.css    → Styling & responsiveness  
├── script.js    → Cart logic & DOM updates
```