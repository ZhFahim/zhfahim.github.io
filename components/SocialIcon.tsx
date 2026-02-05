import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const SOCIAL_SIZE = 22;

const socialConfig: Record<string, { Icon: typeof FaGithub; color: string }> = {
  LinkedIn: { Icon: FaLinkedin, color: "#0A66C2" },
  GitHub: { Icon: FaGithub, color: "#181717" },
  Twitter: { Icon: FaXTwitter, color: "#000000" },
};

export function SocialIcon({ label }: { label: string }) {
  const config = socialConfig[label];
  if (!config) {
    return <span className="text-sm">{label}</span>;
  }
  const { Icon, color } = config;
  return (
    <Icon size={SOCIAL_SIZE} color={color} className="shrink-0" aria-hidden />
  );
}
