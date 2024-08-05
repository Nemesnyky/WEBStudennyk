using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WEBStudennyk.Server.Data;
using WEBStudennyk.Server.DTO;

namespace WEBStudennyk.Server.Controllers
{
    [Route("api/userprofile")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {
        private readonly UserManager<User> _userManager;
        private readonly IMapper _mapper;

        public UserProfileController(UserManager<User> userManager, IMapper mapper)
        {
            _userManager = userManager;
            _mapper = mapper;
        }

        [Authorize]
        [HttpGet]
        public async Task<IActionResult> GetUserProfile()
        {
            var name = User.Identity.Name;
            var user = await _userManager.Users
                .Include(u => u.PhotoUrl)
                .FirstOrDefaultAsync(u => u.UserName == name);

            if (user == null)
                return NotFound();

            var userProfile = new UserProfileDto
            {
                UserName = user.UserName,
                Biography = user.Biography,
                PhotoUrl = user.PhotoUrl?.PhotoUrl,
                Posts = 0,
                Followers = 83,
                Following = 131
            };

            return Ok(userProfile);
        }
    }
}
