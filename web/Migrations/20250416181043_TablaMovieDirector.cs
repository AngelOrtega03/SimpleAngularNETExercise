using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace web.Migrations
{
    /// <inheritdoc />
    public partial class TablaMovieDirector : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Director",
                columns: table => new
                {
                    PKDirector = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Age = table.Column<int>(type: "int", nullable: false),
                    Active = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Director", x => x.PKDirector);
                });

            migrationBuilder.CreateTable(
                name: "Movies",
                columns: table => new
                {
                    PKMovies = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Gender = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Duration = table.Column<TimeOnly>(type: "time", nullable: false),
                    FKDirector = table.Column<int>(type: "int", nullable: false),
                    DirectorPKDirector = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Movies", x => x.PKMovies);
                    table.ForeignKey(
                        name: "FK_Movies_Director_DirectorPKDirector",
                        column: x => x.DirectorPKDirector,
                        principalTable: "Director",
                        principalColumn: "PKDirector");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Movies_DirectorPKDirector",
                table: "Movies",
                column: "DirectorPKDirector");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Movies");

            migrationBuilder.DropTable(
                name: "Director");
        }
    }
}
