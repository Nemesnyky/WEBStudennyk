using System;
using System.Collections.Generic;

namespace WEBStudennyk.Server.Data;

public partial class Photo
{
    public int Id { get; set; }

    public string PhotoUrl { get; set; } = null!;

    public virtual ICollection<User> Users { get; set; } = new List<User>();
}
