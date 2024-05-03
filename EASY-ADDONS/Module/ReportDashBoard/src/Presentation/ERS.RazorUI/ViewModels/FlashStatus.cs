using System;
using System.Collections.Generic;
using System.Text;

using Newtonsoft.Json;

namespace ERS.ViewModels
{
    [Serializable]
    public class FlashStatus
    {
        public FlashStatusKind Kind { get; set; } = FlashStatusKind.Success;

        public string Message { get; set; }

        public string Info { get; set; }

        public FlashStatus()
        {
        }

        public string ToJson()
        {
            return JsonConvert.SerializeObject(this);
        }

        public override string ToString()
        {
            return ToJson();
        }

        public static FlashStatus FromJson(string json) 
        {
            return JsonConvert.DeserializeObject<FlashStatus>(json);
        }

        public static FlashStatus Success(string message, string info = null)
        {
            return new FlashStatus {
                Kind = FlashStatusKind.Success,
                Message = message,
                Info = info
            };
        }

        public static FlashStatus Error(string message, string info = null)
        {
            return new FlashStatus {
                Kind = FlashStatusKind.Error,
                Message = message,
                Info = info
            };
        }

        public static FlashStatus Warning(string message, string info = null)
        {
            return new FlashStatus {
                Kind = FlashStatusKind.Warning,
                Message = message,
                Info = info
            };
        }
    }

    public enum FlashStatusKind
    { 
        None = 0,
 
        Info = 1,

        Success = 2,

        Warning = 3,

        Error = 4,

        Dialog = 11
    }
}
