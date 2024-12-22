import "./About.scss";

const About = () => {
  return (
    <>
      <section className="company">
        <div className="company__content">
          <h2 className="company__title">
            Поднимите свои мероприятия на новый уровень с помощью Наших сервисов
          </h2>
          <p className="company__description">
            AВ SEC 2.0 Entertainment мы специализируемся на том, чтобы превратить ваши торжества в
            поистине незабываемые впечатления. Имея тщательно подобранный список ведущих
            ди-джеев,артистов, ведущих, фотографов, видеографов. Мы обслуживаем широкий спектр
            мероприятий, включая свадьбы, юбилеи, дни рождения, корпоративные мероприятия и
            различные. Каждое мероприятие — это уникальная симфония, а наши специалисты — маэстро,
            которые воплощают ее в жизнь
          </p>
          <p className="company__description">
            <b>Почему выбирают нас?</b> Мы понимаем, что каждое событие уникально. Наши диджеи
            подберут музыку в соответствии с вашими предпочтениями и атмосферой мероприятия. Ведущие
            создадут дружелюбную атмосферу, вовлекая гостей в интерактивные игры и конкурсы. А наши
            артисты добавят яркие эмоции и впечатления, выступая на вашем празднике.
          </p>
          <p className="company__description">
            <b>Как мы работаем?</b> Мы внимательно выслушаем ваши пожелания и предложим
            индивидуальный подход к организации. С нами вы можете быть уверены в высоком качестве
            услуг и профессионализме команды.
          </p>
          <p className="company__description">
            Не упустите возможность сделать ваше мероприятие по-настоящему особенным! Свяжитесь с
            нами уже сегодня, чтобы обсудить детали и забронировать дату. Ваш идеальный праздник
            начинается здесь! *ЧИТАТЬ больше о нас и услугах в разделе Блог
          </p>

          <div className="company__contacts">
            <h3 className="contacts__title">Связаться с нами</h3>
            <p className="contacts__info">
              <strong>Phone:</strong> +79153487275
            </p>
            <p className="contacts__info">
              <strong>Электронная почта:</strong> sec2.0entertainment@mail.ru
            </p>
            <p className="contacts__info">
              <strong>Адрес:</strong> 123112, г. Москва, наб Пресненская, д. 8 стр. 1
            </p>
            <p className="contacts__info">
              <strong>ИНН:</strong> 9703059660
            </p>
            <p className="contacts__info">
              <strong>КПП:</strong> 770301001
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
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.654486250162!2d37.5365698768812!3d55.747132073082156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54bdc5428a163%3A0x3b0b79e32bc6df32!2zZ29yb2QgU3RvbGl0cywgUHJlc25lbnNrYXlhIE5hYmVyZXpobmF5YSwgOCDRgdGC0YDQvtC10L3QuNC1IDEsIE1vc2t2YSwgMTIzMzE3!5e0!3m2!1sen!2sru!4v1733681126269!5m2!1sen!2sru"
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
