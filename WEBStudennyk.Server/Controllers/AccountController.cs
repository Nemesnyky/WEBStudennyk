using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using WEBStudennyk.Server.ViewModel;
using WEBStudennyk.Server.Data;
using Microsoft.AspNetCore.Authentication.Cookies;
using System.Security.Claims;

namespace WEBStudennyk.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;

        public AccountController(UserManager<User> userManager, SignInManager<User> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterViewModel model)
        {
            if (ModelState.IsValid)
            {
                User user = new User { Email = model.Email, UserName = model.Email, PhotoUrlId = 1 };
                var result = await _userManager.CreateAsync(user, model.Password);
                if (result.Succeeded)
                {
                    await _signInManager.SignInAsync(user, false);
                    return Ok(new { message = "User registered successfully" });
                }
                else
                {
                    return BadRequest(result.Errors);
                }
            }
            return BadRequest(ModelState);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginViewModel model)
        {
            if (ModelState.IsValid)
            {
                var result = await _signInManager.PasswordSignInAsync(model.Email, model.Password, model.RememberMe, false);
                if (result.Succeeded)
                {
                    return Ok(new { message = "Login successful" });
                }
                else
                {
                    return Unauthorized(new { message = "Invalid login attempt" });
                }
            }
            return BadRequest(ModelState);
        }

        [HttpPost("logout")]
        public async Task<IActionResult> Logout()
        {
            await _signInManager.SignOutAsync();
            return Ok(new { message = "Logout successful" });
        }

        //[HttpGet("google")]
        //public async Task Google()
        //{
        //    await HttpContext.ChallengeAsync(GoogleDefaults.AuthenticationScheme,
        //        new AuthenticationProperties
        //        {
        //            RedirectUri = Url.Action("GoogleResponse")
        //        });
        //}

        //[HttpGet("google-response")]
        //public async Task<IActionResult> GoogleResponse()
        //{
        //    var result = await HttpContext.AuthenticateAsync(GoogleDefaults.AuthenticationScheme);

        //    if (result.Succeeded)
        //    {
        //        var email = result.Principal.FindFirstValue(ClaimTypes.Email);

        //        var existingUser = await _userManager.FindByEmailAsync(email);

        //        if (existingUser == null)
        //        {
        //            var newUser = new User { Email = email, UserName = email, PhotoUrlId = 1 };
        //            var createResult = await _userManager.CreateAsync(newUser);

        //            if (createResult.Succeeded)
        //            {
        //                await _signInManager.SignInAsync(newUser, false);
        //                return Ok(new { message = "Google login successful, new user created" });
        //            }
        //            else
        //            {
        //                return BadRequest(createResult.Errors);
        //            }
        //        }
        //        else
        //        {
        //            await _signInManager.SignInAsync(existingUser, false);
        //            return Ok(new { message = "Google login successful" });
        //        }
        //    }

        //    return Unauthorized(new { message = "Google login failed" });
        //}
    }
}
