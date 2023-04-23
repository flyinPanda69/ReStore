using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions options) : base(options)
        {
        }

        //Product Class or entity represent the table Products in the table/
        //Each property of Product will represent columns in the table Products
        public DbSet<Product> Products { get; set; }
    }
}