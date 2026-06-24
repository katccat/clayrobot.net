const PROJECTS = {
  "inar": {
    title: "I'm not a Robot",
    description: 'A memory match game featuring trending images from the web for the tiles. Now on iOS.',
    image: '/images/banner.png',
    href: '/games/recaptcha',
    source: 'https://github.com/katccat/daily-trends-memory-game',
    tags: ['REST APIs', 'Google Trends', 'Node.js', 'JavaScript', 'Vite', 'React'],
    game: true,
  },
  "delivery": {
    title: 'Autobahn Delivery Inc. Demo',
    description: 'Play as a humble package delivery drone working in a 2D physics-based game.',
    image: '/images/autobahn-delivery.png',
    href: '/games/autobahn-delivery',
    source: 'https://github.com/katccat/AutobahnDelivery',
    tags: ['Java', 'libGDX', 'Box2D'],
    game: true,
    pixelatedImage: true,
  },
  "asteroids": {
    title: 'Asteroids 100',
    description: 'A twist on Asteroids where instead of lives you have clones!',
    image: '/images/asteroids100.webp',
    href: '/games/asteroids',
    source: 'https://github.com/katccat/asteroids100',
    game: true,
  },
  "pong": {
    title: 'Classic Pong',
    image: '/images/pong.png',
    href: '/games/pong',
    game: true,
  },
  "cfi": {
    title: 'damonwelber.com',
    description: 'A portfolio site designed and built for a working CFI.',
    href: 'https://damonwelber.com',
    source: 'https://github.com/katccat/CFI-Website',
    game: false,
  }
}
export const projects = {
  get(key) {
    return PROJECTS[key] ?? null;
  },
  getAll() {
    return Object.values(PROJECTS);
  }
};