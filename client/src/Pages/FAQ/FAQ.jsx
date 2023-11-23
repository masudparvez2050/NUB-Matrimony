import { useState } from "react";
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
import { useLanguage } from "../../contextAPI/ChangeLanguage";

const itemsEn = [
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

// Bangla Vesrion
const itemsBn = [
  {
    title: "NUB ম্যাট্রিমনি কি? এটা কিভাবে কাজ করে?",
    content:
      "NUB Metrimony হল একটি বাংলাদেশী ইসলামিক ম্যাট্রিমনি ওয়েবসাইট। এটি 1 জানুয়ারী, 2021 তারিখে এর যাত্রা শুরু করে। ওয়েবসাইটে কেউ উপজেলা ভিত্তিক অনুশীলনকারী মুসলিম বর ও কনের বায়োডাটা খুঁজে পেতে পারে এবং তাদের অভিভাবকদের সাথে যোগাযোগ করতে পারে। একই সঙ্গে বর-কনেরা চাইলে ওয়েবসাইটে বায়োডাটা তৈরি করে জমা দিতে পারেন।",
  },
  {
    title: "বায়োডাটা জমা দিতে কত খরচ হয়?",
    content:
      "বায়োডাটা সম্পূর্ণ বিনামূল্যে NUB মেট্রিমনিতে জমা দেওয়া যেতে পারে।",
  },
  {
    title: "এই ওয়েবসাইটটি কি সবার জন্য উন্মুক্ত?",
    content:
      "না, এই ওয়েবসাইটটি সকলের জন্য উন্মুক্ত নয়, শুধুমাত্র মুসলমানদের জন্য উন্মুক্ত।",
  },
  {
    title: "বায়োডাটা তৈরির জন্য কোন বিশেষ প্রয়োজনীয়তা আছে কি?",
    content:
      "পুরুষদের জন্য: i) দিনে পাঁচ ওয়াক্ত নামাজ পড়া ওয়াজিব। ii) ওয়াজিব দাড়ি রাখা সুন্নত বজায় রাখা। iii) পোশাকটি গোড়ালির নিচে ঝুলতে না দেওয়া। iv) পিতামাতার অনুমতি বাধ্যতামূলক। মহিলাদের জন্য: i) দিনে পাঁচ ওয়াক্ত নামাজ পড়া বাধ্যতামূলক। ii) 'আহলুস সুন্নাহ ওয়াল জামাআহ' এর মতানুসারে 'নেকাব' সহ অবশ্যই পর্দা করতে হবে iii) পিতামাতার অনুমতি নেওয়া আবশ্যক।",
  },
  {
    title: "আমি NUB মেট্রিমনিতে আমার বায়োডাটা জমা দেওয়ার সময় আমার তথ্য কতটা গোপনীয় হবে? কতটা প্রকাশিত হবে?",
    content:
      "আপনার বায়োডাটা অনুমোদিত হওয়ার পরে আপনার এবং আপনার পিতামাতার নাম, মোবাইল নম্বর এবং ইমেল ঠিকানা গোপন রাখা হবে। অন্যান্য সমস্ত তথ্য সাধারণ ব্যবহারকারীরা দেখতে পারেন। অর্থাৎ সাধারণ ব্যবহারকারীরা আপনার বায়োডাটা পড়তে পারে কিন্তু আপনার পরিচয় জানতে পারে না। যদি কেউ বিয়ের জন্য আপনার সাথে যোগাযোগ করতে আগ্রহী হয়, তাহলে 'সংযোগ' ব্যবহার করে সে আপনার নাম, পিতামাতার মোবাইল নম্বর এবং ইমেল ঠিকানা দেখতে পারবে এবং বিয়ের জন্য পরামর্শ করতে পারবে। দ্রষ্টব্য: বিস্তারিত জানার জন্য 'গোপনীয়তা নীতি' পড়ুন।",
  },
  {
    title:
      "কেন আমার বায়োডাটা অনুমোদন করা হয় না?",
    content:
      "বায়োডাটা বিভিন্ন কারণে অনুমোদিত হয় না। নিচে কয়েকটি স্পষ্টীকরণ উল্লেখ করা হলো। i) যদি বাবা-মাকে না জানিয়ে আমাদের ওয়েবসাইটে বায়োডাটা জমা দেওয়া হয়। ii) যদি আপনি পিতামাতার নম্বর বক্সে আপনার মোবাইল নম্বর লিখুন। iii) নিয়মিত পাঁচ ওয়াক্ত নামাজ না পড়লে। iv) যদি ওয়াজিব দাড়ি রাখা সুন্নাত বজায় না রাখা হয় (যাদের দাড়ি প্রাকৃতিক কারণে বড় হয় না তাদের ব্যতীত) vi) মহিলাদের ক্ষেত্রে, 'নেকাব' সহ তারা পর্দা না করলে vii) যদি বায়োডাটায় কোন মিথ্যা তথ্য দেওয়া হয় viii) যদি নির্দিষ্ট প্রশ্নের উত্তর স্পষ্ট উত্তর না দিয়ে ভিন্নভাবে দেওয়া হয়। যেমন, অনেকে 'আলহামদুলিল্লাহ' বা 'হুম' ইত্যাদি লেখেন কিন্তু 'হ্যাঁ/না' স্পষ্টভাবে বোঝা যায় না। ix) ইসলাম বিরোধী কিছু লেখা হলে",
  },
  {
    title: "কিছু ভুল তথ্যের কারণে আমার জীবনবৃত্তান্ত অনুমোদিত নয়। আমি কি আবার আমার জীবনবৃত্তান্ত জমা দিতে পারব?",
    content:
      "হ্যাঁ, আপনি এটা করতে পারেন. আপনি যদি আগে বক্সে লেখা ভুল তথ্য সংশোধন করে আপনার জীবনবৃত্তান্ত জমা দেন, তাহলে আপনার সংশোধন করা জীবনবৃত্তান্ত আবার অনুমোদন করা হবে ইনশাআল্লাহ। তবে এনইউবি মেট্রিমনির নিয়ম অনুসরণ না করার কারণে জীবনবৃত্তান্ত অনুমোদিত না হলে তা অনুমোদিত হবে না।",
  },
  {
    title: "আমি কি আমার বায়োডাটা আপলোড করতে পারি যদি আমি নিয়মিত পাঁচ ওয়াক্ত সালাত (নামায/নামাজ) আদায় করা সত্ত্বেও সুন্নাহ অনুসরণ করে দাড়ি না রাখি?",
    content:
      "আপনার বায়োডাটা অনুমোদন করা হবে না. শুধুমাত্র যারা ওয়াজিব দাড়ি রাখছেন তাদের বায়োডাটা জমা দেওয়ার অনুমতি দেওয়া হয়েছে। (প্রাকৃতিক কারণে যাদের দাড়ি গজায় না তাদের ব্যতীত)",
  },
  {
    title: "আমি কি কারো সাথে সরাসরি যোগাযোগ করতে পারি যদি তার বায়োডাটা আমার দ্বারা নির্বাচিত হয়?",
    content:
      "NUB মেট্রিমনি বর বা কনের সাথে সরাসরি যোগাযোগ সমর্থন করে না। শুধুমাত্র বর বা কনের অভিভাবকদের সাথে সংযোগ অনুমোদিত।",
  },
];


function FAQ() {
  const { changeLanguage} = useLanguage();
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
        <h1 className="">
        {changeLanguage ? "সাধারণ জিজ্ঞাসা" : "Some Popular Question"}
          </h1>
      </div>

      <div className="container max-w-screen-xl mx-auto w-[800px] m-10">
        <div className="w-full">
          {itemsEn.map((item, index) => (
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
