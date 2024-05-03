using System;
using System.Collections.Generic;
using System.Text;

namespace ERS
{
    public class AppGlobals
    {
        /// <summary>
        /// Indicates whether the current mode of the application is Multi-Tenancy
        /// </summary>
        public bool MultiTenancy = false;


        private bool _allowGuestAccess = false;
        /// <summary>
        /// Indicates whether the guest access is allowed (works only together with MultiTenancy = false)
        /// </summary>
        public bool AllowGuestAccess {
            get {
                return _allowGuestAccess && !MultiTenancy;
            }
            set {
                _allowGuestAccess = value;
            }
        }

        /// <summary>
        /// Indicates whether the demo DB connection can be added by user
        /// </summary>
        public bool AllowAddDemoConnection = true;


        public bool NeedSetup = false;
    }
}
