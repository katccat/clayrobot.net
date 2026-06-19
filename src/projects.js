const PROJECTS = {
  "inar": {
    title: "I'm not a Robot",
    description: 'A memory match game featuring trending images from the web for the tiles.',
    href: '/games/recaptcha',
    source: 'https://github.com/katccat/daily-trends-memory-game',
  },
  "asteroids": {
    title: 'Asteroids 100',
    description: 'A twist on Asteroids where instead of lives you have clones!',
    href: '/games/asteroids',
    source: 'https://github.com/katccat/asteroids100',
  },
  "delivery": {
    title: 'Autobahn Delivery Inc. Demo',
    description: 'Play as a humble package delivery drone working for Autobahn Delivery Inc. in a 2D physics-based game.',
    href: '/games/autobahn-delivery',
    source: 'https://github.com/katccat/AutobahnDelivery',
  },
  "cfi": {
    title: 'damonwelber.com',
    description: 'A portfolio site designed and built for a working CFI.',
    href: 'https://damonwelber.com',
    source: 'https://github.com/katccat/CFI-Website',
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