using System;

namespace EasyITCenter.Classes {

    public partial class ProdGuidPartList {
        public int Id { get; set; } = 0;
        public int WorkPlace { get; set; }
        public string Number { get; set; } = null;
        public string Name { get; set; } = null;
        public int UserId { get; set; } = 0;
        public DateTime? Timestamp { get; set; } = null;
    }
}