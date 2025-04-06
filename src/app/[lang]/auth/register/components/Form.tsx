"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { z, ZodError } from "zod";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { useI18n } from "@/contexts/I18nContext";
import { LINKS } from "@/constants/Links";
import { useParams, useRouter } from "next/navigation";
import Select from "@/components/Select";

const schema = z.object({
  name: z.string().nonempty("Name is required"),
  email: z.string().email("Invalid email address"),
});

interface FormData {
  email: string;
  password: string;
  phone: string;
  software: string;
}

export const Form = () => {
  const { t } = useI18n();
  const params = useParams();
  const { lang } = params;
  const [formData, setFormData] = useState<FormData>({
    password: "",
    email: "",
    phone: "",
    software: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
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

    router.push(`/${lang}/${LINKS.AUTH.EMAILCONFIRMATION}`);
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
          {t("auth.signUp")}
        </h2>
        <div className="flex flex-col gap-y-11">
          <div>
            <Input
              label="auth.email"
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
              label="auth.password"
              name="password"
              type="password"
              placeholder="Enter your password"
              required
              error={!!errors.password}
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div>
            <Input
              label="auth.phone"
              name="phone"
              type="tel"
              required
              placeholder="+37012312312"
              error={!!errors.phone}
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-6 text-xl font-bold text-blue">
              {t("auth.accountingSoftware")}*
            </label>
            <Select
              options={["Option 1", "Option 2", "Option 3"]}
              selected={formData.software}
              setSelected={(value) =>
                setFormData((prev) => ({ ...prev, software: value }))
              }
            />
          </div>
        </div>
        <div className="flex justify-between items-center pt-10">
          <div>
            <p className="text-xl">{t("auth.registeredUser")}?</p>
            <a
              href={`/${lang}/${LINKS.AUTH.LOGIN}`}
              className="text-blue text-xl font-bold"
            >
              {t("auth.signIn")}
            </a>
          </div>
          <Button
            type="submit"
            size="small"
            className="max-w-[170px] w-full uppercase h-[52px]"
          >
            {t("auth.signUp")}
          </Button>
        </div>
      </div>
    </form>
  );
};
