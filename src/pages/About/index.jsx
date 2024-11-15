import "./About.scss";

const About = () => {
  return (
    <>
      <section className="company">
        <div className="company__content">
          <h2 className="company__title">Elevate Your Events with Premier DJ Services</h2>
          <p className="company__description">
            At SoundWave Entertainment, we specialize in transforming your celebrations into truly
            memorable experiences. With a handpicked roster of top-tier DJs, we cater to a wide
            range of events including weddings, anniversaries, birthdays, and corporate gatherings.
            Each event is a unique symphony, and our DJs are the maestros who bring it to life.
          </p>
          <div className="company__contacts">
            <h3 className="contacts__title">Contact Us</h3>
            <p className="contacts__info">
              <strong>Phone:</strong> +1 555-0123
            </p>
            <p className="contacts__info">
              <strong>Email:</strong> contact@soundwave.com
            </p>
            <p className="contacts__info">
              <strong>Address:</strong> 123 DJ Ave, Music City, 90210
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                Facebook
              </a>
              <a href="#" className="social-link">
                Instagram
              </a>
              <a href="#" className="social-link">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </section>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2241.3209647168615!2d37.644266077081014!3d55.822388086629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b5350814130abb%3A0x4e68b854c51f9eda!2z0JrQntCh0JzQntCh!5e0!3m2!1sru!2sru!4v1722246522078!5m2!1sru!2sru"
        width="100%"
        height="600"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default About;
