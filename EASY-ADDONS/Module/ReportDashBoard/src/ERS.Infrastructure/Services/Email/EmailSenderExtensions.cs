using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Encodings.Web;
using System.Threading.Tasks;

namespace ERS.Services
{
    public static class EmailSenderExtensions
    {
        public static Task<EmailResult> SendEmailConfirmationAsync(this IEmailSender emailSender, string email, string link)
        {
            return emailSender.SendEmailAsync(email, "Confirm your email",
                $"Please confirm your account by opening <a href=\"{HtmlEncoder.Default.Encode(link)}\">this link</a>");
        }
    }
}
