 import "./About.css"
 function About () {
    return (
        <>
        <div className="about">
        <h1>About this Project:</h1>
        <section className="aboutproject">
        <div className="projectpara">
            <p>The Team of Luke Kinoshi, Sabrina Escobar, and Spencer Simon have
            brought upon you the newest technology in video searching.</p>
        </div>
        </section>
        <h1>About the developers</h1>
            <div className="creators">
            <section className="creator1">
            <div className="dev1">
          <div className="devimg">
            <img src="https://i.imgur.com/gI4DNHk.jpg" alt="lukeKinoshi" with={10} hight={"30"}/>
          </div>
          <h1>Luke Kinoshi</h1>
          <p>Hi, my name Luke Kinoshi and I am currently learning a new computer language that will help me in my efforts to become an asset to my family and community.</p>
          <a href="https://github.com/lukekinoshi">Luke’s GitHub</a>
        </div>
            </section>
            <section className="creator2">
            <div className="dev2">
          <div className="devimg">
          <img src="https://i.imgur.com/kJEl99K.jpg” alt=“sabrinaFlores"/>
          </div>
          <h1>Sabrina Escobar</h1>
          <p>Hello, I am a Computer Science Engineering. I like to code, read the newspaper and take care of my baby. My biggest dream is to become a Web Developer.</p>
          <a href="https://github.com/Sabrinaescobar">Sabrina’s GitHub</a>
        </div>
            </section>
            <section className="creator3">
            <div className="dev3">
          <div className="devimg">
          <img src="https://i.imgur.com/HLbLikW.jpg" alt="spencerSimon" />
          </div>
          <h1>Spencer Simon</h1>
          <p>I am a skateboarder and a connoisseur of hip-hop music. I enjoy long talks on the beach, steamed lobster tails, and finding people who are genuinely interesting. Peace and love.</p>
          <a href="https://www.w3schools.com">Spencer’s GitHub</a>
        </div>
            </section>
            </div>
        </div>
        </>
    )
    }
    export default About;