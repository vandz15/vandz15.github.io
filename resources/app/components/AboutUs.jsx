export default function AboutUs() {
  return (
    <section id="aboutus" className="aboutus angle">
      <div className="container">
        <div className="section-title">
          <h2>About Us</h2>
          <span className="title-border-white"></span>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="about-img"> <a href="#"> <img src="assets/images/about-us.jpg" alt="" /></a> </div>
          </div>
          <div className="col-sm-6">
            <div className="about-text">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                of Letraset sheets containing Lorem Ipsum passages, and more recently PageMaker of Lorem Ipsum.</p>
              <ul className="about-list hidden-sm">
                <li><a href="#">Electrical Repair</a></li>
                <li><a href="#">Electrical Services</a></li>
                <li><a href="#">Residential Electrician</a></li>
                <li><a href="#">Commercial Electrician</a></li>
                <li><a href="#">Industrial Electrician</a></li>
                <li><a href="#">Fan Repair</a></li>
                <li><a href="#">Ac Repair</a></li>
                <li><a href="#">Emergency Electrician</a></li>
                <li className="last"><a href="#">Electrical Repair</a></li>
                <li className="last"><a href="#">Electrical Services</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}