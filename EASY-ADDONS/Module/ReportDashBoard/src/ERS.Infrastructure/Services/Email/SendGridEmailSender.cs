using System;
using System.Threading.Tasks;
using System.Net;

using Microsoft.Extensions.Options;

using SendGrid;
using SendGrid.Helpers.Mail;

namespace ERS.Services
{
    public class SendGridEmailSender : IEmailSender 
    {
        private string _apiKey;
        private string _defaultFromName;
        private string _defaultFromEmail;

        public SendGridEmailSender(IOptions<EmailSettings> options) 
        {
            var settings = options.Value;
           
            _apiKey = settings.ApiKey;

            _defaultFromEmail = string.IsNullOrEmpty(settings.DefaultFromEmail) ? "no-reply@easy.report" : settings.DefaultFromEmail;
            _defaultFromName = string.IsNullOrEmpty(settings.DefaultFromUser) ? "Easy.Report service" : settings.DefaultFromUser;
        }

        public Task<EmailResult> SendEmailAsync(string email, string subject, string content) 
        {
            return SendEmailAsync(email, new EmailMessage(subject, content));
        }

        public async Task<EmailResult> SendEmailAsync(string email, EmailMessage message)
        {
            if (string.IsNullOrEmpty(email)) { 
                return EmailResult.Fail("Empty email address");
            }

            if (string.IsNullOrEmpty(_apiKey)) {
                return EmailResult.Fail("SendGrid API key is not set");
            }

            var client = new SendGridClient(_apiKey);
            var from = new EmailAddress(_defaultFromEmail, _defaultFromName);
            var to = new EmailAddress(email);
            var plainTextContent = message.Body;
            var htmlContent = message.Body;
            var msg = MailHelper.CreateSingleEmail(from, to, message.Subject, plainTextContent, htmlContent);
            foreach (var att in message.Attachments) {
                await msg.AddAttachmentAsync(att.FileName, att.Stream, att.Type, att.Disposition);
            }
            var response = await client.SendEmailAsync(msg);

            return response.StatusCode == HttpStatusCode.Accepted
                    ? EmailResult.Success()
                    : EmailResult.Fail(await response.Body.ReadAsStringAsync());
        }
    }
}
