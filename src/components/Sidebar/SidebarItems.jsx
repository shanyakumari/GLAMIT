import CreatePost from "./CreatePost";
import Glamboard from "./Glamboard";
import Home from "./Home";
import Notifications from "./Notifications";
import ProfileLink from "./ProfileLink";
import Search from "./Search";

const SidebarItems = () => {
	return (
		<>
			<Home />
			<Search />
			<Notifications />
			<CreatePost />
			<Glamboard/>
			<ProfileLink />
		</>
	);
};

export default SidebarItems;
