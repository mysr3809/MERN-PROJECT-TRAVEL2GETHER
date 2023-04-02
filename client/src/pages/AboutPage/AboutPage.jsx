/* eslint-disable quotes */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './aboutPage.css';
import giphy from '../../assets/giphy.gif';
import giphy2 from '../../assets/giphy(2).gif';
import CardMui from '../../components/CardMui/CardMui';
import my from '../../assets/my.png';
import necati from '../../assets/necati.jpeg';
import abel from '../../assets/abel.png';
import hikmet from '../../assets/hikmet.jpeg';

const AboutPage = () => {
  return (
    <>
      <div className="aboutUs">
        <div className="aboutContainer">
          <div className="about">
            <div className="infoContainer">
              <h2>WHO WE ARE</h2>
              <p>
                In a study, people generally spend their holidays in the same
                places. The reason is that they do not want to risk their
                holidays because they do not have information about other
                places. Based on this research, we established this platform to
                transfer peoples travel experiences to others. So people can
                learn more about a place before they go on a trip. In this way,
                people have the chance to travel to different places.
              </p>
            </div>
            <div className="imgContainer">
              <img className="img1" src={giphy} alt="giphy" />
            </div>
          </div>
        </div>
        <div className="aboutContainer">
          <div className="about">
            <div className="infoContainer">
              <h2>WHAT IS OUR PURPOSE?</h2>
              <p>
                People often want to see new places and have different
                experiences. But do we have the enough knowledge for that, No.
                How can we learn this information and some tricks and whom? Of
                course, from people who have experience about the places which
                we want to go. In this way, we can use their good experiences
                and avoid their bad experiences. We wouldn"t have wasted money
                and time and our visit can be more fun!
              </p>
            </div>
            <div className="imgContainer">
              <img
                className="img1"
                src="https://pipandthecity.com/wp-content/uploads/2019/05/bigstock-170180348-800x500.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="aboutContainer">
          <div className="about">
            <div className="infoContainer">
              <h2>HOW CAN WE TRAVEL 2GETHER?</h2>
              <p>
                I am sure most of us make plans before visiting a new place. How
                do we make these plans? We have no information, maybe our money
                and time are limited. That is why you can benefit from the
                comments created by our travelers on our website. <br /> Here is
                the first piece of advice for you; <br />{' '}
                <span>
                  If you are going to Amsterdam by car, parking fees are very
                  expensive. But you can park your car cheaply at NDSM and
                  easily reach the center of Amsterdam with a FREE ferry! (You
                  can imagine it like a little canal tour).
                </span>
              </p>
            </div>
            <div className="imgContainer">
              <img className="img1" src={giphy2} alt="giphy2" />
              <span>FREE!!!</span>
            </div>
          </div>
        </div>
        <div className="introduction">
          <h2>
            <span>HERE IS THE TEAM</span>
          </h2>
          <div className="personCards">
            <CardMui
              title="Abel"
              description="Full Stack Web Developer"
              img={abel}
              github="https://github.com/Abimills"
              linkedIn="https://www.linkedin.com/in/abel-t-7660a2229/"
            />
            <CardMui
              title="Hikmet"
              description="Full Stack Web Developer"
              img={hikmet}
              github="https://github.com/hikmetdag"
              linkedIn="https://www.linkedin.com/in/hikmet-dag-8b6b87188/"
            />
            <CardMui
              title="Mustafa"
              description="Full Stack Web Developer"
              img={my}
              github="https://github.com/mysr3809"
              linkedIn="https://www.linkedin.com/in/mustafaysr"
            />
            <CardMui
              title="Necati"
              description="Full Stack Web Developer"
              img={necati}
              github="https://github.com/necati-arslan"
              linkedIn="https://www.linkedin.com/in/arslannecati/"
            />
          </div>
        </div>
        <div className="thanks-message">
          <h3>"A candle loses nothing by lighting another candle" - Mevlana</h3>
          <h3>
            We would like to thank the entire HackYourFuture family, especially
            Rob van Kruijsdijk, who shared their knowledge with us, mentored us
            and spared his valuable time.
          </h3>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
