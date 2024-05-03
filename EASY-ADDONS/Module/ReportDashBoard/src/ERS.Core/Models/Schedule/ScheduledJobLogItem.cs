using System;

namespace ERS.Models
{
    public class ScheduledJobLogItem: ITeamEntity
    {
        public string Id { get; set; }

        public string FlowId { get; set; }

        public string TeamId { get; set; }

        public virtual Team Team { get; set; }

        public string TimetableRecordId { get; set; }

        public DateTime CompletedTime { get; set; }

        public bool IsSuccessed { get; set; }

        public string Message { get; set; }

        public string ExtraDataJson { get; set; }


        public static ScheduledJobLogItem CreateFromTimetable(TimetableRecord ttr)
        {
            return new ScheduledJobLogItem
            {
                Id = Guid.NewGuid().ToString(),
                FlowId = ttr.FlowId,
                TeamId = ttr.TeamId,
                IsSuccessed = true,
                Message = "Completed",
                CompletedTime = DateTime.UtcNow,
                TimetableRecordId = ttr.Id,
                ExtraDataJson = ttr.ExtraDataJson
            };
        }
    }
}
