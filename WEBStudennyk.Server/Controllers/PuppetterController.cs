//using Microsoft.AspNetCore.Mvc;
//using PuppeteerSharp;
//using System;
//using System.Linq;
//using System.Threading.Tasks;

//namespace WEBStudennyk.Server.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    public class PuppetterController : ControllerBase
//    {
//        public class LoginRequest
//        {
//            public string Login { get; set; }
//            public string Password { get; set; }
//        }

//        [HttpPost("run-script")]
//        public async Task<IActionResult> RunPuppeteerScript([FromBody] LoginRequest loginRequest)
//        {
//            var launchOptions = new LaunchOptions
//            {
//                Headless = false // запускаємо браузер у видимому режимі
//            };

//            try
//            {
//                // Завантажуємо браузер
//                var browserFetcher = new BrowserFetcher();
//                await browserFetcher.DownloadAsync();
                
//                var browser = await Puppeteer.LaunchAsync(launchOptions);
//                var page = await browser.NewPageAsync();

//                // Переходимо на зазначений URL
//                await page.GoToAsync("https://student.triton.knu.ua/", WaitUntilNavigation.Networkidle2);

//                // Вводимо логін
//                await page.TypeAsync("#Login", loginRequest.Login);

//                // Вводимо пароль
//                await page.TypeAsync("#Password", loginRequest.Password);

//                // Натискаємо кнопку входу
//                await page.ClickAsync("input[type='submit']");

//                // Очікуємо навігації після натискання кнопки входу
//                await page.WaitForNavigationAsync(new NavigationOptions { WaitUntil = new[] { WaitUntilNavigation.Networkidle2 } });

//                // Отримуємо куки
//                var cookies = await page.GetCookiesAsync();
//                var aspNetCoreCookie = cookies.FirstOrDefault(cookie => cookie.Name == ".AspNetCore.Cookies");

//                // Закриваємо браузер
//                await browser.CloseAsync();

//                if (aspNetCoreCookie != null)
//                {
//                    return Ok(new { Cookie = aspNetCoreCookie.Value });
//                }
//                else
//                {
//                    return NotFound("Cookie not found");
//                }
//            }
//            catch (Exception ex)
//            {
//                return StatusCode(500, ex.Message);
//            }
//        }
//    }
//}
