using AutoMapper;
using WEBStudennyk.Server.DTO;

namespace WEBStudennyk.Server.Data;

    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<UserForRegistrationDto, User>()
                .ForMember(u => u.UserName, opt => opt.MapFrom(x => x.Email));
        }
    }

