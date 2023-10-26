import { useState } from "react";
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";

const items = [
  {
    title: "Lorem ipsum dolor consectetur adipisicing elit. Sunt, unde.?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt deleniti at omnis totam dignissimos accusantium unde reprehenderit incidunt nisi?",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur  Sunt, unde.?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt deleniti at omnis totam dignissimos accusantium unde reprehenderit incidunt nisi?",
  },
  {
    title: "Lorem ipsumconsectetur adipisicing elit. Sunt, unde.?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt deleniti at omnis totam dignissimos accusantium unde reprehenderit incidunt nisi?",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur  Sunt, unde.?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt deleniti at omnis totam dignissimos accusantium unde reprehenderit incidunt nisi?",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. .?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt deleniti at omnis totam dignissimos accusantium unde reprehenderit incidunt nisi?",
  },
  {
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, unde.?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt deleniti at omnis totam dignissimos accusantium unde reprehenderit incidunt nisi?",
  },
  {
    title: "Lorem ipsum dolor sit amet  elit. Sunt, unde.?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt deleniti at omnis totam dignissimos accusantium unde reprehenderit incidunt nisi?",
  },
  {
    title: "Lorem ipsum. Sunt, unde.?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt deleniti at omnis totam dignissimos accusantium unde reprehenderit incidunt nisi?",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur adipisicing ?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt deleniti at omnis totam dignissimos accusantium unde reprehenderit incidunt nisi?",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  return (
    <div>
      <Header />
      <div className=" text-4xl h-48 text-center text-white font-bold flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <h1 className="">Some Popular Question</h1>
      </div>

      <div className="container max-w-screen-xl mx-auto w-[800px] m-10">
        <div className="w-full">
          {items.map((item, index) => (
            <div key={index} className="mb-2">
              <button
                className="w-full bg-white drop-shadow p-5 flex justify-between items-center hover:bg-gray-100 rounded-md"
                onClick={() => handleClick(index)}
              >
                <span>{item.title}</span>
                <span className="text-lg transition-all duration-500 ease-in-out">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <div className="p-4 bg-white transition-all duration-500 ease-in-out transition-max-h">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default FAQ;
