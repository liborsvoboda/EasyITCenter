using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ERS.Services
{
    public interface IEmailSender 
    {
        Task<EmailResult> SendEmailAsync(string email, string subject, string message);

        Task<EmailResult> SendEmailAsync(string email, EmailMessage message);
    }

    public class EmailResult
    {
        public bool Succeeded { get; private set; }

        public bool Failed => !Succeeded;

        public string Error { get; private set; }

        public string MessageId { get; private set; } = "_";

        private EmailResult(bool succeded, string error = null, string messageId = null)
        {
            Succeeded = succeded;
            Error = error;
            if (messageId != null) MessageId = messageId;
        }

        public static EmailResult Success(string messageId = null)
        {
            return new EmailResult(true, null, messageId);
        }

        public static EmailResult Fail(string error)
        {
            return new EmailResult(false, error);
        }
    }
}
