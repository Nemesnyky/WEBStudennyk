using System.ComponentModel.DataAnnotations;

namespace WEBStudennyk.Server.Data
{
    public class StudentSubGroup : Entity
    {
        [Required]
        public int StudentId { get; set; }
        [Required]
        public int SubGroupId { get; set; }
        [Required]
        public Student Student { get; set; }
        [Required]
        public SubGroup SubGroup { get; set; }
    }
}
