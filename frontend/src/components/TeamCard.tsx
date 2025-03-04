import { Team } from '../types';

interface TeamCardProps {
  team: Team;
}

const TeamCard: React.FC<TeamCardProps> = ({ team }) => {
  return (
    <div className="team-card">
      <h2>{team.school}</h2>
      <p>Mascot: {team.name}</p>
      <p>
        Location: {team.city}, {team.state}
      </p>
    </div>
  );
};

export default TeamCard;
