using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using web.Entidades;


namespace web.Controllers
{
    [Route ("api/movies")]
    public class MoviesController : ControllerBase
    {
        
        private readonly ApplicationDbContext context;

        public MoviesController(ApplicationDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<List<Movies>> Get()
        {
            return await context.Movies.ToListAsync();
        }

        [HttpGet("{id:int}", Name = "ObtenerPeliculaPorId")]
        public async Task<ActionResult<Movies>> Get(int id)
        {
            /*var movie = await context.Movies.FirstOrDefaultAsync(x => x.PKMovies == id);*/

            var movie = await context.Movies
                .Where(x => x.PKMovies == id)
                .Select(x => new
                {
                    x.PKMovies,
                    x.Name,
                    x.Gender,
                    Duration = x.Duration.Hour * 60 + x.Duration.Minute, // minutos
                    x.FKDirector
                })
            .FirstOrDefaultAsync();

            if (movie is null)
            {
                return NotFound();
            }

            return Ok(movie);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] MovieCreacionDTO movieDTO)
        {
            if (movieDTO == null)
            {
                return BadRequest("El objeto Movie llegó como null.");
            }

            var movie = new Movies
            {
                Name = movieDTO.Name,
                Gender = movieDTO.Gender,
                Duration = TimeOnly.FromTimeSpan(TimeSpan.FromMinutes(movieDTO.Duration)),
                FKDirector = movieDTO.FKDirector
            };

            context.Add(movie);
            await context.SaveChangesAsync();
            return CreatedAtRoute("ObtenerPeliculaPorId", new { id = movie.PKMovies }, movie);
        }

        [HttpPut("{id:int}", Name = "ModificarPeliculaPorId")]
        public async Task<ActionResult> Put(int id, [FromBody] MovieCreacionDTO movieDTO)
        {
            var existeMovie = await context.Movies.AnyAsync(x => x.PKMovies == id);
            
            if(!existeMovie)
            {
                return NotFound();
            }

            var movie = new Movies
            {
                Name = movieDTO.Name,
                Gender = movieDTO.Gender,
                Duration = TimeOnly.FromTimeSpan(TimeSpan.FromMinutes(movieDTO.Duration)),
                FKDirector = movieDTO.FKDirector
            };

            movie.PKMovies = id;
            context.Update(movie);
            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id:int}", Name = "BorrarPeliculaPorId")]
        public async Task<ActionResult> Delete(int id)
        {
            var filasBorradas = await context.Movies.Where(x => x.PKMovies == id).ExecuteDeleteAsync();

            if (filasBorradas == 0)
            {
                return NotFound();
            }

            return NoContent();
        }
    }
}
