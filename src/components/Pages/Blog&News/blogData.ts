export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  date: string;
  category: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Medical Education: Embracing Technology in Healthcare Training",
    excerpt: "Discover how Kyrgyzstan University is revolutionizing medical education through innovative technology integration, virtual reality simulations, and digital learning platforms that prepare students for modern healthcare challenges.",
    image: "https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: {
      name: "Dr. Sarah Johnson",
      avatar: "https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      role: "Dean of Medical Faculty"
    },
    date: "January 15, 2025",
    category: "academic",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Student Life in Bishkek: A Guide to Living and Learning in Kyrgyzstan",
    excerpt: "From campus activities to local culture, explore what makes student life at Kyrgyzstan University so special. Learn about accommodation, student organizations, and the vibrant community that awaits you.",
    image: "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: {
      name: "Maria Petrov",
      avatar: "https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      role: "Student Affairs Coordinator"
    },
    date: "January 12, 2025",
    category: "student-life",
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "Research Breakthrough: New Approaches to Cardiovascular Medicine",
    excerpt: "Our research team has made significant strides in cardiovascular treatment methods. Learn about the groundbreaking research happening at our university and its potential impact on global healthcare.",
    image: "https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: {
      name: "Prof. Ahmad Hassan",
      avatar: "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      role: "Research Director"
    },
    date: "January 10, 2025",
    category: "research",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "MBBS Admissions 2025: Everything You Need to Know",
    excerpt: "Complete guide to MBBS admissions at Kyrgyzstan University. From application requirements to entrance exams, scholarship opportunities, and important deadlines - we cover everything prospective students need.",
    image: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: {
      name: "Dr. Elena Kozlova",
      avatar: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      role: "Admissions Director"
    },
    date: "January 8, 2025",
    category: "admissions",
    readTime: "7 min read"
  },
  {
    id: 5,
    title: "Career Paths After MBBS: Success Stories from Our Alumni",
    excerpt: "Follow the inspiring journeys of our graduates as they build successful medical careers worldwide. From specialized residencies to international practice, discover the possibilities that await.",
    image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: {
      name: "Dr. James Wilson",
      avatar: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      role: "Alumni Relations Director"
    },
    date: "January 5, 2025",
    category: "career",
    readTime: "5 min read"
  },
  {
    id: 6,
    title: "Clinical Skills Laboratory: Hands-on Learning for Medical Students",
    excerpt: "Step inside our state-of-the-art clinical skills laboratory where students practice essential medical procedures in a safe, controlled environment before working with real patients.",
    image: "https://images.pexels.com/photos/4386406/pexels-photo-4386406.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: {
      name: "Dr. Fatima Al-Rashid",
      avatar: "https://images.pexels.com/photos/3823491/pexels-photo-3823491.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      role: "Clinical Skills Coordinator"
    },
    date: "January 3, 2025",
    category: "academic",
    readTime: "4 min read"
  }
];