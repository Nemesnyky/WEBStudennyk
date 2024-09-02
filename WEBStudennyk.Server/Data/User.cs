using Microsoft.AspNetCore.Identity;

namespace WEBStudennyk.Server.Data
{
    public class User : IdentityUser
    {
        public int? PhotoUrlId { get; set; }

        public int? StudentId { get; set; }

        public Photo? PhotoUrl { get; set; }

        public Student? Student { get; set; }

        public string? Biography { get; set; }

    }
}
