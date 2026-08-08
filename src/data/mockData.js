const generateChallenges = (completedCount, missedDay = null, pendingDay = null) => {
  const challenges = [];
  for (let i = 1; i <= 60; i++) {
    let status = 'locked';
    if (i <= completedCount) {
      status = 'completed';
    } else if (i === missedDay) {
      status = 'missed';
    } else if (i === pendingDay) {
      status = 'pending';
    }

    challenges.push({
      day: i,
      title: `Build Component ${i}`,
      description: `Today you will build a UI component for day ${i}. Focus on accessibility and mobile responsiveness.`,
      status: status,
      linkedinTemplate: `Day ${i} of the 60-day challenge! Today I built a ${i} component using React and Tailwind CSS. #ABTalks #100DaysOfCode`
    });
  }
  return challenges;
};

export const getMockState = (scenario) => {
  switch (scenario) {
    case 'first-day':
      return {
        user: { name: 'Alex', currentStreak: 0, bestStreak: 0, status: 'first-day' },
        challenges: generateChallenges(0, null, 1)
      };
    case 'active-completed':
      return {
        user: { name: 'Alex', currentStreak: 5, bestStreak: 12, status: 'active' },
        challenges: generateChallenges(5, null, null)
      };
    case 'missed-day':
      return {
        user: { name: 'Alex', currentStreak: 0, bestStreak: 12, status: 'missed' },
        challenges: generateChallenges(3, 4, 5) // 1-3 completed, 4 missed, 5 pending
      };
    case 'active-pending':
    default:
      return {
        user: { name: 'Alex', currentStreak: 4, bestStreak: 12, status: 'active' },
        challenges: generateChallenges(4, null, 5)
      };
  }
};

export const mockData = getMockState('active-pending');
