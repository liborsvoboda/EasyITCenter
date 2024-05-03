using System;
using System.Collections.Generic;
using System.Linq;

using Microsoft.AspNetCore.Identity;

namespace ERS
{
    public static class IdentityUtils
    {
        public static string GeneratePassword(PasswordOptions options)
        {
            options = options ?? new PasswordOptions()
            {
                RequiredLength = 10,
                RequiredUniqueChars = 1,
                RequireDigit = true,
                RequireLowercase = true,
                RequireNonAlphanumeric = true,
                RequireUppercase = true
            };

            if (options.RequiredLength < 10) {
                options.RequiredLength = 10;
            }

            string[] randomChars = new[] {
                "ABCDEFGHJKLMNOPQRSTUVWXYZ",    // uppercase 
                "abcdefghijkmnopqrstuvwxyz",    // lowercase
                "0123456789",                   // digits
                "!@$?_-"                        // non-alphanumeric
            };

            Random rand = new Random(Environment.TickCount);
            List<char> chars = new List<char>();

            if (options.RequireUppercase) {
                chars.Insert(rand.Next(0, chars.Count),
                    randomChars[0][rand.Next(0, randomChars[0].Length)]);
            }


            if (options.RequireLowercase) {
                chars.Insert(rand.Next(0, chars.Count),
                    randomChars[1][rand.Next(0, randomChars[1].Length)]);
            }

            if (options.RequireDigit) {
                chars.Insert(rand.Next(0, chars.Count),
                    randomChars[2][rand.Next(0, randomChars[2].Length)]);
            }

            if (options.RequireNonAlphanumeric) {
                chars.Insert(rand.Next(0, chars.Count),
                    randomChars[3][rand.Next(0, randomChars[3].Length)]);
            }

            for (int i = chars.Count; i < options.RequiredLength
                || chars.Distinct().Count() < options.RequiredUniqueChars; i++)
            {
                string rcs = randomChars[rand.Next(randomChars.Length - 1)];
                chars.Insert(rand.Next(0, chars.Count),
                    rcs[rand.Next(0, rcs.Length)]);
            }

            return new string(chars.ToArray());
        }
    }
}
