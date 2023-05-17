// import { a } from "react-router-dom";
import banner1 from "../../../../assets/images/banner/1.jpg";
import banner2 from "../../../../assets/images/banner/2.jpg";
import banner3 from "../../../../assets/images/banner/3.jpg";
import banner4 from "../../../../assets/images/banner/4.jpg";
// import banner5 from "../../../../assets/images/banner/5.jpg";
// import banner6 from "../../../../assets/images/banner/6.jpg";

const Banner = () => {
   const gradiantBg = (
      <>
         <div className="absolute w-full flex rounded-xl items-center bg-gradient-to-r from-[#000000f8] to-[#00000062] bottom-0 top-0">
            <div className="w-[60%] space-y-7 pl-11">
               <h2 className="text-6xl font-bold text-white">
                  Lorem ipsum dolor sit amet consectetur
               </h2>
               <p className="text-gray-300  text-[18px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  consequatur aspernatur illo autem ullam numquam
               </p>
               <div>
                  <button className="btn mr-5 btn-secondary">Contact us</button>
                  <button className="btn btn-secondary btn-outline">
                     Latest project
                  </button>
               </div>
            </div>
         </div>
      </>
   );
   return (
      <div>
         <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
               <img className="h-[80vh] rounded-xl w-full" src={banner1} />
               {gradiantBg}
               <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                  <a href="#slide4" className="btn mr-5 btn-circle">
                     ❮
                  </a>
                  <a href="#slide2" className="btn btn-circle">
                     ❯
                  </a>
               </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
               <img className="h-[80vh] rounded-xl w-full" src={banner2} />
               {gradiantBg}
               <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                  <a href="#slide1" className="btn mr-5 btn-circle">
                     ❮
                  </a>
                  <a href="#slide3" className="btn btn-circle">
                     ❯
                  </a>
               </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
               <img className="h-[80vh] rounded-xl w-full" src={banner3} />
               {gradiantBg}
               <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                  <a href="#slide2" className="btn mr-5 btn-circle">
                     ❮
                  </a>
                  <a href="#slide4" className="btn btn-circle">
                     ❯
                  </a>
               </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
               <img className="h-[80vh] rounded-xl w-full" src={banner4} />
               {gradiantBg}
               <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                  <a href="#slide" className="btn mr-5 btn-circle">
                     ❮
                  </a>
                  <a href="#slide1" className="btn btn-circle">
                     ❯
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Banner;
