using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace web.Entidades
{
    public class Movies
    {
        [Key] public int PKMovies { get; set; }
        public required string Name { get; set; }
        public required string Gender {  get; set; }
        public required TimeOnly Duration  { get; set; }

        public required int FKDirector { get; set; }
        public Director? Director { get; set; }

    }

    public class MovieCreacionDTO
    {
        public required string Name { get; set; }
        public required string Gender { get; set; }
        public required int Duration { get; set; } // en minutos
        public required int FKDirector { get; set; }
    }
}
