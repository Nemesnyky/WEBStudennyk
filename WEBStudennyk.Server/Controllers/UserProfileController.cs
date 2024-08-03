//using Microsoft.AspNetCore.Authorization;
//using Microsoft.AspNetCore.Identity;
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.EntityFrameworkCore;
//using WEBStudennyk.Server.Data;

//[ApiController]
//[Route("[controller]")]
//public class UserProfileController : ControllerBase
//{
//    private readonly UserManager<User> _userManager;
//    private readonly WebstudennykContext _context;

//    public UserProfileController(UserManager<User> userManager, WebstudennykContext context)
//    {
//        _userManager = userManager;
//        _context = context;
//    }
//    [HttpGet]

//    public async Task<IActionResult> Get()
//    {
//        var user = await _userManager.GetUserAsync(User);

//        if (user == null)
//        {
//            return NotFound($"���������� � ID '{_userManager.GetUserId(User)}' �� ���������.");
//        }

//        var photo = await _context.Photos.FirstOrDefaultAsync(p => p.Id == user.PhotoUrlId);
//        var photoUrl = photo?.PhotoUrl;

//        var userProfile = new
//        {
//            user.Email,
//            user.UserName,
//            user.PhoneNumber,
//            user.Biography,
//            PhotoUrl = photoUrl
//        };

//        return Ok(userProfile);

//    }
//}
