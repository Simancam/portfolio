"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { useToast } from "@/components/ui/hooks/use-toast";
import emailjs from "@emailjs/browser";

export default function SignupFormDemo() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonePrefix: "",
    phoneNumber: "",
    projectType: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      projectType: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const templateParams = {
        first_name: formData.firstname,
        last_name: formData.lastname,
        user_email: formData.email,
        prefix: formData.phonePrefix,
        number: formData.phoneNumber,
        projectType: formData.projectType,
      };

      const emailResponse = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      );

      if (emailResponse.status === 200) {
        toast({
          title: "¡Mensaje enviado con éxito!",
          description:
            "Gracias por tu mensaje. Te responderé lo antes posible.",
          duration: 5000,
        });

        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phonePrefix: "",
          phoneNumber: "",
          projectType: "",
        });
      } else {
        throw new Error("Error al enviar el email");
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      toast({
        title: "Error",
        description: "Hubo un problema al enviar el formulario. Por favor, intenta nuevamente.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-zinc-900 border border-zinc-800">
      <h2 className="font-bold text-xl text-neutral-200">
        {t("contact.form.title")}
      </h2>
      <p className="font-outfit text-neutral-400 text-sm max-w-sm mt-2">
        {t("contact.description")}
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer className="font-outfit">
            <Label htmlFor="firstname" className="text-neutral-200">
              {t("contact.form.firstName")}
            </Label>
            <Input
              id="firstname"
              placeholder="Walter"
              type="text"
              value={formData.firstname}
              onChange={handleChange}
              required
              className="bg-zinc-800 border-zinc-700 text-neutral-200 placeholder:text-neutral-500 focus:border-[#FF3E3E] focus-visible:ring-1 focus-visible:ring-[#FF3E3E] hover:border-[#FF3E3E]"
            />
          </LabelInputContainer>
          <LabelInputContainer className="font-outfit">
            <Label htmlFor="lastname" className="text-neutral-200">
              {t("contact.form.lastName")}
            </Label>
            <Input
              id="lastname"
              placeholder="White"
              type="text"
              value={formData.lastname}
              onChange={handleChange}
              required
              className="bg-zinc-800 border-zinc-700 text-neutral-200 placeholder:text-neutral-500 focus:border-[#FF3E3E] focus-visible:ring-1 focus-visible:ring-[#FF3E3E] hover:border-[#FF3E3E]"
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4 font-outfit">
          <Label htmlFor="email" className="text-neutral-200">
            {t("contact.form.email")}
          </Label>
          <Input
            id="email"
            placeholder="example@email.com"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-zinc-800 border-zinc-700 text-neutral-200 placeholder:text-neutral-500 focus:border-[#FF3E3E] focus-visible:ring-1 focus-visible:ring-[#FF3E3E] hover:border-[#FF3E3E]"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4 font-outfit">
          <Label htmlFor="phone" className="text-neutral-200">
            {t("contact.form.phone")}
          </Label>
          <div className="flex gap-2">
            <Input
              id="phonePrefix"
              placeholder="+57"
              type="tel"
              value={formData.phonePrefix}
              onChange={handleChange}
              required
              className="w-20 bg-zinc-800 border-zinc-700 text-neutral-200 placeholder:text-neutral-500 focus:border-[#FF3E3E] focus-visible:ring-1 focus-visible:ring-[#FF3E3E] hover:border-[#FF3E3E]"
            />
            <Input
              id="phoneNumber"
              placeholder="123 456 789"
              type="tel"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="flex-1 bg-zinc-800 border-zinc-700 text-neutral-200 placeholder:text-neutral-500 focus:border-[#FF3E3E] focus-visible:ring-1 focus-visible:ring-[#FF3E3E] hover:border-[#FF3E3E]"
            />
          </div>
        </LabelInputContainer>
        <LabelInputContainer className="mb-8 font-outfit">
          <Label htmlFor="projectType" className="text-neutral-200">
            {t("contact.form.projectType")}
          </Label>
          <Select
            value={formData.projectType}
            onValueChange={handleSelectChange}
          >
            <SelectTrigger className="bg-zinc-800 border-zinc-700 text-neutral-200 placeholder:text-neutral-500 focus:border-[#FF3E3E] focus-visible:ring-1 focus-visible:ring-[#FF3E3E] hover:border-[#FF3E3E]">
              <SelectValue
                placeholder={t("contact.form.projectTypePlaceholder")}
              />
            </SelectTrigger>
            <SelectContent className="bg-zinc-800 border-zinc-700">
              <SelectItem
                value="software"
                className="text-neutral-200 focus:bg-zinc-700 focus:text-neutral-200"
              >
                {t("contact.form.option1")}
              </SelectItem>
              <SelectItem
                value="landing"
                className="text-neutral-200 focus:bg-zinc-700 focus:text-neutral-200"
              >
                {t("contact.form.option2")}
              </SelectItem>
              <SelectItem
                value="desing"
                className="text-neutral-200 focus:bg-zinc-700 focus:text-neutral-200"
              >
                {t("contact.form.option3")}
              </SelectItem>
              <SelectItem
                value="other"
                className="text-neutral-200 focus:bg-zinc-700 focus:text-neutral-200"
              >
                {t("contact.form.option4")}
              </SelectItem>
            </SelectContent>
          </Select>
        </LabelInputContainer>
        <button
          className="font-outfit bg-gradient-to-br relative group/btn from-zinc-800 to-zinc-900 block w-full text-neutral-200 rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] disabled:opacity-50"
          type="submit"
          disabled={loading}
        >
          {loading ? "Enviando..." : t("contact.form.submit")}
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-[#FF3E3E] to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
