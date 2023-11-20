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
              Indeed, all praise belongs to Allah. We seek refuge in Him from
              the evils within ourselves and from our ill deeds. Peace and
              blessings be upon the Prophet (ﷺ).
            </p>
            <p>
              {" "}
              Marriage is a distinctive blessing given by Almighty Allah and a
              vital Sunnah of the Prophet (ﷺ). According to the Qur'an and
              Hadith, wedding is regarded as a means of purity, half of the deen
              (religion) and a means of financial prosperity. Allah commands the
              believers to marry for its benefits morally, spiritually, socially
              and psychologically. The Holy Prophet(ﷺ) said, “Marriage is my
              precept and my practice. Those who do not follow my practice are
              not of me.”
            </p>

            <p> And </p>

            <p>
              “When a man has married, he has completed one half of his
              religion.” The purpose of marriage is to provide a legal union
              which safeguards society from moral and social degradation.{" "}
            </p>

            <p>
              On the other hand, it is a matter of great regret that people
              being influenced by western civilization are chasing the sick race
              of so-called equality between men and women that goes against the
              commandment of Allah and consequently, moral degradation is taking
              place in the society. Indeed, the main reason for the infiltration
              of the uncivilized culture of the West in education, work, and
              marriage is not to follow the rules based on Islamic Shariah and
              the lack of complete religious education. As a result, marriage
              has become challenging and the society is being burdened
              constantly with various degradations including adultery,
              fornication, extra marital affairs, rape, suicide etc.
            </p>

            <p>
              Moreover, those who are struggling against the un-Islamic culture
              of the family and the so-called social norms to cling to the
              Sunnah in this age of dreadful fitna (a state of trouble or chaos)
              are facing many complications to find pious life partners.
              Pondering over the issues we, some sinful slaves of Allah became
              optimistic to solve these problems and finally succeeded in
              establishing a Bangladeshi Islamic matrimonial platform,
              OrdhekDeen.com and on January 1, 2021, we launched its journey
              effectively. By the mercy and special blessings of Allah, hundreds
              of practicing Muslims have already been married through the
              website, Alhamdulillah.{" "}
            </p>

            <p>
              Our aim is to make this website a Shariah based Islamic matrimony
              platform and to make it easy to find religious matchmakers. Our
              prime motto of the Site is to popularize the Sunnah way of Islamic
              marriage by wiping out all superstitions and barbarism of the
              present jahiliyya (days of ignorance) society and making everyone
              aware against dowry (an eternal curse for the bride's family) and
              encouraging the matchmaking with mahr (valuable gift by grooms).
            </p>

            <p>
              To conclude, we have far-reaching plans for the development of our
              website and we are constantly researching to make the Site easier
              to the users. We are trying our level best to deliver this service
              efficiently to all Muslim brothers and sisters as soon as
              possible. May Allah keep our intentions pure, make all our good
              deeds easy and grant us blessings. Ameen.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
