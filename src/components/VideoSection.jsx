import './VideoSection.css';

const VideoSection = () => {
  const videoId = "oFqZ_HMK2UE";

  return (
    <section className="video-section">
      <div className="section-container">
        <h2 className="section-title">Watch Our Latest Launch</h2>
        <div className="video-wrapper">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;