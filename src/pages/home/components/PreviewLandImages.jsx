/* eslint-disable prettier/prettier */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useMemo, useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useLang } from "../../../hooks/LangContext";
import { usePopup } from "../../../hooks/popup";

export function PreviewLandImages({ landImages = [] }) {
  const { popup } = usePopup();
  const { lang } = useLang();
  const swiperRef = useRef(null);

  const pagination = useMemo(
    () => ({
      clickable: true,
      renderBullet: (index, className) =>
        `<span class="custom-img-land-pagination ${className}"></span>`,
    }),
    []
  );

  const showSinglePhoto = (src) =>
    popup.run(
      <div className="h-[500px] w-[500px]">
        <img
          src={src}
          loading="lazy"
          alt="Gallery image"
          className="h-full w-full rounded-lg object-cover"
        />
      </div>
    );

  const showGallery = () =>
    popup.run(
      <div className="h-[500px] w-[500px]">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          pagination={pagination}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={1}
          spaceBetween={14}
          loop
          className="h-full w-full"
        >
          {landImages.map((img, i) => (
            <SwiperSlide
              key={i}
              className="relative flex items-center justify-center"
            >
              <img
                src={img}
                loading="lazy"
                alt={`Gallery image ${i}`}
                className="absolute h-full w-full rounded-lg object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );

  const ImageBox = ({ src, onClick }) => (
    <div className="h-full w-full overflow-hidden rounded-[8px]">
      <img
        src={src}
        loading="lazy"
        onClick={onClick}
        alt="Land image"
        className="h-full w-full rounded-[8px] object-cover"
      />
    </div>
  );

  const Slider = ({ images }) => (
    <Swiper
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      modules={[Autoplay, Navigation, Pagination]}
      pagination={pagination}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      slidesPerView={1}
      spaceBetween={14}
      loop
      className="h-full w-full"
    >
      {images.map((img, i) => (
        <SwiperSlide
          key={i}
          onClick={showGallery}
          className="relative flex items-center justify-center"
        >
          <img
            src={img}
            loading="lazy"
            alt={`Slide image ${i}`}
            className="absolute h-full w-full rounded-lg object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );

  const hasImages = landImages.length > 0;

  return (
    <section className="flex h-[85vh]  w-full items-center justify-center gap-[12px] px-1 md:px-0">
      {!hasImages ? (
        <p className="text-[30px]">
          {lang === "ar" ? "لايوجد صور" : "No images available"}
        </p>
      ) : landImages.length === 1 ? (
        <ImageBox
          src={landImages[0]}
          onClick={() => showSinglePhoto(landImages[0])}
        />
      ) : landImages.length === 2 ? (
        <>
          <aside className="hidden h-full w-full gap-[12px] md:flex">
            {landImages.map((img, i) => (
              <ImageBox key={i} src={img} onClick={showGallery} />
            ))}
          </aside>
          <aside className="md:hidden h-full w-full flex rounded-[8px]">
            <Slider images={landImages} />
          </aside>
        </>
      ) : (
        <>
          <aside className="hidden h-full w-[57%] md:flex rounded-[8px]">
            <Slider images={landImages.slice(2)} />
          </aside>
          <aside className="hidden h-full w-[41%] flex-col gap-[12px] md:flex">
            {landImages.slice(0, 2).map((img, i) => (
              <ImageBox key={i} src={img} onClick={showGallery} />
            ))}
          </aside>
          <aside className="md:hidden h-full w-full flex rounded-[8px]">
            <Slider images={landImages} />
          </aside>
        </>
      )}
    </section>
  );
}
