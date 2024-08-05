using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WEBStudennyk.Server.Migrations
{
    /// <inheritdoc />
    public partial class AddPhotoTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "PhotoUrlId",
                table: "AspNetUsers",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_PhotoUrlId",
                table: "AspNetUsers",
                column: "PhotoUrlId");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_Photos_PhotoUrlId",
                table: "AspNetUsers",
                column: "PhotoUrlId",
                principalTable: "Photos",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_Photos_PhotoUrlId",
                table: "AspNetUsers");

            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_PhotoUrlId",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "PhotoUrlId",
                table: "AspNetUsers");
        }
    }
}
