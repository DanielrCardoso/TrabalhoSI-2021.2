using System.ComponentModel.DataAnnotations;

namespace Backend.Models;

public class User
{
    public User()
    {
        Questions = new List<Question>();
    }
    [Key]
    public int Id { get; set; }
    public string? Login { get; set; }
    public string? Password { get; set; }
    public List<Question>? Questions { get; set; }
}
