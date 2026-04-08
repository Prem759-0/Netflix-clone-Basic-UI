// ============================================================
//  NETFLIXX — Complete Content Database
// ============================================================

const ALL_CONTENT = [
  {
    id: 1, title: "Stranger Things", type: "show", genre: "Sci-Fi",
    year: 2024, rating: "8.7", age: "16+", seasons: 4,
    match: 97, duration: "45–60 min",
    tags: ["2024", "4 Seasons", "Sci-Fi", "⭐ 8.7"],
    color: "#1a0533",
    emoji: "👾",
    desc: "When a boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange girl.",
    fullDesc: "Set in the 1980s in the fictional town of Hawkins, Indiana, the story centers on the disappearance of Will Byers and the appearance of a mysterious girl with psychokinetic abilities. As the investigation deepens, secrets emerge about a parallel dimension.",
    cast: "Millie Bobby Brown, Finn Wolfhard, Gaten Matarazzo",
    director: "The Duffer Brothers",
    genres: "Sci-Fi, Horror, Drama, Supernatural",
    moods: "Suspenseful, Nostalgic, Mind-bending",
    episodes: [
      { title: "Chapter One: The Vanishing of Will Byers", desc: "On his way home from a friend's house, Will Byers witnesses something terrifying. Nearby, a strange girl is seen wandering alone.", dur: "48 min", emoji: "🌙" },
      { title: "Chapter Two: The Weirdo on Maple Street", desc: "Lucas, Mike and Dustin try to talk to the girl they found in the woods. Hopper questions an anxious Joyce about an intruder.", dur: "55 min", emoji: "🔦" },
      { title: "Chapter Three: Holly, Jolly", desc: "Joyce convinces Hopper that Will is sending her a message. Eleven struggles to prove she's right about Will's location.", dur: "51 min", emoji: "🎄" },
      { title: "Chapter Four: The Body", desc: "Refusing to believe Will is dead, Joyce tries to connect with her son. The boys give Eleven a makeover.", dur: "50 min", emoji: "⚡" },
      { title: "Chapter Five: The Flea and the Acrobat", desc: "Hopper breaks into Hawkins Lab while Joyce and Jonathan seek answers. The boys ask Mr. Clarke how to travel to an alternate dimension.", dur: "52 min", emoji: "🔬" },
      { title: "Chapter Six: The Monster", desc: "Eleven's powers have unexpected consequences, but she knows where Will is. The boys are shocked by a betrayal.", dur: "47 min", emoji: "👾" },
    ]
  },
  {
    id: 2, title: "Breaking Bad", type: "show", genre: "Crime Drama",
    year: 2013, rating: "9.5", age: "18+", seasons: 5,
    match: 99, duration: "47 min",
    tags: ["2008–2013", "5 Seasons", "Crime", "⭐ 9.5"],
    color: "#1a1a08",
    emoji: "🧪",
    desc: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing methamphetamine with a former student to secure his family's future.",
    fullDesc: "Walter White is a struggling high school chemistry teacher in Albuquerque, NM. When he's diagnosed with Stage III cancer and given a prognosis of two years left, he decides to partner with his former student, Jesse Pinkman, to produce and sell crystal meth.",
    cast: "Bryan Cranston, Aaron Paul, Anna Gunn, Dean Norris",
    director: "Vince Gilligan",
    genres: "Crime, Drama, Thriller",
    moods: "Intense, Dark, Transformative, Gripping",
    episodes: [
      { title: "Pilot", desc: "Walter White, a high school chemistry teacher diagnosed with cancer, decides to produce and sell methamphetamine.", dur: "58 min", emoji: "🧪" },
      { title: "Cat's in the Bag", desc: "Walt and Jesse try to figure out what to do with their two captives. Meanwhile, Walt's wife Skyler grows suspicious.", dur: "47 min", emoji: "💀" },
      { title: "…And the Bag's in the River", desc: "Walt struggles with a life-or-death decision. Skyler investigates Walt's activities.", dur: "48 min", emoji: "⚖️" },
      { title: "Cancer Man", desc: "Walt tells his family about his cancer. Jesse reconnects with his family. Walt robs a chemical supply store.", dur: "47 min", emoji: "🏥" },
    ]
  },
  {
    id: 3, title: "Dark", type: "show", genre: "Sci-Fi Thriller",
    year: 2020, rating: "8.8", age: "16+", seasons: 3,
    match: 95, duration: "60 min",
    tags: ["2017–2020", "3 Seasons", "Sci-Fi", "⭐ 8.8"],
    color: "#0d0d1a",
    emoji: "⏳",
    desc: "A time-travel conspiracy mystery set across four time periods in a German town. Family bonds connect past, present, and future.",
    fullDesc: "When two children go missing in a small German town, its sinful past is exposed along with the double lives and fractured relationships that exist among four families as they search for the children. The story is an intricate puzzle full of paradoxes.",
    cast: "Louis Hofmann, Oliver Masucci, Antje Traue, Lisa Vicari",
    director: "Baran bo Odar, Jantje Friese",
    genres: "Sci-Fi, Mystery, Thriller, Drama",
    moods: "Mind-bending, Complex, Atmospheric",
    episodes: [
      { title: "Secrets", desc: "Four families in Winden are impacted by the disappearance of two young children. Connections between the families are revealed.", dur: "60 min", emoji: "🌀" },
      { title: "Lies", desc: "A strange discovery in a cave shakes Winden. Jonas struggles with the past. 1986: A young Ulrich makes a disturbing discovery.", dur: "58 min", emoji: "🕳️" },
      { title: "Past and Present", desc: "Jonas discovers a map in his father's study. As two eras converge, the mystery deepens even further.", dur: "63 min", emoji: "📜" },
    ]
  },
  {
    id: 4, title: "Money Heist", type: "show", genre: "Crime Thriller",
    year: 2021, rating: "8.3", age: "18+", seasons: 5,
    match: 93, duration: "50 min",
    tags: ["2017–2021", "5 Seasons", "Thriller", "⭐ 8.3"],
    color: "#1a0d0d",
    emoji: "💰",
    desc: "A criminal mastermind recruits eight thieves with personal code names based on cities to carry out an ambitious heist at the Royal Mint of Spain.",
    fullDesc: "The story is narrated by one of the members of the gang, Tokyo, and follows two long preparation heists by the gang led by the Professor. The plan: lock themselves up in the Royal Mint of Spain with several hostages and print billions of euros.",
    cast: "Álvaro Morte, Itziar Ituño, Úrsula Corberó, Miguel Herrán",
    director: "Álex Pina",
    genres: "Crime, Action, Drama, Thriller",
    moods: "Thrilling, Smart, Emotional, Fast-paced",
    episodes: [
      { title: "Episode 1", desc: "The Professor explains his plan to rob the Royal Mint of Spain. The gang assembles and prepares for the heist of the century.", dur: "42 min", emoji: "🏦" },
      { title: "Episode 2", desc: "The thieves begin the heist. Berlin takes command inside. The Professor runs the operation from outside.", dur: "45 min", emoji: "🎭" },
      { title: "Episode 3", desc: "Raquel Murillo, the lead inspector, arrives. The Professor orchestrates the situation from afar.", dur: "46 min", emoji: "👮" },
    ]
  },
  {
    id: 5, title: "The Crown", type: "show", genre: "Drama",
    year: 2023, rating: "8.6", age: "12+", seasons: 6,
    match: 91, duration: "55 min",
    tags: ["2016–2023", "6 Seasons", "Drama", "⭐ 8.6"],
    color: "#0d1a2a",
    emoji: "👑",
    desc: "An intimate portrait of Queen Elizabeth II's reign, charting political rivalries, personal intrigues, and the romances of the people who shaped postwar Britain.",
    fullDesc: "This drama follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century. The show has received universal acclaim for its production values and acting.",
    cast: "Imelda Staunton, Jonathan Pryce, Elizabeth Debicki",
    director: "Peter Morgan",
    genres: "Drama, History, Biography",
    moods: "Royal, Dramatic, Emotional, Historical",
    episodes: [
      { title: "Queen Mary", desc: "Young Elizabeth is prepared for the possibility of becoming Queen. An aging Churchill confronts new realities.", dur: "53 min", emoji: "👑" },
      { title: "The New Elizabethan", desc: "Elizabeth begins her reign. Philip adjusts to his new role as the Queen's consort.", dur: "58 min", emoji: "🏰" },
    ]
  },
  {
    id: 6, title: "Squid Game", type: "show", genre: "Thriller",
    year: 2021, rating: "8.0", age: "18+", seasons: 2,
    match: 94, duration: "32–63 min",
    tags: ["2021", "2 Seasons", "Korean Drama", "⭐ 8.0"],
    color: "#1a0d14",
    emoji: "🦑",
    desc: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits—with deadly high stakes.",
    fullDesc: "456 players, all of whom are in deep financial debt, risk their lives to play a series of deadly children's games for the chance to win ₩45.6 billion. The show explores themes of debt, capitalism, and human nature.",
    cast: "Lee Jung-jae, Park Hae-soo, HoYeon Jung, Oh Young-soo",
    director: "Hwang Dong-hyuk",
    genres: "Thriller, Drama, Action",
    moods: "Shocking, Intense, Thought-provoking",
    episodes: [
      { title: "Red Light, Green Light", desc: "Hundreds of debt-ridden players accept an invitation to compete in children's games for a massive cash prize.", dur: "60 min", emoji: "🔴" },
      { title: "Hell", desc: "Gi-hun and other players discover one another's motivations. A fight breaks out.", dur: "63 min", emoji: "⚔️" },
      { title: "The Man with the Umbrella", desc: "The players face a second challenge requiring dexterity and nerves of steel.", dur: "56 min", emoji: "🪓" },
    ]
  },
  {
    id: 7, title: "Narcos", type: "show", genre: "Crime Drama",
    year: 2017, rating: "8.8", age: "18+", seasons: 3,
    match: 96, duration: "49 min",
    tags: ["2015–2017", "3 Seasons", "True Crime", "⭐ 8.8"],
    color: "#1a1505",
    emoji: "🌿",
    desc: "The true story of the growth and spread of cocaine drug cartels across the globe and law enforcement's attempts to stop them.",
    fullDesc: "The show follows the rise and fall of Colombian drug lord Pablo Escobar and the Medellín Cartel, told through the eyes of a DEA agent. Based on true events, it blends documentary footage with dramatized scenes.",
    cast: "Wagner Moura, Boyd Holbrook, Pedro Pascal",
    director: "Chris Brancato, Doug Miro",
    genres: "Crime, Drama, History, Biographical",
    moods: "Gritty, Intense, Authentic",
    episodes: [
      { title: "Descenso", desc: "Colombian drug lord Pablo Escobar rises to power as DEA agents Steve Murphy and Javier Peña set out to stop him.", dur: "55 min", emoji: "🇨🇴" },
      { title: "The Sword of Simón Bolívar", desc: "Escobar becomes the most wanted criminal in the world while building his empire.", dur: "50 min", emoji: "💊" },
    ]
  },
  {
    id: 8, title: "Mindhunter", type: "show", genre: "Psychological Thriller",
    year: 2019, rating: "8.6", age: "18+", seasons: 2,
    match: 92, duration: "55 min",
    tags: ["2017–2019", "2 Seasons", "Crime", "⭐ 8.6"],
    color: "#0a0d1a",
    emoji: "🧠",
    desc: "In the late 1970s, FBI agents Holden Ford and Bill Tench set out to interview imprisoned serial killers in order to understand and prevent future crimes.",
    fullDesc: "Set in the late 1970s and early 1980s, it chronicles the origins of criminal psychology and criminal profiling in the FBI. The show is based on the true crime book Mindhunter: Inside the FBI's Elite Serial Crime Unit.",
    cast: "Jonathan Groff, Holt McCallany, Anna Torv",
    director: "David Fincher",
    genres: "Crime, Drama, Psychological Thriller",
    moods: "Cerebral, Dark, Disturbing, Intelligent",
    episodes: [
      { title: "Episode 1", desc: "FBI Agent Holden Ford hosts a hostage negotiation training seminar in Breck City, Kansas.", dur: "57 min", emoji: "🔍" },
      { title: "Episode 2", desc: "Ford and Tench interview a convicted killer at Attica Correctional Facility.", dur: "53 min", emoji: "🗝️" },
    ]
  },
  {
    id: 9, title: "The Witcher", type: "show", genre: "Fantasy",
    year: 2023, rating: "8.2", age: "18+", seasons: 3,
    match: 88, duration: "60 min",
    tags: ["2019–2023", "3 Seasons", "Fantasy", "⭐ 8.2"],
    color: "#0d1a0d",
    emoji: "⚔️",
    desc: "Geralt of Rivia, a mutated monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
    fullDesc: "Based on the novel series of the same name by Polish author Andrzej Sapkowski. The story follows Geralt of Rivia, a solitary monster hunter who struggles to find his place in a world where people often prove more wicked than beasts.",
    cast: "Henry Cavill, Freya Allan, Anya Chalotra",
    director: "Lauren Schmidt Hissrich",
    genres: "Fantasy, Adventure, Drama, Action",
    moods: "Epic, Dark Fantasy, Action-packed",
    episodes: [
      { title: "The End's Beginning", desc: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world. He meets Renfri and Stregobor.", dur: "60 min", emoji: "🏰" },
      { title: "Four Marks", desc: "Abandoned by her father and sold to a mage, Yennefer accidentally enters the mage's world.", dur: "59 min", emoji: "✨" },
    ]
  },
  {
    id: 10, title: "Ozark", type: "show", genre: "Crime Drama",
    year: 2022, rating: "8.5", age: "18+", seasons: 4,
    match: 94, duration: "60 min",
    tags: ["2017–2022", "4 Seasons", "Crime", "⭐ 8.5"],
    color: "#0a1a14",
    emoji: "🌊",
    desc: "A financial adviser drags his family from Chicago to the Missouri Ozarks, where he must launder $500 million in five years to appease a drug boss.",
    fullDesc: "Financial advisor Marty Byrde suddenly relocates his family from Chicago to a summer resort community in the Ozarks. To appease a powerful drug lord and keep his family safe, Marty must set up a large money laundering operation.",
    cast: "Jason Bateman, Laura Linney, Sofia Hublitz, Skylar Gaertner",
    director: "Jason Bateman",
    genres: "Crime, Drama, Thriller",
    moods: "Tense, Dark, Character-driven",
    episodes: [
      { title: "Sugarwood", desc: "Marty Byrde relocates his family to the Missouri Ozarks after a money-laundering scheme goes wrong.", dur: "58 min", emoji: "💸" },
      { title: "Blue Cat", desc: "Marty scrambles to generate capital by taking over a local strip club.", dur: "57 min", emoji: "🐟" },
    ]
  },
  {
    id: 11, title: "Cobra Kai", type: "show", genre: "Action",
    year: 2023, rating: "8.5", age: "12+", seasons: 6,
    match: 90, duration: "30 min",
    tags: ["2018–2023", "6 Seasons", "Action", "⭐ 8.5"],
    color: "#1a1a08",
    emoji: "🥋",
    desc: "Decades after their 1984 tournament, Johnny Lawrence and Daniel LaRusso reignite their rivalry in this sequel to The Karate Kid.",
    fullDesc: "This series takes place 34 years after the original Karate Kid film and follows Johnny Lawrence reopening the Cobra Kai karate dojo, which re-ignites his rivalry with Daniel LaRusso, who has since become a successful car dealer.",
    cast: "Ralph Macchio, William Zabka, Courtney Henggeler",
    director: "Jon Hurwitz, Josh Heald, Hayden Schlossberg",
    genres: "Action, Drama, Sports, Comedy",
    moods: "Nostalgic, Feel-good, Action-packed",
    episodes: [
      { title: "Ace Degenerate", desc: "Thirty-four years after the 1984 All Valley Karate Tournament, a down-and-out Johnny Lawrence is inspired to restart the Cobra Kai dojo.", dur: "31 min", emoji: "🏆" },
    ]
  },
  {
    id: 12, title: "Peaky Blinders", type: "show", genre: "Crime Drama",
    year: 2022, rating: "8.8", age: "18+", seasons: 6,
    match: 96, duration: "60 min",
    tags: ["2013–2022", "6 Seasons", "Crime", "⭐ 8.8"],
    color: "#0a0a0a",
    emoji: "🎩",
    desc: "A gangster family epic set in 1919 Birmingham, England, centering on the Shelby crime family and their ambition to move up in the world.",
    fullDesc: "Set in Birmingham, England in 1919, in the aftermath of World War I. It follows the Peaky Blinders gang and their ambitious and cunning boss Tommy Shelby as he expands his criminal empire.",
    cast: "Cillian Murphy, Helen McCrory, Paul Anderson",
    director: "Steven Knight",
    genres: "Crime, Drama, Historical, Action",
    moods: "Stylish, Atmospheric, Violent, Complex",
    episodes: [
      { title: "Episode 1", desc: "Tommy Shelby and his gang, the Peaky Blinders, run the streets of Birmingham. A police inspector is sent to stop them.", dur: "58 min", emoji: "🏭" },
    ]
  },
  {
    id: 13, title: "Extraction", type: "movie", genre: "Action",
    year: 2023, rating: "7.2", age: "18+", duration: "2h 3min",
    match: 85, tags: ["2023", "Film", "Action", "⭐ 7.2"],
    color: "#1a0a05", emoji: "💥",
    desc: "A hardened mercenary's mission becomes a soul-defining journey when he's tasked with the rescue of a ruthless crime lord's kidnapped son.",
    fullDesc: "Tyler Rake, a fearless black market mercenary, embarks on the most dangerous mission of his career when he's enlisted to rescue the kidnapped son of an imprisoned international crime lord.",
    cast: "Chris Hemsworth, Rudhraksh Jaiswal, Randeep Hooda",
    director: "Sam Hargrave",
    genres: "Action, Adventure, Thriller",
    moods: "Action-packed, Intense, Emotional",
    episodes: []
  },
  {
    id: 14, title: "Bird Box", type: "movie", genre: "Horror",
    year: 2018, rating: "6.6", age: "16+", duration: "2h 4min",
    match: 78, tags: ["2018", "Film", "Horror", "⭐ 6.6"],
    color: "#0a1208", emoji: "🙈",
    desc: "When a mysterious force decimates the world's population, one woman and a pair of children make a desperate bid to reach safety.",
    fullDesc: "After an entity causes those who see it to experience their worst fears and commit suicide, a mother named Malorie Hayes must guide herself and two children while blindfolded through a forest and river to safety.",
    cast: "Sandra Bullock, Trevante Rhodes, John Malkovich",
    director: "Susanne Bier",
    genres: "Horror, Thriller, Drama, Sci-Fi",
    moods: "Suspenseful, Scary, Post-apocalyptic",
    episodes: []
  },
  {
    id: 15, title: "The Old Guard", type: "movie", genre: "Action",
    year: 2020, rating: "6.6", age: "16+", duration: "2h 5min",
    match: 82, tags: ["2020", "Film", "Action", "⭐ 6.6"],
    color: "#0a0a1a", emoji: "⚔️",
    desc: "A covert group of immortal mercenaries are suddenly exposed and must now fight to keep their identities secret just as they discover a new immortal.",
    fullDesc: "Led by a fierce, battle-hardened warrior named Andy, a covert group of tight-knit mercenaries with a mysterious inability to die have fought to protect the mortal world for centuries. But when the team is recruited to take on an emergency mission and their extraordinary abilities are exposed, it's up to Andy and Nile, the newest soldier to join their ranks, to help the group eliminate the threat of those who seek to replicate and monetize their power.",
    cast: "Charlize Theron, KiKi Layne, Matthias Schoenaerts",
    director: "Gina Prince-Bythewood",
    genres: "Action, Fantasy, Adventure",
    moods: "Slick, Mythological, Action-packed",
    episodes: []
  },
  {
    id: 16, title: "Red Notice", type: "movie", genre: "Action Comedy",
    year: 2021, rating: "6.3", age: "12+", duration: "1h 57min",
    match: 80, tags: ["2021", "Film", "Action Comedy", "⭐ 6.3"],
    color: "#1a0f0a", emoji: "🎯",
    desc: "When an Interpol agent pursues the world's most wanted art thief, an unexpected partnership is formed to catch an elusive crook whose identity rocks the world.",
    fullDesc: "An Interpol-issued Red Notice is a global alert to hunt and capture the world's most wanted. But when a daring heist brings together the FBI's top profiler and two rival criminals, there's no telling what will happen.",
    cast: "Dwayne Johnson, Ryan Reynolds, Gal Gadot",
    director: "Rawson Marshall Thurber",
    genres: "Action, Comedy, Thriller",
    moods: "Fun, Entertaining, Fast-paced",
    episodes: []
  },
  {
    id: 17, title: "Bridgerton", type: "show", genre: "Romance Drama",
    year: 2023, rating: "7.3", age: "16+", seasons: 3,
    match: 76, duration: "60 min",
    tags: ["2020–2023", "3 Seasons", "Romance", "⭐ 7.3"],
    color: "#1a0a1a", emoji: "🌹",
    desc: "The eight close-knit siblings of the Bridgerton family look for love and happiness in London high society during the Regency era.",
    fullDesc: "Based on the book series by Julia Quinn, Bridgerton is set in the competitive world of Regency era London's Ton during the season, when debutantes are presented at court. The Bridgerton family — the eight siblings — are all looking for love.",
    cast: "Phoebe Dynevor, Regé-Jean Page, Jonathan Bailey",
    director: "Chris Van Dusen",
    genres: "Romance, Drama, Historical",
    moods: "Romantic, Dramatic, Lush, Escapist",
    episodes: []
  },
  {
    id: 18, title: "Wednesday", type: "show", genre: "Comedy Horror",
    year: 2023, rating: "8.1", age: "12+", seasons: 2,
    match: 89, duration: "45 min",
    tags: ["2022–2023", "2 Seasons", "Dark Comedy", "⭐ 8.1"],
    color: "#1a1a0d", emoji: "🖤",
    desc: "Wednesday Addams navigates her years as a student at Nevermore Academy, attempting to master her psychic powers and unravel a mystery that embroiled her parents.",
    fullDesc: "This sleuthing, supernaturally infused mystery follows Wednesday Addams as a student at Nevermore Academy. She attempts to master her emerging psychic ability, thwart a monstrous killing spree that has terrorized the local town, and solve the mystery her parents faced 25 years ago.",
    cast: "Jenna Ortega, Gwendoline Christie, Riki Lindhome",
    director: "Tim Burton, James Marshall",
    genres: "Horror, Comedy, Mystery, Fantasy",
    moods: "Quirky, Dark Comedy, Mysterious",
    episodes: []
  },
  {
    id: 19, title: "Emily in Paris", type: "show", genre: "Comedy Romance",
    year: 2023, rating: "7.0", age: "12+", seasons: 4,
    match: 72, duration: "35 min",
    tags: ["2020–2023", "4 Seasons", "Comedy", "⭐ 7.0"],
    color: "#1a0d0a", emoji: "🗼",
    desc: "Emily, an ambitious American twenty-something moves to Paris for an unexpected job opportunity and must navigate new life while juggling work, friends, and love.",
    fullDesc: "Emily Cooper is an ambitious twenty-something marketing executive from Chicago who unexpectedly lands her dream job in Paris when her company acquires a French luxury marketing firm. Sent abroad to revitalize their social media strategy, Emily's French is terrible and she has never been to Paris.",
    cast: "Lily Collins, Philippine Leroy-Beaulieu, Ashley Park",
    director: "Darren Star",
    genres: "Comedy, Romance, Drama",
    moods: "Light-hearted, Romantic, Fun, Stylish",
    episodes: []
  },
  {
    id: 20, title: "Lupin", type: "show", genre: "Crime Thriller",
    year: 2023, rating: "7.5", age: "12+", seasons: 3,
    match: 87, duration: "48 min",
    tags: ["2021–2023", "3 Seasons", "Crime", "⭐ 7.5"],
    color: "#0a140a", emoji: "🎭",
    desc: "Inspired by Arsène Lupin, gentleman thief, Assane Diop sets out to avenge his father for an injustice inflicted by a wealthy family.",
    fullDesc: "Inspired by the adventures of classic literary gentleman thief Arsène Lupin, the story follows Assane Diop, the son of a Senegalese immigrant who came to France for a better life. When his father was falsely accused of stealing a precious necklace, Assane grew up to follow in the footsteps of his literary hero.",
    cast: "Omar Sy, Nicole Garcia, Clotilde Hesme",
    director: "Louis Leterrier",
    genres: "Crime, Drama, Mystery, Thriller",
    moods: "Clever, Stylish, Suspenseful",
    episodes: []
  }
];

// Content categories
const CONTENT_ROWS = {
  trending: [1, 6, 4, 12, 2, 18, 7, 20],
  toprated: [2, 3, 7, 12, 5, 10, 8, 9],
  tvrow: [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 17, 18, 19, 20],
  action: [13, 15, 16, 11, 9, 4, 6, 1],
  intl: [4, 6, 20, 7, 3, 5, 17, 19]
};

const GENRES = ["All", "Crime", "Sci-Fi", "Drama", "Action", "Horror", "Romance", "Comedy", "Thriller", "Fantasy"];

// Get by ID
function getById(id) { return ALL_CONTENT.find(c => c.id === id); }

// All shows
function getAllShows() { return ALL_CONTENT.filter(c => c.type === 'show'); }
function getAllMovies() { return ALL_CONTENT.filter(c => c.type === 'movie'); }

// Search
function searchContent(query) {
  if (!query || query.length < 2) return [];
  const q = query.toLowerCase();
  return ALL_CONTENT.filter(c =>
    c.title.toLowerCase().includes(q) ||
    c.genre.toLowerCase().includes(q) ||
    (c.cast && c.cast.toLowerCase().includes(q)) ||
    (c.genres && c.genres.toLowerCase().includes(q))
  );
}

// Related content
function getRelated(id) {
  const item = getById(id);
  return ALL_CONTENT.filter(c => c.id !== id && (c.genre === item.genre || c.type === item.type)).slice(0, 6);
}
