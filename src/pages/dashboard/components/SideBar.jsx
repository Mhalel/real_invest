import { Link } from "react-router-dom";
import { useLang } from "../../../hooks/LangContext";
import { GoHomeFill } from "react-icons/go";
import { CiFileOn } from "react-icons/ci";
import { RiDatabase2Line } from "react-icons/ri";
import { CircleQuestionMark, Settings } from "lucide-react";

const SideBar = () => {
  const { T } = useLang();
  return (
    <aside className="min-h-screen  flex flex-col justify-between p-[16px] w-[270px]">
      <div className="flex  flex-col gap-4">
        <h3 className="text-[12px] font-medium">
          {T(
            "الاستثمار الحقيقي في المملكة العربية السعودية",
            "Real Investment Saudi-arabia"
          )}
        </h3>
        <div className="flex flex-col gap-2">
          <Link
            className="flex items-center gap-[12px] py-2 px-[12px] hover:bg-[#F2F2F5] rounded-[12px] text-[14px] "
            to="/"
          >
            <GoHomeFill size={20} />
            {T("لوحة التحكم", "Dashboard")}
          </Link>
          <Link
            className="flex items-center gap-[12px] py-2 px-[12px] hover:bg-[#F2F2F5] rounded-[12px] text-[14px] "
            to="/"
          >
            <CiFileOn size={20} />
            {T("جدوى المشروع", "Project Feasibility")}
          </Link>
          <Link
            className="flex items-center gap-[12px] py-2 px-[12px] hover:bg-[#F2F2F5] rounded-[12px] text-[14px] "
            to="/"
          >
            <RiDatabase2Line size={20} />
            {T("لوحة التحكم", "Dashboard")}
          </Link>
          <Link
            className="flex items-center gap-[12px] py-2 px-[12px] hover:bg-[#F2F2F5] rounded-[12px] text-[14px] "
            to="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.25 2.75H10.75V1.25C10.75 0.835786 10.4142 0.5 10 0.5C9.58579 0.5 9.25 0.835786 9.25 1.25V2.75H1.75C0.921573 2.75 0.25 3.42157 0.25 4.25V15.5C0.25 16.3284 0.921573 17 1.75 17H5.44L3.41406 19.5312C3.15518 19.8549 3.20765 20.3271 3.53125 20.5859C3.85485 20.8448 4.32705 20.7924 4.58594 20.4688L7.36 17H12.64L15.4141 20.4688C15.6729 20.7924 16.1451 20.8448 16.4688 20.5859C16.7924 20.3271 16.8448 19.8549 16.5859 19.5312L14.56 17H18.25C19.0784 17 19.75 16.3284 19.75 15.5V4.25C19.75 3.42157 19.0784 2.75 18.25 2.75ZM18.25 15.5H1.75V4.25H18.25V15.5Z"
                fill="#121417"
              />
            </svg>
            {T("لوحة التحكم", "Dashboard")}
          </Link>
        </div>
      </div>
      <div className=" ">
        <Link
          className="flex items-center gap-[12px] py-2 px-[12px] hover:bg-[#F2F2F5] rounded-[12px] text-[14px] "
          to="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="19"
            viewBox="0 0 14 19"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.25 0H1.75C0.921573 0 0.25 0.671573 0.25 1.5V18C0.250135 18.2726 0.398147 18.5236 0.636587 18.6557C0.875028 18.7878 1.16636 18.7801 1.3975 18.6356L7 15.1341L12.6034 18.6356C12.8345 18.7796 13.1255 18.787 13.3636 18.655C13.6018 18.523 13.7497 18.2723 13.75 18V1.5C13.75 0.671573 13.0784 0 12.25 0ZM12.25 1.5V12.1472L7.39656 9.11438C7.15336 8.96237 6.84477 8.96237 6.60156 9.11438L1.75 12.1462V1.5H12.25ZM7.39656 13.6144C7.15336 13.4624 6.84477 13.4624 6.60156 13.6144L1.75 16.6472V13.9153L7 10.6341L12.25 13.9153V16.6472L7.39656 13.6144Z"
              fill="#121417"
            />
          </svg>
          {T("لوحة التحكم", "Dashboard")}
        </Link>
        <Link
          className="flex items-center gap-[12px] py-2 px-[12px] hover:bg-[#F2F2F5] rounded-[12px] text-[14px] "
          to="/"
        >
          <Settings size={20} />
          {T("الاعدادات", "Settings ")}
        </Link>
        <Link
          className="flex items-center gap-[12px] py-2 px-[12px] hover:bg-[#F2F2F5] rounded-[12px] text-[14px] "
          to="/"
        >
          <CircleQuestionMark />
          {T("لوحة التحكم", "Help/Support")}
        </Link>
        <div className="flex items-center gap-2">
          <div className="size-10 rounded-full border-[#5D1D6D] border-[3px] overflow-hidden">
            <img
              src="/userImg.webp"
              alt="Blog Post"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="text-[14px] ">
            <p>Olivia Rhye</p>
            <div className="text-[#535862] flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M3.91622 11.9088L0.72368 9.22995L0 5.12573L2.08378 1.5165L6.00002 0.0911255L9.91622 1.5165L12 5.12573L11.2763 9.22995L8.08378 11.9088H3.91622Z"
                  fill="#FD9A0C"
                />
              </svg>
              <span>10,000</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
