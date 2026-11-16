/*
  FENGLE DATA

  You don't need to type file paths: run  `npm run scan`  and it matches files in
  covers/ and audio/ to the titles below by name (case, spaces, dots, "Feng - ",
  track numbers, "(Official Audio)" etc. are ignored — "mia.mp3" matches "M.I.A.").
  It also auto-detects each song's hook and writes everything to assets.js.

  releases: what you guess in COVER mode   (type: "album" | "mixtape" | "ep" | "single")
  songs:    what you guess in SONG mode    (release = id, used for the yellow "same project" hint)

  starts: optional manual clip start times (seconds) that override the auto hook,
          e.g.  starts: { "XY": 41.5 }   — use check.html to audition and tweak.

  Tracklists/singles sourced from Wikipedia, Deezer, Amazon Music, Audiomack (Nov 2026).
*/
window.FENG_DATA = {
  artist: "Feng",

  releases: [
    { id: "wtf",       title: "What The Feng",           type: "mixtape", year: 2025 },
    { id: "rockstar",  title: "Weekend Rockstar",        type: "album",   year: 2026 },
    { id: "lakepine",  title: "Summer At Camp Lakepine", type: "ep",      year: 2026 },

    { id: "s-weekend",  title: "Weekend",          type: "single", year: 2024 },
    { id: "s-girl",     title: "Girl",             type: "single", year: 2024 },
    { id: "s-primrose", title: "Primrose Hill",    type: "single", year: 2024 },
    { id: "s-park",     title: "Walk in the Park", type: "single", year: 2024 },
    { id: "s-mia",      title: "M.I.A.",           type: "single", year: 2024 },
    { id: "s-phone",    title: "Damn Phone",       type: "single", year: 2024 },
    { id: "s-meta",     title: "Metamorphosis",    type: "single", year: 2024 },
    { id: "s-princess", title: "Princess",         type: "single", year: 2025 },
    { id: "s-shooters", title: "Shooters",         type: "single", year: 2025 },
    { id: "s-dreamer",  title: "Teenage Dreamer",  type: "single", year: 2025 },
    { id: "s-xoxo",     title: "XOXO",             type: "single", year: 2025 },
    { id: "s-metyou",   title: "When I Met You",   type: "single", year: 2025 },
    { id: "s-fakefriends", title: "Fake Friends",  type: "single", year: 2026 },   // also on Summer At Camp Lakepine
  ],

  songs: [
    // What The Feng (2025)
    { title: "Kids From the West",  release: "wtf" },
    { title: "Soul 2 Soul",         release: "wtf" },
    { title: "Memories",            release: "wtf" },
    { title: "YOLO",                release: "wtf" },
    { title: "Ayia Napa",           release: "wtf" },
    { title: "XY",                  release: "wtf" },
    { title: "Left for USA",        release: "wtf" },
    { title: "Who Do U Wanna Be",   release: "wtf" },
    { title: "Mum, I'm an Artist",  release: "wtf" },
    { title: "Me vs the World",     release: "wtf" },

    // Weekend Rockstar (2026)
    { title: "Cali Crazy",      release: "rockstar" },
    { title: "J*b",             release: "rockstar" },
    { title: "Firework",        release: "rockstar" },
    { title: "Best Friend",     release: "rockstar" },
    { title: "F'd Up",          release: "rockstar" },
    { title: "Running Wild",    release: "rockstar" },
    { title: "Teenage Famous",  release: "rockstar" },
    { title: "XOXO",            release: "rockstar" },
    { title: "Ex Sex",          release: "rockstar" },
    { title: "Don't Be Normal", release: "rockstar" },
    { title: "Superstar",       release: "rockstar" },
    { title: "Dopest Girl",     release: "rockstar" },
    { title: "Wasted Youth",    release: "rockstar" },

    // Summer At Camp Lakepine (2026)
    { title: "Fake Friends",           release: "lakepine" },
    { title: "2023 Summer",            release: "lakepine" },
    { title: "Coachella",              release: "lakepine" },
    { title: "Smile Through The Pain", release: "lakepine" },
    { title: "Diary",                  release: "lakepine" },
    { title: "Vomit",                  release: "lakepine" },
    { title: "Lets Make Out",          release: "lakepine" },

    // standalone singles
    { title: "Weekend",          release: "s-weekend" },
    { title: "Girl",             release: "s-girl" },
    { title: "Primrose Hill",    release: "s-primrose" },
    { title: "Walk in the Park", release: "s-park" },
    { title: "M.I.A.",           release: "s-mia" },
    { title: "Damn Phone",       release: "s-phone" },
    { title: "Metamorphosis",    release: "s-meta" },
    { title: "Princess",         release: "s-princess" },
    { title: "Shooters",         release: "s-shooters" },
    { title: "Teenage Dreamer",  release: "s-dreamer" },
    { title: "When I Met You",   release: "s-metyou" },
  ],

  starts: {
    // "XY": 41.5,
  },
};
