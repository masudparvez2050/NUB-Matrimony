import { useState } from "react";
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
import { useLanguage } from "../../contextAPI/ChangeLanguage";

const itemsEn = [
  {
    title: "How to create an account in NUB Metrimony?",
    content:
      "1. First, go to NUB Metrimony and then click on the user icon at the upper right corner of the home page. 2. Click Create Account. 3. Registration Form will be displayed on the screen. Enter your name and select your gender. 4. Enter your email address and click the Verify button. If your email address is correct, there will be a verification code in the email box. After completing the email verification, enter the verification code in the specified field and click on the Confirm button. 5. Enter your mobile phone number and click the Verify button. If your number is correct, there will be a verification code. Enter the verification code in the specified field and click on the Confirm button. 6. Choose a password and confirm your password. 7. Check the Checkbox if you agree to the Terms and Conditions and Privacy Policyof NUB Metrimony. 8. Complete the account by clicking the Create Account button.",
  },
  {
    title: "How to submit biodata in NUB Metrimony ?",
    content:
      "1. First, log in at NUB Metrimony. Create an account if you don't have an account on NUB Metrimony. 2. Then click the Create Biodata button from the home page or dashboard. 3. Before creating the biodata, read the terms and conditions of NUB Metrimony and if you agree, check all the Checkbox and click the Create Biodata button. 4. Biodata form will be displayed. After filling in all the information, you will enter the Biodata Review Page and submit the biodata by clicking on the Submit button after checking all the information carefully. 5. Within a few days, the NUB Metrimony Customer Care will call your parents and you for verification. 6. After reviewing your biodata by NUB Metrimony Customer Care, you will be notified by email about the 'Approved' or 'Not-approved' status in sha Allah. Note : Write all the information clearly in the biodata",
  },
  {
    title: "How to edit biodata in NUB Metrimony?",
    content:
      "1. First, log in to your account. 2. Then, click the user icon at the top right corner of the page. 3. Click the Edit Biodata button. 4. The biodata form will be displayed. Review your biodata after editing the information you need and then click Submit button. 5. The NUB Metrimony Customer Care will review the information you have edited. 6. After reviewing your biodata by NUB Metrimony Customer Care, you will be notified by email about the 'Approved' or 'Not-approved' status In Sha Allah.",
  },
  {
    title: "How to temporarily hide biodata in NUB Metrimony?",
    content:
      "Keep your biodata hidden during the conversation for marriage issues with the marital alliance. Moreover, you can hide biodata for any reason with one click for any duration and your biodata will not be shown in search results. 1. First, log in to the account. 2. After logging in, go to the Dashboard or click the user icon at the top right corner. 3. Click the Slide Button under Biodata Status. 4. A Confirmation Popup will be shown. 5. Hide the biodata by clicking on the OK button. In the same way, you can make the biodata live again at any time. However, if any information is edited, Customer Care will review your biodata again.",
  },
  {
    title: "How to delete biodata in NUB Metrimony ?",
    content:
      "You can delete your biodata yourself at any time. 1. First, log in to your account. 2. Go to the dashboard after logging in and click the user icon at the upper right corner. 3. Click Settings. 4. Delete your biodata by clicking on the Delete Biodata button. Note: Once your biodata is deleted, it cannot be undone. You can hide it if necessary for a temporary period.",
  },
  {
    title: "How will I complain about a biodata?",
    content:
      "After viewing the contact information of your biodata through the Connection, if you want to make a complaint about that biodata to NUB Metrimony. 1. Click on the Report button at the bottom of the biodata page. 2. Next, submit the complaint-related information in the form on the next page. Customer Care will verify it and take proper actions and inform you shortly in sha Allah.",
  },
  {
    title: "How to purchase connection?",
    content:
      "A connection is required to view the contact number of a groom or bride's guardian on NUB Metrimony. Connections can be purchased in the following ways- 1. First, enter the dashboard. 2. Click on the Buy Connection button. 3. You will see three connection packages on this page. Select a package as per your requirement and click on the Purchase Now button. 4. Select the account from which you want to pay Bkash or Nagad and click on the Pay Now button. 5. If you select Bkash and click on Pay Now button, you can see payment checkout from Bkash. First, enter your Bkash number and click on Confirm button. 6. Enter an OTP code that will be sent to your Bkash mobile number and click on the Confirm button. 7. Enter your Bkash PIN code and click on Confirm button. 8. In this way, your payment will be done very easily and connections will be added to your account In Sha Allah. 9. You can see your connection on the dashboard and use it to get parent's number.",
  },
  {
    title: "How will I get my 'Connection' refund?",
    content:
      "You can get Connection refund if you fail to make a communication with the guardian of the bride/groom even after having contact information through Connection. However, if the guardians of the opposite wing reject your proposal due to their personal disliking, you will not get the refund. 1. First of all, click on the Report button at the bottom of the biodata. Or go to My Purchase from the Dashboard. From there, click on the Report button next to that biodata. 2. Submit your complaints by filling up the particular form. Customer Care will verify your complaints and inform you very soon in sha Allah. Check the Refund Policy of NUB Metrimony for details.",
  },
  {
    title:
      "I want to delete my account from NUB Metrimony. I don't need my remaining Connections. So, how can I get my refund?",
    content:
      "All the information related to refunds is written in our Refund Policy in detail. Click Refund Policy for details.",
  },
];

// Bangla Version
const itemsBn = [
  {
    title: "কীভাবে NAB ম্যাট্রিমনিতে একটি অ্যাকাউন্ট তৈরি করবেন?",
    content:
      "1. প্রথমে, NUB Metrimony-এ যান এবং তারপর হোম পেজের উপরের ডানদিকে কোণায় ব্যবহারকারী আইকনে ক্লিক করুন। 2. অ্যাকাউন্ট তৈরি করুন ক্লিক করুন। 3. রেজিস্ট্রেশন ফর্ম স্ক্রিনে প্রদর্শিত হবে। আপনার নাম লিখুন এবং আপনার লিঙ্গ নির্বাচন করুন. 4. আপনার ইমেল ঠিকানা লিখুন এবং যাচাই বাটনে ক্লিক করুন। আপনার ইমেল ঠিকানা সঠিক হলে, ইমেল বক্সে একটি যাচাইকরণ কোড থাকবে। ইমেল যাচাইকরণ সম্পূর্ণ করার পরে, নির্দিষ্ট ক্ষেত্রে যাচাইকরণ কোড লিখুন এবং নিশ্চিত করুন বোতামে ক্লিক করুন। 5. আপনার মোবাইল ফোন নম্বর লিখুন এবং যাচাই বাটনে ক্লিক করুন। আপনার নম্বর সঠিক হলে, একটি যাচাইকরণ কোড থাকবে। নির্দিষ্ট ক্ষেত্রে যাচাইকরণ কোড লিখুন এবং নিশ্চিত করুন বোতামে ক্লিক করুন। 6. একটি পাসওয়ার্ড চয়ন করুন এবং আপনার পাসওয়ার্ড নিশ্চিত করুন৷ 7. যদি আপনি NUB মেট্রিমোনির নিয়ম ও শর্তাবলী এবং গোপনীয়তা নীতিতে সম্মত হন তাহলে চেকবক্সটি চেক করুন৷ 8. অ্যাকাউন্ট তৈরি করুন বোতামে ক্লিক করে অ্যাকাউন্টটি সম্পূর্ণ করুন।",
  },
  {
    title: "NUB ম্যাট্রিমনিতে কীভাবে বায়োডাটা জমা দিতে হয়?",
    content:
      "1. প্রথমে, NUB মেট্রিমনিতে লগ ইন করুন। আপনার যদি NUB মেট্রিমনিতে একটি অ্যাকাউন্ট না থাকে তবে একটি অ্যাকাউন্ট তৈরি করুন৷ 2. তারপর হোম পেজ বা ড্যাশবোর্ড থেকে বায়োডাটা তৈরি করুন বোতামে ক্লিক করুন। 3. বায়োডাটা তৈরি করার আগে, NUB Metrimony-এর শর্তাবলী পড়ুন এবং যদি আপনি সম্মত হন, সমস্ত চেকবক্স চেক করুন এবং বায়োডাটা তৈরি করুন বোতামে ক্লিক করুন। 4. বায়োডাটা ফর্ম প্রদর্শিত হবে। সমস্ত তথ্য পূরণ করার পরে, আপনি বায়োডাটা পর্যালোচনা পৃষ্ঠায় প্রবেশ করবেন এবং সমস্ত তথ্য সাবধানে যাচাই করার পরে জমা বাটনে ক্লিক করে বায়োডাটা জমা দেবেন। 5. কয়েক দিনের মধ্যে, NUB মেট্রিমনি কাস্টমার কেয়ার আপনার পিতামাতা এবং আপনাকে যাচাইয়ের জন্য কল করবে। 6. NUB মেট্রিমনি কাস্টমার কেয়ার দ্বারা আপনার বায়োডাটা পর্যালোচনা করার পরে, আপনাকে ইমেলের মাধ্যমে 'অনুমোদিত' বা 'অনুমোদিত' অবস্থা সম্পর্কে অবহিত করা হবে ইন শা আল্লাহ। দ্রষ্টব্য: বায়োডাটায় সমস্ত তথ্য পরিষ্কারভাবে লিখুন",
  },
  {
    title: "NUB ম্যাট্রিমনিতে কীভাবে বায়োডাটা সম্পাদনা করবেন?",
    content:
      "1. প্রথমে, আপনার অ্যাকাউন্টে লগ ইন করুন৷ 2. তারপর, পৃষ্ঠার উপরের ডানদিকে কোণায় ব্যবহারকারী আইকনে ক্লিক করুন। 3. Edit Biodata বাটনে ক্লিক করুন। 4. বায়োডাটা ফর্ম প্রদর্শিত হবে. আপনার প্রয়োজনীয় তথ্য সম্পাদনা করার পরে আপনার বায়োডাটা পর্যালোচনা করুন এবং তারপরে জমা বোতামে ক্লিক করুন। 5. NUB Metrimony Customer Care আপনার সম্পাদনা করা তথ্য পর্যালোচনা করবে। 6. NUB মেট্রিমনি কাস্টমার কেয়ার দ্বারা আপনার বায়োডাটা পর্যালোচনা করার পর, আপনাকে ইমেলের মাধ্যমে 'অনুমোদিত' বা 'অনুমোদিত' অবস্থা সম্পর্কে অবহিত করা হবে ইন শা আল্লাহ।",
  },
  {
    title: "এনইউবি ম্যাট্রিমনিতে কীভাবে অস্থায়ীভাবে বায়োডাটা লুকাবেন?",
    content:
      "বৈবাহিক জোটের সাথে বিবাহের সমস্যাগুলির জন্য কথোপকথনের সময় আপনার বায়োডাটা লুকিয়ে রাখুন। তাছাড়া, আপনি যেকোন কারণে বায়োডাটা লুকিয়ে রাখতে পারেন যেকোন সময়ের জন্য এক ক্লিকে এবং আপনার বায়োডাটা সার্চ ফলাফলে দেখানো হবে না। 1. প্রথমে, অ্যাকাউন্টে লগ ইন করুন। 2. লগ ইন করার পরে, ড্যাশবোর্ডে যান বা উপরের ডানদিকে কোণায় ব্যবহারকারী আইকনে ক্লিক করুন৷ 3. বায়োডাটা স্থিতির অধীনে স্লাইড বোতামে ক্লিক করুন। 4. একটি নিশ্চিতকরণ পপআপ দেখানো হবে৷ 5. ওকে বোতামে ক্লিক করে বায়োডাটা লুকান। একইভাবে, আপনি যে কোনও সময় বায়োডাটা আবার লাইভ করতে পারেন। যাইহোক, যদি কোন তথ্য সম্পাদনা করা হয়, কাস্টমার কেয়ার আপনার বায়োডাটা আবার পর্যালোচনা করবে।",
  },
  {
    title: "এনইউবি ম্যাট্রিমনিতে কীভাবে বায়োডাটা মুছবেন?",
    content:
      "আপনি যেকোনো সময় আপনার বায়োডাটা নিজেই মুছে ফেলতে পারেন। 1. প্রথমে, আপনার অ্যাকাউন্টে লগ ইন করুন৷ 2. লগ ইন করার পরে ড্যাশবোর্ডে যান এবং উপরের ডানদিকে কোণায় ব্যবহারকারী আইকনে ক্লিক করুন৷ 3. সেটিংস ক্লিক করুন৷ 4. ডিলিট বায়োডাটা বোতামে ক্লিক করে আপনার বায়োডাটা মুছুন। দ্রষ্টব্য: একবার আপনার বায়োডাটা মুছে ফেলা হলে, এটি পূর্বাবস্থায় ফেরানো যাবে না। অস্থায়ী সময়ের জন্য প্রয়োজন হলে আপনি এটি লুকিয়ে রাখতে পারেন।",
  },
  {
    title: "আমি কিভাবে একটি বায়োডাটা সম্পর্কে অভিযোগ করব?",
    content:
      "সংযোগের মাধ্যমে আপনার বায়োডাটার যোগাযোগের তথ্য দেখার পর, আপনি যদি সেই বায়োডাটা সম্পর্কে NUB Metrimony-এ অভিযোগ করতে চান। 1. বায়োডাটা পৃষ্ঠার নীচে রিপোর্ট বোতামে ক্লিক করুন৷ 2. পরবর্তী, পরবর্তী পৃষ্ঠায় ফর্মে অভিযোগ-সম্পর্কিত তথ্য জমা দিন। কাস্টমার কেয়ার এটি যাচাই করবে এবং যথাযথ ব্যবস্থা নেবে এবং শীঘ্রই আপনাকে জানাবে ইন শা আল্লাহ।",
  },
  {
    title: "কিভাবে সংযোগ কিনবেন?",
    content:
      "NUB Metrimony-এ বর বা কনের অভিভাবকের যোগাযোগ নম্বর দেখার জন্য একটি সংযোগ প্রয়োজন। সংযোগগুলি নিম্নলিখিত উপায়ে কেনা যায়- 1. প্রথমে, ড্যাশবোর্ডে প্রবেশ করুন। 2. সংযোগ কিনুন বোতামে ক্লিক করুন৷ 3. আপনি এই পৃষ্ঠায় তিনটি সংযোগ প্যাকেজ দেখতে পাবেন। আপনার প্রয়োজন অনুযায়ী একটি প্যাকেজ নির্বাচন করুন এবং এখনই কিনুন বোতামে ক্লিক করুন। 4. যে অ্যাকাউন্ট থেকে আপনি বিকাশ বা নগদ অর্থ প্রদান করতে চান সেটি নির্বাচন করুন এবং Pay Now বোতামে ক্লিক করুন। 5. আপনি যদি Bkash নির্বাচন করেন এবং Pay Now বোতামে ক্লিক করেন, তাহলে আপনি Bkash থেকে পেমেন্ট চেকআউট দেখতে পাবেন। প্রথমে আপনার বিকাশ নম্বর লিখুন এবং নিশ্চিত করুন বাটনে ক্লিক করুন। 6. একটি OTP কোড লিখুন যা আপনার বিকাশ মোবাইল নম্বরে পাঠানো হবে এবং নিশ্চিত করুন বোতামে ক্লিক করুন। 7. আপনার বিকাশ পিন কোড লিখুন এবং নিশ্চিত করুন বোতামে ক্লিক করুন। 8. এইভাবে, আপনার পেমেন্ট খুব সহজে সম্পন্ন হবে এবং আপনার অ্যাকাউন্টে সংযোগ যোগ করা হবে ইনশাআল্লাহ। 9. আপনি ড্যাশবোর্ডে আপনার সংযোগ দেখতে পারেন এবং পিতামাতার নম্বর পেতে এটি ব্যবহার করতে পারেন৷",
  },
  {
    title: "আমি কিভাবে আমার 'সংযোগ' ফেরত পাব?",
    content:
      "সংযোগের মাধ্যমে যোগাযোগের তথ্য থাকার পরেও আপনি যদি বর/কনের অভিভাবকের সাথে যোগাযোগ করতে ব্যর্থ হন তবে আপনি সংযোগ ফেরত পেতে পারেন। যাইহোক, যদি বিপরীত শাখার অভিভাবকরা তাদের ব্যক্তিগত অপছন্দের কারণে আপনার প্রস্তাব প্রত্যাখ্যান করে তবে আপনি টাকা ফেরত পাবেন না। 1. প্রথমত, বায়োডাটার নীচে রিপোর্ট বোতামে ক্লিক করুন। অথবা ড্যাশবোর্ড থেকে My Purchase-এ যান। সেখান থেকে সেই বায়োডাটার পাশে রিপোর্ট বাটনে ক্লিক করুন। 2. নির্দিষ্ট ফর্ম পূরণ করে আপনার অভিযোগ জমা দিন। কাস্টমার কেয়ার আপনার অভিযোগ যাচাই করবে এবং খুব শীঘ্রই আপনাকে জানাবে ইন শা আল্লাহ। বিস্তারিত জানার জন্য NUB Metrimony-এর রিফান্ড পলিসি দেখুন।",
  },
  {
    title:
      "আমি NUB মেট্রিমনি থেকে আমার অ্যাকাউন্ট মুছতে চাই। আমার অবশিষ্ট সংযোগের প্রয়োজন নেই। সুতরাং, আমি কিভাবে আমার ফেরত পেতে পারি?",
    content:
      "রিফান্ড সম্পর্কিত সমস্ত তথ্য আমাদের রিফান্ড নীতিতে বিস্তারিতভাবে লেখা আছে। বিস্তারিত জানার জন্য রিফান্ড পলিসিতে ক্লিক করুন।",
  },
];

function Guide() {
  const { changeLanguage } = useLanguage();
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
          {changeLanguage ? "নির্দেশনা" : "General Guidelines"}
        </h1>
      </div>

      <div className="container max-w-screen-xl mx-auto w-[800px] m-10">
        <div className="w-full">
          {changeLanguage ? (
            <>
              {itemsBn.map((item, index) => (
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
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Guide;
