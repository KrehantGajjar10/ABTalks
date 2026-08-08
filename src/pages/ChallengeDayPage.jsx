import { useParams } from 'react-router-dom';

export default function ChallengeDayPage() {
  const { dayId } = useParams();
  
  return (
    <main>
      <h1>Challenge Day Shell: Day {dayId}</h1>
    </main>
  );
}
