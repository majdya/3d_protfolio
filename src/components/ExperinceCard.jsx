/* eslint-disable react/prop-types */

import { VerticalTimelineElement } from "react-vertical-timeline-component";

export const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[100%] h-[100%] object-fill rounded-full"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <a href={experience.site} target="_blank"
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </a>
    </div>
    <ul className="mt-5 list-disc ml-5 spacey-2">
      {experience.points.map((point, index) => (
        <li
          key={index}
          className="text-white-100 text0-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);
