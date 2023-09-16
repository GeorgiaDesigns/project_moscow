import InfoContainer from "../InfoContainer";

const Footer = () => {
  return (
    <div style={{ paddingTop: "8rem" }}>
      <InfoContainer
        text={
          <>
            <p>
              <span id="pink">
                I’ve been dedicating myself to the tech industry for over 7
                years.
              </span>
              During this time, I have acquired coding skills, earned a degree
              in Information Technology, and worked as a support analyst intern.
              However,
              <span id="pink">
                it is in designing digital solutions that I have truly
                discovered my passion.
              </span>
            </p>
            <p>
              My professional journey has placed me at the forefront of
              innovation and industry best practices, as
              <span id="pink">
                I have had the privilege of working for over three years with a
                global technology solutions company.{" "}
              </span>
              During this period, I have collaborated with renowned Brazilian
              brands from diverse sectors, including banking, education,
              cosmetics, and automotive, helping them enhance their digital
              presence.
            </p>
          </>
        }
        imageUrl="src/assets/aboutme-1.jpg"
        isTextOnLeft={true}
      />
      <InfoContainer
        text={
          <>
            <p>
              <span id="pink">
                I am driven by the excitement of new experiences.
              </span>
              It is not unusual to find me developing new hobbies and skills, as
              well as learning about different countries and cultures.
              <span id="pink">
                Among my interests, traveling and music stand out the most.
              </span>
              Traveling holds a special place in my heart because it provides
              not only an opportunity to discover new places but also a chance
              to connect with nature, as music continually serves as a source of
              inspiration for me.
            </p>
            <p>
              This eagerness for novelty permeates my professional life as well.
              <span id="pink">I am known for always taking on challenges</span>
              and embarking on projects, even if they are unfamiliar territory.
              <span id="pink">
                I am particularly interested in making a positive impact on
                society
              </span>{" "}
              and would like to combine my ability to learn and adapt quickly,
              my artistic side, coding skills, and willingness for innovation
              with companies that share my commitment to this goal.
            </p>
          </>
        }
        imageUrl="src/assets/aboutme-2.jpg"
        isTextOnLeft={false}
      />
    </div>
  );
};

export default Footer;
