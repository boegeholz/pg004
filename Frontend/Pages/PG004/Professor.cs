using Microsoft.AspNetCore.Mvc.RazorPages;

namespace GettingStarted.Frontend.Pages.PG004;

public class ProfessorModel : PageModel
{
    private readonly ILogger<ProfessorModel> _logger;

    public ProfessorModel(ILogger<ProfessorModel> logger)
    {
        _logger = logger;
    }

    public void OnGet()
    {

    }
    public void OnPost(int id, string example)
    {
        
    }
}
