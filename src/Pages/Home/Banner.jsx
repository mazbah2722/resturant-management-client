import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import img1 from "../../assets/images1.jpg"
import img2 from "../../assets/images2.jpg"
import img3 from "../../assets/images3.jpg"
import img4 from "../../assets/images4.jpg"

const Banner = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="w-full h-[500px] rounded-xl overflow-hidden"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="relative h-full flex items-center justify-center"
            
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="text-center text-white z-10 px-6">
               <div> <img className="w-full h-[300px]  rounded-full" src={img1} alt="" /></div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Fresh & Delicious Meals
              </h1>
              <p className="mt-2 text-lg md:text-xl">
                Savor every bite with our amazing dishes
              </p>
              <Link to={"/allFood"} className="btn bg-green-500 text-white">Explore Food</Link>
            
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="relative h-full flex items-center justify-center"
           
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="text-center text-white z-10 px-6">
            <div> <img className="w-full h-[300px]  rounded-full" src={img2} alt="" /></div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Healthy & Nutritious
              </h1>
              <p className="mt-2 text-lg md:text-xl">
                Enjoy meals made with fresh ingredients
              </p>
              <Link to={"/allFood"} className="btn bg-green-500 text-white">Explore Food</Link>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="relative h-full flex items-center justify-center "
    
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="text-center text-white z-10 px-6">
            <div> <img className="w-full h-[300px]  rounded-full" src={img3} alt="" /></div>
              <h1 className="text-4xl md:text-5xl font-bold">
                A Taste of Happiness
              </h1>
              <p className="mt-2 text-lg md:text-xl">
                Experience flavors like never before
              </p>
              <Link to={"/allFood"} className="btn bg-green-500 text-white">Explore Food</Link>
            </div>
          </div>
        </SwiperSlide>
        {/* Slide 4 */}
        <SwiperSlide>
          <div
            className="relative h-full flex items-center justify-center "
    
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="text-center text-white z-10 px-6">
            <div> <img className="w-full h-[300px] rounded-full" src={img4} alt="" /></div>
              <h1 className="text-4xl md:text-5xl font-bold">
                A Taste of Life 4
              </h1>
              <p className="mt-2 text-lg md:text-xl">
                Experience good and best food.
              </p>
              <Link to={"/allFood"} className="btn bg-green-500 text-white">Explore Food</Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
