import React from "react";

const imgLink =
  "https://images.unsplash.com/photo-1609127102567-8a9a21dc27d8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGxlbW9uc3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";

const Hero = (props) => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const style = {
    position: "fixed",
    top: 0,
    left: 0,
    "min-width": "100%",
    "min-height": "100%",
  };

  return (
    <div style={style}>
      <img
        src={`https://unsplash.it/${width}/${height}?image=${props.number}`}
        style={style}
      />
    </div>
  );
};

// const RenderHero = () => {
//   return(
//     <div>
//       <Hero name='hero' number={1054} />
//     </div>
//   )
// }

export default Hero;
