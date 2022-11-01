import Container from "./components/Container";
function App() {
  const movie = [
    {
      poster_name:"Bright",
      poster_img:"https://thearrowhead.net/wp-content/uploads/2018/02/Bright.jpg",
      year:"2017",
      Director:"David Ayer",
      duration:"117 min",
      genre:"Action,Crime,Fantasy",
      description:"In an LA rife with interspecies tensions, a human cop and his orc partner stumble on a powerful object and become embroiled in a prophesied turf war",
    },
    {
      poster_name:"Tomb Raider",
      poster_img:"https://cdnb.artstation.com/p/assets/images/images/009/473/065/large/mayank-kumar-tomb-1.jpg?1519191128",
      year:"2018",
      Director:"Roar Uthaung",
      duration:"128 min",
      genre:"Action,Fantasy",
      description:"Lara Croft, a courageous and independent young woman, sets out on a dangerous journey to unravel the truth behind her adventurer father's mysterious disappearance.",
    },
    {
      poster_name:"Knives Out",
      poster_img:"https://wallpapercave.com/wp/wp4969639.jpg",
      year:"2019",
      Director:"Rian Johnson",
      duration:"122 min",
      genre:"Crime,thriller,comedy",
      description:"Harlan Thrombey, a reputable crime novelist, is found dead after his 85th birthday celebrations. However, as detective Benoit Blanc investigates the case, it unravels a ploy of sinister intentions.",
    },
    {
      poster_name:"Parasite",
      poster_img:"https://w0.peakpx.com/wallpaper/150/542/HD-wallpaper-parasite-2019-best-korean-movie.jpg",
      year:"2019",
      Director:"Bong Joon-ho",
      duration:"132 min",
      genre:"Thriller,Mystery,Comedy",
      description:"The struggling Kim family sees an opportunity when the son starts working for the wealthy Park family. Soon, all of them find a way to work within the same household and start living a parasitic life."
    },
    {
      poster_name:"Minions",
      poster_img:"https://m.media-amazon.com/images/M/MV5BMTg2MTMyMzU0M15BMl5BanBnXkFtZTgwOTU3ODk4NTE@._V1_.jpg",
      year:"2015",
      Director:" Pierre Coffin, Kyle Balda",
      duration:"91 min",
      genre:"Comedy,Family,Adventure",
      description:"Minions Kevin, Stuart and Bob decide to find a new master. They embark on a global trip and meet Scarlett Overkill, a female super-villain who recruits them and hatches a plan to take over the world."
    },
    {
      poster_name:"Spiral",
      poster_img:"https://media-cache.cinematerial.com/p/500x/hgandj9u/spiral-from-the-book-of-saw-movie-poster.jpg?v=1620329462",
      year:"2021",
      Director:"Darren Lynn Bousman",
      duration:"93 min",
      genre:"Horor,Mysterious,Thriller",
      description:"When a policeman is murdered by a Jigsaw copycat killer, Zeke Banks is assigned to investigate the case. In the process of punishing the perpetrator, he ends up facing the demons of his past."
    }
  ]
  return (
    <div className="mainContainer">&nbsp;
      {
        movie.map((e,idx) => {
          return(
            <Container key={idx} poster_name={e.poster_name} poster_img={e.poster_img} year={e.year} Director={e.Director} duration={e.duration}
             genre={e.genre} description={e.description}/>
          )
        })
      }
      &nbsp;
    </div>
  );
}

export default App;
