using Microsoft.AspNetCore.Mvc.RazorPages;

namespace GettingStarted.Frontend.Pages.PG004;

public class MatheusModel : PageModel
{
    private readonly ILogger<MatheusModel> _logger;

    public MatheusModel(ILogger<MatheusModel> logger)
    {
        _logger = logger;
    }

    public void OnGet()
    {

    }
    
}
