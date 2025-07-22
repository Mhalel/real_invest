import { useLang } from "../../hooks/LangContext";

const Table = ({
  dir = "ltr",
  data = {},
  title = "",
  bg = "bg-white",
  textColor = "text-black",
}) => {
  const { T } = useLang();
  return (
    <div dir="rtl" className="flex flex-col w-full  gap-8">
      {title && (
        <p
          dir={T("rtl", "ltr")}
          className={`${textColor} text-[24px] font-bold`}
        >
          {title}
        </p>
      )}
      <div className="w-full overflow-auto">
        <table
          dir={dir}
          className={`${bg}   w-full  text-[#717680] rounded-md overflow-hidden text-left`}
        >
          <thead>
            <tr>
              {Object.keys(data.header).map((key) => (
                <th
                  dir={T("rtl", "ltr")}
                  key={key}
                  className="px-6 bg-[#FAFAFA] text-center  py-3 border-b"
                >
                  {data.header[key]}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.body.map((row, index) => (
              <tr className="" key={index}>
                {Object.keys(data.header).map((key) => (
                  <td
                    key={key}
                    className="py-4 px-6 text-center border-b hover:bg-gray-100 duration-200 border-[#E9EAEB]"
                  >
                    {row[key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
