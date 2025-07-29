import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import ATS from "~/components/feedback/ATS";
import Details from "~/components/feedback/Details";
import Summary from "~/components/feedback/Summary";
import { usePuterStore } from "~/lib/puter";

export const meta = () => [
  {
    title: "CV-Lyzer | Review",
    name: "description",
    content: "Detailed review of your resume",
  },
];

const resume = () => {
  const { auth, isLoading, fs, kv } = usePuterStore();
  const { id } = useParams();
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [resumeUrl, setResumeUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (!isLoading && !auth.isAuthenticated)
      navigate(`/auth?next=/resume/${id}`);
  }, [isLoading]);

  useEffect(() => {
    const loadResume = async () => {
      const resume = await kv.get(`resume:${id}`);
      if (!resume) return;
      const data = JSON.parse(resume);

      const resumeBlob = await fs.read(data.resumePath);
      if (!resumeBlob) return;

      const pdfBlob = new Blob([resumeBlob], { type: "application/pdf" });
      const resumeUrl = URL.createObjectURL(pdfBlob);
      setResumeUrl(resumeUrl);

      const imageBlob = await fs.read(data.imagePath);
      if (!imageBlob) return;
      const imageUrl = URL.createObjectURL(imageBlob);
      setImageUrl(imageUrl);

      setFeedback(data.feedback || "");
      console.log({ resumeUrl, imageUrl, feedback: data.feedback });
    };
    loadResume();
  }, [id]);

  return (
    <main className="!pt-0">
      <nav className="resume-nav">
        <Link to={"/"} className="back-button">
          <img src="/icons/back.svg" alt="back logo" className="size-2.5" />
          <span className="text-gray-800 text-sm font-semibold">
            Back to Homepage
          </span>
        </Link>
      </nav>
      <div className="flex flex-row w-full max-lg:flex-col-reverse">
        <section className="feedback-section bg-[url('/images/bg-small.svg')] bg-cover sticky top-0 h-[100vh] justify-center items-center">
          {imageUrl && resumeUrl && (
            <div className="animate-in fade-in duration-1000 gradient-border max-sm:m-0 h-[90%] max-2xl:h-fit w-fit">
              <a target="_blank" href={resumeUrl} rel="noreferrer">
                <img
                  src={imageUrl}
                  className="w-full h-full object-contain rounded-2xl"
                  alt="resume image"
                  title="Resume Image"
                />
              </a>
            </div>
          )}
        </section>
        <section className="feedback-section ">
          <h2 className="text-4xl !text-black font-bold">Resume Review</h2>
          {feedback ? (
            <div className="flex flex-col animate-in duration-1000 fade-in gap-8">
              <Summary feedback={feedback}></Summary>
              <ATS
                score={feedback.ATS.score || 0}
                suggestion={feedback.ATS.tips || []}
              ></ATS>
              <Details feedback={feedback}></Details>
            </div>
          ) : (
            <img className="w-full" src="/images/resume-scan-2.gif"></img>
          )}
        </section>
      </div>
    </main>
  );
};

export default resume;
