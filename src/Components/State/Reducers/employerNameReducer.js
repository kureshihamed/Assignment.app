export const employerNameReducer = (state = initState, action) => {
  if (action.type === "ADD_EMPLOYER") {
    return {
      ...state,
      ShopData: [...state.ShopData, action.data],
    };
  } else return state;
};

const initState = {
  ShopData: [
    {
      EmployerID: "1",
      image:
        "https://thumbs.dreamstime.com/b/image-young-employer-looking-camera-planning-work-office-30210047.jpg",
      firstName: "Amber",
      lastName: "Rosie",
    },
    {
      EmployerID: "2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7-7katF6wQfxggUJOyqbM_MmoU7MDG4P6ud7WMfH7rB2yFG9D4FYfns4b_8lNn95CcPQ&usqp=CAU",
      firstName: "Bella",
      lastName: "Harper",
    },
    {
      EmployerID: "3",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLssuHLDA4F1nVT2ndgxmjePbeJ9vxMCYqAqjLeaYFiUgplA5Nlq1H2kSabKiA3-srkuY&usqp=CAU",
      firstName: "John",
      lastName: "Wick",
    },
    {
      EmployerID: "4",
      image:
        " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx8RRZBaa48SyiJOBRN0JS65KRiHhNTAVVmOMxusAVnpcbgunxoAzl4zNU5Eyae1oDA_o&usqp=CAU",
      firstName: "Tom",
      lastName: "Holland",
    },
    {
      EmployerID: "5",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLC1GYHPB1D7i3l5egBe2j_7qjwP7QOdL4ImM04SovWctC9Jv6GtchvlGIUoLmBPmRwcI&usqp=CAU",
      firstName: "Johny",
      lastName: "Depp",
    },
  ],
};
