// Use SampleData.movies to get this data in index.js
var movieData = [
  {
    "id": 15,
    "title": "Air",
    "rating": "PG-13",
    "runtime": "95 min",
    "genre": "Sci-Fi, Thriller",
    "released": "08/14/15",
    "cast": "Norman Reedus, Djimon Hounsou, Sandrine Holt, Michael Hogan",
    "poster": "https://ia.media-imdb.com/images/M/MV5BMjE2NjcwMjA2OF5BMl5BanBnXkFtZTgwODA5NTkxNjE@._V1_SX300.jpg",
    "plot": "In the near future, breathable air is nonexistent and two engineers tasked with guarding the last hope for mankind struggle to preserve their own lives while administering to their vital task at hand."
  },
  {
    "id": 18,
    "title": "Aloha",
    "rating": "PG-13",
    "runtime": "105 min",
    "genre": "Comedy, Drama, Romance",
    "released": "05/29/15",
    "cast": "Bradley Cooper, Emma Stone, Rachel McAdams, Bill Murray",
    "poster": "https://ia.media-imdb.com/images/M/MV5BMTg4Mjc0NTE1NV5BMl5BanBnXkFtZTgwNzcwNTQ3NTE@._V1_SX300.jpg",
    "plot": "A celebrated military contractor returns to the site of his greatest career triumphs and reconnects with a long-ago love while unexpectedly falling for the hard-charging Air Force watch-dog assigned to him."
  },
  {
    "id": 21,
    "title": "American Sniper",
    "rating": "R",
    "runtime": "133 min",
    "genre": "Action, Biography, Drama",
    "released": "01/16/15",
    "cast": "Bradley Cooper, Kyle Gallner, Cole Konis, Ben Reed",
    "poster": "https://ia.media-imdb.com/images/M/MV5BMTkxNzI3ODI4Nl5BMl5BanBnXkFtZTgwMjkwMjY4MjE@._V1_SX300.jpg",
    "plot": "Navy S.E.A.L. sniper Chris Kyle's pinpoint accuracy saves countless lives on the battlefield and turns him into a legend. Back home to his wife and kids after four tours of duty, however, Chris finds that it is the war he can't leave behind."
  },
  {
    "id": 24,
    "title": "Ant-Man",
    "rating": "PG-13",
    "runtime": "117 min",
    "genre": "Action, Adventure, Sci-Fi",
    "released": "07/17/15",
    "cast": "Paul Rudd, Michael Douglas, Evangeline Lilly, Corey Stoll",
    "poster": "https://ia.media-imdb.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_SX300.jpg",
    "plot": "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world."
  },
  {
    "id": 37,
    "title": "Batman vs. Robin",
    "rating": "PG-13",
    "runtime": "80 min",
    "genre": "Animation, Action, Adventure",
    "released": "04/14/15",
    "cast": "Stuart Allan, Troy Baker, Kevin Conroy, Trevor Devall",
    "poster": "https://ia.media-imdb.com/images/M/MV5BMjI0ODY2MDE5Nl5BMl5BanBnXkFtZTgwMTk0NTcyNTE@._V1_SX300.jpg",
    "plot": "While Damian Wayne struggles to cope with Batman's no-killing rule, he soon starts to believe that his destiny lies within a secret society known as, The Court of Owls."
  },
  {
    "id": 73,
    "title": "Daddy's Home",
    "rating": "PG-13",
    "runtime": "96 min",
    "genre": "Comedy",
    "released": "12/25/15",
    "cast": "Will Ferrell, Mark Wahlberg, Linda Cardellini, Thomas Haden Church",
    "poster": "https://ia.media-imdb.com/images/M/MV5BMTQ0OTE1MTk4N15BMl5BanBnXkFtZTgwMDM5OTk5NjE@._V1_SX300.jpg",
    "plot": "A mild-mannered radio executive strives to become the best stepdad to his wife's two children, but complications ensue when their freewheeling and freeloading real father arrives, forcing him to compete for the affection of the kids."
  },
  {
    "id": 84,
    "title": "Dope",
    "rating": "R",
    "runtime": "103 min",
    "genre": "Comedy, Crime, Drama",
    "released": "06/19/15",
    "cast": "Rakim Mayers, Blake Anderson, Bruce Beatty, De'aundre Bonds",
    "poster": "https://ia.media-imdb.com/images/M/MV5BMjA3MjYyNTk0Nl5BMl5BanBnXkFtZTgwODc1NzQ1NTE@._V1_SX300.jpg",
    "plot": "Life changes for Malcolm, a geek who's surviving life in a tough neighborhood, after a chance invitation to an underground party leads him and his friends into a Los Angeles adventure."
  },
  {
    "id": 90,
    "title": "Entourage",
    "rating": "R",
    "runtime": "104 min",
    "genre": "Comedy",
    "released": "06/03/15",
    "cast": "Kevin Connolly, Adrian Grenier, Kevin Dillon, Jerry Ferrara",
    "poster": "https://ia.media-imdb.com/images/M/MV5BMTQ3NjYxMDE1OV5BMl5BanBnXkFtZTgwMjgzOTE4MzE@._V1_SX300.jpg",
    "plot": "Movie star Vincent Chase, together with his boys Eric, Turtle, and Johnny, are back - and back in business with super agent-turned-studio head Ari Gold on a risky project that will serve as Vince's directorial debut."
  },
  {
    "id": 129,
    "title": "Inside Out",
    "rating": "PG",
    "runtime": "95 min",
    "genre": "Animation, Adventure, Comedy",
    "released": "06/19/15",
    "cast": "Amy Poehler, Phyllis Smith, Richard Kind, Bill Hader",
    "poster": "https://ia.media-imdb.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_SX300.jpg",
    "plot": "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school."
  },
  {
    "id": 130,
    "title": "Insurgent",
    "rating": "PG-13",
    "runtime": "119 min",
    "genre": "Adventure, Sci-Fi, Thriller",
    "released": "03/20/15",
    "cast": "Kate Winslet, Jai Courtney, Mekhi Phifer, Shailene Woodley",
    "poster": "https://ia.media-imdb.com/images/M/MV5BMTgxOTYxMTg3OF5BMl5BanBnXkFtZTgwMDgyMzA2NDE@._V1_SX300.jpg",
    "plot": "Beatrice Prior must confront her inner demons and continue her fight against a powerful alliance which threatens to tear her society apart with the help from others on her side."
  },
  {
    "id": 168,
    "title": "Minions",
    "rating": "PG",
    "runtime": "91 min",
    "genre": "Animation, Comedy, Family",
    "released": "07/10/15",
    "cast": "Sandra Bullock, Jon Hamm, Michael Keaton, Allison Janney",
    "poster": "https://ia.media-imdb.com/images/M/MV5BMTg2MTMyMzU0M15BMl5BanBnXkFtZTgwOTU3ODk4NTE@._V1_SX300.jpg",
    "plot": "Minions Stuart, Kevin and Bob are recruited by Scarlet Overkill, a super-villain who, alongside her inventor husband Herb, hatches a plot to take over the world."
  },
  {
    "id": 222,
    "title": "Star Wars: The Force Awakens",
    "rating": "PG-13",
    "runtime": "135 min",
    "genre": "Action, Adventure, Fantasy",
    "released": "12/18/15",
    "cast": "Harrison Ford, Mark Hamill, Carrie Fisher, Adam Driver",
    "poster": "https://ia.media-imdb.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg",
    "plot": "Three decades after the defeat of the Galactic Empire, a new threat arises. The First Order attempts to rule the galaxy and only a ragtag group of heroes can stop them, along with the help of the Resistance."
  }
]
exports.movies = movieData;
