import { useLang } from "../../hooks/LangContext";

const Table = ({
  dir = "ltr",
  data = {},
  title = "",
  bg = "bg-white",
  textColor = "text-black",
  hover = false,
}) => {
  const { T } = useLang();
  return (
    <div dir="rtl" className="flex flex-col w-full gap-8">
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
          className={`${bg} w-full text-[#717680] overflow-hidden rounded-md text-left`}
        >
          <thead>
            <tr>
              {Object.keys(data.header).map((key) => (
                <th
                  dir={T("rtl", "ltr")}
                  key={key}
                  className="px-6 bg-[#FAFAFA] text-center py-3"
                >
                  {data.header[key]}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.body.map((row, index) => (
              <tr key={index}>
                {Object.keys(data.header).map((key) => (
                  <td
                    key={key}
                    dir="ltr"
                    className="py-4 relative group px-6 text-center border-b hover:bg-gray-100 duration-200 border-[#E9EAEB]"
                  >
                    <div
                      className={` ${
                        !isNaN(row[key]) && "truncate max-w-[60px]"
                      }  mx-auto`}
                    >
                      {row[key] || "-"}
                    </div>

                    {hover &&
                      !isNaN(row[key]) &&
                      row[key] !== "" &&
                      row[key] !== null && (
                        <div
                          dir={T("rtl", "ltr")}
                          className={`absolute flex items-center gap-1 text-nowrap text-[10px] bg-white 
                          rounded-[8px] drop-shadow-md -translate-y-[80%] ${T(
                            "translate-x-[80%] right-0",
                            "-translate-x-[80%] left-0"
                          )} 
                          pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100
                           opacity-0 top-0 duration-200 p-5`}
                        >
                          <span>{row.Statement}</span>
                          <span className="flex text-[10px] items-center gap-1">
                            {"("}
                            {data.header[key]}
                            {")"}
                          </span>
                          :<span>{row[key]}</span>
                        </div>
                      )}
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
