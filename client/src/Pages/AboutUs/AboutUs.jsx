import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
import { useLanguage } from "../../contextAPI/ChangeLanguage";
import { Link } from "react-router-dom";

function AboutUs() {
  const { changeLanguage } = useLanguage();
  return (
    <div>
      <Header />
      <section className="overflow-auto justify-center text-gray-600 ">
        <div className=" container px-5 pt-1 pb-10 mx-auto ">
          <div className="flex flex-col text-center w-full mb-2 mt-6">
            <h1 className="lg:text-6xl lg:font-bold sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-900 drop-shadow-md">
              <span className="text-blue-500">
                {changeLanguage ? "আমাদের" : "About"}
              </span>{" "}
              <span className="text-blue-500">
                {changeLanguage ? "সম্পর্কে" : "Us"}
              </span>
            </h1>
          </div>

          <div className="flex justify-center items-center text-center h-full m-5 p-5">
            <img src="/src/assets/images/Banner.png" alt="" />
          </div>

          <div className="flex items-center lg:w-3/4 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 flex-shrink-0">
              <img
                className="rounded-full border w-44 md:w-96"
                src="/src/assets/images/Helal.jpg"
                alt=""
              />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className=" text-blue-800 text-4xl font-semibold mb-2">
                {changeLanguage ? "হেলাল খান" : "Helal Khan"}
              </h2>
              <p className="leading-relaxed text-lg">
                {changeLanguage
                  ? "হেলাল খান এই প্রজেক্টের টিম লিডার এবং ফ্রন্টএন্ড ডেভেলপার (ReactJS)। এই প্রজেক্টে তিনি টিম ম্যানেজমেন্ট, ওয়ার্ক ম্যানেজমেন্টসহ সকল কাজে সহায়তা করছেন।"
                  : "As the team leader of this project, I was responsible for choosing the project topic, assigning tasks to the five team members, and providing guidance and support throughout the process. I also contributed to the frontend development (ReactJS) of the NUB Matrimony project, which is a web application that helps users find their ideal partner."}{" "}
              </p>
            </div>
          </div>

          <div className="flex items-center lg:w-3/4 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-blue-800 text-4xl font-semibold mb-2">
                {changeLanguage ? "মাসুদুর রহমান" : "Masudur Rahman"}
              </h2>
              <p className="leading-relaxed text-xl">
                {changeLanguage
                  ? "মাসুদুর রহমান সহকারী টিম লিডার ও ব্যাকএন্ড এই প্রকল্পের জন্য বিকাশকারী (নোডজেএস)। সে সব ব্যাকএন্ড করছে এবং এই প্রকল্পে ডাটাবেস কাজ."
                  : "As a backend developer for the NUB Matrimony project, I used NodeJS and JavaScript to implement various functionalities. I developed programs that enabled data exchange between the frontend and the database using multiple APIs."}{" "}
              </p>
            </div>
            <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 flex-shrink-0">
              <img
                className="rounded-full border w-44 md:w-96"
                src="/src/assets/images/Masud.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="flex items-center lg:w-3/4 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 flex-shrink-0">
              <img
                className="rounded-full border w-44 md:w-96"
                src="/src/assets/images/00.jpg"
                alt=""
              />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-blue-800 text-4xl font-semibold mb-2">
                {changeLanguage ? "জান্নাতুন নাইম" : "Jannatun Naim"}
              </h2>
              <p className="leading-relaxed text-xl">
                {changeLanguage
                  ? "জান্নাতুন নাইম এই প্রজেক্টের ফ্রন্ট এন্ড ডিজাইনার। তিনি এই প্রজেক্টে HTML, CSS এর সব কাজ করছেন। তিনি এই প্রকল্পে HTML স্ট্রাকচার তৈরি করেন।"
                  : "I worked on this NUB matrimony project with all the HTML & CSS.  I have created all types of input forms and designed the forms for this project. For example: login and registration. Also, I have done data collection for this project."}
              </p>
            </div>
          </div>

          <div className="flex items-center lg:w-3/4 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-blue-800 text-4xl font-semibold mb-2">
                {changeLanguage ? "মোঃ তসলিম উদ্দিন" : "Md. Taslim Uddin"}
              </h2>
              <p className="leading-relaxed text-xl">
                {changeLanguage
                  ? "তসলিম উদ্দিন আমাদের ইউএক্স/ইউআই বিশেষজ্ঞ। তিনি এই প্রজেক্টে HTML, CSS এর যাবতীয় কাজ করছেন। বিশেষভাবে লগইন এবং নিবন্ধন পৃষ্ঠা এবং সমগ্র ওয়েবসাইটের জন্য সমস্ত আইকন, লোগো ডিজাইনের কাজ করেছে।"
                  : "I designed the UX/UI design, contributed to HTML and CSS development, and crafted logos, icons, and login/registration forms for the project."}{" "}
              </p>
            </div>
            <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 flex-shrink-0">
              <img
                className="rounded-full border w-44 md:w-96"
                src="/src/assets/images/Taslim.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="flex items-center lg:w-3/4 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 flex-shrink-0">
              <img
                className="rounded-full border w-44 md:w-96"
                src="/src/assets/images/Asif.jpg"
                alt=""
              />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className=" text-blue-800 text-4xl font-semibold mb-2">
                {changeLanguage
                  ? "ফাতিকুল ফেরদাউস আসিফ"
                  : "Fatiqul Ferdush Asif"}
              </h2>
              <p className="leading-relaxed text-lg">
                {changeLanguage
                  ? "ফাতিকুল ইসলাম আসিফ আমাদের UX/UI এক্সপার্ট। তিনি এই প্রজেক্টে HTML, CSS এর যাবতীয় কাজ করছেন। বিশেষভাবে আমাদের সম্পর্কে, যোগাযোগ পেইজ এবং পুরো ওয়েবসাইটের জন্য সমস্ত গ্রাফিক ডিজাইনের কাজ করেছেন।"
                  : "I am the creative force behind the project, overseeing the UX/UI design, actively participating in HTML and CSS development, and meticulously crafting key elements such as the website background and the About/Guide pages. Notably, I dedicated special attention to the About and Contact pages, and personally executed all graphic design work across the entire website"}{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AboutUs;
