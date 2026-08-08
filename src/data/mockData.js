export const mockData = {
  user: {
    name: "Rahul Sharma",
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Rahul",
    joinDate: "2024-09-01",
    currentStreak: 3,
    bestStreak: 12,
    status: "active"
  },
  challenges: (function generateChallenges() {
    const challenges = [];
    
    challenges.push({
      day: 1,
      title: "Define Your Goal",
      description: "Write down your primary goal for the next 60 days.",
      status: "completed",
      githubUrl: "https://github.com/user/repo",
      linkedinUrl: "https://linkedin.com/post/1",
      linkedinTemplate: "Day 1 of my #60DayChallenge! Today I defined my core goals..."
    });
    
    challenges.push({
      day: 2,
      title: "Project Setup",
      description: "Initialize your project repository and environment.",
      status: "completed",
      githubUrl: "https://github.com/user/repo",
      linkedinUrl: "https://linkedin.com/post/2",
      linkedinTemplate: "Day 2: The foundation is set! Created the project repository..."
    });
    
    challenges.push({
      day: 3,
      title: "First Component",
      description: "Build your first reusable UI component.",
      status: "completed",
      githubUrl: "https://github.com/user/repo",
      linkedinUrl: "https://linkedin.com/post/3",
      linkedinTemplate: "Day 3 of #60DayChallenge. Just finished building a reusable component..."
    });
    
    challenges.push({
      day: 4,
      title: "State Management",
      description: "Implement local state for your application.",
      status: "missed",
      githubUrl: "",
      linkedinUrl: "",
      linkedinTemplate: "Day 4: Diving into state management today. It's tricky but rewarding..."
    });
    
    challenges.push({
      day: 5,
      title: "API Integration",
      description: "Connect your frontend to a mock API endpoint.",
      status: "pending",
      githubUrl: "",
      linkedinUrl: "",
      linkedinTemplate: "Day 5: Connecting the dots! Integrating my frontend with an API..."
    });
    
    for (let i = 6; i <= 60; i++) {
      challenges.push({
        day: i,
        title: `Challenge Day ${i}`,
        description: `Description for challenge day ${i}.`,
        status: "locked",
        githubUrl: "",
        linkedinUrl: "",
        linkedinTemplate: `Day ${i} of #60DayChallenge: making steady progress...`
      });
    }
    
    return challenges;
  })()
};
