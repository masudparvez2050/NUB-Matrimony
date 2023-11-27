import Header from "./../../Components/Layout/Header";
import LeftSidebar from "./LeftSidebar";
import Footer from "./../../Components/Layout/Footer";

function FavoriteList() {
  return (
    <>
      {" "}
      <main className="bg-gray-100">
        <div className="min-h-screen bg-gray-100">
          <header className="bg-white shadow">
            <Header />
          </header>
          <div>
            <div className="py-12 flex flex-wrap flex-col md:flex-row">
              {/*  --- Left Sidebar ---  */}
              <LeftSidebar />
              {/*  ---start  Right Side ---  */}
              <div className=" w-3/4  mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg h-full"></div>
              </div>

              {/*  ---End  Right Side ---  */}
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
export default FavoriteList;
