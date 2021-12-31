import Intro from "./Intro";
import ColorBox from "./ColorBox";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Intro />

      <ColorBox user="Admin" color="blue" register={false} />
      <ColorBox user="Teacher" color="white" register={false} />
      <ColorBox user="Student" color="blue" register={false} />

      <Footer />
    </div>
  );
};

export default Home;
