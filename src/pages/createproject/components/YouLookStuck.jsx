/* eslint-disable prettier/prettier */
import { useState, useEffect } from "react";
import {
  HelpCircle,
  X,
  MessageSquare,
  Coffee,
  FileText,
  CircleUser,
} from "lucide-react";
import PropTypes from "prop-types";
import axios from "axios";
// import { SERVER_BASE_URL } from "@/Api/axiosCLient";
// import { useAuth } from '@/hooks/AuthContext';
import { useNavigate } from "react-router-dom";
import { useLang } from "../../../hooks/LangContext";

const YouLookStuck = ({ isOpen, setIsOpen }) => {
  const [showButton, setShowButton] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isPulsing, setIsPulsing] = useState(true);
  //   const { auth } = useAuth()
  const { lang, T } = useLang();

  const helpOptions = [
    {
      id: "chat",
      icon: <MessageSquare className="text-blue-500" size={24} />,
      title: T("تحدث مع الدعم", "Chat with support"),
      description: T(
        "تحدث مع فريق الدعم للحصول على المساعدة",
        "Chat with the support team for help"
      ),
    },
    {
      id: "docs",
      icon: <FileText className="text-green-500" size={24} />,
      title: T(
        "تفقد كيف يمكنك إضافة ارض جديدة",
        "Check how you can add a new land"
      ),
      description: T("قم بتفقد هذا الملف", "Check this file"),
    },
    // {
    //   id: 'break',
    //   icon: <Coffee className="text-amber-500" size={24} />,
    //   title: 'خذ استراحة',
    //   description: 'أحيانًا تساعد وجهة نظر جديدة.'
    // }
  ];

  // Stop pulsing when the help panel is opened
  useEffect(() => {
    if (isOpen) {
      setIsPulsing(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (selectedOption) {
      const timer = setTimeout(() => {
        if (selectedOption === "break") {
          // Hide the entire button if "Take a break" was selected
          setShowButton(false);
        } else {
          // Just close the panel for other options
          setIsOpen(false);
        }
        setSelectedOption(null);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [selectedOption]);

  //   const handleOptionSelect = (optionId) => {
  //     if (optionId === "docs") {
  //       window.open("https://takamolspace.lon1.cdn.digitaloceanspaces.com/%D8%A7%D8%AF%D8%AE%D8%A7%D9%84%20%D8%B5%D8%A7%D8%AD%D8%A8%20%20%D8%A7%D9%84%D8%A7%D8%B1%D8%B6.pdf", "_blank");
  //     } else {
  //       // setSelectedOption(optionId);
  //       axios.post(`${SERVER_BASE_URL}/message/createAdminSupport`, {}, { headers: { token: auth } })
  //         .then((res) => {
  //           window.open(`/dashboardV2/messanger/${res.data.conversationId}`, "_blank");
  //           // nav(`/dashboardV2/messanger/${res.data.conversationId}`,)
  //         })
  //         .catch(() => {
  //           console.log("حدث خطأ ما")
  //         })
  //     }
  //   };

  if (!showButton) return null;

  return (
    <div className="relative" dir={lang === "ar" ? "rtl" : "ltr"}>
      {/* Animated ring for attention */}
      <button
        type="button"
        variant="ghost"
        onClick={() => setIsOpen(true)}
        className="bg-transparent flex items-center gap-[6px] text-black hover:bg-transparent hover:text-black/70 duration-500"
        //  className="flex items-center justify-center gap-1 text-sm font-semibold text-white"
        title={T("تحتاج مساعدة", "Need help")}
        aria-details={T(
          "هذه الميزة قيد التطوير",
          "This feature is under development",
          lang
        )}
      >
        {T("تحتاج مساعدة", "Need help")}
        <CircleUser />
      </button>

      {/* Help Panel */}
      {isOpen && (
        <div className="absolute bottom-10 right-0 w-72 z-20 bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 transform origin-bottom-right animate-fadeIn">
          <div className="p-4 bg-purple-50 border-b border-purple-100">
            <h3 className="text-lg font-medium text-main-purple">
              {T("تبدو عالقًا", "You look stuck")}
            </h3>
            <p className="text-sm text-main-purple">
              {T("كيف يمكننا مساعدتك؟", "How can we help you?")}
            </p>
          </div>

          <div className="p-2">
            {helpOptions.map((option) => (
              <button
                key={option.id}
                // onClick={() => handleOptionSelect(option.id)}
                className={`w-full text-right p-3 rounded-md flex items-start space-x-reverse space-x-3 transition-colors ${
                  selectedOption === option.id
                    ? "bg-purple-100"
                    : "hover:bg-gray-50"
                }`}
              >
                <div className="flex-shrink-0">{option.icon}</div>
                <div className="flex-1 mr-3">
                  <h4 className="font-medium text-gray-800">{option.title}</h4>
                  <p className="text-xs text-gray-500">{option.description}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="p-3 bg-gray-50 border-t border-gray-100">
            <button
              onClick={() => setIsOpen(false)}
              className="w-full text-xs text-center text-gray-500 hover:text-gray-700"
            >
              {T("إغلاق", "Close")}
            </button>
          </div>
        </div>
      )}

      {/* Add custom animations to Tailwind's utilities */}
      <style jsx global>{`
        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.5;
          }
          100% {
            transform: scale(1.4);
            opacity: 0;
          }
        }
        @keyframes ping-slower {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.4);
            opacity: 0.3;
          }
          100% {
            transform: scale(1.8);
            opacity: 0;
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-ping-slower {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default YouLookStuck;

YouLookStuck.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};
