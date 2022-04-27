using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    [Route("v1/tips")]
    public class TipController : ControllerBase
    {
        [HttpGet]
        [Route("")]
        public IEnumerable<Tip>? Get(
            [FromServices] DataContext context
        )
        {
            context.Database.EnsureCreated();
            return context.Tips?.ToList();
        }
    }
}