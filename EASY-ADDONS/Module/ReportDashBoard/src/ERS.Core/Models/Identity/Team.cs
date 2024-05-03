namespace ERS.Models
{
    public class Team : IDbEntity
    {

        public string Id { get; set; }

        public string Name { get; set; }

        public string Moniker { get; set; }
    }
}
