import React from "react";
import "./Projects.css";
function Projects() {
  return (
    <div className="projects">
      <h1>My Recent Works</h1>
      <div className="project_div">
        <div className="project_card">
          <img src="/invas.png" alt="" />
          <div>
            <h2>Restraunt Website</h2>
            <p>
              An restraunt website, created using MEARN stack (Mongodb, Express
              js, Node js, and React js)
              <br />
              This website allows customers of the restraunt to book an table
              and check the special menue which will be changing daily.
            </p>
          </div>
        </div>
        <div className="project_card">
          <img src="/loop.png" alt="" />
          <div>
            <h2>Loop Demo Clone</h2>
            <p>
              An clone for a website (LOOP Subscriptions) <br />
              Created by using React js, Meterial UI and some UI components to
              make it interactive. This is an clone which is made for my
              practice in creating RESPONSIVE and INTEACTIVE UI.
            </p>
          </div>
        </div>

        <div className="project_card">
          <img src="/sahil.png" alt="" />
          <div>
            <h2>Portfolio Website </h2>
            <p>
              This is an Webpage created using HTML, CSS and javascript. To
              create an Portfolio for MBA student, which is to be simple and
              less complex to make changes after.
            </p>
          </div>
        </div>
        <div className="project_card">
          <img src="/aquapidea.png" alt="" />
          <div>
            <h2>Ground Water And Weather Indicater</h2>
            <p>
              This is an Project made using DJANGO (an python frame work) which
              helps users to check the ground water level in there area and
              mannage there water consumption accordingly. This will also help
              in informing the current weather, and tries to predict the future
              ground water levels (still on going...).
            </p>
          </div>
        </div>
        <div className="project_card">
          <img src="/gaming_glog.png" alt="" />
          <div>
            <h2>Gamming Blog</h2>
            <p>
              This is an Blog page created using MEARN stack (Mongodb, Express
              js, Node js, and React js) <br />
              In which we can upload and update the latest gamming updates.
            </p>
          </div>
        </div>
        <div className="project_card">
          <img src="/airline_food.png" alt="" />
          <div>
            <h2>Airline Food Booking </h2>
            <p>
              This is an Webpage created using MEARN stack (Mongodb, Express js,
              Node js, and React js) <br />
              By using this prootal in airlines passingers can chose there meal
              according to there wish and also helps the flight staff to deliver
              the correct item to correct passenger.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
