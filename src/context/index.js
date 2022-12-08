import { useReducer } from "react";
import { createContext } from "react";

const initialValue = {
  managers: [
    {
      id: 1,
      fullname: "Kimsanov Kimsan Kimsanovich",
      username: "kimsan1",
      phone: "+99891111111",
      password: "12345",
      hotel_id: 1,
    },
    {
      id: 2,
      fullname: "MKimsanov Kimsan Kimsanovich",
      username: "kimsan2",
      phone: "+99891111111",
      password: "12345",
      hotel_id: 2,
    },
    {
      id: 3,
      fullname: "MKimsanov Kimsan Kimsanovich",
      username: "kimsan3",
      phone: "+99891111111",
      password: "12345",
      hotel_id: 3,
    },
    {
      id: 4,
      fullname: "MKimsanov Kimsan Kimsanovich",
      username: "kimsan4",
      phone: "+99891111111",
      password: "12345",
      hotel_id: 4,
    },
    {
      id: 5,
      fullname: "MKimsanov Kimsan Kimsanovich",
      username: "kimsan5",
      phone: "+99891111111",
      password: "12345",
      hotel_id: 5,
    },
  ],
  hotels: [
    {
      id: 1,
      name: "Mehmonxona",
      address: "Navoi",
      hotelPhone: "+99891111111",
      stars: 5,
      location: 32.2,
    },
    {
      id: 2,
      name: "Mehmonxona2",
      address: "Navoi2",
      hotelPhone: "+99891111111",
      stars: 5,
      location: 32.2,
    },
    {
      id: 3,
      name: "Mehmonxona3",
      address: "Navoi3",
      hotelPhone: "+99891111111",
      stars: 5,
      location: 32.2,
    },
    {
      id: 4,
      name: "Mehmonxona4",
      address: "Navoi4",
      hotelPhone: "+99891111111",
      stars: 5,
      location: 32.2,
    },
    {
      id: 5,
      name: "Mehmonxona5",
      address: "Navoi5",
      hotelPhone: "+99891111111",
      stars: 5,
      location: 32.2,
    },
  ],
};

export const Context = createContext();

const reducer = (state = initialValue, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_MANAGER":
      const { fullname, username, phone, password } = payload;
      const id = state.managers.length + 1;
      const newManager = {
        id,
        fullname,
        username,
        phone,
        password,
      };
      return { ...state, managers: [...state.managers, newManager] };
    case "UPDATE_MANAGER":
      const updateManager = payload;
      const updatedManagers = state.managers.map((manager) => {
        if (manager.id === updateManager.id) {
          return updateManager;
        }
        return manager;
      });

      return {
        ...state,
        managers: updatedManagers,
      };
    case "DELETE_MANAGER":
      const deleteArr = state.managers.filter((c) => c.id !== payload);
      return { ...state, managers: deleteArr };

    case "ADD_HOTEL":
      const { name, address, hotelPhone, stars } = payload;
      const hotelId = state.hotels.length + 1;
      const newHotel = {
        id: hotelId,
        name,
        address,
        hotelPhone,
        stars,
      };
      return { ...state, hotels: [...state.hotels, newHotel] };
    case "UPDATE_HOTEL":
      const updateHotel = payload;
      const updatedHotels = state.hotels.map((hotel) => {
        if (hotel.id === updateHotel.id) {
          return updateHotel;
        }
        return hotel;
      });

      return {
        ...state,
        hotels: updatedHotels,
      };
    case "DELETE_HOTEL":
      const deleteHotel = state.hotels.filter((c) => c.id !== payload);
      return { ...state, hotels: deleteHotel };
    default:
      return { state };
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default Provider;
