using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WEBStudennyk.Server.Data;

[ApiController]
[Route("[controller]")]
public class UserProfileController : ControllerBase
{
    [HttpGet]
    [Authorize]
    public string Get()
    {
        return User.Identity!.Name;
    }
}