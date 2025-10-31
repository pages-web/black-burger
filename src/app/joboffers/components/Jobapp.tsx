"use client";
import React, { useState } from "react";
import Image from "next/image";

import jobsData from "../../../data/pages/jobs.json";

type Advantage = {
  id: number;
  number: string;
  title: string;
  description: string;
  image: string;
};

type JobOffer = {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  schedule: string;
  role: string;
  datePosted: string;
  status: string;
  image: string;
  requirements?: string[];
  responsibilities?: string[];
  benefits?: string[];
};

type JobsData = {
  advantages: Advantage[];
  jobOffers: JobOffer[];
  metadata: {
    lastUpdated: string;
    totalJobs: number;
    totalAdvantages: number;
    version: string;
  };
};

export default function Jobapp() {
  const data = jobsData as JobsData;
  const advantages = data.advantages;
  const jobOffers = data.jobOffers;

  const [selectedJob, setSelectedJob] = useState<JobOffer | null>(
    jobOffers.length ? jobOffers[0] : null
  );

  return (
    <div className="mt-[64px]">
      <div className="w-full">
        <Image
          src="/images/joboffer.png"
          alt="Job Application Illustration"
          width={8000}
          height={500}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      <div className="flex flex-col px-4 sm:px-8 lg:px-[138px] py-8 sm:py-12 lg:py-[64px] gap-8 sm:gap-12 lg:gap-[70px]">
        <div className="flex flex-col gap-[30px] items-start">
          <h1 className="text-center justify-start text-white text-2xl sm:text-3xl lg:text-5xl">
            Бидэнтэй хамт ажилласнаар
          </h1>
          <p className="self-stretch justify-start text-white text-sm sm:text-base font-medium">
            Black burger нь олон талт бизнесүүдээр дамжуулан нэгдмэл өсөлт,
            инноваци, чанар, хэрэглэгчдэд чиглэсэн үйлчилгээг хүргэхийг зорьдог.
            Бидний стратеги дараах үндсэн зарчмууд дээр суурилдаг.
          </p>
        </div>

        {advantages.map((item, index) => (
          <div
            key={item.number + index}
            className="self-stretch inline-flex flex-col justify-start items-center"
          >
            <div className="w-full max-w-[1164px] py-4 sm:py-7 border-t border-white/20 flex flex-col lg:flex-row justify-between items-start gap-4 lg:gap-0">
              <div className="justify-start text-red-500 text-sm sm:text-base font-extrabold uppercase order-1 lg:order-none">
                {item.number}
              </div>

              <div className="w-full lg:w-96 inline-flex flex-col justify-start items-start gap-3 order-3 lg:order-none">
                <div className="self-stretch justify-start text-stone-300 text-sm sm:text-base font-semibold">
                  {item.title}
                </div>
                <div className="self-stretch justify-start text-white text-sm sm:text-base font-medium">
                  {item.description}
                </div>
              </div>

              <Image
                className="w-full lg:w-[520px] h-48 sm:h-60 rounded-[20px] object-cover order-2 lg:order-none"
                src={item.image}
                alt={item.title}
                width={520}
                height={245}
              />
            </div>
          </div>
        ))}

        <div className="text-start justify-start text-white text-2xl sm:text-3xl lg:text-5xl font-medium">
          Process
        </div>
        <div className="self-stretch bg-black flex flex-col sm:flex-row justify-center sm:justify-start items-center sm:items-end gap-8 sm:gap-16 px-4 sm:px-0">
          {[
            { img: "/images/image10.png", title: "Selection procedure" },
            { img: "/images/image11.png", title: "Interview" },
            { img: "/images/image12.png", title: "Application results" },
          ].map((step, idx) => (
            <React.Fragment key={step.title}>
              <div className="w-20 sm:w-28 inline-flex flex-col justify-center items-center gap-2 sm:gap-4">
                <Image
                  alt={step.title}
                  className="h-20 sm:h-28 object-cover"
                  src={step.img}
                  width={112}
                  height={112}
                />
                <div className="w-20 sm:w-28 text-center justify-start text-white text-sm sm:text-base font-semibold">
                  {step.title}
                </div>
                <div className="w-3 sm:w-5 h-3 sm:h-5 bg-white rounded-full" />
              </div>
              {idx < 2 && <div className="hidden sm:block w-48 lg:w-72 h-0.5 bg-white" />}
            </React.Fragment>
          ))}
        </div>

        <div className="self-stretch py-8 sm:py-16 lg:py-28 bg-black inline-flex flex-col justify-start items-start gap-6 sm:gap-8 lg:gap-10">
          <div className="self-stretch justify-start text-white text-2xl sm:text-3xl lg:text-5xl font-medium leading-tight sm:leading-[67.20px]">
            Aжлын байр
          </div>

          <div className="w-full max-w-[1164px] flex flex-col lg:flex-row justify-start items-start gap-4 lg:gap-8 overflow-hidden">
            <div className="w-full lg:w-80 lg:h-[518.51px] inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
              <div className="self-stretch justify-start text-white text-sm sm:text-base font-medium leading-7">
                {jobOffers.length} ажлын байр
              </div>

              <div className="self-stretch flex-1 flex flex-col justify-start items-start gap-4 overflow-hidden max-h-96 lg:max-h-none">
                {jobOffers.map((job) => {
                  const selected = selectedJob?.id === job.id;
                  return (
                    <button
                      key={job.id}
                      type="button"
                      onClick={() => setSelectedJob(job)}
                      className={`self-stretch px-4 py-2 rounded-xl text-left transition outline outline-offset-[-1.06px] flex flex-col justify-end items-start gap-3
                        ${selected ? "outline-red-500" : "outline-red-500/0 hover:outline-white/20"}
                      `}
                    >
                      <div className="self-stretch inline-flex justify-start items-start gap-4">
                        <Image
                          className="w-10 sm:w-14 h-10 sm:h-14 rounded-lg"
                          src={job.image}
                          alt={job.title}
                          width={52}
                          height={52}
                        />
                        <div className="flex-1 inline-flex flex-col justify-start items-start gap-4">
                          <div className="self-stretch inline-flex justify-start items-center gap-2">
                            <div className="flex-1 inline-flex flex-col justify-start items-start">
                              <div className="self-stretch h-7 justify-start text-white text-sm sm:text-base font-bold leading-7">
                                {job.title}
                              </div>
                              <div className="self-stretch justify-start text-white/75 text-xs sm:text-sm font-medium leading-tight">
                                {job.department}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="self-stretch inline-flex justify-start items-center gap-1">
                        <div className="px-2 py-1 bg-red-300/40 rounded-xl flex justify-center items-center gap-1">
                          <div className="w-3 h-3 relative overflow-hidden">
                          </div>
                          <div className="text-white text-xs font-medium leading-tight whitespace-nowrap">
                            {job.type}
                          </div>
                        </div>
                      </div>

                      <div className="self-stretch flex flex-col justify-start items-start gap-3">
                        <div className="self-stretch inline-flex justify-start items-start gap-2">
                          <div className="justify-start text-white/50 text-xs sm:text-sm font-medium leading-tight">
                            Зар тавьсан огноо
                          </div>
                          <div className="justify-start text-white/50 text-xs sm:text-sm font-medium leading-tight">
                            {job.datePosted}
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex-1 lg:h-[518.51px] pt-4 lg:pt-10 inline-flex flex-col justify-start items-start gap-3 lg:gap-5">
              <div className="justify-start text-white text-sm sm:text-base font-semibold capitalize leading-normal">
                дэлгэрэнгүй
              </div>

              <div className="self-stretch flex-1 px-3 sm:px-6 pt-3 sm:pt-6 rounded-xl outline outline-offset-[-1.06px] outline-white/10 flex flex-col justify-start items-start gap-3 overflow-hidden">
                {selectedJob ? (
                  <div className="self-stretch flex-1 flex flex-col justify-start items-start gap-3">
                    <div className="self-stretch flex flex-col justify-start items-start gap-2">
                      <div className="self-stretch inline-flex justify-start items-start gap-2">
                        <Image
                          className="w-10 sm:w-14 h-10 sm:h-14 rounded-lg"
                          src={selectedJob.image}
                          alt={selectedJob.title}
                          width={52}
                          height={52}
                        />
                        <div className="flex-1 inline-flex flex-col justify-start items-start">
                          <div className="self-stretch justify-start text-white text-sm sm:text-base font-semibold leading-7">
                            {selectedJob.location}
                          </div>
                          <div className="self-stretch justify-start text-white/75 text-xs sm:text-sm font-medium leading-tight">
                            {selectedJob.department}
                          </div>
                        </div>
                      </div>

                      <div className="self-stretch pb-3 border-b-[0.53px] border-white/50 inline-flex justify-between items-center">
                        <div className="justify-start text-white text-sm sm:text-base font-semibold uppercase leading-none">
                          {selectedJob.title}
                        </div>
                        <div className="h-8 sm:h-10 px-2 sm:px-3 pb-0.5 bg-red-500 rounded shadow-[0px_0px_0px_1.058181881904602px_rgba(0,0,0,0.06)] flex justify-center items-center gap-1 overflow-hidden cursor-pointer">
                          <div className="text-center justify-start text-white text-xs sm:text-sm font-medium leading-none">
                            Анкет бөглөх
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="self-stretch flex flex-col justify-start items-start gap-3">
                      <div className="self-stretch py-3 border-b-[0.53px] flex flex-col justify-start items-start gap-2">
                        <div className="self-stretch justify-start text-white text-sm sm:text-base font-semibold leading-tight">
                          Тавигдах шаардлага:
                        </div>
                        <div className="self-stretch flex flex-col sm:flex-row justify-start items-start sm:items-center gap-2">
                          <Image
                            className="w-full sm:w-64 h-32 sm:h-36 rounded-lg object-cover"
                            src="/images/image6.png"
                            alt="requirements"
                            width={265}
                            height={144}
                          />
                          <div className="flex-1 justify-start text-white/75 text-xs sm:text-sm font-medium leading-snug">
                            {selectedJob.requirements?.length ? (
                              <div className="space-y-1">
                                {selectedJob.requirements.map((req, i) => (
                                  <div key={i}>- {req}</div>
                                ))}
                              </div>
                            ) : (
                              <div>- Тавигдах шаардлага байхгүй</div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="self-stretch py-3 border-b-[0.53px] flex flex-col justify-start items-start gap-3">
                        <div className="self-stretch inline-flex justify-start items-end gap-2">
                          <div className="justify-start">
                            <span className="text-white text-sm sm:text-base font-semibold leading-tight">
                              Ажлын байрны төрөл
                            </span>
                            <span className="text-white text-sm sm:text-base font-medium leading-tight">
                              :
                            </span>
                          </div>
                          <div className="justify-start text-white/75 text-xs sm:text-sm font-medium leading-tight">
                            {selectedJob.role}
                          </div>
                        </div>

                        <div className="w-full h-5 inline-flex justify-start items-center gap-2">
                          <div className="justify-start">
                            <span className="text-white text-sm sm:text-base font-semibold leading-tight">
                              Ажлын цаг
                            </span>
                            <span className="text-white text-sm sm:text-base font-medium leading-tight">
                              :
                            </span>
                          </div>
                          <div className="justify-start text-white/75 text-xs sm:text-sm font-medium leading-tight">
                            {selectedJob.schedule}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-white/70">Ажлын байр сонгоно уу.</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
