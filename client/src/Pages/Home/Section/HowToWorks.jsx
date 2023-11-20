import { useLanguage } from "../../../contextAPI/ChangeLanguage";

function HowToWorks() {
  const { changeLanguage} = useLanguage();
  return (
    <div className="p-3 max-w-screen-xl mx-auto flex-col text-center justify-center items-center mb-20">
      <h1 className="font-bold text-4xl text-indigo-900 m-5 p-3">
      {changeLanguage ? "NUB মেন্ট্রিমনি কিভাবে কাজ করে?" : "How NUB Matrimony Works"}        
      </h1>

      <div className="md:flex justify-center items-center xl:justify-between flex flex-wrap">
        {/* -------Card------- */}

        <div className="flex-col justify-center items-center bg-white p-10 h-[350px] md:w-[295px] w-[350px] border rounded-xl hover:shadow-xl drop-shadow-md mb-4 mr-4 hover:h-[360px] hover:w-[305px] transition-all duration-400 hover:shadow-purple-600">
          <div className="flex justify-center items-center mb-5">
            <img
              src="/src/assets/images/hiw-create-biodata.svg"
              alt=""
              className=" w-16"
            />
          </div>
          <p className="font-bold m-3 text-xl">{changeLanguage ? "বায়োডাটা খুুঁজুন" : "Search Biodata"}</p>
          <h1 className="text-sm ">
          {changeLanguage ? "আপনি বয়স, উপজেলা, পেশা, শিক্ষাগত যোগ্যতা সহ অনেক ফিল্টার ব্যবহার করে সহজেই বায়োডাটা অনুসন্ধান করতে পারেন।" : "You can easily search biodata using many filters including age, upazila, profession, educational qualification."}
            
          </h1>
        </div>

        {/* ----------Card------- */}

        {/* -------Card------- */}

        <div className="flex-col justify-center items-center bg-white p-10 h-[350px] md:w-[295px] w-[350px] border rounded-xl hover:shadow-xl drop-shadow-md mb-4 mr-4 hover:h-[360px] hover:w-[305px] transition-all duration-400 hover:shadow-purple-600">
          <div className="flex justify-center items-center mb-5">
            <img
              src="/src/assets/images/hiw-search.svg"
              alt=""
              className=" w-16"
            />
          </div>
          <p className="font-bold m-3 text-xl">{changeLanguage ? "বায়োডাটা তৈরি করুন" : "Create Biodata"}</p>
          <h1 className="text-sm ">
          {changeLanguage ? "যদি কেউ আপনার বায়োডাটা পছন্দ করে বা আপনি কারো বায়োডাটা পছন্দ করেন তাহলে আপনি সরাসরি তাদের অভিভাবকের সাথে যোগাযোগ করতে পারেন।" : "If someone likes your biodata or you like someone's biodata you can directly contact their parent."}
            
          </h1>
        </div>

        {/* ----------Card------- */}
        {/* -------Card------- */}

        <div className="flex-col justify-center items-center bg-white p-10 h-[350px] md:w-[295px] w-[350px] border rounded-xl hover:shadow-xl drop-shadow-md mb-4 mr-4 hover:h-[360px] hover:w-[305px] transition-all duration-400 hover:shadow-purple-600">
          <div className="flex justify-center items-center mb-5">
            <img
              src="/src/assets/images/hiw-contact.svg"
              alt=""
              className=" w-16"
            />
          </div>
          <p className="font-bold m-3 text-xl">{changeLanguage ? "বায়োডাটা তৈরি করুন" : "Create Biodata"}</p>
          <h1 className="text-sm ">
          {changeLanguage ? "আপনি যদি বায়োডাটা এবং কথোপকথন পছন্দ করেন তবে আপনার নিজের অনুসন্ধান করুন এবং সুন্নাহ অনুসারে বিয়ে করুন।" : "If you like the biodata and conversation, do your own inquiry & get married according to Sunnah."}
            
          </h1>
        </div>

        {/* ----------Card------- */}
        {/* -------Card------- */}

        <div className="flex-col justify-center items-center bg-white p-10 h-[350px] md:w-[295px] w-[350px] border rounded-xl hover:shadow-xl drop-shadow-md mb-4 mr-4 hover:h-[360px] hover:w-[305px] transition-all duration-400 hover:shadow-purple-600">
          <div className="flex justify-center items-center mb-5">
            <img
              src="/src/assets/images/hiw-success.svg"
              alt=""
              className=" w-16"
            />
          </div>
          <p className="font-bold m-3 text-xl">{changeLanguage ? "বায়োডাটা তৈরি করুন" : "Create Biodata"}</p>
          <h1 className="text-sm ">
          {changeLanguage ? "আপনি কিছু ধাপে সম্পূর্ণ বিনামূল্যে NUB Matrimony-এ একটি বায়োডাটা করতে পারেন" : "You can easily a diodata on NUB Matrimony compltely free of cost within some steps"}
            
          </h1>
        </div>

        {/* ----------Card------- */}
      </div>
    </div>
  );
}
export default HowToWorks;
