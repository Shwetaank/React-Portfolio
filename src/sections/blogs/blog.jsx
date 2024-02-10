import "./blog.css";
import CommingSoon from "../../assets/comming soon.jpg";
import Card from "./../../components/card";

const blog = () => {
  return (
    <>
      <section id="blog">
        <h2>Blogs</h2>
        <div className="container container__blogs" data-aos="fade-in">
          <Card className="light">
            <h4>Under Construction</h4>
            <div className="Details">
              <div className="detail left">
                <div className="blog_portrait">
                  <img src={CommingSoon} alt="Warning Post" />
                </div>
              </div>
              <div className="detail right">
                <p>
                  🚀 I'm delighted to share that my page blogs are currently
                  undergoing <strong>exciting renovations</strong> to provide
                  you with an even more enriching experience! 🏗️ Stay tuned for
                  a plethora of <strong>captivating updates</strong> and
                  upcoming blog posts. I'm passionately crafting{" "}
                  <strong>insightful content</strong>, delivering{" "}
                  <strong>valuable insights</strong>, and creating{" "}
                  <strong>engaging reads</strong> tailored to your interests and
                  curiosity. 💡 Your patience and continued support mean the
                  world to me, and I'm incredibly grateful for your unwavering
                  encouragement. Together, we're embarking on a{" "}
                  <strong>journey of growth and discovery</strong>, and I can't
                  wait to share it with you! 🌟 Be sure to stay connected for
                  the <strong>latest updates</strong> and{" "}
                  <strong>sneak peeks</strong> into what's to come. Let's make
                  this journey <strong>memorable</strong> and{" "}
                  <strong>inspiring</strong>! 🙌 #StayTuned
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
};

export default blog;
