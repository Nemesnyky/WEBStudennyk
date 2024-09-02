using System.ComponentModel.DataAnnotations;

namespace WEBStudennyk.Server.Data
{
    public class SubGroup : Entity
    {
        [Required]
        [StringLength(100, MinimumLength = 1)]
        public string Name { get; set; }
        [Required]
        public int GroupId { get; set; }
        public int? TeacherId { get; set; }
        [Required]
        public Group Group { get; set; }
        public Teacher? Teacher { get; set; }
        public ICollection<StudentSubGroup> StudentSubGroups { get; set; } = [];
        public ICollection<Schedule> Schedules { get; set; } = [];
    }
}
