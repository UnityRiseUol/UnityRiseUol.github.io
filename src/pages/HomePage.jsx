import Hero from '../components/Hero';
import Outreach from '../components/Outreach';
import HomeGallery from '../components/HomeGallery';
import About from '../components/About';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <About />
      <HomeGallery />
      <Outreach />
    </main>
  );
};

export default HomePage;