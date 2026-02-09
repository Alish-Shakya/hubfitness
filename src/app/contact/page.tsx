"use client";

import ContactForm from "@/components/contacts/ContactForms";
import ContactInfo from "@/components/contacts/ContactInfo";

export default function ContactPage() {
  return (
    <div className="relative">
      <section className="bg-[#050505] text-white min-h-screen flex items-center justify-center pt-32 px-6">
        <div className="w-full max-w-5xl flex flex-col md:flex-row gap-12">
          {/* Contact Info vertically centered */}
          <div className="flex-1 flex items-center">
            <ContactInfo />
          </div>

          {/* Contact Form */}
          <div className="flex-1">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
