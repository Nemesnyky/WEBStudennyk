using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WEBStudennyk.Server.Migrations
{
    /// <inheritdoc />
    public partial class BugFix : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PhotoUrlId",
                table: "AspNetUsers");

            migrationBuilder.CreateTable(
                name: "Photos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PhotoUrl = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Photos", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Photos");

            migrationBuilder.AddColumn<int>(
                name: "PhotoUrlId",
                table: "AspNetUsers",
                type: "int",
                nullable: true);
        }
    }
}
