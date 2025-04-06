"use client";
import { useI18n } from "@/contexts/I18nContext";

export const Table = ({
  headers,
  list,
  slots,
}: {
  headers: { key: string; name: string; columns: number }[];
  list: any[];
  slots?: { [key: string]: (item: any) => React.ReactNode };
}) => {
  const { t } = useI18n();
  return (
    <div className="w-full border-b border-gray-200">
      <div
        className="grid w-full h-[45px] border-t border-gray-200"
        style={{
          gridTemplateColumns: `repeat(${headers.length * 3}, minmax(0, 1fr))`,
        }}
      >
        {headers.map((header, i) => (
          <div
            key={i}
            className="border-r last:border-r-0 px-1 border-gray-200 bg-gray-300 text-lg text-gray-200 flex items-center"
            style={{
              gridColumn: `span ${header.columns} / span ${header.columns}`,
            }}
          >
            {t(header.name)}
          </div>
        ))}
      </div>
      {list &&
        list.length > 0 &&
        list.map((item, i) => (
          <div
            key={i}
            className="grid w-full h-[45px] border-t border-gray-200"
            style={{
              gridTemplateColumns: `repeat(${
                headers.length * 3
              }, minmax(0, 1fr))`,
            }}
          >
            {headers.map((header, i) => (
              <div
                key={i}
                className="border-r last:border-r-0 px-1 border-gray-200 text-lg text-primary flex items-center"
                style={{
                  gridColumn: `span ${header.columns} / span ${header.columns}`,
                }}
              >
                {slots && slots[header.key]
                  ? slots[header.key](item)
                  : item[header.key]}
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};
