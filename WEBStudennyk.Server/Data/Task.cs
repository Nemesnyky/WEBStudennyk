using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;

namespace WEBStudennyk.Server.Data;

public partial class Task
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public string? Description { get; set; }

    public string? UserId { get; set; }

}
