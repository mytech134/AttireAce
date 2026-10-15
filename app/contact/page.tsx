export default function ContactPage() {
  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#0a1a38]">Contact Us</h1>
        <p className="mt-4 text-gray-600">
          Get in touch with our export team. We respond within one business day.
        </p>

        <form className="mt-10 grid gap-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#d4a017] focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#d4a017] focus:outline-none"
          />
          <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#d4a017] focus:outline-none resize-none"
          />
          <button
            type="submit"
            className="px-8 py-3.5 rounded-full bg-[#d4a017] text-[#0a1a38] font-semibold uppercase tracking-wider hover:bg-[#e9be33] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}