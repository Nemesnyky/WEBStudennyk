using Microsoft.EntityFrameworkCore;

namespace WEBStudennyk.Server.Data
{
    public class WEBStudennykContext : DbContext
    {



        public virtual DbSet<Task> Tasks { get; set; }
        //public virtual DbSet<Photo> Photos { get; set; }

        public WEBStudennykContext(DbContextOptions<WEBStudennykContext> options)
            : base(options)
        {

        }

    }
}
