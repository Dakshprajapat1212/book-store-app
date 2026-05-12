import React, { useState } from "react";

const ContactPage = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // ================= HANDLE INPUT =================
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ================= SEND WHATSAPP =================
  const sendWhatsApp = () => {

    const phoneNumber = "9166150689"; 
    // apna whatsapp number with country code

    const text = `
Name: ${formData.name}

Email: ${formData.email}

Phone: ${formData.phone}

Subject: ${formData.subject}

Message:
${formData.message}
    `;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(whatsappURL, "_blank");
  };

  return (

    <div className="bg-[#f5f9f8] min-h-screen px-6 py-20">

      {/* ================= HEADER ================= */}
      <div className="text-center max-w-3xl mx-auto">

        <div
          className="
            inline-flex
            items-center
            gap-2
            bg-white
            px-5
            py-2
            rounded-full
            shadow-md
            text-sm
            font-semibold
            text-teal-600
          "
        >
          ✦ CONTACT BOOKSHELL
        </div>

        <h1
          className="
            text-5xl
            md:text-6xl
            font-black
            mt-8
            bg-gradient-to-r
            from-teal-500
            to-blue-600
            bg-clip-text
            text-transparent
          "
        >
          Let’s Talk
        </h1>

        <p
          className="
            text-gray-600
            text-lg
            leading-8
            mt-6
          "
        >
          Have questions, feedback, or partnership ideas?
          We’d love to hear from you.
        </p>

      </div>

      {/* ================= MAIN SECTION ================= */}
      <div
        className="
          max-w-7xl
          mx-auto
          grid
          grid-cols-1
          lg:grid-cols-3
          gap-10
          mt-16
        "
      >

        {/* ================= LEFT INFO ================= */}
        <div
          className="
            bg-white
            rounded-[35px]
            p-10
            shadow-xl
            border
            border-gray-100
          "
        >

          <h2
            className="
              text-3xl
              font-black
              text-[#0f172a]
            "
          >
            Contact Info
          </h2>

          <p className="text-gray-500 mt-4 leading-7">
            Reach out anytime. We’re always ready to help
            readers and creators around the world.
          </p>

          {/* INFO ITEMS */}
          <div className="mt-10 space-y-8">

            {/* LOCATION */}
            <div className="flex gap-5">

              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-gradient-to-r
                  from-teal-500
                  to-lime-400
                  flex
                  items-center
                  justify-center
                  text-white
                  text-2xl
                  shadow-lg
                "
              >
                📍
              </div>

              <div>
                <h3 className="font-bold text-xl text-[#0f172a]">
                  Location
                </h3>

                <p className="text-gray-500 mt-2">
                  Jaipur, Rajasthan, India
                </p>
              </div>

            </div>

            {/* EMAIL */}
            <div className="flex gap-5">

              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-gradient-to-r
                  from-teal-500
                  to-lime-400
                  flex
                  items-center
                  justify-center
                  text-white
                  text-2xl
                  shadow-lg
                "
              >
                ✉️
              </div>

              <div>
                <h3 className="font-bold text-xl text-[#0f172a]">
                  Email
                </h3>

                <p className="text-gray-500 mt-2">
                  contact@bookshell.com
                </p>
              </div>

            </div>

            {/* PHONE */}
            <div className="flex gap-5">

              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-gradient-to-r
                  from-teal-500
                  to-lime-400
                  flex
                  items-center
                  justify-center
                  text-white
                  text-2xl
                  shadow-lg
                "
              >
                📞
              </div>

              <div>
                <h3 className="font-bold text-xl text-[#0f172a]">
                  Phone
                </h3>

                <p className="text-gray-500 mt-2">
                  +91 98765 43210
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* ================= FORM ================= */}
        <div
          className="
            lg:col-span-2
            bg-white
            rounded-[35px]
            p-10
            shadow-xl
            border
            border-gray-100
          "
        >

          <h2
            className="
              text-3xl
              font-black
              text-[#0f172a]
            "
          >
            Send Message
          </h2>

          <p className="text-gray-500 mt-4">
            Your message will directly open in WhatsApp.
          </p>

          {/* FORM */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

            {/* NAME */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="
                bg-gray-50
                border
                border-gray-200
                rounded-2xl
                px-5
                py-4
                outline-none
                focus:border-teal-500
              "
            />

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="
                bg-gray-50
                border
                border-gray-200
                rounded-2xl
                px-5
                py-4
                outline-none
                focus:border-teal-500
              "
            />

            {/* PHONE */}
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="
                bg-gray-50
                border
                border-gray-200
                rounded-2xl
                px-5
                py-4
                outline-none
                focus:border-teal-500
              "
            />

            {/* SUBJECT */}
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="
                bg-gray-50
                border
                border-gray-200
                rounded-2xl
                px-5
                py-4
                outline-none
                focus:border-teal-500
              "
            />

          </div>

          {/* MESSAGE */}
          <textarea
            rows="7"
            name="message"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
            className="
              w-full
              mt-6
              bg-gray-50
              border
              border-gray-200
              rounded-2xl
              px-5
              py-4
              outline-none
              focus:border-teal-500
              resize-none
            "
          />

          {/* BUTTON */}
          <button
            onClick={sendWhatsApp}
            className="
              w-full
              mt-8
              bg-gradient-to-r
              from-teal-500
              to-lime-400
              text-white
              py-5
              rounded-2xl
              text-lg
              font-bold
              shadow-lg
              hover:scale-[1.01]
              transition
            "
          >
            Send via WhatsApp →
          </button>

        </div>

      </div>

    </div>
  );
};

export default ContactPage;