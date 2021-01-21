using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Todos.Entities;

namespace Todos
{
    public class DataContext : DbContext
    {
        public DbSet<TodoEntity> Todos { get; set; }
        
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        public async Task<int> SaveChangesAsync()
        {
            return await base.SaveChangesAsync();
        }

        public DbSet<T> DbSet<T>() where T : class
        {
            return Set<T>();
        }

        public new IQueryable<T> Query<T>() where T : class
        {
            return Set<T>();
        }
    }
}