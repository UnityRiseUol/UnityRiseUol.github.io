import './NewsSection.css';

const NewsSection = () => {
  return (
    <section className="news-section" id="news">
      <div className="section-container">
        <h2 className="section-title">In the News</h2>
        <div className="news-grid">
          <a href="https://www.liverpool.ac.uk/engineering/news/stories/title,1565769,en.php" target="_blank" rel="noopener noreferrer" className="news-card">
            <img src="/news-article.png" alt="University of Liverpool News" className="news-thumbnail" />
            <div className="news-content">
              <h3>University of Liverpool students triumph in UK University rocket competition</h3>
              <p>A team of engineering students from the University of Liverpool have been crowned overall winners of the UK’s largest student rocket competitions, UKSEDS National Rocketry Championships.</p>
              <span className="read-more">Read More</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;