"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { User, Play, Pause } from "lucide-react";
import Image from "next/image";
import { Card } from "@/components/ui/card";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function TeamPage() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [playingStates, setPlayingStates] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const videoRefs = useRef({});

  useEffect(() => {
    // Cleanup function to pause all videos when component unmounts
    return () => {
      Object.values(videoRefs.current).forEach((video) => {
        if (video) video.pause();
      });
    };
  }, []);

  const teamMembers = [
    {
      name: "Anthon O Brien",
      role: "Managing Director",
      bio: "Anthony is a distinguished Managing Director with a wealth of experience in steering companies towards sustained growth and success. Renowned for strategic vision and operational acumen, Anthony excels in developing and implementing business strategies that enhance market position and profitability.",
      image:
        "https://profici.co.uk/wp-content/uploads/2022/04/Anthony-OBrien-Profici.jpg",
      video:
        "https://staging.profici.co.uk/proficinew/wp-content/uploads/2024/02/Anthony.mp4",
    },
    {
      name: "Terry",
      role: "Finance Director",
      bio: "Terry is an accomplished Financial Director with extensive experience in managing financial operations and driving fiscal stability and growth. Expert in financial planning, analysis, and reporting, Terry excels in developing strategic financial initiatives that align with organisational goals.",
      image: "https://profici.co.uk/wp-content/uploads/2022/04/Terry-New.jpg",
      video:
        "https://staging.profici.co.uk/proficinew/wp-content/uploads/2024/02/Terry.mp4",
    },
    {
      name: "Gerald Bradley",
      role: "Business Consultant",
      bio: "Gerald Bradley has extensive experience as the Commercial Director at Prosper², where he has helped SME business owners grow and develop through tailored business services. He is skilled in fostering long-term partnerships and implementing successful reward programs.",
      image:
        "https://profici.co.uk/wp-content/uploads/2022/07/Gerald-Bradley.png",
    },
    {
      name: "Dave Pogson",
      role: "Business Consultant",
      bio: "Dave Pogson is a highly accomplished commercial leader with over 35 years experience of the Food & Drinks industry. He initially gained experience with Coca-Cola and then moved to Cadbury UK where he became Sales & Customer Marketing Director.",
      image:
        "https://profici.co.uk/wp-content/uploads/2024/06/1517561816153.jpeg",
    },
    {
      name: "John Mahmood",
      role: "Business Consultant",
      bio: "John is an award-winning creative director with a proven track record of success in the industry. He has collaborated with renowned brands like Adidas, Apple, Barclays, British Airways, Chelsea FC, Coca-Cola, and many more.",
      image:
        "https://profici.co.uk/wp-content/uploads/2022/06/John-Mahmood.png",
    },
    {
      name: "Dan Summers",
      role: "Business Consultant",
      bio: "Dan Summers is a seasoned business consultant with extensive experience in strategic consulting, change management, and program management. As Managing Director of OH! Consulting Group, he drives a portfolio of brands.",
      image: "https://profici.co.uk/wp-content/uploads/2024/09/Dan-Summers.png",
    },
    {
      name: "Ian Clague",
      role: "Business Consultant",
      bio: "Former senior partner of PwC Isle of Man for 19 years, Ian brings extensive experience of working across multiple industry sectors in a professional career spanning some 35 years.",
      image:
        "https://profici.co.uk/wp-content/uploads/2024/09/Ian-Clague-1.png",
    },
    {
      name: "Mark",
      role: "Chief Information Officer",
      bio: "Mark is an accomplished CEO with extensive experience founding and leading successful business consultancies serving national and international clients across complex global environments.",
      image: "https://profici.co.uk/wp-content/uploads/2022/04/Mark.png",
    },
    {
      name: "Lee",
      role: "Operations Director",
      bio: "Lee is a seasoned Operations Director with a proven track record of optimising business processes and driving operational excellence. With extensive experience in managing large-scale projects and streamlining workflows.",
      image:
        "https://profici.co.uk/wp-content/uploads/2022/04/Lee-C-Profici.jpg",
      video:
        "https://staging.profici.co.uk/proficinew/wp-content/uploads/2024/02/Lee.mp4",
    },
    {
      name: "Ross",
      role: "Head of Graphic Design",
      bio: "Ross is an accomplished Head of Email Marketing with expertise in email marketing automation, segmentation, and personalisation. He excels in delivering targeted and relevant messaging to subscribers.",
      image: "https://profici.co.uk/wp-content/uploads/2022/04/ross.jpg",
      video:
        "https://staging.profici.co.uk/proficinew/wp-content/uploads/2024/02/Ross.mp4",
    },
    {
      name: "Deepak",
      role: "Paid Advertising Manager",
      bio: "Deepak is an accomplished Paid Advertising Manager with extensive experience in creating and executing high-impact advertising campaigns across various digital platforms.",
      image: "https://profici.co.uk/wp-content/uploads/2022/08/Deepak.webp",
      video:
        "https://staging.profici.co.uk/proficinew/wp-content/uploads/2024/02/Deepak.mp4",
    },
    {
      name: "Matt",
      role: "Head of SEO",
      bio: "Matt is a highly skilled Head of SEO with a robust background in developing and implementing effective search engine optimisation strategies that drive organic growth and improve online visibility.",
      image: "https://profici.co.uk/wp-content/uploads/2024/03/matt-img.webp",
      video:
        "https://staging.profici.co.uk/proficinew/wp-content/uploads/2024/03/Matt.mp4",
    },
    {
      name: "Karthik",
      role: "Web Developer",
      bio: "Karthik is an experienced Web Developer with a proven ability to create dynamic and responsive websites that enhance user experience and meet business objectives.",
      image:
        "https://profici.co.uk/wp-content/uploads/2022/04/Home-DSC00900-1568x2352.jpg",
      video:
        "https://staging.profici.co.uk/proficinew/wp-content/uploads/2024/02/Karthik.mp4",
    },
    {
      name: "Dr David",
      role: "Quality Manager",
      bio: "Dr David is a proficient ISO Quality Manager with a comprehensive understanding of quality management systems and standards. With a meticulous approach to process improvement and compliance.",
      image:
        "https://profici.co.uk/wp-content/uploads/2022/04/Dr-David-Ashworth-img.jpg",
    },
    {
      name: "Sophie",
      role: "Event Manager",
      bio: "Sophie is a skilled Event Manager with a proven track record of orchestrating successful events that leave a lasting impression. With meticulous attention to detail and a passion for creativity.",
      image: "https://profici.co.uk/wp-content/uploads/2024/09/sophie.png",
      video:
        "https://staging.profici.co.uk/proficinew/wp-content/uploads/2024/02/Sophie.mp4",
    },
  ];

  const handleVideoPlay = async (index) => {
    try {
      const video = videoRefs.current[index];
      if (!video) return;

      if (activeVideo === index) {
        // Toggle play/pause for current video
        if (playingStates[index]) {
          video.pause();
          setPlayingStates((prev) => ({ ...prev, [index]: false }));
        } else {
          await video.play();
          setPlayingStates((prev) => ({ ...prev, [index]: true }));
        }
      } else {
        // Stop previous video if any
        if (activeVideo !== null) {
          const previousVideo = videoRefs.current[activeVideo];
          if (previousVideo) {
            previousVideo.pause();
            setPlayingStates((prev) => ({ ...prev, [activeVideo]: false }));
          }
        }

        // Play new video
        setActiveVideo(index);
        setIsLoading(true);
        try {
          await video.play();
          setPlayingStates((prev) => ({ ...prev, [index]: true }));
        } catch (error) {
          console.error("Failed to play video:", error);
          setPlayingStates((prev) => ({ ...prev, [index]: false }));
        }
      }
    } catch (error) {
      console.error("Error handling video:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Meet the Team
          </h1>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
            Our team is a close-knit group of talented individuals who integrate
            seamlessly with your business to craft a bold, dynamic business
            growth strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative aspect-[9/16] w-full bg-blue-50 group">
                  {member.video ? (
                    <>
                      <div className="absolute inset-0">
                        <video
                          ref={(el) => (videoRefs.current[index] = el)}
                          className="w-full h-full object-cover"
                          loop
                          playsInline
                          preload="auto"
                          poster={member.image}
                          onLoadStart={() => setIsLoading(true)}
                          onLoadedData={() => setIsLoading(false)}
                          onError={(e) => {
                            console.error("Video loading error:", e);
                            setIsLoading(false);
                          }}
                          onEnded={() => {
                            setPlayingStates((prev) => ({
                              ...prev,
                              [index]: false,
                            }));
                          }}
                        >
                          <source src={member.video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                      <button
                        onClick={() => handleVideoPlay(index)}
                        disabled={isLoading}
                        className={`absolute inset-0 flex items-center justify-center ${
                          !playingStates[index] ? "bg-black/30" : ""
                        }`}
                      >
                        {isLoading ? (
                          <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
                        ) : playingStates[index] ? (
                          <Pause className="w-12 h-12 text-white hover:scale-110 transition-transform md:opacity-0 md:hover:opacity-100" />
                        ) : (
                          <Play className="w-12 h-12 text-white hover:scale-110 transition-transform" />
                        )}
                      </button>
                    </>
                  ) : member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 6}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <User className="w-20 h-20 text-blue-600/20" />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-700 font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-500 text-sm">{member.bio}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
