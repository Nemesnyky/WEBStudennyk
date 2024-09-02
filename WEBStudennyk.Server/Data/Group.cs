using System.ComponentModel.DataAnnotations;

namespace WEBStudennyk.Server.Data
{
    public class Group : Entity
    {
        [Required]
        [StringLength(100, MinimumLength = 1)]
        public string Name { get; set; }
        public int? CuratorId { get; set; }
        public Teacher? Curator { get; set; }
        public ICollection<Student> Students { get; set; } = [];
        public ICollection<SubGroup> SubGroups { get; set; } = [];
        public ICollection<Subject> Subjects { get; set; } = [];
    }
}
