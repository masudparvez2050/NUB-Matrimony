import { Link } from "react-router-dom";
import Footer from "../../Components/Layout/Footer";
import Header from "../../Components/Layout/Header";

function Team() {
  return (
    <>
      <Header />
      <div>
        <div className="bg-[#ff0081] p-10 md:p-20 ">
          <h1 className="text-center font-bold text-3xl md:text-6xl text-white md:hover:text-7xl transition-all duration-700">
            Our Team Member
          </h1>
          <p className="text-center mt-3 text-white">
            Our specialist are out pride these people created stunning and come
            up with crazy ideas
          </p>
        </div>

        {/* Team Card */}
        <div className="bg-fixed ... py-5 text-center">
          <div className="flex flex-wrap justify-center md:mt-10 md:mb-10">
            <div className="mb-5 h-[600px]  border md:w-[350px] mx-3 p-3 rounded-md shadow hover:shadow-purple-300 hover:shadow-lg transition-all duration-500 bg-white md:h-[430px]">
              <div className="flex justify-center md:w-[150px] mt-4 m-auto">
                <img
                  className="border-2 rounded-full hover:shadow-xl hover:shadow-purple-300 transition-all duration-500"
                  src="/src/assets/images/Helal.jpg"
                  alt="error"
                />
              </div>
              <h2 className="flex justify-center font-bold mx-2 text-2xl mt-2">
                Helal Khan
              </h2>
              <h3 className="flex justify-center font-bold mx-2 text-xl">
                Frontend Developer
              </h3>
              <p className="flex justify-center font-semibold mx-8 text-sm">
                Helal Khan is the team leader and frontend developer (ReactJS).
                Of this project he is assisting in all tasks including team
                management in this project.
              </p>
              <div className="social-icons flex justify-around mt-5 mx-8">
                {/* <!-- Website Icon --> */}
                <Link
                  to="https://www.helal-khan.xyz"
                  title="Website"
                  target="blank">
                  <i className="fas fa-globe"></i>
                </Link>

                {/* <!-- Facebook Icon --> */}
                <a
                  href="https://www.facebook.com/helal.khan.923"
                  title="Facebook"
                  target="blank">
                  <i className="fab fa-facebook"></i>
                </a>

                {/* <!-- LinkedIn Icon --> */}
                <Link
                  to="https://www.linkedin.com/in/helalkhandev/"
                  title="LinkedIn"
                  target="blank">
                  <i className="fab fa-linkedin"></i>
                </Link>

                {/* <!-- GitHub Icon --> */}
                <Link
                  to="https://github.com/helalkhandev"
                  title="GitHub"
                  target="blank">
                  <i className="fab fa-github"></i>
                </Link>

                {/* <!-- Youtube Icon --> */}
                <Link
                  to="https://www.youtube.com/@TechTutorHelalKhan"
                  title="Youtube"
                  target="blank">
                  <i className="fab fa-youtube"></i>
                </Link>
              </div>
            </div>

            <div className="mb-5 h-[600px] border md:w-[350px] mx-3 p-3 rounded-md shadow hover:shadow-purple-300 hover:shadow-lg transition-all duration-500 bg-white md:h-[430px]">
              <div className="flex justify-center md:w-[150px] mt-4 m-auto">
                <img
                  className="border-2 rounded-full hover:shadow-xl hover:shadow-purple-300 transition-all duration-500"
                  src="/src/assets/images/Masud.jpg"
                  alt="error"
                />
              </div>
              <h2 className="flex justify-center font-bold mx-2 text-2xl mt-2">
                Masudur Rahman
              </h2>
              <h3 className="flex justify-center font-bold mx-2 text-xl">
                Backend Developer
              </h3>
              <p className="flex justify-center font-semibold mx-8 text-sm">
                Masudur Rahman is the Assistant Team Leader and Backend
                Developer (NodeJS) for this project. He is doing all the backend
                and database work on this project.
              </p>
              <div className="social-icons flex justify-around mt-5 mx-8">
                {/* <!-- Website Icon --> */}
                <Link
                  to="https://masudur-rahman.xyz"
                  title="Website"
                  target="blank">
                  <i className="fas fa-globe"></i>
                </Link>

                {/* <!-- Facebook Icon --> */}
                <Link
                  to="https://www.facebook.com/masudparvez2050"
                  title="Facebook"
                  target="blank">
                  <i className="fab fa-facebook"></i>
                </Link>

                {/* <!-- LinkedIn Icon --> */}
                <Link
                  to="https://www.linkedin.com/in/masudur-rahman-dev"
                  title="LinkedIn"
                  target="blank">
                  <i className="fab fa-linkedin"></i>
                </Link>

                {/* <!-- GitHub Icon --> */}
                <Link
                  to="https://github.com/masudparvez2050"
                  title="GitHub"
                  target="blank">
                  <i className="fab fa-github"></i>
                </Link>

                {/* <!-- Youtube Icon --> */}
                <Link
                  to="https://www.youtube.com/channel/UCNKiIgZzt3eSD1Ijw5OP1jw"
                  title="Youtube"
                  target="blank">
                  <i className="fab fa-youtube"></i>
                </Link>
              </div>
            </div>

            <div className="border h-[600px] md:w-[350px] mx-3 p-3 rounded-md shadow hover:shadow-purple-300 hover:shadow-lg transition-all duration-500 bg-white md:h-[430px]">
              <div className="flex justify-center md:w-[150px] mt-4 m-auto">
                <img
                  className="border-2 rounded-full hover:shadow-xl hover:shadow-purple-300 transition-all duration-500"
                  src="/src/assets/images/00.jpg"
                  alt="error"
                />
              </div>
              <h2 className="flex justify-center font-bold mx-2 text-2xl mt-2">
                Jannatun Naim
              </h2>
              <h3 className="flex justify-center font-bold mx-2 text-xl">
                Frontend Designer
              </h3>
              <p className="flex justify-center font-semibold mx-8 text-sm">
                Jannatun Naim is the frontend designer of this project. He is
                doing all of the HTML, CSS work in this project. He Create HTML
                Structure on this project.
              </p>
              <div className="social-icons flex justify-around mt-5 mx-8">
                {/* <!-- Website Icon --> */}
                <Link
                  to="https://jannatunnaim.xyz/"
                  title="Website"
                  target="blank">
                  <i className="fas fa-globe"></i>
                </Link>

                {/* <!-- Facebook Icon --> */}
                <Link
                  to="https://www.facebook.com/nayem.mn.7/"
                  title="Facebook"
                  target="blank">
                  <i className="fab fa-facebook"></i>
                </Link>

                {/* <!-- LinkedIn Icon --> */}
                <Link
                  to="https://www.linkedin.com/in/jannatun-naim/"
                  title="LinkedIn"
                  target="blank">
                  <i className="fab fa-linkedin"></i>
                </Link>

                {/* <!-- GitHub Icon --> */}
                <Link
                  to="https://github.com/jannatunnaim262"
                  title="GitHub"
                  target="blank">
                  <i className="fab fa-github"></i>
                </Link>

                {/* <!-- Youtube Icon --> */}
                <Link
                  to="https://www.youtube.com/channel/UCiLgKBW1yCTANG8ThfqGIBA"
                  title="Youtube"
                  target="blank">
                  <i className="fab fa-youtube"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center mt-10 mb-10">
            <div className="mb-5 h-[630px] border md:w-[350px] mx-3 p-3 rounded-md shadow hover:shadow-purple-300 hover:shadow-lg transition-all duration-500 bg-white md:h-[430px]">
              <div className="flex justify-center md:w-[150px] mt-4 m-auto">
                <img
                  className="border-2 rounded-full hover:shadow-xl hover:shadow-purple-300 transition-all duration-500"
                  src="/src/assets/images/Taslim.jpg"
                  alt="error"
                />
              </div>
              <h2 className="flex justify-center font-bold mx-2 text-2xl mt-2">
                Md. Taslim Uddin
              </h2>
              <h3 className="flex justify-center font-bold mx-2 text-xl">
                UX/UI/Frontend Designer
              </h3>
              <p className="flex justify-center font-semibold mx-8 text-sm">
                Taslim Uddin is our UX/UI expert. He is doing all the HTML, CSS
                work in this project. Specially Login & Registration Page and
                did all the icon, logo design work for the entire website.
              </p>
              <div className="social-icons flex justify-around mt-5 mx-8">
                {/* <!-- Website Dribble Icon --> */}
                <Link
                  to="https://dribbble.com/taslimgfx"
                  title="Website"
                  target="blank">
                  <i className="fa-brands fa-dribbble"></i>
                </Link>

                {/* <!-- Website Behance Icon --> */}
                <Link
                  to="https://behance.net/taslimgfx"
                  title="Website"
                  target="blank">
                  <i className="fa-brands fa-square-behance"></i>
                </Link>

                {/* <!-- Facebook Icon --> */}
                <Link
                  to="https://facebook.com/rabbiigfx"
                  title="Facebook"
                  target="blank">
                  <i className="fab fa-facebook"></i>
                </Link>

                {/* <!-- LinkedIn Icon --> */}
                <Link
                  to="https://linkedin.com/in/taslimgfx"
                  title="LinkedIn"
                  target="blank">
                  <i className="fab fa-linkedin"></i>
                </Link>

                {/* <!-- GitHub Icon --> */}
                <Link
                  to="https://github.com/toslim164"
                  title="GitHub"
                  target="blank">
                  <i className="fab fa-github"></i>
                </Link>

                {/* <!-- Youtube Icon --> */}
                <Link
                  to="https://www.youtube.com/channel/UCph4MhbpK41h0_9nity4xVg"
                  title="Youtube"
                  target="blank">
                  <i className="fab fa-youtube"></i>
                </Link>
              </div>
            </div>

            <div className="border h-[600px] md:w-[350px] mx-3 p-3 rounded-md shadow hover:shadow-purple-300 hover:shadow-lg transition-all duration-500 bg-white md:h-[430px]">
              <div className="flex justify-center md:w-[150px] mt-4 m-auto">
                <img
                  className="border-2 rounded-full hover:shadow-xl hover:shadow-purple-300 transition-all duration-500"
                  src="/src/assets/images/Asif.jpg"
                  alt="error"
                />
              </div>
              <h2 className="flex justify-center font-bold mx-2 text-2xl mt-2">
                Fatiqul Ferdush Asif
              </h2>
              <h3 className="flex justify-center font-bold mx-2 text-xl">
                UX/UI/Frontend Designer
              </h3>
              <p className="flex justify-center font-semibold mx-8 text-sm">
                Fatiqul Islam Asif is our UX/UI expert. He is doing all the
                HTML, CSS work in this project. Specially About, Contact Page
                and did all the graphic design work for the entire website.
              </p>
              <div className="social-icons flex justify-around mt-5 mx-8">
                {/* <!-- Website Icon --> */}
                <Link
                  to="https://www.yourwebsite.com"
                  title="Website"
                  target="blank">
                  <i className="fas fa-globe"></i>
                </Link>

                {/* <!-- Facebook Icon --> */}
                <Link
                  to="https://www.facebook.com/yourusername"
                  title="Facebook"
                  target="blank">
                  <i className="fab fa-facebook"></i>
                </Link>

                {/* <!-- LinkedIn Icon --> */}
                <Link
                  to="https://www.linkedin.com/in/yourusername"
                  title="LinkedIn"
                  target="blank">
                  <i className="fab fa-linkedin"></i>
                </Link>

                {/* <!-- GitHub Icon --> */}
                <Link
                  to="https://github.com/yourusername"
                  title="GitHub"
                  target="blank">
                  <i className="fab fa-github"></i>
                </Link>

                {/* <!-- Youtube Icon --> */}
                <Link
                  to="https://youtube.com/yourusername"
                  title="Youtube"
                  target="blank">
                  <i className="fab fa-youtube"></i>
                </Link>
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
