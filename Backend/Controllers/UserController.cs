using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers;

[ApiController]
[Route("v1/users")]
public class UserController : ControllerBase
{

    [HttpGet("")]
    public async Task<ActionResult<IEnumerable<User>>>? GetAllUsers(
        [FromServices] DataContext context
    )
    {
        try
        {
            var users = await context.Users?.AsNoTracking().ToListAsync();
            return Ok(new { usuarios = users });
        }
        catch (Exception e)
        {
            return BadRequest(new { message = "Ocorreu um erro ao consultar os usuários!", error = e.Message });
        }
    }

    [HttpGet]
    [Route("{:login}")]
    public async Task<ActionResult<IEnumerable<User>>>? GetUserByLogin(
        [FromBody] string login,
        [FromServices] DataContext context
    )
    {
        try
        {
            var user = await context.Users?.FirstOrDefaultAsync(user => user.Login == login);

            return Ok(new { usuario = user });
        }
        catch (Exception e)
        {
            return BadRequest(new { message = "Ocorreu um erro ao consultar o usuário pelo login!", error = e.Message });
        }
    }

    [HttpGet]
    [Route("{id}{questions}")]
    public async Task<ActionResult<IEnumerable<User>>>? GetUserById(
        [FromBody] int id,
        [FromBody] bool questions,
        [FromServices] DataContext context
    )
    {
        try
        {
            var user = await context.Users?.FirstOrDefaultAsync(user => user.Id == id);

            return questions ? Ok(new { questoes = user.Questions.ToList() }) : Ok(new { usuario = user });
        }
        catch (Exception e)
        {
            return BadRequest(new { message = "Ocorreu um erro ao consultar o usuário pelo login!", error = e.Message });
        }
    }

    [HttpPost("")]
    public User Post(
        [FromServices] DataContext context,
        [FromBody] User model
    )
    {
        context.Users?.Add(model);
        context.SaveChanges();
        return model;
    }
}
