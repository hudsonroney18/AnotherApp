import { Team } from '../types';
import TeamCard from './TeamCard';

interface TeamListProps {
  teams: Team[];
}

const TeamList: React.FC<TeamListProps> = ({ teams }) => {
  return (
    <div className="team-list">
      {teams.map((team) => (
        <TeamCard key={team.tid} team={team} />
      ))}
    </div>
  );
};

export default TeamList;
