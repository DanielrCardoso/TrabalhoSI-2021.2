using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class Tip
    {
        [Key]
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? Content { get; set; }
    }
}