using System.ComponentModel.DataAnnotations;

namespace WEBStudennyk.Server.Data
{
    public class Student : Entity
    {
        [Required]
        [StringLength(100, MinimumLength = 1)]
        public string Name { get; set; }
        [Required]
        public int GroupId { get; set; }
        [Required]
        public Group Group { get; set; }
        public ICollection<StudentSubGroup> StudentSubGroups { get; set; } = [];
        public ICollection<User> Users { get; set; } = [];
    }
}
