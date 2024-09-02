using System.ComponentModel.DataAnnotations;

namespace WEBStudennyk.Server.Data
{
    public class Subject : Entity
    {
        [Required]
        [StringLength(100, MinimumLength = 1)]
        public string Name { get; set; }
        [Required]
        public FinalControl FinalControl { get; set; }
        public string? Description { get; set; }
        [Required]
        public int GroupId { get; set; }
        [Required]
        public Group Group { get; set; }
        public ICollection<Schedule> Schedules { get; set; } = [];
    }
}
