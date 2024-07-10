using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.OpenApi;
using Microsoft.EntityFrameworkCore;
using WEBStudennyk.Server.Data;

namespace WEBStudennyk.Server.Data;

public partial class AspNetUser
{
    public string Id { get; set; } = null!;

    public string? UserName { get; set; }

    public string? NormalizedUserName { get; set; }

    public string? Email { get; set; }

    public string? NormalizedEmail { get; set; }

    public bool EmailConfirmed { get; set; }

    public string? PasswordHash { get; set; }

    public string? SecurityStamp { get; set; }

    public string? ConcurrencyStamp { get; set; }

    public string? PhoneNumber { get; set; }

    public bool PhoneNumberConfirmed { get; set; }

    public bool TwoFactorEnabled { get; set; }

    public DateTimeOffset? LockoutEnd { get; set; }

    public bool LockoutEnabled { get; set; }

    public int AccessFailedCount { get; set; }

    public string? Biography { get; set; }

    public int? PhotoUrlId { get; set; }

    public virtual Photo? PhotoUrl { get; set; }
}


//public static class AspNetUserEndpoints
//{
//	public static void MapAspNetUserEndpoints (this IEndpointRouteBuilder routes)
//    {
//        var group = routes.MapGroup("/api/AspNetUser").WithTags(nameof(AspNetUser));

//        group.MapGet("/", async (WebstudennykContext db) =>
//        {
//            return await db.AspNetUsers.ToListAsync();
//        })
//        .WithName("GetAllAspNetUsers")
//        .WithOpenApi();

//        group.MapGet("/{id}", async Task<Results<Ok<AspNetUser>, NotFound>> (string id, WebstudennykContext db) =>
//        {
//            return await db.AspNetUsers.AsNoTracking()
//                .FirstOrDefaultAsync(model => model.Id == id)
//                is AspNetUser model
//                    ? TypedResults.Ok(model)
//                    : TypedResults.NotFound();
//        })
//        .WithName("GetAspNetUserById")
//        .WithOpenApi();

//        group.MapPut("/{id}", async Task<Results<Ok, NotFound>> (string id, AspNetUser aspNetUser, WebstudennykContext db) =>
//        {
//            var affected = await db.AspNetUsers
//                .Where(model => model.Id == id)
//                .ExecuteUpdateAsync(setters => setters
//                  .SetProperty(m => m.Id, aspNetUser.Id)
//                  .SetProperty(m => m.UserName, aspNetUser.UserName)
//                  .SetProperty(m => m.NormalizedUserName, aspNetUser.NormalizedUserName)
//                  .SetProperty(m => m.Email, aspNetUser.Email)
//                  .SetProperty(m => m.NormalizedEmail, aspNetUser.NormalizedEmail)
//                  .SetProperty(m => m.EmailConfirmed, aspNetUser.EmailConfirmed)
//                  .SetProperty(m => m.PasswordHash, aspNetUser.PasswordHash)
//                  .SetProperty(m => m.SecurityStamp, aspNetUser.SecurityStamp)
//                  .SetProperty(m => m.ConcurrencyStamp, aspNetUser.ConcurrencyStamp)
//                  .SetProperty(m => m.PhoneNumber, aspNetUser.PhoneNumber)
//                  .SetProperty(m => m.PhoneNumberConfirmed, aspNetUser.PhoneNumberConfirmed)
//                  .SetProperty(m => m.TwoFactorEnabled, aspNetUser.TwoFactorEnabled)
//                  .SetProperty(m => m.LockoutEnd, aspNetUser.LockoutEnd)
//                  .SetProperty(m => m.LockoutEnabled, aspNetUser.LockoutEnabled)
//                  .SetProperty(m => m.AccessFailedCount, aspNetUser.AccessFailedCount)
//                  .SetProperty(m => m.Biography, aspNetUser.Biography)
//                  .SetProperty(m => m.PhotoUrlId, aspNetUser.PhotoUrlId)
//                  );
//            return affected == 1 ? TypedResults.Ok() : TypedResults.NotFound();
//        })
//        .WithName("UpdateAspNetUser")
//        .WithOpenApi();

//        group.MapPost("/", async (AspNetUser aspNetUser, WebstudennykContext db) =>
//        {
//            db.AspNetUsers.Add(aspNetUser);
//            await db.SaveChangesAsync();
//            return TypedResults.Created($"/api/AspNetUser/{aspNetUser.Id}",aspNetUser);
//        })
//        .WithName("CreateAspNetUser")
//        .WithOpenApi();

//        group.MapDelete("/{id}", async Task<Results<Ok, NotFound>> (string id, WebstudennykContext db) =>
//        {
//            var affected = await db.AspNetUsers
//                .Where(model => model.Id == id)
//                .ExecuteDeleteAsync();
//            return affected == 1 ? TypedResults.Ok() : TypedResults.NotFound();
//        })
//        .WithName("DeleteAspNetUser")
//        .WithOpenApi();
//    }
//}