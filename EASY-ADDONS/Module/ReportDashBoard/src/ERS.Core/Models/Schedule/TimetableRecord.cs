using System;
using System.Collections.Generic;

namespace ERS.Models
{
    public class TimetableRecord : ITeamEntity
    {
        public string Id { get; set; }

        public string FlowId { get; set; }

        public string UserId { get; set; }

        public virtual ApplicationUser User { get; set; }

        public string TeamId { get; set; }

        public virtual Team Team { get; set; }

        public string Schedule { get; set; }

        public DateTime DateCreated { get; set; }

        public DateTime LastActionTime { get; set; }

        public DateTime NextActionTime { get; set; }

        public string ExtraDataJson { get; set; }

        public bool IsActive { get; set; } = true;

        public bool IsDraft { get; set; } = false;

        public string TimeZoneId { get; set; } = TimeZoneInfo.Utc.Id;

        public string LastError { get; set; }

        public TimeZoneInfo TimeZone => TimeZoneId != null 
            ? TimeZoneInfo.FindSystemTimeZoneById(TimeZoneId) 
            : TimeZoneInfo.Utc;

        public void UpdateNextActionTime()
        {
            var prevActionTime = (LastActionTime.Ticks > 0)
                    ? LastActionTime
                    : DateCreated;

            //here we convert or baseTime for GetNextOccurence to the user's timezone
            //(in case they set particular hours or minutes for activation
            //and then convert the time we get back to UTC to save in the DB
            var nextTimeLocal = NCrontab.CrontabSchedule
                .Parse(Schedule)
                .GetNextOccurrence(TimeZoneInfo.ConvertTimeFromUtc(prevActionTime, TimeZone));
            NextActionTime = TimeZoneInfo.ConvertTimeToUtc(nextTimeLocal, TimeZone);

            //If the next activation time is in the past, we set it to now
            var now = DateTime.UtcNow;
            if (NextActionTime < now) NextActionTime = now;
        }
    }
}
