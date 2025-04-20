import { useForm } from "react-hook-form";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const body = data.body;
    const subject = data.subject || "";
    const myEmail= "jencignacio@gmail.com";
    const mailToLink = `mailto:${myEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("From: " + email + ", Message: " + body)}`;
    window.location.href = mailToLink;
  }
  
  return (
    <main className="px-4 py-16 w-[75vw] max-w-[1920px] mx-auto">
    <section className="border border-black rounded-lg shadow-lg bg-white overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center bg-skyBlue text-black px-4 py-2 font-pixel text-sm border-b-2 border-black">
        <span className="text-xl font-bold tracking-wide">New Message</span>
        <div className="flex gap-2">
          {["—", "☐", "X"].map((symbol, i) => (
            <button key={i} className="w-8 h-8 text-base hover:text-white">
              {symbol}
            </button>
          ))}
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 px-6 py-6">
        <label className="text-sm font-medium">
          From: <span className="text-red-500">*</span>
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Your name"
            className="block w-full border border-black rounded px-3 py-2 mt-1"
          />
        </label>

        <label className="text-sm font-medium">
          Email: <span className="text-red-500">*</span>
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Your email"
            className="block w-full border border-black rounded px-3 py-2 mt-1"
          />
        </label>

        <label className="text-sm font-medium">
          Phone:
          <input
            {...register("phone")}
            type="tel"
            placeholder="(Optional)"
            className="block w-full border border-black rounded px-3 py-2 mt-1"
          />
        </label>

        <label className="text-sm font-medium">
          Subject:
          <input
            {...register("subject")}
            type="text"
            placeholder="(Optional)"
            className="block w-full border border-black rounded px-3 py-2 mt-1"
          />
        </label>

        <label className="text-sm font-medium">
          Message: <span className="text-red-500">*</span>
          <textarea
            {...register("body", { required: true })}
            rows="6"
            placeholder="Enter your message here"
            className="block w-full border border-black rounded px-3 py-2 mt-1 resize-none"
          />
        </label>

        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="flex items-center gap-2 bg-black text-white px-4 py-2 text-sm rounded hover:bg-skyBlue hover:text-black transition font-pixel"
          >
            <FaPaperPlane className="text-xs" />
            Send
          </button>
        </div>
      </form>
    </section>
  </main>
  )
}

export default Contact