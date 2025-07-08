import { useState } from "react";

const WebsiteInquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
    websiteType: "",
    payment: "",
    auth: "",
    figma: "",
    message: "",
  });

  const [whatsappError, setWhatsappError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validate WhatsApp to allow only numbers
    if (name === "whatsapp") {
      if (!/^\d*$/.test(value)) {
        setWhatsappError("Only numbers allowed");
        return;
      } else {
        setWhatsappError("");
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };



  return (
    <section className="max-w-4xl p-6 mx-auto my-10 bg-white rounded-lg shadow-md dark:bg-gray-900">
      <h2 className="mb-6 text-3xl font-bold text-gray-800 dark:text-white">Build Your Website</h2>

      <form    action="https://formspree.io/f/mwpbpakq"
          method="POST" className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 text-gray-700 dark:text-gray-300">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="px-4 py-2 text-gray-900 border border-gray-300 rounded dark:border-gray-600 bg-gray-50 dark:bg-gray-800 dark:text-gray-100"
          />
        </div>

        {/* WhatsApp */}
        <div className="flex flex-col">
          <label htmlFor="whatsapp" className="mb-1 text-gray-700 dark:text-gray-300">WhatsApp Number</label>
          <input
            type="tel"
            id="whatsapp"
            name="whatsapp"
            required
            value={formData.whatsapp}
            onChange={handleChange}
            className={`px-4 py-2 text-gray-900 border ${
              whatsappError ? "border-red-500" : "border-gray-300"
            } rounded dark:border-gray-600 bg-gray-50 dark:bg-gray-800 dark:text-gray-100`}
          />
          {whatsappError && <p className="text-sm text-red-500">{whatsappError}</p>}
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 text-gray-700 dark:text-gray-300">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="px-4 py-2 text-gray-900 border border-gray-300 rounded dark:border-gray-600 bg-gray-50 dark:bg-gray-800 dark:text-gray-100"
          />
        </div>

        {/* Website Type */}
        <div className="flex flex-col">
          <label htmlFor="websiteType" className="mb-1 text-gray-700 dark:text-gray-300">Website Type</label>
          <select
            id="websiteType"
            name="websiteType"
            required
            value={formData.websiteType}
            onChange={handleChange}
            className="px-4 py-2 text-gray-900 border border-gray-300 rounded dark:border-gray-600 bg-gray-50 dark:bg-gray-800 dark:text-gray-100"
          >
            <option value="">Select Website Type</option>
            <option value="portfolio">Portfolio Website</option>
            <option value="business">Business Website</option>
            <option value="ecommerce">E-commerce Website</option>
            <option value="blog">Blog/News Website</option>
            <option value="custom">Custom Project</option>
          </select>
        </div>

        {/* Payment Integration */}
        <div className="p-2 bg-gray-100 rounded dark:bg-gray-800">
          <label className="block mb-1 text-gray-700 dark:text-gray-300">Payment Integration?</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value="yes"
                checked={formData.payment === "yes"}
                onChange={handleChange}
                required
                className="accent-blue-600 dark:accent-blue-500"
              />
              <span className="text-gray-800 dark:text-gray-200">Yes</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value="no"
                checked={formData.payment === "no"}
                onChange={handleChange}
                required
                className="accent-blue-600 dark:accent-blue-500"
              />
              <span className="text-gray-800 dark:text-gray-200">No</span>
            </label>
          </div>
        </div>

        {/* Authentication */}
        <div className="p-2 bg-gray-100 rounded dark:bg-gray-800">
          <label className="block mb-1 text-gray-700 dark:text-gray-300">Authentication & Authorization?</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="auth"
                value="yes"
                checked={formData.auth === "yes"}
                onChange={handleChange}
                required
                className="accent-blue-600 dark:accent-blue-500"
              />
              <span className="text-gray-800 dark:text-gray-200">Yes</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="auth"
                value="no"
                checked={formData.auth === "no"}
                onChange={handleChange}
                required
                className="accent-blue-600 dark:accent-blue-500"
              />
              <span className="text-gray-800 dark:text-gray-200">No</span>
            </label>
          </div>
        </div>

        {/* Figma Provided */}
        <div className="p-2 bg-gray-100 rounded dark:bg-gray-800">
          <label className="block mb-1 text-gray-700 dark:text-gray-300">Figma Design Provided?</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="figma"
                value="yes"
                checked={formData.figma === "yes"}
                onChange={handleChange}
                required
                className="accent-blue-600 dark:accent-blue-500"
              />
              <span className="text-gray-800 dark:text-gray-200">Yes</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="figma"
                value="no"
                checked={formData.figma === "no"}
                onChange={handleChange}
                required
                className="accent-blue-600 dark:accent-blue-500"
              />
              <span className="text-gray-800 dark:text-gray-200">No</span>
            </label>
          </div>
        </div>

        {/* Message */}
        <div className="md:col-span-2">
          <label htmlFor="message" className="block mb-1 text-gray-700 dark:text-gray-300">Additional Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write any additional details or requirements..."
            className="w-full px-4 py-2 text-gray-900 border border-gray-300 rounded resize-none dark:border-gray-600 bg-gray-50 dark:bg-gray-800 dark:text-gray-100"
          ></textarea>
        </div>

        {/* Submit */}
        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={whatsappError}
            className="w-full px-4 py-2 text-white transition bg-blue-600 rounded hover:bg-blue-700 disabled:bg-gray-400"
          >
            Submit Inquiry
          </button>
        </div>
      </form>
    </section>
  );
};

export default WebsiteInquiryForm;
