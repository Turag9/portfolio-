import { Github, Linkedin, Code, Trophy, Mail } from "lucide-react";

const profiles = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/Turag9",
    username: "@Turag9",
    color: "hover:bg-gray-800",
  },
  {
    name: "CodeForces",
    icon: Code,
    url: "https://codeforces.com/profile/Turag9",
    username: "Turag9 • 1000+ solved",
    color: "hover:bg-blue-600",
  },
  {
    name: "LeetCode",
    icon: Trophy,
    url: "https://leetcode.com/Turag9",
    username: "Max Rating: 1675 • 200+ solved",
    color: "hover:bg-orange-500",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/musabbir-turag",
    username: "Musabbir Turag",
    color: "hover:bg-sky-600",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:musabbirturag9@gmail.com",
    username: "musabbirturag9@gmail.com",
    color: "hover:bg-red-500",
  },
];

const ProfilesSection = () => {
  return (
    <section className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">Connect</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Find Me <span className="text-gradient">Online</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {profiles.map((profile) => (
            <a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-6 rounded-2xl bg-secondary/50 border border-border/50 hover:border-transparent transition-all ${profile.color} hover:text-white`}
            >
              <profile.icon className="w-8 h-8 mb-4" />
              <h3 className="font-semibold mb-1">{profile.name}</h3>
              <p className="text-sm text-muted-foreground group-hover:text-white/70 truncate">
                {profile.username}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfilesSection;
