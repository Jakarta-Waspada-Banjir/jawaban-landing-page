"use client";

import { useForm } from "@formspree/react";
import { useState } from "react";

import { InputWithLabel } from "@/components/InputWithLabel";
import { TextareaWithLabel } from "@/components/TextAreaWithLabel";
import { Button } from "@/components/ui";
import { useToast } from "@/components/ui/use-toast";

import { InformationContact } from "./InformationContact";

export const ContactUs = () => {
  const { toast } = useToast();

  const [state, handleSubmit] = useForm("mrgndbry");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name) {
      tempErrors.name = "Nama wajib diisi.";
    }
    if (!formData.email) {
      tempErrors.email = "Email wajib diisi.";
    }
    if (!formData.message) {
      tempErrors.message = "Pesan wajib diisi.";
    }
    return tempErrors;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      handleSubmit(formData);
      toast({
        variant: "success",
        description: "Your message has been sent successfully.",
      });
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
      <h1 className="mb-6 text-2xl font-semibold text-gray-700 md:text-3xl">
        Kontak Kami
      </h1>
      <div className="flex flex-col gap-5">
        <div className="grid items-center rounded-md border border-gray-100 shadow-lg md:grid-cols-2 lg:grid-cols-3">
          <InformationContact />

          <div className="p-6 lg:col-span-2">
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
              <InputWithLabel
                label="Nama"
                id="nama"
                name="name"
                placeholder="Nama Anda"
                onChange={handleInputChange}
                className={errors.name && "ring-danger-500"}
                error={errors.name}
              />

              <InputWithLabel
                label="Email"
                type="email"
                id="email"
                name="email"
                placeholder="Email Anda"
                onChange={handleInputChange}
                className={errors.email && "ring-danger-500"}
                error={errors.email}
              />

              <TextareaWithLabel
                label="Pesan"
                name="message"
                id="message"
                placeholder="Tuliskan pesan Anda"
                rows="4"
                onChange={handleInputChange}
                className={errors.message && "ring-danger-500"}
                error={errors.message}
              />

              <Button
                type="submit"
                className="mt-4 px-4 py-2"
                disabled={state.submitting}
              >
                {state.submitting ? "Mengirim..." : "Kirim Pesan"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
