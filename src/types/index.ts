// Domain Types
export interface Skill {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  categoryColor: string;
  image: string;
  hasArrow: boolean;
  bgColor: string;
  textColor: string;
  confidential: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  image: string;
  name: string;
  role: string;
  bgColor: string;
  textColor: string;
  roleColor: string;
}

export interface SocialLink {
  id: string;
  name: string;
  icon: string;
  iconClass: string;
  url: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  description: string;
  profileImage: string;
  aboutDescription: string;
}
