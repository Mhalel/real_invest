// import { useState } from "react";

// const LandingPage = () => {
//   const [activeBtn, setActiveBtn] = useState(null);
//   const [hovered, setHovered] = useState(false);

//   const navBtn = [
//     { label: "الخطط" },
//     { label: "الخطط" },
//     { label: "المميزات" },
//     { label: "انتقل للدراسات" },
//   ];
//   return (
//     <div className="flex flex-col font-Cairo bg-white">
//       <section className="relative w-full h-screen overflow-hidden">
//         <video
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="absolute top-0 left-0 w-full h-full object-cover z-0 blur-[3px]"
//         >
//           <source src="/backgroundVideo.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <div className="absolute top-0 left-0 w-full h-full bg-[rgba(36,21,81,0.2)] z-0" />
//         <div className="flex justify-between pt-[70px] px-16">
//           <img src="investment-logo.png" alt="" className="z-10" />
//           {navBtn.map((btn, index) => (
//             <button
//               key={index}
//               onClick={() => setActiveBtn(index)}
//               className={`z-10  px-4 py-[10px] rounded-lg transition duration-200 ${
//                 activeBtn === index
//                   ? "border-1 border-[#D5D7DA] bg-white text-black"
//                   : "border-1 border-transparent text-white"
//               }`}
//             >
//               {btn.label}
//             </button>
//           ))}
//         </div>
//         <div
//           className="relative z-10 flex items-center justify-center h-full max-w-[1200px] mx-auto"
//           dir="rtl"
//         >
//           <section className="text-white flex gap-[80px]">
//             <div className=" border rounded-lg border-white p-3">
//               <img src="iframe.png" alt="" className="w-[842px] h-[370px]" />
//             </div>
//             <div className="flex flex-col gap-[33px] text-[36px]">
//               <h2>تحليل ذكي لمستقبل مشروعك</h2>
//               <p className="text-[27px] text-wrap">
//                 استفد من قوة التحليل الذكي لإنشاء دراسة جدوى دقيقة وشاملة
//                 لمشروعك باستخدام أحدث تقنيات الذكاء الاصطناعي
//               </p>
//               <button className="text-[16px] text-white text-right border rounded-lg px-4 py-[10px] w-fit hover:bg-white hover:text-black transition duration-200">
//                 جرب الان
//               </button>
//             </div>
//           </section>
//         </div>
//       </section>

//       <section
//         className=" text-black flex flex-col justify-center items-center"
//         dir="rtl"
//       >
//         <div
//           className="w-full flex justify-center items-center min-h-[600px] bg-white text-black py-24"
//           dir="ltr"
//         >
//           <div
//             className="relative transition-all duration-500 max-w-[1200px] w-full flex flex-col lg:flex-row gap-[60px] px-6 items-center justify-center"
//             onMouseEnter={() => setHovered(true)}
//             onMouseLeave={() => setHovered(false)}
//           >
//             <div className="relative w-[700px] h-[450px]">
//               <div
//                 className={`absolute inset-0 transition-opacity duration-500 ${
//                   hovered
//                     ? "opacity-100 pointer-events-auto"
//                     : "opacity-0 pointer-events-none"
//                 }`}
//               >
//                 <div className="grid grid-cols-2 gap-4 items-center h-full">
//                   <div className="flex justify-center items-center">
//                     <img src="/image.jpg" className="w-[220px] rounded-lg" />
//                   </div>
//                   <div className="flex flex-col gap-4">
//                     <img src="/image-5.png" className="w-[220px] rounded-lg" />
//                     <img src="/image-7.png" className="w-[220px] rounded-lg" />
//                   </div>
//                 </div>
//               </div>

//               <div
//                 className={`absolute inset-0 transition-opacity duration-200 ${
//                   hovered
//                     ? "opacity-0 pointer-events-none"
//                     : "opacity-100 pointer-events-auto"
//                 }`}
//               >
//                 <img
//                   src="/combine-image.png"
//                   alt="Report preview"
//                   className="w-full h-full object-cover rounded-xl shadow-2xl scale-[1.05]"
//                 />
//               </div>
//             </div>

//             <div className="flex flex-col gap-5 max-w-md">
//               <h2 className="text-4xl font-bold leading-snug">
//                 دراسة جدوى بدقة عالية في دقائق فقط
//               </h2>
//               <p className="text-lg text-black">
//                 اكتشف كيف تساعدنا مشاريع مدهشة على النجاح من خلال دراسات جدوى
//                 متكاملة
//               </p>
//               <button className="self-start px-6 py-2 text-sm bg-white text-black rounded ">
//                 جرب الآن
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="mt-[207px] flex flex-col gap-7 items-center justify-center text-center">
//           <h2 className="text-4xl font-medium">الخدمات التي نقدمها</h2>
//           <div className="grid grid-cols-3 gap-16 ">
// <div className="flex flex-col">
//   <h2 className="text-xl font-medium">توفير المال</h2>
//   <p className="text-sm font-medium text-[#656464]">
//     بدلا من الإستعانة بخبير وتحمل
//     <br />
//     المزيد من التكاليف يمكنك
//     <br />
//     الإستعانة بموقعنا
//   </p>
// </div>
// <div className="flex flex-col">
//   <h2 className="text-xl font-medium">سرعة فائقة</h2>
//   <p className="text-sm font-medium text-[#656464]">
//     إنشاء دراسة في وقت قصير
//     <br /> وبدقة عالية
//   </p>
// </div>
// <div className="flex flex-col">
//   <h2 className="text-xl font-medium">التعديل بسهولة</h2>
//   <p className="text-sm font-medium text-[#656464]">
//     يمكنك إنشاء وتعديل جميع
//     <br />
//     أنواع الدراسات بناءا على
//     <br />
//     تفضيلاتك وظروف مشروعك
//   </p>
// </div>
// <div className="flex flex-col">
//   <h2 className="text-xl font-medium">رضا تام</h2>
//   <p className="text-sm font-medium text-[#656464]">
//     نتائج مضمونة ومجربة تجعل
//     <br />
//     تجربة الإستخدام مرضية لجميع
//     <br />
//     المستخدمين
//   </p>
// </div>
// <div className="flex flex-col">
//   <h2 className="text-xl font-medium">تقنية مثبتة</h2>
//   <p className="text-sm font-medium text-[#656464]">
//     يتم إنشاء الدراسة باستخدام
//     <br />
//     احدث تقنيات الذكاء
//     <br />
//     الإصطناعي
//   </p>
// </div>
// <div className="flex flex-col">
//   <h2 className="text-xl font-medium">رفع إلى Cloud</h2>
//   <p className="text-sm font-medium text-[#656464]">
//     سهولة الوصول لجميع
//     <br />
//     الدراسات مع خدمة التخزين
//     <br />
//     السحابي Cloud
//   </p>
// </div>
//           </div>
//         </div>
//         <div className="mt-[128px] flex flex-col gap-[33px] justify-center items-center">
//           <p className="text-[72px] font-semibold leading-[90px]">
//             خطط مصممة لتحقيق أهدافك
//           </p>
//           <p className="text-lg font-medium">
//             أحصل على عدد محدود من دراسات الجدوى
//           </p>
//           <button className="text-[16px] text-right border border-black rounded-lg px-4 py-[10px] w-fit hover:bg-black hover:text-white transition duration-200">
//             جرب الان
//           </button>
//         </div>
//         <div className="mt-[158px] font-medium flex gap-[16px] text-sm">
//           <button className="hover:scale-110 transition duration-200">
//             الشركة
//           </button>
//           <button className="hover:scale-110 transition duration-200">
//             الخصوصية
//           </button>
//           <button className="hover:scale-110 transition duration-200">
//             الشروط والاحكام
//           </button>
//           <button className="hover:scale-110 transition duration-200">
//             روابط سريعة
//           </button>
//           <button className="hover:scale-110 transition duration-200">
//             عنا
//           </button>
//           <button className="hover:scale-110 transition duration-200">
//             الخدمات
//           </button>
//           <button className="hover:scale-110 transition duration-200">
//             الدعم
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };
// export default LandingPage;

import { useState } from "react";

const LandingPage = () => {
  const [activeBtn, setActiveBtn] = useState(null);
  const [hovered, setHovered] = useState(false);

  const navBtn = [
    { label: "الخطط" },
    { label: "الخطط" },
    { label: "المميزات" },
    { label: "انتقل للدراسات" },
  ];

  return (
    <div className="flex flex-col font-Cairo bg-white">
      <section className="relative w-full min-h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0 blur-[3px]"
        >
          <source src="/backgroundVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(36,21,81,0.2)] z-0" />

        {/* Header */}
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-16 pt-4 sm:pt-6 md:pt-8 lg:pt-[70px]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 w-full">
            {/* Logo */}
            <img
              src="investment-logo.png"
              alt="logo"
              className="w-24 sm:w-28 md:w-32 lg:w-40 object-contain"
            />

            {/* Navigation Buttons */}
            <div className="flex flex-wrap justify-center md:justify-end gap-2 sm:gap-3 md:gap-4 w-full md:w-auto">
              {navBtn.map((btn, index) => (
                <button
                  key={index}
                  onClick={() => setActiveBtn(index)}
                  className={`px-4 py-2 rounded-lg transition duration-200 text-sm sm:text-base md:text-base lg:text-lg ${
                    activeBtn === index
                      ? "border border-[#D5D7DA] bg-white text-black"
                      : "border border-transparent text-white"
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div
          className="relative z-10 flex items-center justify-center h-full py-20 px-4 sm:px-8 sm:py-28 max-w-[1200px] mx-auto"
          dir="rtl"
        >
          <section className="flex flex-col lg:flex-row items-center gap-10 text-white">
            <div className="border rounded-lg border-white p-2 sm:p-3 w-full lg:w-auto">
              <img
                src="iframe.png"
                alt=""
                className="w-full max-w-[842px] h-auto object-contain"
              />
            </div>
            <div className="flex flex-col gap-6 text-center lg:text-right text-2xl sm:text-3xl">
              <h2>تحليل ذكي لمستقبل مشروعك</h2>
              <p className="text-lg sm:text-xl">
                استفد من قوة التحليل الذكي لإنشاء دراسة جدوى دقيقة وشاملة
                لمشروعك باستخدام أحدث تقنيات الذكاء الاصطناعي
              </p>
              <button className="text-sm sm:text-base border rounded-lg px-6 py-2 w-fit mx-auto lg:mx-0 hover:bg-white hover:text-black transition duration-200">
                جرب الان
              </button>
            </div>
          </section>
        </div>
      </section>

      {/* Image Interaction Section */}
      <section
        className="text-black flex flex-col items-center py-5 sm:py-10 "
        dir="rtl"
      >
        <div
          dir="ltr"
          className="w-full max-w-[1200px] flex flex-col lg:flex-row gap-10 items-center justify-center"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Image Swap Area */}
          <div className="relative w-full max-w-[700px] aspect-[7/4]">
            <div
              className={`absolute inset-0 transition-opacity duration-500 ${
                hovered
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <div className="grid grid-cols-2 gap-4 h-full items-center">
                <div className="flex justify-center items-center">
                  <img
                    src="/image.jpg"
                    className="w-full max-w-[220px] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <img
                    src="/image-5.png"
                    className="w-full max-w-[220px] rounded-lg"
                  />
                  <img
                    src="/image-7.png"
                    className="w-full max-w-[220px] rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div
              className={`absolute inset-0 transition-opacity duration-200 ${
                hovered
                  ? "opacity-0 pointer-events-none"
                  : "opacity-100 pointer-events-auto"
              }`}
            >
              <img
                src="/combine-image.png"
                alt="Report preview"
                className="w-full h-full object-cover rounded-xl "
              />
            </div>
          </div>

          {/* Text Block */}
          <div className="flex flex-col gap-4 max-w-md text-center lg:text-right">
            <h2 className="text-2xl sm:text-4xl font-bold leading-snug">
              دراسة جدوى بدقة عالية في دقائق فقط
            </h2>
            <p className="text-base sm:text-lg">
              اكتشف كيف تساعدنا مشاريع مدهشة على النجاح من خلال دراسات جدوى
              متكاملة
            </p>
            <button className="self-center lg:self-end px-6 py-2 text-sm bg-white text-black rounded-lg border-black border hover:bg-black hover:text-white transition duration-200">
              جرب الآن
            </button>
          </div>
        </div>

        {/* خدماتنا Section */}
        <div className="mt-24 flex flex-col gap-6 items-center text-center w-full">
          <h2 className="text-2xl sm:text-4xl font-medium">
            الخدمات التي نقدمها
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 w-full max-w-[1200px] px-4">
            <div className="flex flex-col">
              <h2 className="text-xl font-medium">توفير المال</h2>
              <p className="text-sm font-medium text-[#656464]">
                بدلا من الإستعانة بخبير وتحمل
                <br />
                المزيد من التكاليف يمكنك
                <br />
                الإستعانة بموقعنا
              </p>
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl font-medium">سرعة فائقة</h2>
              <p className="text-sm font-medium text-[#656464]">
                إنشاء دراسة في وقت قصير
                <br /> وبدقة عالية
              </p>
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl font-medium">التعديل بسهولة</h2>
              <p className="text-sm font-medium text-[#656464]">
                يمكنك إنشاء وتعديل جميع
                <br />
                أنواع الدراسات بناءا على
                <br />
                تفضيلاتك وظروف مشروعك
              </p>
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl font-medium">رضا تام</h2>
              <p className="text-sm font-medium text-[#656464]">
                نتائج مضمونة ومجربة تجعل
                <br />
                تجربة الإستخدام مرضية لجميع
                <br />
                المستخدمين
              </p>
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl font-medium">تقنية مثبتة</h2>
              <p className="text-sm font-medium text-[#656464]">
                يتم إنشاء الدراسة باستخدام
                <br />
                احدث تقنيات الذكاء
                <br />
                الإصطناعي
              </p>
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl font-medium">رفع إلى Cloud</h2>
              <p className="text-sm font-medium text-[#656464]">
                سهولة الوصول لجميع
                <br />
                الدراسات مع خدمة التخزين
                <br />
                السحابي Cloud
              </p>
            </div>
          </div>
        </div>

        {/* Plans Section */}
        <div className="mt-32 text-center flex flex-col gap-6 items-center">
          <p className="text-3xl sm:text-5xl font-semibold leading-tight">
            خطط مصممة لتحقيق أهدافك
          </p>
          <p className="text-base sm:text-lg font-medium">
            أحصل على عدد محدود من دراسات الجدوى
          </p>
          <button className="text-sm sm:text-base border border-black rounded-lg px-6 py-2 hover:bg-black hover:text-white transition duration-200">
            جرب الان
          </button>
        </div>

        {/* Footer */}
        <div className="mt-32 flex flex-wrap justify-center gap-4 text-sm font-medium">
          {[
            "الشركة",
            "الخصوصية",
            "الشروط والاحكام",
            "روابط سريعة",
            "عنا",
            "الخدمات",
            "الدعم",
          ].map((item, i) => (
            <button
              key={i}
              className="hover:scale-110 transition duration-200 whitespace-nowrap"
            >
              {item}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
