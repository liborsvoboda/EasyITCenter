using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace ERS.Services
{
    public class EmailAttachment
    { 
    
        public string FileName { get; set; }

        public string Type { get; set; }

        public string Disposition { get; set; } = "attachment";

        public Stream Stream { get; set; }
    }


    public class EmailMessage
    {
        public string Subject { get; set; }

        public string Body { get; set; }

        public List<EmailAttachment> Attachments { get; set; } = new List<EmailAttachment>();


        public EmailMessage(string content)
        {
            var index = content.IndexOf("\r\n");
            if (index > -1) {
                Subject = content.Substring(0, index);
                Body = content.Substring(index + 2);
            }
        }

        public EmailMessage(string subject, string body)
        {
            Subject = subject;
            Body = body;
        }
    }
}
