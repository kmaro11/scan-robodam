"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { z, ZodError } from "zod";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { useI18n } from "@/contexts/I18nContext";
import { useParams, useRouter } from "next/navigation";
import { LINKS } from "@/constants/Links";
import Link from "next/link";

const schema = z.object({
  name: z.string().nonempty("Name is required"),
  email: z.string().email("Invalid email address"),
});

interface FormData {
  email: string;
  password: string;
}

export const Form = () => {
  const { t } = useI18n();
  const params = useParams();
  const { lang } = params;
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    password: "",
    email: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

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

    router.push(`/${lang}/${LINKS.SCAN.HOME}`);
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
          {t("common.login")}
        </h2>
        <div className="flex flex-col gap-y-11">
          <div>
            <Input
              label="Your Email"
              name="email"
              required
              placeholder="Enter your email address"
              error={!!errors.email}
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <Input
              label="Your password"
              name="password"
              type="password"
              placeholder="Enter your password"
              required
              error={!!errors.password}
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="text-red-600 text-sm">{errors.password}</p>
            )}
          </div>
        </div>
        <div className="flex justify-between items-center pt-[60px]">
          <div>
            <p className="text-xl">{t("auth.newUser")}</p>
            <Link
              href={`/${lang}/${LINKS.AUTH.REGISTER}`}
              className="text-green-100 text-xl font-bold"
            >
              {t("auth.signUp")}
            </Link>
          </div>
          <Button
            type="submit"
            size="small"
            className="max-w-[170px] w-full uppercase h-[52px]"
          >
            {t("common.login")}
          </Button>
        </div>
      </div>
    </form>
  );
};
