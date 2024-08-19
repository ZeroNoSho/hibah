"use client";
import Button from "@/components/atmos/button";
import Heading from "@/components/atmos/heading";
import { IconsImport } from "@/utils/icons/IconsImport";
import React, { useState } from "react";

const faqData = [
  {
    question: "Apa saja syarat untuk mengajukan proposal kegiatan ormawa?",
    answer:
      "Syarat umumnya meliputi formulir proposal yang lengkap, daftar anggota ormawa yang terlibat, anggaran kegiatan, dan persetujuan dari pembina ormawa.",
  },
  {
    question: "Bagaimana cara mengetahui status pengajuan proposal kami?",
    answer:
      "Anda dapat menginstal Tailwind CSS dengan menjalankan `npm install tailwindcss postcss autoprefixer` dan mengkonfigurasi file `tailwind.config.js` serta `postcss.config.js`. Kemudian, tambahkan `@tailwind` direktif ke dalam file CSS global Anda.",
  },
  {
    question:
      "Apakah ada batasan anggaran untuk setiap proposal kegiatan ormawa?",
    answer:
      "Ya, terdapat batasan anggaran tertentu yang dapat diajukan untuk setiap kegiatan ormawa. Detailnya biasanya tercantum dalam panduan pengajuan proposal yang bisa diakses melalui website resmi kampus.",
  },
  {
    question:
      "Berapa lama waktu yang dibutuhkan untuk proses persetujuan proposal?",
    answer:
      "Waktu yang dibutuhkan untuk proses persetujuan proposal bervariasi tergantung pada kompleksitas kegiatan dan jumlah proposal yang masuk. Namun, kami berusaha untuk memprosesnya dalam waktu yang sesingkat mungkin.",
  },
  {
    question:
      "Bisakah proposal yang telah disetujui direvisi atau diubah setelahnya?",
    answer:
      "Revisi atau perubahan pada proposal yang telah disetujui dapat dilakukan, namun harus melalui proses pengajuan revisi dan persetujuan ulang oleh pihak terkait.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="md:w-[1200px] py-[40px] mx-auto text-center max-md:p-5">
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-2">
          <div className="border-t-4 border-[#FFD600] w-5"></div>
          <Heading level={4} className={"text-sm "}>
            04.<span className={"font-[600]"}>FAQ</span>
          </Heading>
        </div>
      </div>
      <Heading level={1} className={"text-[24px] font-[600]"}>
        FREQUENTLY ASKED QUESTION
      </Heading>
      {faqData.map((item, index) => (
        <div key={index} className="border rounded-md bg-transparent my-5 py-3">
          <Button
            className="w-full px-4 py-2 text-left flex"
            onClick={() => toggleAnswer(index)}
          >
            <Heading level={3} className=" font-semibold">
              {item.question}
            </Heading>

            {openIndex === index ? (
              <IconsImport.Dropup
                className={"h-5 w-5 ml-auto"}
              ></IconsImport.Dropup>
            ) : (
              <IconsImport.Dropdown
                className={"h-5 w-5 ml-auto"}
              ></IconsImport.Dropdown>
            )}
          </Button>
          {openIndex === index && (
            <div className="px-4 py-2 bg-gray-50 text-left">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
