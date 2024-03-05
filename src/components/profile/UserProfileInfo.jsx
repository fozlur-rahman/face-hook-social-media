import EditIcon from "../../assets/icons/edit.svg";
import useProfile from "../../hooks/useProfile";
import Bio from "./Bio";

const UserProfileInfo = () => {
    const { state } = useProfile();
    const user = state?.user;
    return (
        <div className="flex flex-col items-center py-8 text-center">
            {/* <!-- profile image --> */}
            <div className="relative mb-8 max-h-[180px] max-w-[180px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
                <img
                    className="max-w-20 rounded-full max-h-20 bg-white"
                    src={`${import.meta.env.VITE_SERVER_BASE_URL}/${user?.avatar}`}
                    alt={user?.firstName}
                />

                <button className="flex-center absolute bottom-4 right-4 h-7 w-7 rounded-full bg-black/50 hover:bg-black/80">
                    <img src={EditIcon} alt="Edit" />
                </button>
            </div>
            {/* <!-- name , email --> */}
            <div>
                <h3 className="text-2xl font-semibold text-white lg:text-[28px]">
                    {user?.firstName} {user?.lastName}
                </h3>
                <p className="leading-[231%] lg:text-md">{user?.email}</p>
            </div>

            {/* <!-- bio --> */}
            <Bio />

            <div className="w-3/4 border-b border-[#3F3F3F] py-6 lg:py-8"></div>
        </div>
    );
};

export default UserProfileInfo;
