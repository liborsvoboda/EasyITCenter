namespace ERS.Models 
{
    public interface IDbEntity 
    {
        string Id { get; set; }
    }

    public interface ITeamEntity: IDbEntity 
    {
        string TeamId {get; set;}
    }

}
