import React, { useEffect, useState } from "react";
import "./Profile.css";
import UserProfileSection from "./UserProfileSection";
import { useLocation, useNavigate } from "react-router-dom";
import UserMeeting from "./UserMeeting";
import UserLiked from "./UserLiked";
import UserHiredList from "./UserHiredList";
import UserComplaint from "./UserComplaint";
import UserFeedback from "./UserFeedback";
export default function UserProfile() {
  const [params, setParam] = useState("/");
  const [componentToRender, setComponentToRender] = useState(
    <UserProfileSection />,
  );
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    setParam(location.pathname);
  }, [location]);
  //   console.log(params);

  useEffect(() => {
    if (params === "/user/profile") {
      setComponentToRender(<UserProfileSection />);
    } else if (params === "/user/meeting") {
      setComponentToRender(<UserMeeting />);
    } else if (params === "/user/likedProfiles") {
      setComponentToRender(<UserLiked />);
    } else if (params === "/user/hiredList") {
      setComponentToRender(<UserHiredList />);
    } else if (params === "/user/complaint") {
      setComponentToRender(<UserComplaint />);
    } else if (params === "/user/feedback") {
      setComponentToRender(<UserFeedback />);
    } else {
      setComponentToRender(<UserProfileSection />);
    }
  }, [params]);

  return (
    <div
      className="md:px-[178px] px-5 md:py-10 py-0 flex gap-6 mt-3 md:flex-row flex-col"
      id="pagegradient"
    >
      <div
        className="rounded-[12px] flex  flex-col gap-2 border-[0.3px] border-[#E5E5E5] py-5   px-3 md:w-[350px] text-[14px] font-[500]
         bg-white h-fit"
        id="userprofile_shadow"
      >
        <button
          onClick={() => {
            navigate("/user/profile");
          }}
          className={
            params == "/user/profile"
              ? "py-[18px] px-3 w-full text-start rounded-[8px] border-[1px] border-[#db792d80] bg-[#db792d14]"
              : "py-[18px] px-3 w-full text-start rounded-[8px] border-[1px] border-transparent"
          }
        >
          Profile
        </button>
        <button
          onClick={() => {
            navigate("/user/meeting");
          }}
          className={
            params == "/user/meeting"
              ? "py-[18px] px-3 w-full text-start rounded-[8px] border-[1px] border-[#db792d80] bg-[#db792d14]"
              : "py-[18px] px-3 w-full text-start rounded-[8px] border-[1px] border-transparent"
          }
        >
          Meetings
        </button>
        <button
          onClick={() => {
            navigate("/user/likedProfiles");
          }}
          className={
            params == "/user/likedProfiles"
              ? "py-[18px] px-3 w-full text-start rounded-[8px] border-[1px] border-[#db792d80] bg-[#db792d14]"
              : "py-[18px] px-3 w-full text-start rounded-[8px] border-[1px] border-transparent"
          }
        >
          Liked Profiles
        </button>
        <button
          onClick={() => {
            navigate("/user/hiredList");
          }}
          className={
            params == "/user/hiredList"
              ? "py-[18px] px-3 w-full text-start rounded-[8px] border-[1px] border-[#db792d80] bg-[#db792d14]"
              : "py-[18px] px-3 w-full text-start rounded-[8px] border-[1px] border-transparent"
          }
        >
          Hired List
        </button>
        <button
          onClick={() => {
            navigate("/user/complaint");
          }}
          className={
            params == "/user/complaint"
              ? "py-[18px] px-3 w-full text-start rounded-[8px] border-[1px] border-[#db792d80] bg-[#db792d14]"
              : "py-[18px] px-3 w-full text-start rounded-[8px] border-[1px] border-transparent"
          }
        >
          Complaint
        </button>
        <button
          onClick={() => {
            navigate("/user/feedback");
          }}
          className={
            params == "/user/feedback"
              ? "py-[18px] px-3 w-full text-start rounded-[8px] border-[1px] border-[#db792d80] bg-[#db792d14]"
              : "py-[18px] px-3 w-full text-start rounded-[8px] border-[1px] border-transparent"
          }
        >
          Write a feedback
        </button>
      </div>
      <div
        className="bg-white md:h-fit h-full rounded-[12px] border-[0.3px] border-[#E5E5E5] md:p-8 p-4 w-full"
        id="userprofile_shadow"
      >
        {componentToRender}{" "}
      </div>
    </div>
  );
}
