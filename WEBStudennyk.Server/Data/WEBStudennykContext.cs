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

        public DbSet<Photo> Photos { get; set; }
        public DbSet<Group> Groups { get; set; }
        public DbSet<Schedule> Schedules { get; set; }
        public DbSet<Student> Students { get; set; }
        public DbSet<StudentSubGroup> StudentSubGroups { get; set; }
        public DbSet<SubGroup> SubGroups { get; set; }
        public DbSet<Subject> Subjects { get; set; }
        public DbSet<Teacher> Teachers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Group>(entity =>
            {
                entity.Property(e => e.Name)
                    .HasMaxLength(100)
                    .IsRequired();
                entity.HasMany(e => e.Students)
                    .WithOne(e => e.Group)
                    .HasForeignKey(e => e.GroupId)
                    .OnDelete(DeleteBehavior.ClientCascade)
                    .IsRequired();
                entity.HasMany(e => e.SubGroups)
                    .WithOne(e => e.Group)
                    .HasForeignKey(e => e.GroupId)
                    .OnDelete(DeleteBehavior.ClientCascade)
                    .IsRequired();
                entity.HasMany(e => e.Subjects)
                    .WithOne(e => e.Group)
                    .HasForeignKey(e => e.GroupId)
                    .OnDelete(DeleteBehavior.ClientCascade)
                    .IsRequired();
            });

            modelBuilder.Entity<Schedule>(entity =>
            {
                entity.Property(e => e.ClassesType)
                    .IsRequired();
                entity.Property(e => e.ClassesNumber)
                    .IsRequired();
                entity.Property(e => e.Period)
                    .IsRequired();
                entity.Property(e => e.DayOfWeek)
                    .IsRequired();
            });

            modelBuilder.Entity<Student>(entity =>
            {
                entity.Property(e => e.Name)
                    .HasMaxLength(100)
                    .IsRequired();
                entity.HasMany(e => e.StudentSubGroups)
                    .WithOne(e => e.Student)
                    .HasForeignKey(e => e.StudentId)
                    .OnDelete(DeleteBehavior.ClientCascade)
                    .IsRequired();
            });

            modelBuilder.Entity<SubGroup>(entity =>
            {
                entity.Property(e => e.Name)
                    .HasMaxLength(100)
                    .IsRequired();
                entity.HasMany(e => e.StudentSubGroups)
                    .WithOne(e => e.SubGroup)
                    .HasForeignKey(e => e.SubGroupId)
                    .OnDelete(DeleteBehavior.ClientCascade)
                    .IsRequired();
                entity.HasMany(e => e.Schedules)
                    .WithOne(e => e.SubGroup)
                    .HasForeignKey(e => e.SubGroupId)
                    .OnDelete(DeleteBehavior.ClientCascade)
                    .IsRequired();
            });

            modelBuilder.Entity<Subject>(entity =>
            {
                entity.Property(e => e.Name)
                    .HasMaxLength(100)
                    .IsRequired();
                entity.Property(e => e.FinalControl)
                    .IsRequired();
                entity.Property(e => e.Description)
                    .HasColumnType("text")
                    .IsRequired(false);
                entity.HasMany(e => e.Schedules)
                    .WithOne(e => e.Subject)
                    .HasForeignKey(e => e.SubjectId)
                    .OnDelete(DeleteBehavior.ClientCascade)
                    .IsRequired();
            });

            modelBuilder.Entity<Teacher>(entity =>
            {
                entity.Property(e => e.Name)
                    .HasMaxLength(100)
                    .IsRequired();
                entity.Property(e => e.Info)
                    .HasColumnType("text")
                    .IsRequired(false);
                entity.HasMany(e => e.CuratorGroups)
                    .WithOne(e => e.Curator)
                    .HasForeignKey(e => e.CuratorId)
                    .OnDelete(DeleteBehavior.SetNull);
                entity.HasMany(e => e.TeacherSubGroups)
                    .WithOne(e => e.Teacher)
                    .HasForeignKey(e => e.TeacherId)
                    .OnDelete(DeleteBehavior.SetNull);
                entity.HasMany(e => e.TeacherSchedules)
                    .WithOne(e => e.Teacher)
                    .HasForeignKey(e => e.TeacherId)
                    .OnDelete(DeleteBehavior.ClientCascade)
                    .IsRequired();
            });
            modelBuilder.ApplyConfiguration(new RoleConfiguration());
        }
    }

}

