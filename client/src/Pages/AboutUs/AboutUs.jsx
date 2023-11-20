import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
import { useLanguage } from "../../contextAPI/ChangeLanguage";

function AboutUs() {
  const { changeLanguage } = useLanguage();
  return (
    <div>
      <Header />
      <div className="bg-rose-50">
        <div className="text-4xl h-48 text-center text-white font-bold flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <h1 className="">
            {changeLanguage ? "আমাদের সম্পর্কে" : "About Us"}
          </h1>
        </div>
        <div className="flex justify-center items-center text-left max-w-screen-xl mx-auto mb-15">
          <div className="m-6 px-20 text-slate-800 leading-loose text-lg">
            <p className="text-center">
              بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
            </p>
            <p>
              {" "}
              {changeLanguage ? "নিশ্চয়ই সকল প্রশংসা আল্লাহর। আমরা আমাদের নিজেদের মধ্যে থাকা খারাপ কাজ এবং আমাদের খারাপ কাজ থেকে তাঁর কাছে আশ্রয় চাই। নবীজির উপর সালাম ও দরূদ বর্ষিত হোক" : "Indeed, all praise belongs to Allah. We seek refuge in Him from the evils within ourselves and from our ill deeds. Peace and blessings be upon the Prophet (ﷺ)."}              
            </p>
            <p>
              {" "}
              {changeLanguage ? "বিবাহ সর্বশক্তিমান আল্লাহ প্রদত্ত একটি স্বতন্ত্র আশীর্বাদ এবং নবী (স)-এর একটি গুরুত্বপূর্ণ সুন্নত. কোরান ও হাদিস অনুসারে বিয়েকে পবিত্রতার মাধ্যম, দ্বীনের অর্ধেক এবং আর্থিক সচ্ছলতার মাধ্যম হিসেবে গণ্য করা হয়। নৈতিক, আধ্যাত্মিক, সামাজিক এবং মনস্তাত্ত্বিকভাবে এর সুবিধার জন্য আল্লাহ বিশ্বাসীদেরকে বিয়ে করার নির্দেশ দেন। মহানবী (স). কোরান ও হাদিস অনুসারে বিয়েকে পবিত্রতার মাধ্যম, দ্বীনের অর্ধেক এবং আর্থিক সচ্ছলতার মাধ্যম হিসেবে গণ্য করা হয়। নৈতিক, আধ্যাত্মিক, সামাজিক এবং মনস্তাত্ত্বিকভাবে এর সুবিধার জন্য আল্লাহ বিশ্বাসীদেরকে বিয়ে করার নির্দেশ দেন। রাসুলুল্লাহ (সাঃ) বলেছেন, “বিবাহ আমার বিধান এবং আমার অভ্যাস। যারা আমার অভ্যাস অনুসরণ করে না তারা আমার দলভুক্ত নয়।" : "Marriage is a distinctive blessing given by Almighty Allah and a vital Sunnah of the Prophet (ﷺ). According to the Qur'an and Hadith, wedding is regarded as a means of purity, half of the deen (religion) and a means of financial prosperity. Allah commands the believers to marry for its benefits morally, spiritually, socially and psychologically. The Holy Prophet(ﷺ) said, “Marriage is my precept and my practice. Those who do not follow my practice are not of me.”"}
              
            </p>

            <p className="text-center"> {changeLanguage ? "এবং" : "And"} </p>

            <p>
            {changeLanguage ? "'যখন একজন মানুষ বিয়ে করে, সে তার ধর্মের অর্ধেক পূর্ণ করে ফেলে।' বিবাহের উদ্দেশ্য হল একটি আইনি মিলন প্রদান করা যা সমাজকে নৈতিক ও সামাজিক অবক্ষয় থেকে রক্ষা করে।" : "“When a man has married, he has completed one half of his religion.” The purpose of marriage is to provide a legal union which safeguards society from moral and social degradation."}
              {" "}
            </p>

            <p>
            {changeLanguage ? "অপরদিকে জনগণের এটা বড় পরিতাপের বিষয় পশ্চিমা সভ্যতার দ্বারা প্রভাবিত হয়ে অসুস্থ জাতিকে তাড়া করছে নারী ও পুরুষের মধ্যে তথাকথিত সমতার বিরুদ্ধে যায় আল্লাহর হুকুম এবং এর ফলে নৈতিক অবক্ষয় ঘটছে সমাজে স্থান। প্রকৃতপক্ষে, অনুপ্রবেশের প্রধান কারণ শিক্ষা, কাজ এবং পশ্চিমের অসভ্য সংস্কৃতির বিয়ে হল ইসলামী শরীয়াহ ভিত্তিক নিয়ম অনুসরণ না করা এবং সম্পূর্ণ ধর্মীয় শিক্ষার অভাব। ফলে বিয়ে চ্যালেঞ্জিং হয়ে উঠেছে এবং সমাজ বোঝা হচ্ছে প্রতিনিয়ত ব্যভিচার সহ বিভিন্ন অবনতি সহ, ব্যভিচার, বিবাহ বহির্ভূত সম্পর্ক, ধর্ষণ, আত্মহত্যা ইত্যাদি।" : "On the other hand, it is a matter of great regret that people being influenced by western civilization are chasing the sick race of so-called equality between men and women that goes against the commandment of Allah and consequently, moral degradation is taking place in the society. Indeed, the main reason for the infiltration of the uncivilized culture of the West in education, work, and               marriage is not to follow the rules based on Islamic Shariah and the lack of complete religious education. As a result, marriage has become challenging and the society is being burdened constantly with various degradations including adultery, fornication, extra marital affairs, rape, suicide etc."}
              
            </p>

            <p>
            {changeLanguage ? "'তাছাড়া, যারা এই ভয়ঙ্কর ফিতনার যুগে (কষ্ট বা বিশৃঙ্খলার অবস্থা) পরিবারের অনৈসলামিক সংস্কৃতি এবং তথাকথিত সামাজিক রীতিনীতির বিরুদ্ধে সুন্নাহকে আঁকড়ে ধরার জন্য সংগ্রাম করছে, তারা ধার্মিক জীবন পেতে অনেক জটিলতার সম্মুখীন হচ্ছে। অংশীদাররা। বিষয়গুলো নিয়ে চিন্তাভাবনা করে আমরা, আল্লাহর কিছু পাপী দাস এই সমস্যাগুলো সমাধানের জন্য আশাবাদী হয়েছিলাম এবং অবশেষে একটি বাংলাদেশী ইসলামিক বৈবাহিক প্ল্যাটফর্ম NUB Metrimoni প্রতিষ্ঠা করতে সফল হয়েছি এবং 1 জানুয়ারী, 2021 তারিখে আমরা কার্যকরভাবে এর যাত্রা শুরু করেছি। আল্লাহর বিশেষ রহমত, ওয়েবসাইটটির মাধ্যমে ইতিমধ্যে শত শত অনুশীলনকারী মুসলমানের বিয়ে হয়েছে, আলহামদুলিল্লাহ।'" : "Moreover, those who are struggling against the un-Islamic culture of the family and the so-called social norms to cling to the Sunnah in this age of dreadful fitna (a state of trouble or chaos) are facing many complications to find pious life partners. Pondering over the issues we, some sinful slaves of Allah became optimistic to solve these problems and finally succeeded in establishing a Bangladeshi Islamic matrimonial platform, NUB Metrimoni and on January 1, 2021, we launched its journey effectively. By the mercy and special blessings of Allah, hundreds of practicing Muslims have already been married through the website, Alhamdulillah."}
              {" "}
            </p>

            <p>
            {changeLanguage ? "আমাদের উদ্দেশ্য হল এই ওয়েবসাইটটিকে একটি শরীয়াহ ভিত্তিক ইসলামিক বিবাহের প্ল্যাটফর্ম করা এবং ধর্মীয় ম্যাচমেকারদের খুঁজে পাওয়া সহজ করা। আমাদের সাইটের মূল উদ্দেশ্য হল বর্তমান জাহিলিয়া (অজ্ঞতার দিন) সমাজের সকল কুসংস্কার ও বর্বরতাকে মুছে দিয়ে এবং যৌতুকের বিরুদ্ধে সবাইকে সচেতন করে (কনের পরিবারের জন্য একটি চিরন্তন অভিশাপ) এবং উত্সাহিত করে ইসলামিক বিবাহের সুন্নাহ পদ্ধতিকে জনপ্রিয় করা। মহরের সাথে ম্যাচমেকিং (বর কর্তৃক মূল্যবান উপহার)।" : "Our aim is to make this website a Shariah based Islamic matrimony               platform and to make it easy to find religious matchmakers. Our prime motto of the Site is to popularize the Sunnah way of Islamic marriage by wiping out all superstitions and barbarism of the present jahiliyya (days of ignorance) society and making everyone aware against dowry (an eternal curse for the bride's family) and encouraging the matchmaking with mahr (valuable gift by grooms)."}
            </p>

            <p>
            {changeLanguage ? "উপসংহারে, আমাদের ওয়েবসাইটের বিকাশের জন্য আমাদের সুদূরপ্রসারী পরিকল্পনা রয়েছে এবং আমরা ব্যবহারকারীদের কাছে সাইটটিকে সহজ করার জন্য ক্রমাগত গবেষণা করছি। আমরা যত তাড়াতাড়ি সম্ভব সমস্ত মুসলিম ভাই ও বোনদের কাছে এই পরিষেবাটি দক্ষতার সাথে পৌঁছে দেওয়ার জন্য আমাদের সর্বোচ্চ চেষ্টা করছি। আল্লাহ আমাদের নিয়তকে শুদ্ধ রাখুন, আমাদের সকল নেক আমল সহজ করে দিন এবং বরকত দান করুন। আমীন।" : "To conclude, we have far-reaching plans for the development of our               website and we are constantly researching to make the Site easier to the users. We are trying our level best to deliver this service efficiently to all Muslim brothers and sisters as soon as possible. May Allah keep our intentions pure, make all our good deeds easy and grant us blessings. Ameen."}
              
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
