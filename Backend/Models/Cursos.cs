using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class Course
    {
        [Key]
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
    }
}