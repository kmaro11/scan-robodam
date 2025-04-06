"use client";
import { Button } from "@/components/Button";
import { useI18n } from "@/contexts/I18nContext";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import Copy from "@/icons/Copy.svg";

export const UploadBar = () => {
  const { t } = useI18n();
  const [copy] = useCopyToClipboard();
  return (
    <div className="py-5 bg-gray-300 border-t border-gray-200 flex items-center justify-center gap-5">
      <div className="text-lg"> {t("app.dragAndDrop")}</div>
      <Button size="small" className="text-lg xl:text-lg">
        {t("app.selectDocuments")}
      </Button>
      <div className="flex items-center">
        <p className="text-lg mr-2.5">
          {t("app.sendInvoiceEmail", {
            email: (
              <a href="mailto:uploadinvoices@ivesk.lt" className="font-bold">
                uploadinvoices@ivesk.lt
              </a>
            ),
          })}
        </p>
        <button onClick={() => copy("uploadinvoices@ivesk.lt")}>
          <Copy />
        </button>
      </div>
    </div>
  );
};
