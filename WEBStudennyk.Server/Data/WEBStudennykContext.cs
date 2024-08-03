using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace WEBStudennyk.Server.Data
{
    public class WebstudennykContext : IdentityDbContext<User>
    {
        //public virtual DbSet<Photo> Photos { get; set; }

        public WebstudennykContext(DbContextOptions options)
            : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }

    }

}

