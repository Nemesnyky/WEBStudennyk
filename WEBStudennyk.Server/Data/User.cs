using Microsoft.AspNetCore.Identity;

namespace WEBStudennyk.Server.Data
{
    public class User : IdentityUser
    {
        public int? PhotoUrlId { get; set; }

        public string? Biography { get; set; }

    }
}
