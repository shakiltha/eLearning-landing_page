import slackIcon from "../assets/Group 376.png";
import microsoft from "../assets/microsoft.png";

const StudentTrust = () => {
  return (
    <div>
      <div>
        <section>
          <h4>23,000+</h4>
          <p>Active Students</p>
        </section>
        <section>
          <h4>2000+</h4>
          <p>Courses</p>
        </section>
      </div>
      <div>
        <p>
          Trusted by 23,000+ happy Students are joining with us for achieve
          their goal
        </p>
        <p>Also Featured in</p>
        <section>
          <section>
            <img src={slackIcon} alt="" />
            <span>slack</span>
          </section>
          <section>
            <img src={microsoft} alt="" />
            <span>Microsoft</span>
          </section>
          <section>
            <p>facebook</p>
          </section>
        </section>
      </div>
    </div>
  );
};

export default StudentTrust;
