"use client";
import { Package } from "@/types/package";

const EditableTable = ({ packageData, EditableField }: { packageData: Package[], EditableField: string }) => {
  console.log("Package Data:", packageData);
  return (
    <div className="rounded-[10px] border border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7.5">
      <div className="max-w-full overflow-x-auto no-scrollbar dark:scrollbar-thumb-dark-3 dark:scrollbar-track-gray-dark">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-[#F7F9FC] text-left dark:bg-dark-2">
              {Object.keys(packageData[0]).map((item, index) => {
                return (
                  <th
                    key={index}
                    className={`min-w-[120px] px-2 py-2 font-semi-bold ${index === 0 ? "text-left" : "text-center"
                      } text-dark dark:text-white xl:pl-7.5`}
                  >
                    {item.toUpperCase()}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {packageData.map((packageItem, index) => (
              <tr key={index}>
                {Object.keys(packageItem).map((item, index) => {
                  return (
                    <td
                      key={index}
                      className={`border-[#eee] px-2 py-3 flex-row dark:border-dark-3 ${index === packageData.length - 1
                        ? "border-b-0"
                        : "border-b"
                        }`}
                    >
                      {
                        item == EditableField ? <>
                          <p
                            className={`text-dark ${index === 0 ? "text-left" : "text-center"
                              } text-sm dark:text-white`}
                          ><input type="number" className="text-center bg-[#F7F9FC] text-left dark:bg-dark-2 py-1 border-none outline-none items-self-center" /></p>

                        </> : <p
                          className={`text-dark ${index === 0 ? "text-left" : "text-center"
                            } text-sm dark:text-white`}
                        >
                          {index === 0
                            ? packageItem[item].toUpperCase()
                            : packageItem[item]}
                        </p>
                      }

                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EditableTable;
