function HowToWorks() {
  return (
    <div className="p-3 max-w-screen-xl mx-auto flex-col text-center justify-center items-center mb-20">
      <h1 className="font-bold text-4xl text-indigo-900 m-5 p-3">
        How NUB Matrimony Works
      </h1>

      <div className="md:flex justify-center items-center xl:justify-between flex flex-wrap">
        {/* -------Card------- */}

        <div className="flex-col justify-center items-center bg-white p-10 h-[250px] md:w-[295px] w-[350px] border rounded-xl hover:shadow-xl drop-shadow-md mb-4 mr-4">
          <div className="flex justify-center items-center mb-5">
            <img
              src="/src/assets/images/hiw-create-biodata.svg"
              alt=""
              className=" w-16"
            />
          </div>
          <p className="font-bold m-3 text-xl">Search Biodata</p>
          <h1 className="text-sm ">
            You can easily search biodata using many filters including age,
            upazila, profession, educational qualification.
          </h1>
        </div>

        {/* ----------Card------- */}

        {/* -------Card------- */}

        <div className="flex-col justify-center items-center bg-white p-10 h-[250px] md:w-[295px] w-[350px] border rounded-xl hover:shadow-xl drop-shadow-md mb-4 mr-4">
          <div className="flex justify-center items-center mb-5">
            <img
              src="/src/assets/images/hiw-search.svg"
              alt=""
              className=" w-16"
            />
          </div>
          <p className="font-bold m-3 text-xl">Create Biodata</p>
          <h1 className="text-sm ">
            If someone likes your biodata or you like someone's biodata you can
            directly contact their parent.
          </h1>
        </div>

        {/* ----------Card------- */}
        {/* -------Card------- */}

        <div className="flex-col justify-center items-center bg-white p-10 h-[250px] md:w-[295px] w-[350px] border rounded-xl hover:shadow-xl drop-shadow-md mb-4 mr-4">
          <div className="flex justify-center items-center mb-5">
            <img
              src="/src/assets/images/hiw-contact.svg"
              alt=""
              className=" w-16"
            />
          </div>
          <p className="font-bold m-3 text-xl">Create Biodata</p>
          <h1 className="text-sm ">
            If you like the biodata and conversation, do your own inquiry & get
            married according to Sunnah.
          </h1>
        </div>

        {/* ----------Card------- */}
        {/* -------Card------- */}

        <div className="flex-col justify-center items-center bg-white p-10 h-[250px] md:w-[295px] w-[350px] border rounded-xl hover:shadow-xl drop-shadow-md mb-4 mr-4">
          <div className="flex justify-center items-center mb-5">
            <img
              src="/src/assets/images/hiw-success.svg"
              alt=""
              className=" w-16"
            />
          </div>
          <p className="font-bold m-3 text-xl">Create Biodata</p>
          <h1 className="text-sm ">
            You can easily a diodata on NUB Matrimony compltely free of cost
            within some steps
          </h1>
        </div>

        {/* ----------Card------- */}
      </div>
    </div>
  );
}
export default HowToWorks;
