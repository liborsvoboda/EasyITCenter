namespace ERS.Models
{
    public class TeamContext
    {
        public TeamContext(string teamId)
        {
            TeamId = teamId;
        }

        public string TeamId { get; private set; }
    }
}
