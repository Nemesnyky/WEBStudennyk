namespace WEBStudennyk.Server.DTO
{
    public class UserProfileDto
    {
        public string? UserName { get; set; }
        public string? Biography { get; set; }
        public string? PhotoUrl { get; set; }
        public int Posts { get; set; }
        public int Followers { get; set; }
        public int Following { get; set; }
    }
}
