using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    [ApiController]
    [Route("v1/questions")]
    public class QuestionController : ControllerBase
    {
        public async Task<ActionResult<List<Question>>>? Get(
             [FromServices] DataContext context)
        {
            context.Database.EnsureCreated();
            try
            {
                var questions = await context.Questions?.AsNoTracking().ToListAsync();

                return questions;
            }
            catch (Exception e)
            {
                return BadRequest(new { message = "Ocorreu um erro ao consultar as questões.", error = e.Message });
            }

        }

        [HttpPost]
        [Route("")]
        public async Task<ActionResult<Question>>? Post(
            [FromServices] DataContext context,
            [FromBody] Question model
        )
        {
            try
            {
                var user = await context.Users.FirstOrDefaultAsync(user => user.Id == model.UserId);

                if (user == null) return NotFound(new { message = "O usuário informado não foi localizado." });

                var question = new Question
                {
                    Title = model.Title,
                    Content = model.Content,
                    UserId = user.Id
                };

                await context.Questions.AddAsync(question);

                user.Questions.Add(question);

                await context.SaveChangesAsync();

                return Ok(new { message = "Pergunta criada com sucesso!", questionInserted = question });
            }
            catch (Exception e)
            {
                return BadRequest(new { message = "Ocorreu um erro ao criar a questão", error = e.Message });
            }
        }
    }
}