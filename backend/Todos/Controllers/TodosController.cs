using System;
using System.Collections.Generic;
using System.Linq;
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
        public async Task<ActionResult<TodoEntity>> GetTodoEntity(Guid id)
        {
            var todoItem = await _context.Todos.FindAsync(id);

            if (todoItem == null)
            {
                return NotFound();
            }

            return todoItem;
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTodoEntity(Guid id)
        {
            var todoItem = await _context.Todos.FindAsync(id);
            if (todoItem == null)
            {
                return NotFound();
            }

            _context.Todos.Remove(todoItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutTodoEntity(Guid id, TodoEntity todoEntity)
        {
            if (id != todoEntity.Id)
            {
                return BadRequest();
            }

            _context.Entry(todoEntity).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TodoEntityExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [NonAction]
        public bool TodoEntityExists(Guid id) =>
            _context.Todos.Any(e => e.Id == id);
    }
}