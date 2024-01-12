﻿namespace EasyITCenter.DBModel {

    [Table("BusinessAddressList")]
    [Index("AddressType", Name = "IX_AddressList")]
    public partial class BusinessAddressList {

        public BusinessAddressList() {
            LicSrvLicenseAlgorithmLists = new HashSet<LicSrvLicenseAlgorithmList>();
            LicSrvUsedLicenseLists = new HashSet<LicSrvUsedLicenseList>();
        }

        [Key]
        public int Id { get; set; }

        [StringLength(20)]
        [Unicode(false)]
        public string AddressType { get; set; } = null!;

        [StringLength(150)]
        [Unicode(false)]
        public string CompanyName { get; set; } = null!;

        [StringLength(150)]
        [Unicode(false)]
        public string? ContactName { get; set; }

        [StringLength(150)]
        [Unicode(false)]
        public string Street { get; set; } = null!;

        [StringLength(150)]
        [Unicode(false)]
        public string City { get; set; } = null!;

        [StringLength(20)]
        [Unicode(false)]
        public string PostCode { get; set; } = null!;

        [StringLength(20)]
        [Unicode(false)]
        public string Phone { get; set; } = null!;

        [StringLength(150)]
        [Unicode(false)]
        public string? Email { get; set; }

        [StringLength(150)]
        [Unicode(false)]
        public string? BankAccount { get; set; }

        [StringLength(20)]
        [Unicode(false)]
        public string? Ico { get; set; }

        [StringLength(20)]
        [Unicode(false)]
        public string? Dic { get; set; }

        public int UserId { get; set; }
        public bool Active { get; set; }
        public DateTime TimeStamp { get; set; }

        [ForeignKey("UserId")]
        [InverseProperty("BusinessAddressLists")]
        public virtual SolutionUserList User { get; set; } = null!;

        [InverseProperty("Address")]
        public virtual ICollection<LicSrvLicenseAlgorithmList> LicSrvLicenseAlgorithmLists { get; set; }

        [InverseProperty("Address")]
        public virtual ICollection<LicSrvUsedLicenseList> LicSrvUsedLicenseLists { get; set; }
    }
}