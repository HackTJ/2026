import Image from "next/image";

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

const team: TeamMember[] = [
  {
    name: "Aanya Gupta",
    role: "Director, Prizes/Finance & Workshops Lead",
    bio: "",
    image: "/team/aanya.jpg",
  },
  {
    name: "Hashmita Nittala",
    role: "Co-director, Food Lead, Marketing, Workshops",
    bio: "",
    image: "/team/hashmita.jpg",
  },
  {
    name: "Shaurya Bisht",
    role: "Tech & Judging Lead",
    bio: "",
    image: "/team/shaurya.jpg",
  },
  {
    name: "Sanya Bhalla",
    role: "Marketing Lead, Food, Workshops",
    bio: "Sanya is a junior at TJHSST, and this is her second year on the team after competing in Hack TJ 11.0! She is fascinated by data science and economics and their applications in artificial intelligence. In her free time, she enjoys traveling, sleeping, and flying planes.",
    image: "/team/sanya.jpg",
  },
  {
    name: "Aanya Shekhar",
    role: "Marketing, Food, Workshops",
    bio: "Aanya is a senior at TJHSST and she is excited to be on the team this year! She loves to plan events. In her free time, she enjoys frolicking in the fields and trying new hobbies.",
    image: "/team/aanya_s.jpg",
  },
  {
    name: "Ria Goel",
    role: "Marketing, Food",
    bio: "Ria is a senior at TJHSST, and she is excited to be on the team after competing in HackTJ 12.0! She is fascinated by the intersection of finance and data science. In her free time, she enjoys dancing and traveling.",
    image: "/team/ria.jpg",
  },
  {
    name: "Jacob Percy",
    role: "Tech, Judging",
    bio: "Jacob is a junior at TJHSST. After competing in 11.0 and 12.0, he’s joining the HackTJ tech and judging teams. He enjoys hiking, baseball, and ML. ",
    image: "/team/jacob.jpg",
  },
  {
    name: "Shreyas Jain",
    role: "Tech, Judging",
    bio: "",
    image: "/team/shreyas.jpg",
  },
  {
    name: "Rushil Kukreja",
    role: "Prizes/Finance, Workshops",
    bio: "",
    image: "/team/rushil.jpg",
  },
  {
    name: "Sidh Jaddu",
    role: "Tech, Judging",
    bio: "",
    image: "/team/sidh.jpg",
  },
  {
    name: "Diya Kotha",
    role: "Marketing, Food, Prizes/Finance",
    bio: "Diya is a sophomore at TJHSST, and this is her first year on the team! She enjoys exploring neuroscience, building hardware projects, and conducting AI efficiency research. In her leisure time, she enjoys weightlifting, graphic design/video production, and philosophy deep-dives.",
    image: "/team/diya.jpg",
  },
  {
    name: "Nihal Gorthi",
    role: "Tech, Judging",
    bio: "Nihal is a sophomore at TJHSST, and this is his first year on the team after competing in HackTJ 12.0! He enjoys exploring machine learning and AI, experimenting with bold new ideas, and creating projects that break new ground. In his free time, he enjoys speed-solving Rubik’s cubes, exploring cutting-edge technology, and taking on new challenges that spark his curiosity.",
    image: "/team/nihal.jpg",
  },
  {
    name: "Mr. Hannum",
    role: "Sponsor",
    bio: "",
    image: "/team/hannum.jpg",
  }
  ,
  {
    name: "Mr. Kosek",
    role: "Sponsor",
    bio: "",
    image: "/team/kosek.jpg",
  }
];

export default function Team() {
  return (
    <section className="relative overflow-hidden bg-[#0f141a] text-white">
      <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-white/15 to-transparent opacity-70" />

      <div className="relative w-full h-[45vh] md:h-[55vh] lg:h-[65vh] overflow-hidden">
        <Image
          src="/team/full-team.jpg"
          alt="HackTJ Team Photo"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#0f141a]"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
            The Team
          </h1>
          <p className="mt-3 text-lg text-white/80 max-w-xl drop-shadow">
            Meet the group making HackTJ 13.0 possible!
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-[#11161d] rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
            >
              <div className="w-full h-56 relative mb-4 rounded-xl overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-2xl font-semibold">{member.name}</h3>
              <p className="text-[#9ea7b0] text-sm mb-3">{member.role}</p>

              <p class-name="text-sm text-[#c9d2dc] leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
