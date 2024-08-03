using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WEBStudennyk.Server.Data;

namespace WEBStudennyk.Server.SeedConfiguration
{
    public class RoleConfiguration : IEntityTypeConfiguration<Role>
    {
        public void Configure(EntityTypeBuilder<Role> builder)
        {
            builder.HasData(

                    new Role
                    {
                        Id = "2w2e221-1231wq-131-12swsqq-12w1",
                        Name = "Visitor",
                        NormalizedName = "VISITOR",
                        Description = "DescriptionVisitor"
                    },
                    new Role
                    {
                        Id = "2w2e221-1231wq-131-12swsqq-112d",
                        Name = "Admin",
                        NormalizedName = "ADMIN",
                        Description = "DescriptionAdmin"
                    }

            );
        }
    }
}
