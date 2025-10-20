using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ChatSentiment.Api.Migrations
{
    /// <inheritdoc />
    public partial class AddTextColumnToMessages : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Content",
                table: "Messages");

            migrationBuilder.RenameColumn(
                name: "Username",
                table: "Messages",
                newName: "Text");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Text",
                table: "Messages",
                newName: "Username");

            migrationBuilder.AddColumn<string>(
                name: "Content",
                table: "Messages",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }
    }
}
