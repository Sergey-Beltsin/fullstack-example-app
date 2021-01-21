using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Todos.Entities;

namespace Todos.Controllers
{
    [ApiController]
    [Route("api/Todos")]
    public class TodosController : ControllerBase
    {
        private readonly DataContext _context;

        public TodosController(DataContext context)
        {
            _context = context;
        }
        
        [HttpPost]
        public async Task<ActionResult<TodoEntity>> PostTodoEntity(TodoEntity todoEntity)
        {
            _context.Todos.Add(todoEntity);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetTodoEntity), new { id = todoEntity.Id }, todoEntity);
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<TodoEntity>>> GetTodoEntities()
        {
            return await _context.Todos.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<TodoEntity>> GetTodoEntity(long id)
        {
            var todoItem = await _context.Todos.FindAsync(id);

            if (todoItem == null)
            {
                return NotFound();
            }

            return todoItem;
        }
    }
}