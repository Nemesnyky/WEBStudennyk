using System.ComponentModel.DataAnnotations;

namespace WEBStudennyk.Server.Data
{
    public class Teacher : Entity
    {
        [Required]
        [StringLength(100, MinimumLength = 1)]
        public string Name { get; set; }
        public string? Info { get; set; }
        public ICollection<Group> CuratorGroups { get; set; } = [];
        public ICollection<SubGroup> TeacherSubGroups { get; set; } = [];
        public ICollection<Schedule> TeacherSchedules { get; set; } = [];
    }
}
