using System;
using System.Collections.Generic;
using System.Text;

namespace ERS
{
    public class TextResources
    {
        public static readonly string ErrorOnEmailSending = "Error on email sending. Please check email settings and the API key for SendGrid";
        
        public static readonly string ErrorInvalidLoginAttempt = "Invalid login attempt";

        public static readonly string ErrorNoConnection = "Conenction [{0}] doesn't exist or you don't have access to it";
        public static readonly string ErrorNoMessageTemplate = "Can't send an email. Message template '{0}' was not found";
    }
}
