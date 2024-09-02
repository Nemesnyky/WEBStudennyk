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
        public DbSet<Group> Groups { get; set; }
        public DbSet<Schedule> Schedules { get; set; }
        public DbSet<Student> Students { get; set; }
        public DbSet<StudentSubGroup> StudentSubGroups { get; set; }
        public DbSet<SubGroup> SubGroups { get; set; }
        public DbSet<Subject> Subjects { get; set; }
        public DbSet<Teacher> Teachers { get; set; }

    }

}

