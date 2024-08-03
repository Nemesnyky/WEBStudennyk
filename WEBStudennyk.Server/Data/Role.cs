using Microsoft.AspNetCore.Identity;

namespace WEBStudennyk.Server.Data
{
    public class Role : IdentityRole
    {
        public string? Description { get; set; }
    }
}
