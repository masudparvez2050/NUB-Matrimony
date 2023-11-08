import { useState } from "react";
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";

const items = [
  {
    title: "What is NUB Metrimony? How does it work?",
    content:
      "NUB Metrimony is a Bangladeshi Islamic Matrimony website. It started its journey on January 1, 2021. In the website someone can find biodata of Upazila-based practicing Muslim brides and grooms and also makes contact with the guardians of them. At the same time, brides and grooms can create and submit biodata on the website if they want.",
  },
  {
    title: "How much does it cost to submit biodata?",
    content:
      "Biodata can be submitted to NUB Metrimony completely free.",
  },
  {
    title: "Is this website open to everyone?",
    content:
      "No, this website is not open to everyone, only for practicing Muslims.",
  },
  {
    title: "Are there any special requirements for making biodata?",
    content:
      "For Men: i) It is obligatory to pray five times a day. ii) Keeping wajib beard maintaining sunnah. iii) Not letting the garment hang down below the ankles. iv) Parental permission is obligatory. For Women: i) It is mandatory to pray five times a day. ii) Must be veiled including 'Niqab' following the creed of 'Ahlus Sunnah Wal Jamaah' iii) It is a must to take parental permission.",
  },
  {
    title: "How confidential will my information be when I submit my biodata to NUB Metrimony? How much will be published?",
    content:
      "Your and your parents' name, mobile number and email address will be kept confidential after your biodata is approved. All other information can be seen by general users. That is, common users can read your biodata but not know your identity. If someone is interested to come in contact with you for marriage, then by using 'Connection,' he or she will be able to see your name, parents' mobile number and email address and can make consultation for wedding. Note: Read 'Privacy Policy' for details.",
  },
  {
    title:
      "Why is my biodata not approved?",
    content:
      "Biodata is not approved for various reasons. A few clarifications are mentioned below. i) If biodata is submitted on our website without informing the parents. ii) If you write your mobile number in the parents' number box. iii) If you do not pray five times a day regularly. iv) If wazib beard is not kept maintaining sunnah (Except those whose beard is not grown due to natural causes) v) For men, if the garment is not worn on the ankles. vi) In case of women, if they are not veiled including 'niqab' vii) If any false information is given in the biodata viii) If the answer to the specific question is given in a different way without giving a clear reply. For example, many people write 'Alhamdulillah' or 'Hum' etc. But 'Yes/No' is not clearly understood by it. ix) If something that goes against Islam is written",
  },
  {
    title: "My resume is not approved because of some wrong information. Will I be able to submit my resume again?",
    content:
      "Yes, you can do that. If you submit your resume after correcting the wrong information you wrote in the box earlier, your corrected resume will be approved again In sha Allah. However, if the resume is not approved due to not following the rules of NUB Metrimony, then it will not be approved.",
  },
  {
    title: "Can I upload my biodata if I do not keep beard following sunnah in spite of being a regular performer of saying prayer (Salah) five times a day?",
    content:
      "Your biodata will not be approved. Only those who are keeping wajib beard are allowed to submit their biodatas. (Except the persons whose beard is not grown due to natural causes)",
  },
  {
    title: "Could I interact with someone directly if his or her biodata is chosen by me?",
    content:
      "NUB Metrimony does not support the direct communication with brides or grooms. The connection with only guardians of brides or grooms is permitted.",
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
                className="w-full bg-white drop-shadow p-5 flex justify-between items-center hover:bg-gray-100 rounded-md text-left"
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
