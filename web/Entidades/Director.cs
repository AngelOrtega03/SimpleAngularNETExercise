using System.ComponentModel.DataAnnotations;

namespace web.Entidades
{
    public class Director
    {
        [Key] public int PKDirector { get; set; }
        public required string Name { get; set; }
        public required int Age { get; set; }
        public required bool Active { get; set; }

        public ICollection<Movies>? Movies { get; set; }
    }
}
