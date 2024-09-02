using System.ComponentModel.DataAnnotations;

namespace WEBStudennyk.Server.Data
{
    public class Schedule : Entity
    {
        [Required]
        public int SubGroupId { get; set; }
        [Required]
        public int SubjectId { get; set; }
        [Required]
        public int TeacherId { get; set; }
        [Required]
        public ClassesType ClassesType { get; set; }
        [Required]
        public int ClassesNumber { get; set; }
        [Required]
        public Period Period { get; set; }
        [Required]
        public DayOfWeek DayOfWeek { get; set; }
        [Required]
        public SubGroup SubGroup { get; set; }
        [Required]
        public Subject Subject { get; set; }
        [Required]
        public Teacher Teacher { get; set; }
    }
}
