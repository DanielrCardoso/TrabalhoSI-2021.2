using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Data
{
    public class DataContext : DbContext
    {
        public DbSet<User>? Users { get; set; }
        public DbSet<Course>? Courses { get; set; }
        public DbSet<Tip>? Tips { get; set; }
        public DbSet<Question>? Questions { get; set; }

        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder mb)
        {

            #region CourseSeed
            mb.Entity<Course>().HasData(
                new Course { Id = 1, Title = "Faça transações em bancos", Description = "Aprenda o basico da utilização do aplicativo do seu banco" },
                new Course { Id = 2, Title = "Faça transações em bancos", Description = "Aprenda o basico da utilização do aplicativo do seu banco" },
                new Course { Id = 3, Title = "Curso 02", Description = "Breve descricao" },
                new Course { Id = 4, Title = "Curso 03", Description = "Breve descricao" },
                new Course { Id = 5, Title = "Curso 01", Description = "Breve descricao" },
                new Course { Id = 6, Title = "Curso 02", Description = "Breve descricao" },
                new Course { Id = 7, Title = "Curso 03", Description = "Breve descricao" }
            );
            #endregion

            #region TipSeed
            mb.Entity<Tip>().HasData(
                new Tip { Id = 1, Title = "Não salve senhas no navegador", Content = "Salvar senha no navegador é um habito ruim principalmente em computadores comartilhados." },
                new Tip { Id = 2, Title = "Use senhas fortes", Content = "Aprenda o basico da utilização do aplicativo do seu banco" },
                new Tip { Id = 3, Title = "Titulo dica", Content = "corpo da dica" },
                new Tip { Id = 4, Title = "Titulo dica", Content = "corpo da dica" },
                new Tip { Id = 5, Title = "Titulo dica", Content = "corpo da dica" },
                new Tip { Id = 6, Title = "Titulo dica", Content = "corpo da dica" },
                new Tip { Id = 7, Title = "Titulo dica", Content = "corpo da dica" }
            );
            #endregion
        }

    }
}