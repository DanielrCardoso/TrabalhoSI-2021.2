using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    [ApiController]
    [Route("v1/courses")]
    public class CourseController : ControllerBase
    {
        [HttpGet]
        [Route("")]
        public async Task<ActionResult<List<Course>>>? Get(
            [FromServices] DataContext context
        )
        {
            context.Database.EnsureCreated();
            try
            {

                var courses = await context.Courses?.AsNoTracking().ToListAsync();

                return courses;
            }
            catch (Exception e)
            {
                return BadRequest(new { message = "Ocorreu um erro ao consultar os cursos", error = e.Message });
            }
        }

    }
}