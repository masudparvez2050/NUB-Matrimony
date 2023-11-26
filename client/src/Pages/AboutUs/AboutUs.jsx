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
              <span className="text-green-600">
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

          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
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
                  : "Helal Khan is the team leader and frontend developer (ReactJS). Of this project he is assisting in all tasks including team management in this project."}{" "}
              </p>
            </div>
          </div>

          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-blue-800 text-4xl font-semibold mb-2">
                {changeLanguage ? "মাসুদুর রহমান" : "Masudur Rahman"}
              </h2>
              <p className="leading-relaxed text-xl">
                {changeLanguage
                  ? "মাসুদুর রহমান সহকারী টিম লিডার ও ব্যাকএন্ড এই প্রকল্পের জন্য বিকাশকারী (নোডজেএস)। সে সব ব্যাকএন্ড করছে এবং এই প্রকল্পে ডাটাবেস কাজ."
                  : "Masudur Rahman is the Assistant Team Leader and Backend Developer (NodeJS) for this project. He is doing all the backend and database work on this project."}{" "}
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
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
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
                  : "Jannatun Naim is the frontend designer of this project. He is doing all of the HTML, CSS work in this project. He Create HTML Structure on this project."}
              </p>
            </div>
          </div>

          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-blue-800 text-4xl font-semibold mb-2">
                {changeLanguage ? "মোঃ তসলিম উদ্দিন" : "Md. Taslim Uddin"}
              </h2>
              <p className="leading-relaxed text-xl">
                {changeLanguage
                  ? "তসলিম উদ্দিন আমাদের ইউএক্স/ইউআই বিশেষজ্ঞ। তিনি এই প্রজেক্টে HTML, CSS এর যাবতীয় কাজ করছেন। বিশেষভাবে লগইন এবং নিবন্ধন পৃষ্ঠা এবং সমগ্র ওয়েবসাইটের জন্য সমস্ত আইকন, লোগো ডিজাইনের কাজ করেছে।"
                  : "Taslim Uddin is our UX/UI expert. He is doing all the HTML, CSS work in this project. Specially Login & Registration Page and did all the icon, logo design work for the entire website."}{" "}
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

          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
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
                  : "Fatiqul Islam Asif is our UX/UI expert. He is doing all the HTML, CSS work in this project. Specially About, Contact Page and did all the graphic design work for the entire website."}{" "}
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
