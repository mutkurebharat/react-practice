const Hero = ({ heroName }) => {
  if (heroName === "joker") {
    throw new Error("Not a Hero");
  }
  return <h1>{heroName}</h1>;
};

export default Hero;
