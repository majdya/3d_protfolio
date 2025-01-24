import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const fromRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    emailjs
      .send(
        "service_6brwou8",
        "template_o1nztc7",
        {
          form_name: form.name,
          to_name: "Dev",
          from_email: form.email,
          email: "majd.ya.1995@gmail.com",
          message: form.message,
        },
        "WzOy2TGR_MG0QsOmW"
      )
      .then(
        () => {
          setLoading(false);
          alert(
            `${form.name}, Thank you for reaching out, Will get back to you as soon as possible.`
          );

          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Somthing went wrong.");
        }
      );
  };
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={fromRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-meduim mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              placeholder="What's your name?"
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary 
              text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-meduim mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              placeholder="What's your email?"
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary 
              text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-meduim mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              placeholder="How we can help you?"
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary 
              text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bt-tertiary py-3 px-8 outline-none w-fit text-white 
                        font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

const WCS = SectionWrapper(Contact, "contact");
export default WCS;
