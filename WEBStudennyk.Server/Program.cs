using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using WEBStudennyk.Server.Data;
using WEBStudennyk.Server.Controllers;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using WEBStudennyk.Server.JwtFeatures;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddAutoMapper(typeof(Program));

builder.Services.AddDbContext<WebstudennykContext>(opts =>
    opts.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));


builder.Services.AddIdentity<User, IdentityRole>(opt =>
{
    opt.Password.RequiredLength = 7;
    opt.Password.RequireDigit = false;
    opt.Password.RequireUppercase = false;

})
    .AddEntityFrameworkStores<WebstudennykContext>();

var jwtSettings = builder.Configuration.GetSection("JWTSettings");
builder.Services.AddAuthentication(opt =>
{
    opt.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    opt.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;

}).AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = jwtSettings["validIssuer"],
        ValidAudience = jwtSettings["validAudience"],
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8
            .GetBytes(jwtSettings.GetSection("securityKey").Value))

    };
});

builder.Services.AddSingleton<JwtHandler>();


// Add services to the container.
builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();



// Додаємо політику CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin",
        policyBuilder =>
        {
            policyBuilder.WithOrigins("https://localhost:5173")
                         .AllowAnyHeader()
                         .AllowAnyMethod();
        });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();


app.UseAuthentication();
app.UseAuthorization();

// Використовуємо політику CORS
app.UseCors("AllowSpecificOrigin");

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
