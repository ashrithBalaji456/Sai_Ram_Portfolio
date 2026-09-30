import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intermediate (MPC)</h4>
                <h5>Sri Chaitanya Junior College</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Graduated with 94.1% distinction in Mathematics, Physics, and
              Chemistry, building rigorous mathematical and analytical
              problem-solving foundations.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Java Full Stack</h4>
                <h5>Wipro Talent Next</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Earned enterprise certification in Java Full Stack development,
              mastering Spring Boot RESTful microservices, database schemas, and
              modern backend architectures.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech CSE (AI &amp; ML)</h4>
                <h5>IARE Hyderabad</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Pursuing undergraduate degree in AI &amp; ML with 8.52 GPA. Solved
              317+ LeetCode problems (100 Days Badge) and engineering scalable
              full-stack and ML applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
