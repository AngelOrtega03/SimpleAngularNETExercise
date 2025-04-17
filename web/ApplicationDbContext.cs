using Microsoft.EntityFrameworkCore;
using web.Entidades;

namespace web
{
    public class ApplicationDbContext: DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Movies> Movies { get; set; }
        public DbSet<Director> Director { get; set; }
    }
}
