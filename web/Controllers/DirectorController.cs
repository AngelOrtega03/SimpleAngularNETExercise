using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using web.Entidades;


namespace web.Controllers
{
    [Route("api/director")]
    public class DirectorController : ControllerBase
    {

        private readonly ApplicationDbContext context;

        public DirectorController(ApplicationDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<List<Director>> Get()
        {
            return await context.Director.ToListAsync();
        }

        [HttpGet("{id:int}", Name = "ObtenerDirectorPorId")]
        public async Task<ActionResult<Director>> Get(int id)
        {
            var director = await context.Director.FirstOrDefaultAsync(x => x.PKDirector == id);

            if (director is null)
            {
                return NotFound();
            }

            return director;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Director director)
        {
            if (director == null)
            {
                return BadRequest("El objeto Director llegó como null.");
            }

            context.Add(director);
            await context.SaveChangesAsync();
            return CreatedAtRoute("ObtenerDirectorPorId", new { id = director.PKDirector }, director);
        }

        [HttpPut("{id:int}", Name = "ModificarDirectorPorId")]
        public async Task<ActionResult> Put(int id, [FromBody] Director director)
        {
            var existeDirector = await context.Director.AnyAsync(x => x.PKDirector == id);

            if (!existeDirector)
            {
                return NotFound();
            }

            director.PKDirector = id;
            context.Update(director);
            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id:int}", Name = "BorrarDirectorPorId")]
        public async Task<ActionResult> Delete(int id)
        {
            var filasBorradas = await context.Director.Where(x => x.PKDirector == id).ExecuteDeleteAsync();

            if (filasBorradas == 0)
            {
                return NotFound();
            }

            return NoContent();
        }
    }
}
