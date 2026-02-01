import { useDispatch, useSelector } from "react-redux";
import { toggleSideBarMenu } from "../utils/sidebarSlice";
import { YOUTUBE_SEARCH_API, YOUTUBE_SEARCH_RELATED_VIDEOS } from "../utils/constants";
import { useEffect, useState } from "react";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  const toggleClick = () => {
    dispatch(toggleSideBarMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
      setSuggestions(searchCache[searchQuery])
      } else {
        getSearchSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const data = await response.json();
    setSuggestions(data[1]);
    dispatch(cacheResults({
      [searchQuery] : data[1]
    }))
  };

  const handleClick= (s) => {
     console.log(s)
  }

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
          alt="Hamburger"
          className="h-8 cursor-pointer"
          onClick={() => toggleClick()}
        />
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
            alt="Youtube Logo"
            className="h-8 mx-4"
          />
        </a>
      </div>
      <div className="relative col-span-10 px-10">
        <div>
          <input
            type="text"
            className="w-1/2 rounded-l-xl border-gray-500 border p-2"
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShow(true)}
            onBlur={() => setTimeout(()=> setShow(false), 500)}
          />
          <button className="border border-gray-500 py-2 rounded-r-xl px-5 bg-gray-100">
            🔍
          </button>
        </div>
        {show && (
          <div className="absolute py-2 bg-white px-5 w-[29rem] shadow-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li onClick={() => handleClick(s)} key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user"
          className="h-8"
        />
      </div>
    </div>
  );
};

export default Header;
