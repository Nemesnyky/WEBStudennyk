using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using WEBStudennyk.Server.SeedConfiguration;

namespace WEBStudennyk.Server.Data
{
    public class WebstudennykContext : IdentityDbContext<User, Role, string>

    {

        public WebstudennykContext(DbContextOptions options)
            : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            //builder.Entity<User>()
            //    .HasOne(u => u.Photo)
            //    .WithOne()
            //    .HasForeignKey<User>(u => u.PhotoUrlId);

            builder.ApplyConfiguration(new RoleConfiguration());
        }

        public DbSet<Photo> Photos { get; set; }

    }

}

