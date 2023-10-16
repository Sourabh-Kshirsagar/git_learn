import { useState } from "react";

// LIFTING THE STATE UP
const Section = ({ title, desc, isVisible, setIsVisible }) => {
  return (
    <>
      <h3>{title}</h3>
      {/* Here we created the toggler button for show and hide the things */}
      {isVisible ? (
        <button
          onClick={() => {
            setIsVisible(false);
          }}
        >
          Hide
        </button>
      ) : (
        <button
          onClick={() => {
            setIsVisible(true);
          }}
        >
          Show
        </button>
      )}
      {/* if isVisible is true then only the descreption is visible */}
      {isVisible && <p>{desc}</p>}
    </>
  );
};

const Instamart = () => {
  // If we use this then it's a huge problem bcause when we add another new compoment then again we have
  // to define here showProfile or some thing that we create that's why we did'nt use this.
  //   const [sectionConfig, setSectionConfig] = useState({
  //     showAbout: true,
  //     showTeam: false,
  //     showCareers: true,
  //   });
  const [visibleSection, setVisibleSection] = useState();
  return (
    <>
      {/* This component is just crated to check the functionlity for the Dynamic Import or chunking or etc */}
      <h3>Instamart</h3>
      <h3>Having 100's of Component</h3>
      <br></br>
      <br></br>

      {/* - */}
      <Section
        title={"About Instamart"}
        desc={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        // If we use this then it's a huge problem bcause when we add another new compoment then again we have
        // to define here showProfile or some thing that we create that's why we did'nt use this.
        // isVisible={sectionConfig.showAbout}
        isVisible={visibleSection == "about"}
        setIsVisible={() =>
          //   setSectionConfig({
          //     showAbout: true,
          //     showTeam: false,
          //     showCareers: false,
          //   })
          setVisibleSection("about")
        }
      />
      <Section
        title={"Team Instamart"}
        desc={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        // If we use this then it's a huge problem bcause when we add another new compoment then again we have
        // to define here showProfile or some thing that we create that's why we did'nt use this.
        // isVisible={sectionConfig.showTeam}
        isVisible={visibleSection == "team"}
        setIsVisible={() =>
          //   setSectionConfig({
          //     showAbout: false,
          //     showTeam: true,
          //     showCareers: false,
          //   })
          setVisibleSection("team")
        }
      />
      <Section
        title={"Careers Instamart"}
        desc={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        // If we use this then it's a huge problem bcause when we add another new compoment then again we have
        // to define here showProfile or some thing that we create that's why we did'nt use this.
        // isVisible={sectionConfig.showCareers}
        isVisible={visibleSection == "careers"}
        setIsVisible={() =>
          //   setSectionConfig({
          //     showAbout: false,
          //     showTeam: false,
          //     showCareers: true,
          //   })
          setVisibleSection("careers")
        }
      />
    </>
  );
};
export default Instamart;
