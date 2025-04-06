"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { z, ZodError } from "zod";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { useI18n } from "@/contexts/I18nContext";
import { LINKS } from "@/constants/Links";
import { useParams, useRouter } from "next/navigation";

const schema = z.object({
  code: z.string().nonempty("Code is required"),
});

interface FormData {
  code: string;
}

export const Form = () => {
  const { t } = useI18n();
  const params = useParams();
  const { lang } = params;
  const [formData, setFormData] = useState<FormData>({
    code: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const email = "admin@robodam.com";
  const router = useRouter();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    router.push(`/${lang}/${LINKS.AUTH.REGISTERED}`);
    return console.log("submit");

    try {
      // Validate form data using Zod
      schema.parse(formData);
      setErrors({});
      if (status && loading) {
        // delete later this
      }
      // Convert formData object to FormData instance
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      // Submit to the server action
      //   const result = await submitForm();

      //   setStatus(result.message);
    } catch (error) {
      console.error("Error submitting form:", error);

      if (error instanceof ZodError) {
        // setErrors(error.formErrors.fieldErrors as Partial<FormData>);
      } else {
        setStatus("An unexpected error occurred.");
      }
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-[585px] w-full border border-gray-200 px-4 md:px-8 pt-9 pb-10 rounded-[5px]"
    >
      <div className="max-w-[480px] w-full mx-auto">
        <h2 className="text-center text-[40px] leading-[50px] font-bold mb-7 capitalize">
          {t("auth.emailConfirmation")}
        </h2>
        <p className="text-xl text-blue mb-4">
          {t("auth.confirmationText", {
            email: email,
          })}
        </p>
        <div className="flex flex-col gap-y-11">
          <div>
            <Input
              label="auth.code"
              name="code"
              type="text"
              required
              placeholder={t("auth.confirmPlaceholder") as string}
              error={!!errors.code}
              value={formData.code}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex justify-between items-center pt-10">
          <div>
            <div className="flex">
              <p className="text-xl">{t("auth.notReceived")}?</p>
              <button className="text-xl ml-1">{t("auth.resend")}</button>
            </div>
            <a href={`/${lang}/${LINKS.AUTH.LOGIN}`} className="text-xl">
              {t("auth.backToLogin")}
            </a>
          </div>
          <Button
            type="submit"
            size="small"
            className="max-w-[170px] w-full uppercase h-[52px]"
          >
            {t("common.confirm")}
          </Button>
        </div>
      </div>
    </form>
  );
};
