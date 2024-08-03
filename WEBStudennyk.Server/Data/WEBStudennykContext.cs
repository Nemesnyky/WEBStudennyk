using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using WEBStudennyk.Server.SeedConfiguration;

namespace WEBStudennyk.Server.Data
{
    public class WebstudennykContext : IdentityDbContext<User, Role, string>

    {
        //public virtual DbSet<Photo> Photos { get; set; }

        public WebstudennykContext(DbContextOptions options)
            : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.ApplyConfiguration(new RoleConfiguration());
        }

    }

}

