import { useState } from "react";
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";

const items = [
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
    title:
      "How will I complain about a biodata?",
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
    title: "I want to delete my account from NUB Metrimony. I don't need my remaining Connections. So, how can I get my refund?",
    content:
      "All the information related to refunds is written in our Refund Policy in detail. Click Refund Policy for details.",
  },
];

function Guide() {
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
        <h1 className="">General Guidelines</h1>
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

export default Guide;
