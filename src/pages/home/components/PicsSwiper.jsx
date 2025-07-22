import { useRef } from "react";
import { useLang } from "../../../hooks/LangContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { IoIosArrowBack } from "react-icons/io";
const PicsSwiper = ({ images }) => {
  const { T } = useLang();
  const slideClass =
    "flex items-center justify-center text-center text-[18px] bg-white";
  const swiperRef = useRef(null);
  const handleSwipeNext = () => {
    swiperRef.current && swiperRef.current.slideNext();
  };
  const handleSwipePrevies = () => {
    swiperRef.current && swiperRef.current.slidePrev();
  };
  const pagination = {
    el: ".custom-swiper-pagination",
    clickable: true,
    renderBullet: (index, className) =>
      `<span class=" rounded-Pullet  ${className}"></span>`,
  };
  return (
    <div className="relative h-[717px] flex justify-center items-center p-[10px]  overflow-hidden rounded-[12px]">
      <button
        onClick={handleSwipeNext}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rotate-180 rounded-full bg-white p-2 text-black shadow-md"
      >
        <IoIosArrowBack />
      </button>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        loop
        pagination={pagination}
        modules={[Pagination]}
        className=" h-[707px] w-full overflow-hidden rounded-[12px]"
      >
        {images?.map((image, index) => (
          <SwiperSlide
            key={index}
            className={
              slideClass + "h-[707px] w-full  overflow-hidden rounded-[12px]"
            }
          >
            <img
              src={image}
              className="h-full w-full object-cover"
              alt={"land"}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        onClick={handleSwipePrevies}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 text-black shadow-md"
      >
        <IoIosArrowBack />
      </button>

      <p className="absolute z-10 font-Cairo text-[36px] font-bold leading-[44px] tracking-[-0.72px] text-white bottom-0 right-0 -translate-x-14 -translate-y-14">
        {T("التصميم الخارجي", "Exterior design")}
      </p>
      <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2">
        <div className="custom-swiper-pagination flex items-center gap-2 rounded-[12px] bg-[rgba(255,255,255,0.90)] p-2" />
      </div>
    </div>
  );
};

export default PicsSwiper;
