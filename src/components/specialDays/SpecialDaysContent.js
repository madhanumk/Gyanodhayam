import React from "react";
import jai_guruji1 from "../../assets/images/sec-1.jpg";
import udal from "../../assets/images/Courses/education/course-1st-sem/img-1.jpg";
import udal_pathugapu from "../../assets/images/Courses/education/course-1st-sem/img-2.jpg";
import unavu from "../../assets/images/Courses/education/course-1st-sem/img-3.jpg";
import nalan from "../../assets/images/Courses/education/course-1st-sem/img-4.jpg";
import exam from "../../assets/images/Courses/education/course-1st-sem/img-5.jpg";
import kelvi from "../../assets/images/Courses/education/course-1st-sem/img-6.jpg";
import unmai from "../../assets/images/Courses/education/course-1st-sem/img-7.jpg";
import nalam_vazha from "../../assets/images/Courses/education/course-1st-sem/img-8.jpg";
import udal_payirchi from "../../assets/images/Courses/education/course-1st-sem/img-9.jpg";
import flower_1 from "../../assets/images/flower-1.jpg";
import flower_2 from "../../assets/images/flower-2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const SpecialDaysContent = () => {
  // useEffect(() => {
  //   AOS.init(); // Initialize AOS when the component mounts
  // }, []);

  AOS.init();

  return (
    <>
      <div>
        <div className="row intro-main">
          <div className="col-lg-6 intro-header">
            <div className="intro-outer">
              <h3 className="intro-title">
                Special Days – Gyanodhayam Educational Trust
              </h3>
              <p className="intro-content">
                Here are some special days practiced in Gyanodhayam Educational
                Trust. They are one of the recommended practices of our Guruji.
                The first Saturday of the month will be observed as an energy-
                saving day
              </p>
            </div>
          </div>

          <div className="col-lg-6" style={{ padding: "0px" }}>
            <img src={jai_guruji1} alt="jai-guruji" style={{ width: "100%" }} />
          </div>
        </div>
      </div>

      <div className="container relative mt-100 mb-100 lg-mt-50 lg-mb-50">
        <div>
          <img
            src={flower_1}
            alt="illustration"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
            className="sem1-flower-image-1"
          />
          <p
            className="first-sem-top text-align"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            Here are some special days practiced in Gyanodhayam Educational
            Trust. They are one of the recommended practices of our Guruji. The
            first Saturday of the month will be observed as an energy- saving
            day, cell phones will be turned off every second Saturday,
            fuel-saving day will be observed on every third Saturday, and
            silence will be observed every fourth Saturday. On these respective
            days, our students will avoid using electricity, mobile phones, cars
            & vehicles and will remain quiet for the whole day.
          </p>

          <h3
            className="first-sem-header text-align"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            Special Days
          </h3>
          <div>
            <div className="row">
              <div
                className="col-lg-9 order-lg-2"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1200"
              >
                {/* <h4 className="first-side-header text-align">
                  Udal Gyanam (Body)
                </h4>
                <p className="first-sem-exam text-align">
                  <span style={{ fontWeight: "bold" }}>Written Exam :</span>{" "}
                  Udal + Udal Pathugapu
                </p> */}
                <div className="text-align" style={{ paddingBottom: "20px" }}>
                  <h5 className="first-side-subHeader">Ekadasi fasting</h5>
                  <p className="first-sem-exam text-align">
                    Fasting will be observed every month on the day of Ekadasi.
                    The day next to Ekadasi will be observed as the day for
                    fruit consumption. Pomegranate will be eaten at 8:00 a.m. in
                    the morning, grapes at 11:00 a.m., oranges at 1:00 p.m., 2
                    slices of pineapple at 4:00 p.m., porridge at 6:00 p.m. and
                    a mixture of banana, grated coconut, and natural brown sugar
                    will be eaten at 9:00 p.m. on the respective day.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-3 order-lg-1 sem1-images"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1200"
              >
                <img src={udal} alt="udal" className="width-100" />
              </div>
            </div>

            <div style={{ paddingBottom: "20px", paddingTop: "20px" }}>
              <div className="row">
                <div
                  className="col-lg-9 order-lg-2 text-align"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <h5 className="first-side-subHeader">Day for Discipline</h5>
                  <p className="first-sem-exam text-align">
                    The day for discipline will be observed every year in the
                    month of January 19th. We have to take a certain vow on this
                    particular day and will abide to it from then on. That
                    specific sworn pledge will be repeatedly replicated in our
                    minds for the whole day. And the sworn mind will be followed
                    for the rest of our lives as guided by our Guruji’s
                    preachings. In one of our own published book “Ozhukkam”, our
                    Guruji has explicitly elaborated on discipline and ways to
                    follow discipline.
                  </p>
                </div>
                <div
                  className="col-lg-3 sem1-images order-lg-1"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <img
                    src={udal_pathugapu}
                    alt="udal-pathugappu"
                    className="width-100"
                  />
                </div>
              </div>
            </div>

            <div className="row" style={{ paddingBottom: "20px" }}>
              <div
                className="col-lg-9 order-lg-2  text-align"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1200"  
              >
                <div >
                  <h5 className="first-side-subHeader">Vaikunta Ekadasi</h5>
                  <img
                    src={flower_2}
                    alt="illustration"
                    className="sem1-flower-image-2"
                  />
                  <p className="first-sem-content text-align">
                    We will stay awake all night, on the day before Ekadasi and
                    will be chanting "Om Namo Narayanaya" mantra 1008 times,
                    followed by 108 Guru mantra at the end, and conclude the
                    chant with the Pooja.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-3 sem1-images order-lg-1"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1200"
              >
                <img src={unavu} alt="unavu" className="width-100" />
              </div>
            </div>
            <div style={{ paddingBottom: "20px" }}>
              <div className="row">
                <div
                  className="col-lg-9 order-lg-2  text-align"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <h5 className="first-side-subHeader">Mahasivratri</h5>
                  <p className="first-sem-content text-align">
                    On the day of Mahasivaratri, for the whole night we will
                    stay awake and chant “Om Nama Sivaya” mantra 1008 times,
                    followed by 108 times Guru mantra and complete with the
                    Pooja.
                  </p>
                </div>
                <div
                  className="col-lg-3 sem1-images order-lg-1"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <img src={nalan} alt="nalan" className="width-100" />
                </div>
              </div>
            </div>
            <div style={{ paddingBottom: "20px" }}>
              <div className="row">
                <div
                  className="col-lg-9 order-lg-2  text-align"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <h5 className="first-side-subHeader">
                    Day for wisdom (Gyana Yoga Day)
                  </h5>
                  <p className="first-sem-content">
                    Every year, on the 21st of March, Gyana Yoga Day is
                    celebrated in Gyanodhayam Educational Trust. Brahma Thavam
                    will be practiced between 6:00 and 6:30 PM in the evening.
                  </p>
                  <p className="first-sem-content">
                    A brief discourse will be given after 6:30 PM until 7:30 PM
                    from one of our own published books called "Thavam". Either
                    the Guru mantra will be chanted 1008 times, or the
                    Invocation song of our Guru and the Guru mantra will be
                    chanted 108 times each along with the Prasadh distribution.
                  </p>
                </div>
                <div
                  className="col-lg-3 sem1-images order-lg-1"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <img src={exam} alt="exam" className="width-100" />
                </div>
              </div>
            </div>

            <div style={{ paddingBottom: "20px" }}>
              <div className="row">
                <div
                  className="col-lg-9 order-lg-2  text-align"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <h5 className="first-side-subHeader">
                    Guru Poornimaa & Karma yoga day (Gyanodhayam Educational
                    Trust)
                  </h5>
                  <p className="first-sem-content">
                    This day will be observed on the full moon day during the
                    tamizh month of Panguni. On this fine day, we are
                    recommended to be actively engaged in service activity.
                  </p>
                </div>

                <div
                  className="col-lg-3 sem1-images order-lg-1"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <img src={kelvi} alt="kelvi" className="width-100" />
                </div>
              </div>
            </div>
            <div style={{ paddingBottom: "20px" }}>
              <div className="row">
                <div
                  className="col-lg-9  order-lg-2  text-align"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <h5 className="first-side-subHeader">
                    Guru’s day, Wisdom day, Buddha Poornima
                  </h5>
                  <p className="first-sem-content">
                    This auspicious day is observed in the tamizh month of
                    Vaikasi in Gyanodhayam Educational Trust. Brahma Thavam will
                    be practiced between 6:00 and 6:30 PM in the evening. A
                    brief discourse will be given after 6:30 PM until 7:30 PM
                    from one of our own published books called "Kelvi Gyanam".
                  </p>
                  <p className="first-sem-content">
                    After 7:30 PM either Guru mantra will be chanted for 1008
                    times, or the Invocation song of our Guru and the Guru
                    mantra will be chanted 108 times each along with the Prasadh
                    distribution.
                  </p>
                </div>
                <div
                  className="col-lg-3 sem1-images order-lg-1"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <img src={unmai} alt="unmai" className="width-100" />
                </div>
              </div>
            </div>
            <div style={{ paddingBottom: "20px" }}>
              <div className="row">
                <div
                  className="col-lg-9 order-lg-2  text-align"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <h5 className="first-side-subHeader">Meditation day</h5>
                  <p className="first-sem-content">
                    Every year in the month of July on 23rd, a day especially
                    for meditation will be observed. Brahma Thavam will be
                    practiced between 6:00 and 6:30 PM in the evening. A brief
                    discourse will be given after 6:30 PM until 7:30 PM from one
                    of our own published books called "Thavam". After 7:30 PM,
                    meditation and kriya prescribed individually to each of us
                    will be done along with the Prasadh distribution at the end.
                  </p>
                </div>
                <div
                  className="col-lg-3 sem1-images order-lg-1"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <img
                    src={nalam_vazha}
                    alt="nalam_vazha"
                    className="width-100"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="row">
                <div
                  className="col-lg-9 order-lg-2  text-align"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <div style={{ paddingBottom: "20px" }}>
                    <h5 className="first-side-subHeader">Bhakthi Yoga day</h5>
                    <p className="first-sem-content">
                      On the day that falls on the Jupiter transit, Bhakthi Yoga
                      day is observed every year. Brahma Thavam will be
                      practiced on this day between 6:00 PM and 6:30 PM in the
                      evening. Between 6:30 PM and 7:30 PM, a brief speech on
                     "Bhakthi Yogam" will be recited. Special pooja
                      will be performed after 7:30 PM with devotional songs on
                      our Guru and God will be performed at the end along with
                      the Prasadh distribution.
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-3 sem1-images order-lg-1"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  <img
                    src={udal_payirchi}
                    alt="udal_payirchi"
                    className="width-100"
                  />
                </div>
              </div>
            </div>
           

          </div>


          {/* <div>
            <img
              src={flower_4}
              alt="illustration"
              className="sem1-flower-image-4"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
            />
            <div className="row">
              <div
                className="col-lg-8  text-align"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1200"
              >
                <h4 className="first-side-header">
                  Rules and Regulations for Students:
                </h4>
                <ol className="first-sem-list">
                  <li>Course Duration: 24 Weeks.</li>
                  <li>
                    It is divided into two semesters. The First and second
                    semester is for 12 weeks each.
                  </li>
                  <li>Classes will be held for 4 hours every Sunday.</li>
                  <li>
                    Qualification: Students who have completed the Gyanodhayam
                    Certificate Course are eligible.
                  </li>
                  <li>Experienced teachers and Gurus will take the classes.</li>
                  <li>
                    Students will also be trained simultaneously to take
                    classes.
                  </li>
                  <li>
                    Exams will be held after the completion of each semester.
                  </li>
                  <li>
                    Students who join this course should not smoke, drink, eat
                    non-vegetarian food or use drugs. The above course is taught
                    by well-experienced and qualified teachers. These should not
                    be practiced or instructed to others without proper advice.
                  </li>
                </ol>
              </div>
              <div
                className="col-lg-4"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1200"
              ></div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default SpecialDaysContent;
