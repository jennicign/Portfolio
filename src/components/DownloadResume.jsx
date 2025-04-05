import { FaDownload } from "react-icons/fa";

const DownloadResume = () => {
  return (
    // Replace the href with the a link to your resume and replace the download attribute with your name
    <a href="/Jennifer_Ignacio_Resume.pdf" download="JenniferIgnacio_Resume.pdf" className="flex items-center gap-2 px-3 py-2 rounded transition hover:bg-[#C9EBFF] hover:text-white">
      <p className="mr-2">Download Resume</p>
      <FaDownload />
    </a>
  )
}

export default DownloadResume