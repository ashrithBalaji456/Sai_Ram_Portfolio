import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="education">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Journey
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Secondary Education</h4>
                <h5>Trinity High School, Mancherial</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Completed secondary schooling in March 2020 with a perfect{" "}
              <strong>10.0 / 10 GPA</strong>, establishing strong academic
              excellence and scientific foundations.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intermediate Education</h4>
                <h5>Sri Chaitanya Junior College, Hyderabad</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Completed intermediate education (MPC) in June 2022 with{" "}
              <strong>94.1% distinction</strong> in Mathematics, Physics, and
              Chemistry.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in CSE (AI &amp; ML)</h4>
                <h5>Institute of Aeronautical Engineering, Hyderabad</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Completing B.Tech in Computer Science and Engineering (Artificial
              Intelligence and Machine Learning) in May 2026 with{" "}
              <strong>8.52 / 10 GPA</strong>.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer (Digital)</h4>
                <h5>Tata Consultancy Services</h5>
              </div>
              <h3>UPCOMING</h3>
            </div>
            <p>
              Selected for TCS Digital (7 LPA package) through national
              competitive assessment, preparing to engineer scalable enterprise
              backend systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
