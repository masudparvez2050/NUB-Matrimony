import { Link } from "react-router-dom";
import Footer from "../../Components/Layout/Footer";
import Header from "../../Components/Layout/Header";

function Team() {
  return (
    <>
      <Header />
      <div>
        <div className="p-20 bg-[#a1b9d9]">
          <h1 className="text-center font-bold text-6xl text-white hover:text-7xl transition-all duration-700">
            Our Team Member
          </h1>
          <p className="text-center mt-3 text-white">
            Our specialist are out pride these people created stunning and come
            up with crazy ideas
          </p>
        </div>

        {/* Team Card */}
        <div className="bg-fixed ... py-5 text-center bg-[url('img/pattern.jpg')]">
          <div className="flex justify-center mt-10 mb-10">
            <div className="border md:w-[250px] mx-3 p-3 rounded-md shadow hover:shadow-purple-300 hover:shadow-lg transition-all duration-500 bg-white">
              <div className="flex justify-center md:w-[150px] mt-4 m-auto">
                <img
                  className="border-2 rounded-full hover:shadow-xl hover:shadow-purple-300 transition-all duration-500"
                  src="img/Masud.jpg"
                  alt="error"
                />
              </div>
              <h2 className="flex justify-center font-bold mx-2 text-2xl mt-2">
                Masudur Rahman
              </h2>
              <h3 className="flex justify-center font-bold mx-2 text-xl">
                Backend Developer
              </h3>
              <p className="flex justify-center font-semibold mx-8 text-md">
                masudur Rahman is our leading Backend developer.He is a
                experienced mern stack developer
              </p>
              <div className="social-icons flex justify-around mt-5 mx-8">
                {/* <!-- Website Icon --> */}
                <Link to="https://www.yourwebsite.com" title="Website">
                  <i className="fas fa-globe"></i>
                </Link>

                {/* <!-- Facebook Icon --> */}
                <Link
                  to="https://www.facebook.com/yourusername"
                  title="Facebook"
                >
                  <i className="fab fa-facebook"></i>
                </Link>

                {/* <!-- LinkedIn Icon --> */}
                <Link
                  to="https://www.linkedin.com/in/yourusername"
                  title="LinkedIn"
                >
                  <i className="fab fa-linkedin"></i>
                </Link>

                {/* <!-- GitHub Icon --> */}
                <Link to="https://github.com/yourusername" title="GitHub">
                  <i className="fab fa-github"></i>
                </Link>

                {/* <!-- Youtube Icon --> */}
                <Link to="https://youtube.com/yourusername" title="Youtube">
                  <i className="fab fa-youtube"></i>
                </Link>
              </div>
            </div>

            <div className="border md:w-[250px] mx-3 p-3 rounded-md shadow hover:shadow-purple-300 hover:shadow-lg transition-all duration-500 bg-white">
              <div className="flex justify-center md:w-[150px] mt-4 m-auto">
                <img
                  className="border-2 rounded-full hover:shadow-xl hover:shadow-purple-300 transition-all duration-500"
                  src="img/Helal.jpg"
                  alt="error"
                />
              </div>
              <h2 className="flex justify-center font-bold mx-2 text-2xl mt-2">
                Helal Khan
              </h2>
              <h3 className="flex justify-center font-bold mx-2 text-xl">
                Frontend Developer
              </h3>
              <p className="flex justify-center font-semibold mx-8 text-md">
                Helal khan is our leading frontend developer.He is a experienced
                react developer
              </p>
              <div className="social-icons flex justify-around mt-5 mx-8">
                {/* <!-- Website Icon --> */}
                <a href="https://www.yourwebsite.com" title="Website">
                  <i className="fas fa-globe"></i>
                </a>

                {/* <!-- Facebook Icon --> */}
                <a
                  href="https://www.facebook.com/yourusername"
                  title="Facebook"
                >
                  <i className="fab fa-facebook"></i>
                </a>

                {/* <!-- LinkedIn Icon --> */}
                <a
                  href="https://www.linkedin.com/in/yourusername"
                  title="LinkedIn"
                >
                  <i className="fab fa-linkedin"></i>
                </a>

                {/* <!-- GitHub Icon --> */}
                <a href="https://github.com/yourusername" title="GitHub">
                  <i className="fab fa-github"></i>
                </a>

                {/* <!-- Youtube Icon --> */}
                <a href="https://youtube.com/yourusername" title="Youtube">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>

            <div className="border md:w-[250px] mx-3 p-3 rounded-md shadow hover:shadow-purple-300 hover:shadow-lg transition-all duration-500 bg-white">
              <div className="flex justify-center md:w-[150px] mt-4 m-auto">
                <img
                  className="border-2 rounded-full hover:shadow-xl hover:shadow-purple-300 transition-all duration-500"
                  src="img/00.jpg"
                  alt="error"
                />
              </div>
              <h2 className="flex justify-center font-bold mx-2 text-2xl mt-2">
                Jannatun Naim
              </h2>
              <h3 className="flex justify-center font-bold mx-2 text-xl">
                Backend Developer
              </h3>
              <p className="flex justify-center font-semibold mx-8 text-md">
                Jannatun Naim is our frontend web designer.He is a experienced
                web designer
              </p>
              <div className="social-icons flex justify-around mt-5 mx-8">
                {/* <!-- Website Icon --> */}
                <a href="https://www.yourwebsite.com" title="Website">
                  <i className="fas fa-globe"></i>
                </a>

                {/* <!-- Facebook Icon --> */}
                <a
                  href="https://www.facebook.com/yourusername"
                  title="Facebook"
                >
                  <i className="fab fa-facebook"></i>
                </a>

                {/* <!-- LinkedIn Icon --> */}
                <a
                  href="https://www.linkedin.com/in/yourusername"
                  title="LinkedIn"
                >
                  <i className="fab fa-linkedin"></i>
                </a>

                {/* <!-- GitHub Icon --> */}
                <a href="https://github.com/yourusername" title="GitHub">
                  <i className="fab fa-github"></i>
                </a>

                {/* <!-- Youtube Icon --> */}
                <a href="https://youtube.com/yourusername" title="Youtube">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-10 mb-10">
            <div className="border md:w-[250px] mx-3 p-3 rounded-md shadow hover:shadow-purple-300 hover:shadow-lg transition-all duration-500 bg-white">
              <div className="flex justify-center md:w-[150px] mt-4 m-auto">
                <img
                  className="border-2 rounded-full hover:shadow-xl hover:shadow-purple-300 transition-all duration-500"
                  src="img/Taslim.jpg"
                  alt="error"
                />
              </div>
              <h2 className="flex justify-center font-bold mx-2 text-2xl mt-2">
                Taslim Uddin
              </h2>
              <h3 className="flex justify-center font-bold mx-2 text-xl">
                UI Designer
              </h3>
              <p className="flex justify-center font-semibold mx-8 text-md">
                Taslim Uddin is our UI expert.He is a experienced UI designer
              </p>
              <div className="social-icons flex justify-around mt-5 mx-8">
                {/* <!-- Website Icon --> */}
                <a href="https://www.yourwebsite.com" title="Website">
                  <i className="fas fa-globe"></i>
                </a>

                {/* <!-- Facebook Icon --> */}
                <a
                  href="https://www.facebook.com/yourusername"
                  title="Facebook"
                >
                  <i className="fab fa-facebook"></i>
                </a>

                {/* <!-- LinkedIn Icon --> */}
                <a
                  href="https://www.linkedin.com/in/yourusername"
                  title="LinkedIn"
                >
                  <i className="fab fa-linkedin"></i>
                </a>

                {/* <!-- GitHub Icon --> */}
                <a href="https://github.com/yourusername" title="GitHub">
                  <i className="fab fa-github"></i>
                </a>

                {/* <!-- Youtube Icon --> */}
                <a href="https://youtube.com/yourusername" title="Youtube">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>

            <div className="border md:w-[250px] mx-3 p-3 rounded-md shadow hover:shadow-purple-300 hover:shadow-lg transition-all duration-500 bg-white">
              <div className="flex justify-center md:w-[150px] mt-4 m-auto">
                <img
                  className="border-2 rounded-full hover:shadow-xl hover:shadow-purple-300 transition-all duration-500"
                  src="img/Asif.jpg"
                  alt="error"
                />
              </div>
              <h2 className="flex justify-center font-bold mx-2 text-2xl mt-2">
                Md Asif
              </h2>
              <h3 className="flex justify-center font-bold mx-2 text-xl">
                Backend Developer
              </h3>
              <p className="flex justify-center font-semibold mx-8 text-md">
                Fatiqul Islam is our UX Desinger.He is a experienced UX designer
              </p>
              <div className="social-icons flex justify-around mt-5 mx-8">
                {/* <!-- Website Icon --> */}
                <a href="https://www.yourwebsite.com" title="Website">
                  <i className="fas fa-globe"></i>
                </a>

                {/* <!-- Facebook Icon --> */}
                <a
                  href="https://www.facebook.com/yourusername"
                  title="Facebook"
                >
                  <i className="fab fa-facebook"></i>
                </a>

                {/* <!-- LinkedIn Icon --> */}
                <a
                  href="https://www.linkedin.com/in/yourusername"
                  title="LinkedIn"
                >
                  <i className="fab fa-linkedin"></i>
                </a>

                {/* <!-- GitHub Icon --> */}
                <a href="https://github.com/yourusername" title="GitHub">
                  <i className="fab fa-github"></i>
                </a>

                {/* <!-- Youtube Icon --> */}
                <a href="https://youtube.com/yourusername" title="Youtube">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Team;
