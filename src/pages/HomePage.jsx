import Hero from '../components/Hero';
import Outreach from '../components/Outreach';
import HomeGallery from '../components/HomeGallery';
import About from '../components/About';
import VideoSection from '../components/VideoSection';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <About />
      <HomeGallery />
      <VideoSection />
      <Outreach />
    </main>
  );
};

export default HomePage;