import person from "../../../../assets/images/about_us/person.jpg";
import parts from "../../../../assets/images/about_us/parts.jpg";

const AboutUs = () => {
   return (
      <div className="hero min-h-screen bg-base-200 mt-5">
         <div className="hero-content flex-col items-center flex lg:flex-row">
            <div className=" relative w-1/2">
               <img src={person} className="md:w-[80%] rounded-lg shadow-2xl" />
               <div className="absolute  md:w-[60%] rounded-lg right-[10px] top-[60%]  border-8 border-white ">
                  <img src={parts} className=" shadow-md" />
               </div>
            </div>
            <div className="w-1/2 p-6">
               <h1 className="text-5xl font-bold text-center text-orange-500">
                  About Us
               </h1>
               <h2 className="text-5xl font-bold py-4">
                  We are qualified & of experience in this field
               </h2>
               <p className="py-6">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which do not
                  look even slightly believable.
               </p>
               <p className="pb-6">
                  the majority have suffered alteration in some form, by
                  injected humour, or randomised words which do not look even
                  slightly believable.
               </p>
               <button className="btn btn-primary">Get Started</button>
            </div>
         </div>
      </div>
   );
};

export default AboutUs;
